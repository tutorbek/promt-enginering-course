/* ============================================================
   Oson Studio — AI Agentlar kursi: interaktiv simulyator (AgentSim)
   window.AgentSim.mount(host, cfg)

   Turlari:
   • "agentloop" — Agent Laboratoriyasi: agent halqasini JONLI ko'rsatadi
       (Fikr → Harakat → Kuzatuv → ... → Yakuniy javob). Qora "konsol" ko'rinishi.
       cfg: {
         goal: "foydalanuvchi topshirig'i",
         tools: [{ name, label?, desc? }],
         steps: [{ kind, text?, tool?, args? }]   // kind: thought|action|observation|answer
       }
   • "classify" — moddalarni guruhlarga ajratish
       cfg: { groups:["agent","oddiy"], items:[{ name, answer, hint? }] }
   • "order" — qadamlarni to'g'ri tartibga keltirish (strelkalar bilan)
       cfg: { steps:["1-qadam","2-qadam", ...]  (TO'G'RI tartibda) }

   Hech narsa baholanmaydi — mustaqil mashq. CSS klasslari: .asim-* (agent-kurs.html'da).
   ============================================================ */
(function () {
  "use strict";

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function feedback(box, ok, msg, wrong) {
    var d = el("div", "asim-fb " + (ok ? "ok" : "bad"));
    d.appendChild(el("div", "asim-fb-h", (ok ? "✓ " : "✕ ") + esc(msg)));
    if (wrong && wrong.length) {
      var ul = el("ul", "asim-fb-list");
      wrong.forEach(function (w) { if (w.hint) ul.appendChild(el("li", null, "<b>" + esc(w.name) + "</b> — " + esc(w.hint))); });
      if (ul.children.length) d.appendChild(ul);
    }
    box.innerHTML = ""; box.appendChild(d);
  }

  // ============ 1) AGENT LOOP — "Agent Laboratoriyasi" ============
  function mountAgentLoop(host, cfg) {
    host.innerHTML = "";
    var tools = cfg.tools || [];
    var steps = cfg.steps || [];

    var con = el("div", "asim-console");

    // Konsol sarlavhasi (terminal nuqtalari + maqsad + asboblar)
    var bar = el("div", "asim-con-bar", '<span class="asim-dot r"></span><span class="asim-dot y"></span><span class="asim-dot g"></span><span class="asim-con-title">agent-lab · halqa</span>');
    con.appendChild(bar);

    var head = el("div", "asim-con-head");
    head.appendChild(el("div", "asim-goal", '<span class="asim-goal-l">MAQSAD</span><span class="asim-goal-t">' + esc(cfg.goal || "") + '</span>'));
    if (tools.length) {
      var tl = el("div", "asim-tools");
      tl.appendChild(el("span", "asim-tools-l", "Mavjud asboblar"));
      tools.forEach(function (t) {
        tl.appendChild(el("span", "asim-tool-chip", esc(t.label || t.name) + (t.desc ? '<i> · ' + esc(t.desc) + '</i>' : '')));
      });
      head.appendChild(tl);
    }
    con.appendChild(head);

    var trace = el("div", "asim-trace");
    trace.appendChild(el("div", "asim-hint", "« Keyingi qadam » tugmasini bosib, agent qanday fikrlashini kuzating."));
    con.appendChild(trace);

    var ctrl = el("div", "asim-con-ctrl");
    var bNext = el("button", "asim-cbtn asim-cnext", '▷ Keyingi qadam');
    var bAuto = el("button", "asim-cbtn asim-cauto", '▶▶ Avtomatik');
    var bReset = el("button", "asim-cbtn asim-creset", '↻ Qaytadan');
    ctrl.appendChild(bNext); ctrl.appendChild(bAuto); ctrl.appendChild(bReset);
    con.appendChild(ctrl);

    host.appendChild(con);

    var KIND = {
      thought: { c: "th", l: "Fikr", ic: '<svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 2a7 7 0 0 0-4 12.6c.6.5 1 1.3 1 2.1V15h6v-.3c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/></svg>' },
      action: { c: "act", l: "Harakat", ic: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></svg>' },
      observation: { c: "obs", l: "Kuzatuv", ic: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>' },
      answer: { c: "ans", l: "Yakuniy javob", ic: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5 5-5.5"/></svg>' }
    };
    var idx = 0, autoT = null, started = false;

    function addStep(s) {
      var k = KIND[s.kind] || KIND.thought;
      var card = el("div", "asim-step asim-" + k.c);
      var labHtml = '<span class="asim-step-ic">' + k.ic + '</span>' + k.l +
        (s.kind === "action" && s.tool ? ' <span class="asim-tcall">' + esc(s.tool) + '()</span>' : '');
      card.appendChild(el("div", "asim-step-l", labHtml));
      if (s.kind === "action") {
        if (s.args) card.appendChild(el("pre", "asim-json", esc(s.args)));
        if (s.text) card.appendChild(el("div", "asim-step-t", esc(s.text)));
      } else if (s.kind === "observation") {
        card.appendChild(el("pre", "asim-json asim-obs-json", esc(s.text || "")));
      } else {
        card.appendChild(el("div", "asim-step-t", esc(s.text || "")));
      }
      trace.appendChild(card);
      requestAnimationFrame(function () { card.classList.add("in"); });
      trace.scrollTop = trace.scrollHeight;
    }
    function next() {
      if (!started) { started = true; trace.innerHTML = ""; }
      if (idx >= steps.length) { finish(); return; }
      addStep(steps[idx]); idx++;
      if (idx >= steps.length) finish();
    }
    function finish() {
      bNext.disabled = true; bAuto.disabled = true;
      if (autoT) { clearInterval(autoT); autoT = null; bAuto.textContent = "▶▶ Avtomatik"; }
      if (!trace.querySelector(".asim-loopdone")) {
        trace.appendChild(el("div", "asim-loopdone", "✓ Agent maqsadga yetdi — halqa tugadi."));
        trace.scrollTop = trace.scrollHeight;
      }
    }
    function reset() {
      if (autoT) { clearInterval(autoT); autoT = null; }
      idx = 0; started = false;
      trace.innerHTML = "";
      trace.appendChild(el("div", "asim-hint", "« Keyingi qadam » tugmasini bosib, agent qanday fikrlashini kuzating."));
      bNext.disabled = false; bAuto.disabled = false; bAuto.textContent = "▶▶ Avtomatik";
    }
    bNext.addEventListener("click", next);
    bReset.addEventListener("click", reset);
    bAuto.addEventListener("click", function () {
      if (autoT) { clearInterval(autoT); autoT = null; bAuto.textContent = "▶▶ Avtomatik"; return; }
      bAuto.textContent = "⏸ To'xtatish";
      next();
      autoT = setInterval(function () {
        if (idx >= steps.length) { clearInterval(autoT); autoT = null; bAuto.textContent = "▶▶ Avtomatik"; return; }
        next();
      }, 1150);
    });
  }

  // ============ 2) CLASSIFY — guruhlarga ajratish ============
  function mountClassify(host, cfg) {
    host.innerHTML = "";
    var groups = cfg.groups || [], items = cfg.items || [];
    var picks = {};
    var list = el("div", "asim-clist");
    items.forEach(function (it, i) {
      var row = el("div", "asim-citem"); row.dataset.i = i;
      row.appendChild(el("div", "asim-cname", esc(it.name)));
      var btns = el("div", "asim-cbtns");
      groups.forEach(function (g) {
        var b = el("button", "asim-gbtn", esc(g)); b.dataset.g = g;
        b.addEventListener("click", function () {
          picks[i] = g;
          btns.querySelectorAll(".asim-gbtn").forEach(function (x) { x.classList.remove("sel", "asim-ok", "asim-bad"); });
          row.classList.remove("ok", "bad");
          b.classList.add("sel");
        });
        btns.appendChild(b);
      });
      row.appendChild(btns);
      list.appendChild(row);
    });
    host.appendChild(list);

    var ctrl = el("div", "asim-ctrl");
    var bChk = el("button", "asim-btn asim-check", "Tekshirish");
    var bRes = el("button", "asim-btn asim-reset2", "Tozalash");
    ctrl.appendChild(bChk); ctrl.appendChild(bRes);
    host.appendChild(ctrl);
    var fb = el("div"); host.appendChild(fb);

    bChk.addEventListener("click", function () {
      if (Object.keys(picks).length < items.length) { feedback(fb, false, "Iltimos, har bir moddani belgilang."); return; }
      var ok = 0, wrong = [];
      items.forEach(function (it, i) {
        var row = list.querySelector('.asim-citem[data-i="' + i + '"]');
        row.classList.remove("ok", "bad");
        row.querySelectorAll(".asim-gbtn").forEach(function (x) { x.classList.remove("asim-ok", "asim-bad"); });
        var sel = row.querySelector('.asim-gbtn[data-g="' + picks[i] + '"]');
        if (picks[i] === it.answer) { ok++; row.classList.add("ok"); if (sel) sel.classList.add("asim-ok"); }
        else { row.classList.add("bad"); if (sel) sel.classList.add("asim-bad"); wrong.push(it); }
      });
      if (ok === items.length) feedback(fb, true, "Ajoyib! Barchasi to'g'ri (" + ok + "/" + items.length + ").");
      else feedback(fb, false, ok + "/" + items.length + " to'g'ri. Qizillarni qayta ko'ring:", wrong);
    });
    bRes.addEventListener("click", function () {
      picks = {}; fb.innerHTML = "";
      list.querySelectorAll(".asim-citem").forEach(function (r) { r.classList.remove("ok", "bad"); });
      list.querySelectorAll(".asim-gbtn").forEach(function (x) { x.classList.remove("sel", "asim-ok", "asim-bad"); });
    });
  }

  // ============ 3) ORDER — qadamlarni tartiblash ============
  function mountOrder(host, cfg) {
    host.innerHTML = "";
    var correct = cfg.steps || [];
    var order = correct.map(function (_, i) { return i; });
    // aralashtirish
    for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; }
    if (order.every(function (v, k) { return v === k; })) order.reverse();

    var list = el("div", "asim-olist");
    function render() {
      list.innerHTML = "";
      order.forEach(function (si, pos) {
        var row = el("div", "asim-oitem");
        row.appendChild(el("span", "asim-onum", (pos + 1) + ""));
        row.appendChild(el("span", "asim-otext", esc(correct[si])));
        var up = el("button", "asim-oarrow", "▲"); var dn = el("button", "asim-oarrow", "▼");
        if (pos === 0) up.disabled = true;
        if (pos === order.length - 1) dn.disabled = true;
        up.addEventListener("click", function () { var t = order[pos - 1]; order[pos - 1] = order[pos]; order[pos] = t; render(); });
        dn.addEventListener("click", function () { var t = order[pos + 1]; order[pos + 1] = order[pos]; order[pos] = t; render(); });
        var ar = el("span", "asim-oarrows"); ar.appendChild(up); ar.appendChild(dn);
        row.appendChild(ar);
        list.appendChild(row);
      });
    }
    render();
    host.appendChild(list);

    var ctrl = el("div", "asim-ctrl");
    var bChk = el("button", "asim-btn asim-check", "Tartibni tekshirish");
    ctrl.appendChild(bChk);
    host.appendChild(ctrl);
    var fb = el("div"); host.appendChild(fb);

    bChk.addEventListener("click", function () {
      var ok = order.every(function (v, k) { return v === k; });
      list.querySelectorAll(".asim-oitem").forEach(function (r, pos) {
        r.classList.toggle("ok", order[pos] === pos);
        r.classList.toggle("bad", order[pos] !== pos);
      });
      feedback(fb, ok, ok ? "To'g'ri tartib! Agent halqasi aynan shunday ketadi." : "Hali to'g'ri emas — strelkalar bilan joylashtiring va qayta tekshiring.");
    });
  }

  window.AgentSim = {
    mount: function (host, cfg) {
      if (!host || !cfg) return;
      try {
        if (cfg.type === "agentloop") mountAgentLoop(host, cfg);
        else if (cfg.type === "classify") mountClassify(host, cfg);
        else if (cfg.type === "order") mountOrder(host, cfg);
        else host.innerHTML = "<p style='color:var(--muted)'>Noma'lum mashq turi.</p>";
      } catch (e) {
        host.innerHTML = "<p style='color:var(--muted)'>Mashqni yuklab bo'lmadi.</p>";
      }
    }
  };
})();
