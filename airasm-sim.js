/* ============================================================
   Oson Studio — "AI bilan rasm yaratish" kursi: interaktiv simulyator (ImgSim)
   window.ImgSim.mount(host, cfg)

   Turlari:
   • "classify" — moddalarni guruhlarga ajratish
       cfg: { groups:["...","..."], items:[{ name, answer, hint? }] }
   • "order" — qadamlarni to'g'ri tartibga keltirish (TO'G'RI tartibda beriladi)
       cfg: { steps:["1-qadam","2-qadam", ...] }
   • "build" — prompt quruvchi: har bo'lim uchun eng kuchli variantni tanlash
       cfg: { goal, slots:[{ label, options:[{ text, good:true|false, why? }] }] }
   • "compare" — ikki promptni solishtirib, kuchlirog'ini tanlash
       cfg: { goal, a:{ text }, b:{ text }, better:"a"|"b", why }

   Hech narsa baholanmaydi — mustaqil mashq. CSS: .asim-* + .bsim-* + .csim-* (airasm-kurs.html'da).
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

  // ============ 1) CLASSIFY — guruhlarga ajratish ============
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

  // ============ 2) ORDER — qadamlarni tartiblash ============
  function mountOrder(host, cfg) {
    host.innerHTML = "";
    var correct = cfg.steps || [];
    var order = correct.map(function (_, i) { return i; });
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
      feedback(fb, ok, ok ? "To'g'ri tartib! Aynan shu ketma-ketlikda harakat qilinadi." : "Hali to'g'ri emas — strelkalar bilan joylashtiring va qayta tekshiring.");
    });
  }

  // ============ 3) BUILD — prompt quruvchi ============
  function mountBuild(host, cfg) {
    host.innerHTML = "";
    var slots = cfg.slots || [];
    var picks = {};   // slotIndex -> optionIndex

    // jonli prompt ko'rinishi
    var prev = el("div", "bsim-prev");
    prev.appendChild(el("div", "bsim-prev-lab", "Yig'ilayotgan prompt:"));
    var prevText = el("div", "bsim-prev-text");
    prev.appendChild(prevText);
    host.appendChild(prev);

    function updatePreview() {
      var parts = slots.map(function (s, si) {
        if (picks[si] != null) return '<span class="bsim-chip">' + esc(s.options[picks[si]].text) + '</span>';
        return '<span class="bsim-chip ph">' + esc(s.label) + '</span>';
      });
      prevText.innerHTML = parts.join('<span class="bsim-comma">, </span>');
    }

    var slotWrap = el("div", "bsim-slots");
    slots.forEach(function (s, si) {
      var sb = el("div", "bsim-slot");
      sb.appendChild(el("div", "bsim-slot-lab", esc(s.label)));
      var opts = el("div", "bsim-opts");
      (s.options || []).forEach(function (o, oi) {
        var b = el("button", "bsim-opt", esc(o.text)); b.dataset.oi = oi;
        b.addEventListener("click", function () {
          picks[si] = oi;
          opts.querySelectorAll(".bsim-opt").forEach(function (x) { x.classList.remove("sel", "bsim-ok", "bsim-bad"); });
          b.classList.add("sel");
          sb.classList.remove("ok", "bad");
          updatePreview();
        });
        opts.appendChild(b);
      });
      sb.appendChild(opts);
      slotWrap.appendChild(sb);
    });
    host.appendChild(slotWrap);
    updatePreview();

    var ctrl = el("div", "asim-ctrl");
    var bChk = el("button", "asim-btn asim-check", "Promptni baholash");
    var bRes = el("button", "asim-btn asim-reset2", "Tozalash");
    ctrl.appendChild(bChk); ctrl.appendChild(bRes);
    host.appendChild(ctrl);
    var fb = el("div"); host.appendChild(fb);

    bChk.addEventListener("click", function () {
      if (Object.keys(picks).length < slots.length) { feedback(fb, false, "Iltimos, har bir bo'lim uchun variant tanlang."); return; }
      var ok = 0, wrong = [];
      slots.forEach(function (s, si) {
        var sb = slotWrap.children[si];
        var o = s.options[picks[si]];
        var btn = sb.querySelectorAll(".bsim-opt")[picks[si]];
        sb.classList.remove("ok", "bad");
        if (btn) btn.classList.remove("bsim-ok", "bsim-bad");
        if (o.good) { ok++; sb.classList.add("ok"); if (btn) btn.classList.add("bsim-ok"); }
        else { sb.classList.add("bad"); if (btn) btn.classList.add("bsim-bad"); wrong.push({ name: s.label, hint: o.why || "Bu variant promptni kuchsizlantiradi." }); }
      });
      if (ok === slots.length) feedback(fb, true, "Zo'r! Kuchli, aniq prompt yig'ildi (" + ok + "/" + slots.length + ").");
      else feedback(fb, false, ok + "/" + slots.length + " bo'lim kuchli. Qizil bo'limlarni yaxshilang:", wrong);
    });
    bRes.addEventListener("click", function () {
      picks = {}; fb.innerHTML = "";
      slotWrap.querySelectorAll(".bsim-slot").forEach(function (r) { r.classList.remove("ok", "bad"); });
      slotWrap.querySelectorAll(".bsim-opt").forEach(function (x) { x.classList.remove("sel", "bsim-ok", "bsim-bad"); });
      updatePreview();
    });
  }

  // ============ 4) COMPARE — ikki promptni solishtirish ============
  function mountCompare(host, cfg) {
    host.innerHTML = "";
    var done = false;

    if (cfg.goal) host.appendChild(el("div", "csim-goal", '<b>Maqsad:</b> ' + esc(cfg.goal)));

    var grid = el("div", "csim-grid");
    var cards = {};
    [["a", cfg.a], ["b", cfg.b]].forEach(function (pair) {
      var key = pair[0], data = pair[1] || {};
      var card = el("button", "csim-card");
      card.dataset.k = key;
      card.innerHTML = '<div class="csim-tag">Variant ' + key.toUpperCase() + '</div>' +
        '<div class="csim-prompt">' + esc(data.text || "") + '</div>';
      card.addEventListener("click", function () { choose(key); });
      grid.appendChild(card);
      cards[key] = card;
    });
    host.appendChild(grid);

    var fb = el("div"); host.appendChild(fb);

    function choose(key) {
      if (done) return;
      done = true;
      var ok = key === cfg.better;
      Object.keys(cards).forEach(function (k) {
        cards[k].classList.add("locked");
        if (k === cfg.better) cards[k].classList.add("best");
        else if (k === key) cards[k].classList.add("worst");
      });
      var d = el("div", "asim-fb " + (ok ? "ok" : "bad"));
      d.appendChild(el("div", "asim-fb-h", (ok ? "✓ To'g'ri tanlov!" : "✕ Variant " + cfg.better.toUpperCase() + " kuchliroq edi")));
      d.appendChild(el("div", "csim-why", esc(cfg.why || "")));
      fb.innerHTML = ""; fb.appendChild(d);

      var rb = el("button", "asim-btn asim-reset2", "↻ Qayta");
      rb.style.marginTop = "12px";
      rb.addEventListener("click", function () { mountCompare(host, cfg); });
      fb.appendChild(rb);
    }
  }

  window.ImgSim = {
    mount: function (host, cfg) {
      if (!host || !cfg) return;
      try {
        if (cfg.type === "classify") mountClassify(host, cfg);
        else if (cfg.type === "order") mountOrder(host, cfg);
        else if (cfg.type === "build") mountBuild(host, cfg);
        else if (cfg.type === "compare") mountCompare(host, cfg);
        else host.innerHTML = "<p style='color:var(--muted)'>Noma'lum mashq turi.</p>";
      } catch (e) {
        host.innerHTML = "<p style='color:var(--muted)'>Mashqni yuklab bo'lmadi.</p>";
      }
    }
  };
})();
