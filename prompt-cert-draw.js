/* ============================================================
   Oson Studio — Prompt Engineering sertifikati chizish (umumiy modul)
   prompt-kurs.html (yaratish) va prompt-sertifikat.html (QR orqali ko'rish)
   bir xil sertifikatni chizishi uchun yagona manba.
   window.PromptCert.draw(canvas, { name, dateISO })
   Tezyoz cert-draw.js uslubida, lekin BALL va MODUL chiplari YO'Q.
   QR kod (o'ng-pastda) sertifikatni qayta tiklaydigan URL'ni kodlaydi.
   ============================================================ */
(function (global) {
  "use strict";

  var UZ_MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
  var SITE = "https://osonstudio.uz";

  function roundRect(x, X, Y, w, h, r) {
    x.beginPath(); x.moveTo(X + r, Y);
    x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r);
    x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath();
  }
  function drawCorners(x, inset, gold, W, H) {
    x.strokeStyle = gold; x.lineWidth = 2; var L = 24, o = inset + 13;
    [[o, o, 1, 1], [W - o, o, -1, 1], [o, H - o, 1, -1], [W - o, H - o, -1, -1]].forEach(function (a) {
      x.beginPath(); x.moveTo(a[0], a[1] + a[3] * L); x.lineTo(a[0], a[1]); x.lineTo(a[0] + a[2] * L, a[1]); x.stroke();
    });
  }
  function wrapCenter(x, text, cx, y, maxW, lh) {
    var words = text.split(" "), line = "", yy = y;
    words.forEach(function (w) { var t = line ? line + " " + w : w; if (x.measureText(t).width > maxW && line) { x.fillText(line, cx, yy); line = w; yy += lh; } else line = t; });
    if (line) x.fillText(line, cx, yy);
  }
  function drawStar(x, cx, cy, spikes, outer, inner) {
    var rot = -Math.PI / 2, step = Math.PI / spikes; x.beginPath(); x.moveTo(cx, cy - outer);
    for (var i = 0; i < spikes; i++) { x.lineTo(cx + Math.cos(rot) * outer, cy + Math.sin(rot) * outer); rot += step; x.lineTo(cx + Math.cos(rot) * inner, cy + Math.sin(rot) * inner); rot += step; }
    x.closePath(); x.fill();
  }
  function drawSeal(x, cx, cy, gold, accent, accent2) {
    var g = x.createLinearGradient(cx - 32, cy - 32, cx + 32, cy + 32); g.addColorStop(0, "#eccf78"); g.addColorStop(1, gold);
    x.fillStyle = accent; x.beginPath(); x.moveTo(cx - 12, cy + 20); x.lineTo(cx - 22, cy + 56); x.lineTo(cx - 6, cy + 47); x.lineTo(cx - 1, cy + 60); x.lineTo(cx - 1, cy + 28); x.closePath(); x.fill();
    x.fillStyle = accent2; x.beginPath(); x.moveTo(cx + 12, cy + 20); x.lineTo(cx + 22, cy + 56); x.lineTo(cx + 6, cy + 47); x.lineTo(cx + 1, cy + 60); x.lineTo(cx + 1, cy + 28); x.closePath(); x.fill();
    x.fillStyle = g; x.beginPath(); x.arc(cx, cy, 32, 0, 7); x.fill();
    x.fillStyle = "#fffdf7"; x.beginPath(); x.arc(cx, cy, 25, 0, 7); x.fill();
    x.fillStyle = g; x.beginPath(); x.arc(cx, cy, 20, 0, 7); x.fill();
    x.fillStyle = "#fffef9"; drawStar(x, cx, cy, 5, 11, 4.8);
  }
  function makeQR(text, size) {
    if (!global.QRCode) return null;
    try {
      var div = document.createElement("div");
      new global.QRCode(div, { text: text, width: size, height: size, colorDark: "#312e81", colorLight: "#ffffff", correctLevel: global.QRCode.CorrectLevel.M });
      return div.querySelector("canvas");
    } catch (e) { return null; }
  }
  function fmtDate(iso) {
    var d;
    if (iso && /^\d{4}-\d{1,2}-\d{1,2}$/.test(iso)) { var a = iso.split("-").map(Number); d = new Date(a[0], a[1] - 1, a[2]); }
    else d = new Date();
    return d.getDate() + "-" + UZ_MONTHS[d.getMonth()] + " " + d.getFullYear() + "-yil";
  }
  function certURL(o) {
    var p = new URLSearchParams();
    p.set("n", o.name || "");
    if (o.dateISO) p.set("d", o.dateISO);
    return SITE + "/prompt-sertifikat.html?" + p.toString();
  }

  function draw(canvas, o) {
    o = o || {};
    var SC = 2, W = 1000, H = 700;
    canvas.width = W * SC; canvas.height = H * SC; canvas.style.width = "100%";
    var x = canvas.getContext("2d"); x.setTransform(SC, 0, 0, SC, 0, 0);
    var accent = "#6366f1", accent2 = "#8b5cf6", gold = "#c79a3a", ink = "#1f2937", soft = "#6b7280";

    // fon
    x.fillStyle = "#fffdf7"; x.fillRect(0, 0, W, H);
    var rg = x.createRadialGradient(W / 2, -40, 40, W / 2, -40, 780);
    rg.addColorStop(0, "rgba(139,92,246,.10)"); rg.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = rg; x.fillRect(0, 0, W, H);
    // ramka
    var m = 26; var fg = x.createLinearGradient(m, m, W - m, H - m);
    fg.addColorStop(0, accent); fg.addColorStop(1, accent2);
    x.lineWidth = 7; x.strokeStyle = fg; roundRect(x, m, m, W - 2 * m, H - 2 * m, 16); x.stroke();
    x.lineWidth = 1.5; x.strokeStyle = gold; roundRect(x, m + 9, m + 9, W - 2 * (m + 9), H - 2 * (m + 9), 11); x.stroke();
    drawCorners(x, m + 9, gold, W, H);

    x.textAlign = "center";
    x.fillStyle = soft; x.font = "700 14px system-ui, sans-serif"; x.fillText("O S O N   S T U D I O", W / 2, 74);
    x.strokeStyle = gold; x.lineWidth = 1.4;
    x.beginPath(); x.moveTo(W / 2 - 120, 88); x.lineTo(W / 2 - 26, 88); x.moveTo(W / 2 + 26, 88); x.lineTo(W / 2 + 120, 88); x.stroke();
    x.fillStyle = gold; x.beginPath(); x.arc(W / 2, 88, 2.6, 0, 7); x.fill();
    x.fillStyle = accent; x.font = "800 50px Georgia, 'Times New Roman', serif"; x.fillText("SERTIFIKAT", W / 2, 150);
    x.fillStyle = soft; x.font = "600 15px system-ui, sans-serif"; x.fillText("Prompt Engineering — noldan mukammallikgacha", W / 2, 180);
    x.fillStyle = soft; x.font = "400 16px system-ui, sans-serif"; x.fillText("Ushbu sertifikat", W / 2, 236);

    var name = (o.name || "Foydalanuvchi").toString().trim() || "Foydalanuvchi";
    var nf = 46; x.font = "700 " + nf + "px Georgia, serif";
    while (x.measureText(name).width > W - 230 && nf > 22) { nf -= 2; x.font = "700 " + nf + "px Georgia, serif"; }
    x.fillStyle = ink; x.fillText(name, W / 2, 286);
    var nw = Math.min(W - 200, Math.max(230, x.measureText(name).width + 70));
    x.strokeStyle = gold; x.lineWidth = 1.5; x.beginPath(); x.moveTo(W / 2 - nw / 2, 302); x.lineTo(W / 2 + nw / 2, 302); x.stroke();

    x.fillStyle = soft; x.font = "400 16px system-ui, sans-serif";
    wrapCenter(x, "egasiga mazkur onlayn kursni to'liq va muvaffaqiyatli yakunlaganligi uchun beriladi.", W / 2, 348, W - 280, 24);

    // muhr (BALL/MODUL chiplari YO'Q — muhr markazga joylashtirildi)
    drawSeal(x, W / 2, 486, gold, accent, accent2);

    // futer — sana (chap) + osonstudio.uz
    x.fillStyle = soft; x.font = "600 13px system-ui, sans-serif"; x.textAlign = "left";
    x.fillText("Sana: " + fmtDate(o.dateISO), 66, 610);
    x.fillStyle = soft; x.font = "700 12px system-ui, sans-serif"; x.fillText("osonstudio.uz", 66, 630);

    // QR kod — o'ng-pastki burchak (sertifikatni qayta tiklaydi)
    var qcan = makeQR(certURL({ name: name, dateISO: o.dateISO }), 260);
    var qs = 90, qx = W - 62 - qs, qy = H - 62 - qs;
    if (qcan) {
      x.fillStyle = "#ffffff"; x.strokeStyle = "rgba(199,154,58,.5)"; x.lineWidth = 1.5; roundRect(x, qx - 6, qy - 6, qs + 12, qs + 12, 9); x.fill(); x.stroke();
      x.drawImage(qcan, qx, qy, qs, qs);
    } else {
      x.fillStyle = soft; x.font = "600 13px system-ui, sans-serif"; x.textAlign = "right"; x.fillText("osonstudio.uz", W - 66, 610);
    }
  }

  global.PromptCert = { draw: draw, makeQR: makeQR, certURL: certURL, fmtDate: fmtDate, UZ_MONTHS: UZ_MONTHS };
})(window);
