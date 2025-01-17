const baseJsonUrl = "../js/json/",
  arabicDigits = {
    0: "٠",
    1: "١",
    2: "٢",
    3: "٣",
    4: "٤",
    5: "٥",
    6: "٦",
    7: "٧",
    8: "٨",
    9: "٩",
  },
  ayahCounts = {
    1: 7,
    2: 286,
    3: 200,
    4: 176,
    5: 120,
    6: 165,
    7: 206,
    8: 75,
    9: 129,
    10: 109,
    11: 123,
    12: 111,
    13: 43,
    14: 52,
    15: 99,
    16: 128,
    17: 111,
    18: 110,
    19: 98,
    20: 135,
    21: 112,
    22: 78,
    23: 118,
    24: 64,
    25: 77,
    26: 227,
    27: 93,
    28: 88,
    29: 69,
    30: 60,
    31: 34,
    32: 30,
    33: 73,
    34: 54,
    35: 45,
    36: 83,
    37: 182,
    38: 88,
    39: 75,
    40: 85,
    41: 54,
    42: 53,
    43: 89,
    44: 59,
    45: 37,
    46: 35,
    47: 38,
    48: 29,
    49: 18,
    50: 45,
    51: 60,
    52: 49,
    53: 62,
    54: 55,
    55: 78,
    56: 96,
    57: 29,
    58: 22,
    59: 24,
    60: 13,
    61: 14,
    62: 11,
    63: 11,
    64: 18,
    65: 12,
    66: 12,
    67: 30,
    68: 52,
    69: 52,
    70: 44,
    71: 28,
    72: 28,
    73: 20,
    74: 56,
    75: 40,
    76: 31,
    77: 50,
    78: 40,
    79: 46,
    80: 42,
    81: 29,
    82: 19,
    83: 36,
    84: 25,
    85: 22,
    86: 17,
    87: 19,
    88: 26,
    89: 30,
    90: 20,
    91: 15,
    92: 21,
    93: 11,
    94: 8,
    95: 8,
    96: 19,
    97: 5,
    98: 8,
    99: 8,
    100: 11,
    101: 11,
    102: 8,
    103: 3,
    104: 9,
    105: 5,
    106: 4,
    107: 7,
    108: 3,
    109: 6,
    110: 3,
    111: 5,
    112: 4,
    113: 5,
    114: 6,
  },
  arabicSurahNames = {
    1: "الفَاتِحَة",
    2: "البَقَرَة",
    3: "آل عِمرَان",
    4: "النِّسَاء",
    5: "المَائِدَة",
    6: "الأَنعَام",
    7: "الأَعرَاف",
    8: "الأَنفَال",
    9: "التَّوبَة",
    10: "يُونُس",
    11: "هُود",
    12: "يُوسُف",
    13: "الرَّعد",
    14: "إِبرَاهِيم",
    15: "الحِجر",
    16: "النَّحل",
    17: "الإِسرَاء",
    18: "الكَهف",
    19: "مَريَم",
    20: "طه",
    21: "الأَنبِيَاء",
    22: "الحَجّ",
    23: "المُؤمِنُون",
    24: "النُّور",
    25: "الفُرقَان",
    26: "الشُّعَرَاء",
    27: "النَّمل",
    28: "القَصَص",
    29: "العَنكَبُوت",
    30: "الرُّوم",
    31: "لُقمَان",
    32: "السَّجدَة",
    33: "الأَحزَاب",
    34: "سَبَإ",
    35: "فَاطِر",
    36: "يسٓ",
    37: "الصَّافَّات",
    38: "صٓ",
    39: "الزُّمَر",
    40: "غَافِر",
    41: "فُصِّلَت",
    42: "الشُّورَى",
    43: "الزُّخرُف",
    44: "الدُّخَان",
    45: "الجَاثِيَة",
    46: "الأَحقَاف",
    47: "مُحَمَّد",
    48: "الفَتح",
    49: "الحُجُرَات",
    50: "قٓ",
    51: "الذَّارِيَات",
    52: "الطُّور",
    53: "النَّجم",
    54: "القَمَر",
    55: "الرَّحمٰن",
    56: "الوَاقِعَة",
    57: "الحَدِيد",
    58: "المُجَادِلَة",
    59: "الحَشر",
    60: "المُمتَحَنَة",
    61: "الصَّف",
    62: "الجُمعَة",
    63: "المُنَافِقُون",
    64: "التَّغَابُن",
    65: "الطَّلَاق",
    66: "التَّحرِيم",
    67: "المُلك",
    68: "القَلَم",
    69: "الحَاقَّة",
    70: "المَعَارِج",
    71: "نُوح",
    72: "الجِنّ",
    73: "المُزَّمِّل",
    74: "المُدَّثِّر",
    75: "القِيَامَة",
    76: "الإِنسَان",
    77: "المُرسَلَات",
    78: "النَّبَإ",
    79: "النَّازِعَات",
    80: "عَبَس",
    81: "التَّكوِير",
    82: "الانفِطَار",
    83: "المُطَفِّفِين",
    84: "الانشِقَاق",
    85: "البُرُوج",
    86: "الطَّارِق",
    87: "الأَعلَى",
    88: "الغَاشِيَة",
    89: "الفَجر",
    90: "البَلَد",
    91: "الشَّمس",
    92: "اللَّيل",
    93: "الضُّحَى",
    94: "الشَّرح",
    95: "التِّين",
    96: "العَلَق",
    97: "القَدر",
    98: "البَيِّنَة",
    99: "الزَّلزَلَة",
    100: "العَادِيَات",
    101: "القَارِعَة",
    102: "التَّكَاثُر",
    103: "العَصر",
    104: "الهُمَزَة",
    105: "الفِيل",
    106: "قُرَيش",
    107: "المَاعُون",
    108: "الكَوثَر",
    109: "الكَافِرُون",
    110: "النَّصر",
    111: "المَسَد",
    112: "الإِخلَاص",
    113: "الفَلَق",
    114: "النَّاس",
  },
  dhivehiSurahNames = {
    1: "ފާތިޙާ",
    2: "ބަގަރާ",
    3: "އާލްޢިމްރާން",
    4: "ނިސާ",
    5: "މާއިދާ",
    6: "އަންޢާމް",
    7: "އަޢްރާފް",
    8: "އަންފާލް",
    9: "ތައުބާ",
    10: "ޔޫނުސް",
    11: "ހޫދު",
    12: "ޔޫސުފް",
    13: "ރަޢްދު",
    14: "އިބްރާހީމް",
    15: "ޙިޖްރު",
    16: "ނަޙްލު",
    17: "އިސްރާ",
    18: "ކަހްފު",
    19: "މަރްޔަމް",
    20: "ޠާހާ",
    21: "އަންބިޔާ",
    22: "ޙައްޖު",
    23: "މުއުމިނޫން",
    24: "ނޫރު",
    25: "ފުރްގާން",
    26: "ޝުޢަރާ",
    27: "ނަމްލު",
    28: "ގަޞަޞް",
    29: "ޢަންކަބޫތު",
    30: "ރޫމް",
    31: "ލުގްމާން",
    32: "ސަޖްދާ",
    33: "އަޙްޒާބް",
    34: "ސަބަޢު",
    35: "ފާޠިރު",
    36: "ޔާސީން",
    37: "ޞާއްފާތު",
    38: "ޞާދު",
    39: "ޒުމަރު",
    40: "ޣާފިރު",
    41: "ފުއްޞިލަތް",
    42: "ޝޫރާ",
    43: "ޒުޚްރުފް",
    44: "ދުޚާން",
    45: "ޖާޘިޔާ",
    46: "އަޙްގާފް",
    47: "މުޙައްމަދު",
    48: "ފަތްޙު",
    49: "ޙުޖުރާތު",
    50: "ގާފް",
    51: "ޛާރިޔާތު",
    52: "ޠޫރު",
    53: "ނަޖްމު",
    54: "ގަމަރު",
    55: "ރަޙްމާން",
    56: "ވާގިޢާ",
    57: "ޙަދީދު",
    58: "މުޖާދަލާ",
    59: "ޙަޝްރު",
    60: "މުމްތަޙިނާ",
    61: "ޞައްފު",
    62: "ޖުމުޢާ",
    63: "މުނާފިގޫން",
    64: "ތަޣާބުން",
    65: "ޠަލާގު",
    66: "ތަޙްރީމް",
    67: "މުލްކު",
    68: "ގަލަމް",
    69: "ޙާއްގާ",
    70: "މަޢާރިޖު",
    71: "ނޫޙު",
    72: "ޖިންނު",
    73: "މުއްޒައްމިލު",
    74: "މުއްދައްޘިރު",
    75: "ގިޔާމާ",
    76: "އިންސާން",
    77: "މުރްސަލާތު",
    78: "ނަބަޢު",
    79: "ނާޒިޢާތު",
    80: "ޢަބަސަ",
    81: "ތަކްވީރު",
    82: "އިންފިޠާރު",
    83: "މުޠައްފިފީން",
    84: "އިންޝިގާގު",
    85: "ބުރޫޖު",
    86: "ޠާރިގު",
    87: "އަޢުލާ",
    88: "ޣާޝިޔާ",
    89: "ފަޖްރު",
    90: "ބަލަދު",
    91: "ޝަމްސު",
    92: "ލައިލު",
    93: "ޟުޙާ",
    94: "ޝަރްޙު",
    95: "ތީން",
    96: "ޢަލަގު",
    97: "ގަދްރު",
    98: "ބައްޔިނާ",
    99: "ޒަލްޒަލާ",
    100: "ޢާދިޔާތު",
    101: "ގާރިޢާ",
    102: "ތަކާޘުރު",
    103: "ޢަޞްރު",
    104: "ހުމަޒާ",
    105: "ފީލު",
    106: "ގުރައިޝް",
    107: "މާޢޫން",
    108: "ކައުޘަރު",
    109: "ކާފިރޫން",
    110: "ނަޞްރު",
    111: "މަސަދު",
    112: "އިޚްލާޞް",
    113: "ފަލަގު",
    114: "ނާސް",
  },
  englishSurahNames = {
    1: "Fatihah",
    2: "Baqarah",
    3: "AalImran",
    4: "Nisa",
    5: "Maidah",
    6: "An'am",
    7: "A'raf",
    8: "Anfal",
    9: "Taubah",
    10: "Yunus",
    11: "Hud",
    12: "Yusuf",
    13: "Ra'd",
    14: "Ibrahim",
    15: "Hijr",
    16: "Nahl",
    17: "Isra",
    18: "Kahf",
    19: "Maryam",
    20: "Taha",
    21: "Anbiya",
    22: "Hajj",
    23: "Muminun",
    24: "Nur",
    25: "Furqan",
    26: "Shu'ara",
    27: "Naml",
    28: "Qasas",
    29: "Ankabut",
    30: "Rum",
    31: "Luqman",
    32: "Sajdah",
    33: "Ahzab",
    34: "Saba",
    35: "Fatir",
    36: "Ya Seen",
    37: "Saffat",
    38: "Sad",
    39: "Zumar",
    40: "Ghafir",
    41: "Fussilat",
    42: "Shura",
    43: "Zukhruf",
    44: "Dukhan",
    45: "Jathiyah",
    46: "Ahqaf",
    47: "Muhammad",
    48: "Fath",
    49: "Hujurat",
    50: "Qaf",
    51: "Dhariyat",
    52: "Tur",
    53: "Najm",
    54: "Qamar",
    55: "Rahman",
    56: "Waqiah",
    57: "Hadid",
    58: "Mujadilah",
    59: "Hashr",
    60: "Mumtahanah",
    61: "Saff",
    62: "Jumu'ah",
    63: "Munafiqun",
    64: "Taghabun",
    65: "Talaq",
    66: "Tahrim",
    67: "Mulk",
    68: "Qalam",
    69: "Haqqah",
    70: "Ma'arij",
    71: "Nuh",
    72: "Jinn",
    73: "Muzzammil",
    74: "Muddaththir",
    75: "Qiyamah",
    76: "Insan",
    77: "Mursalat",
    78: "Naba",
    79: "Nazi'at",
    80: "'Abasa",
    81: "Takwir",
    82: "Infitar",
    83: "Mutaffifin",
    84: "Inshiqaq",
    85: "Buruj",
    86: "Tariq",
    87: "A'la",
    88: "Ghashiyah",
    89: "Fajr",
    90: "Balad",
    91: "Shams",
    92: "Lail",
    93: "Dhuha",
    94: "Sharh",
    95: "Theen",
    96: "'Alaq",
    97: "Qadr",
    98: "Bayyinah",
    99: "Zalzalah",
    100: "'Adiyat",
    101: "Qari'ah",
    102: "Takathur",
    103: "'Asr",
    104: "Humazah",
    105: "Feel",
    106: "Quraish",
    107: "Ma'un",
    108: "Kauthar",
    109: "Kafirun",
    110: "Nasr",
    111: "Masad",
    112: "Ikhlas",
    113: "Falaq",
    114: "Nas",
  },
  maxSurah = 114,
  maxJuz = 30,
  baseColumns = [
    { data: "0", title: "ޖުޒް", visible: !1 },
    { data: "1", title: "ސޫރަތް", visible: !1 },
    { data: "2", title: "އާޔަތް #", visible: !1 },
    { data: "3", title: "ބިސްމި", visible: !0 },
    {
      data: "4",
      title: "އާޔަތް (އިމްލާއީ)",
      visible: !0,
      render: function (a, e, t) {
        return replaceDigitsWithArabic(
          (a =
            "﴿" +
            (a = a.replace(/\s([\u0660-\u0669]+)/, " ")) +
            " " +
            t[2] +
            "﴾")
        );
      },
    },
    {
      data: "5",
      title: "ރަސްމު އުޘްމާނީ",
      visible: !1,
      render: function (a, e, t) {
        return replaceDigitsWithArabic(
          (a =
            "﴿" +
            (a = a.replace(/\s([\u0660-\u0669]+)/, " ")) +
            " " +
            t[2] +
            "﴾")
        );
      },
    },
  ],
  additionalJsons = [
    { name: "quranHadithmv", columns: [0], title: "ޙަދީޘްއެމްވީ ތަރުޖަމާ:" },
    { name: "quranRasmee", columns: [0, 1], title: "ރަސްމީ ތަރުޖަމާ:" },
    { name: "quranBakurube", columns: [0, 1], title: "ބަކުރުބެ ތަރުޖަމާ:" },
    { name: "quranJaufar", columns: [0, 1], title: "ޖަޢުފަރު ތަފްސީރު:" },
    { name: "quranSoabuni", columns: [0, 1, 3, 4], title: "ޞ ތަފްސީރު:" },
    { name: "quranMukhtasar", columns: [0], title: "مختصر التفسير:" },
    { name: "quranMuyassar", columns: [0], title: "التفسير الميسر:" },
  ],
  defaultAdditionalJson = currentFileName;
let currentSurah = 1,
  currentAyah = 1,
  currentJuz = 1,
  currentFocus = -1,
  additionalColumns = [],
  translationStates = {},
  initialTranslationStates = {},
  lastFocusedItems = { surah: -1, ayah: -1, juz: -1 },
  searchInputValues = { surah: "", ayah: "", juz: "" };
function replaceDigitsWithArabic(a) {
  return a.replace(/[0-9]/g, function (a) {
    return arabicDigits[a];
  });
}
function removeDiacritics(a) {
  return a.replace(/[َُِّْٰۡۚٓـًٌٍّٔ]/g, "");
}
function cleanSurahText(a) {
  return removeDiacritics(a)
    .replace(/سورة\s*/, "")
    .trim();
}
function QtoggleDropdown(a) {
  var e = $(`#${a}Dropdown`);
  if (($(".q-dropdown").not(e).hide(), e.toggle(), e.is(":visible"))) {
    var t = parseInt($(`#${a}Value`).text());
    const n = e.find(".q-dropdown-item");
    (t = n.filter(`[data-value="${t}"]`)).length
      ? ((currentFocus = n.index(t)),
        (lastFocusedItems[a] = currentFocus),
        addActive(n),
        t[0].scrollIntoView({ block: "center" }))
      : ((currentFocus =
          void 0 !== lastFocusedItems[a] ? lastFocusedItems[a] : 0),
        (-1 === currentFocus || currentFocus >= n.length) && (currentFocus = 0),
        addActive(n)),
      (e = e.find(".q-dropdown-search")).val(searchInputValues[a]).focus(),
      e.trigger("input");
  }
}
function QnavigateArrow(a, e) {
  if ("surah" === a)
    var t = currentSurah,
      n = 114;
  else
    "ayah" === a
      ? ((t = currentAyah), (n = ayahCounts[currentSurah] || 1))
      : "juz" === a && ((t = currentJuz), (n = 30));
  "prev" === e
    ? 1 > --t &&
      ("ayah" === a
        ? (currentSurah--,
          1 > currentSurah && (currentSurah = 114),
          updateAyahDropdown(),
          (t = ayahCounts[currentSurah] || 1))
        : (t = n))
    : ++t > n &&
      ("ayah" === a &&
        (currentSurah++,
        currentSurah > 114 && (currentSurah = 1),
        updateAyahDropdown()),
      (t = 1)),
    updateQValue(a, t);
}
function navigateToVerse() {
  const a = table
    .rows()
    .indexes()
    .filter(
      (a) => (
        (a = table.row(a).data()),
        null !== currentJuz
          ? parseInt(a[0]) === currentJuz
          : null !== currentSurah &&
            null !== currentAyah &&
            parseInt(a[1]) === currentSurah &&
            parseInt(a[2]) === currentAyah
      )
    );
  if (0 < a.length) {
    var e = table.page.info();
    table.page(Math.floor(a[0] / e.length)).draw(!1),
      (e = table.row(a[0]).node()) &&
        e.scrollIntoView({ behavior: "smooth", block: "center" }),
      updateAllQValues(table.row(a[0]).data());
  }
}
function updateQValue(a, e) {
  e = parseInt(e);
  const t = $(`#${a}Value`);
  switch (a) {
    case "surah":
      t.text(`${e} ${arabicSurahNames[e]}`),
        (currentSurah = e),
        (currentAyah = 1),
        initializeQDropdown("ayah", 1, ayahCounts[currentSurah]),
        $("#ayahValue").text(currentAyah),
        (currentJuz = null);
      break;
    case "ayah":
      (currentAyah = e), t.text(e), (currentJuz = null);
      break;
    case "juz":
      (currentJuz = e), t.text(e), (currentAyah = currentSurah = null);
  }
  navigateToVerse(),
    (a = $(`#${a}Dropdown`).find(".q-dropdown-item")),
    (currentFocus = a.index(a.filter(`[data-value="${e}"]`)));
}
function updateAllQValues(a) {
  (currentJuz = parseInt(a[0])),
    (currentSurah = parseInt(a[1])),
    (currentAyah = parseInt(a[2])),
    $("#juzValue").text(currentJuz),
    $("#surahValue").text(`${currentSurah} ${arabicSurahNames[currentSurah]}`),
    $("#ayahValue").text(currentAyah);
}
function updateAyahDropdown() {
  initializeQDropdown("ayah", 1, ayahCounts[currentSurah] || 1),
    $("#ayahValue").text("1");
}
function initializeQDropdown(a, e, t) {
  const n = $(`#${a}Dropdown`);
  for (
    n.empty(),
      n.append(
        '<input type="text" class="q-dropdown-search" placeholder="ލިޔޭ ނޫނީ ތިރިއަށް ފިތާ">'
      ),
      "ayah" === a && (t = ayahCounts[currentSurah]);
    e <= t;
    e++
  ) {
    let t = e;
    "surah" === a &&
      (t = `${e} ${arabicSurahNames[e]} ${dhivehiSurahNames[e]} ${englishSurahNames[e]}`),
      n.append(`<div class="q-dropdown-item" data-value="${e}">${t}</div>`);
  }
  n.on("click", ".q-dropdown-item", function () {
    const e = $(this).data("value");
    updateQValue(a, e),
      (lastFocusedItems[a] = n.find(".q-dropdown-item").index(this)),
      n.hide();
  }),
    (t = n.find(".q-dropdown-search")).on("input", function () {
      const e = $(this).val().toLowerCase(),
        t = "surah" === a ? cleanSurahText(e) : e;
      n.find(".q-dropdown-item").each(function () {
        var e = $(this).text().toLowerCase();
        (e = "surah" === a ? cleanSurahText(e) : e),
          $(this).toggle(e.includes(t));
      }),
        (currentFocus = -1);
    }),
    t.on("keydown", function (e) {
      const t = n.find(".q-dropdown-item:visible");
      switch (e.keyCode) {
        case 40:
          e.preventDefault(),
            (currentFocus = currentFocus < t.length - 1 ? currentFocus + 1 : 0);
          break;
        case 38:
          e.preventDefault(),
            (currentFocus = 0 < currentFocus ? currentFocus - 1 : t.length - 1);
          break;
        case 13:
          return (
            e.preventDefault(),
            void (-1 < currentFocus
              ? t.length && t[currentFocus].click()
              : t.length && t[0].click())
          );
      }
      (lastFocusedItems[a] = currentFocus), addActive(t);
    });
}
function addActive(a) {
  if (!a) return !1;
  removeActive(a),
    $(a[currentFocus]).addClass("active"),
    $(a[currentFocus])[0].scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
}
function removeActive(a) {
  a.removeClass("active");
}
function getAllColumnDefinitions() {
  const a = additionalJsons.flatMap((a) => [
    {
      title: `<strong>${a.title}</strong>`,
      data: null,
      name: `${a.name}-title`,
      visible: !1,
      render: function (e, t, n) {
        return `<strong>${a.title}</strong>`;
      },
    },
    ...a.columns.map((e, t) => ({
      title: `${t + 1}`,
      data: null,
      name: `${a.name}-${e}`,
      visible: !1,
      render: function (t, n, r) {
        return r[a.name] ? r[a.name][e] : "Loading...";
      },
    })),
  ]);
  return [...baseColumns, ...a];
}
function toggleTranslation(a, e) {
  var t = additionalJsons.find((e) => e.name === a);
  const n = getColumnIndices(a),
    r = n[0],
    i = n[e + 1],
    l = table.page();
  additionalColumns.includes(a)
    ? ((t = t.columns.filter((a, e) => table.column(n[e + 1]).visible())),
      table.column(r).visible(!(1 === t.length && e === t[0] - 1)),
      table.column(i).visible(!table.column(i).visible()),
      table.draw(),
      table.page(l).draw("page"))
    : (additionalColumns.push(a),
      $.getJSON(`${baseJsonUrl}${a}.json`, function (e) {
        const t = table.data().toArray();
        t.forEach((t, n) => {
          t[a] = e[n];
        }),
          table.clear().rows.add(t).draw(),
          table.column(r).visible(!0),
          table.column(i).visible(!0),
          table.page(l).draw("page");
      }).fail(function (a, e, t) {
        console.error("Error loading translation:", t);
      }));
}
function getColumnIndices(a) {
  let e = baseColumns.length;
  for (
    let t = 0;
    t < additionalJsons.length && additionalJsons[t].name !== a;
    t++
  )
    e += additionalJsons[t].columns.length + 1;
  return [
    e,
    ...additionalJsons
      .find((e) => e.name === a)
      .columns.map((a, t) => e + t + 1),
  ];
}
function showAllTranslations() {
  document
    .querySelectorAll('#translationList input[type="checkbox"]')
    .forEach((a) => {
      (a.checked = !0), (translationStates[a.value] = !0);
    });
}
function initializeTranslationSelector() {
  const a = document.getElementById("translationList"),
    e = document.getElementById("translationToggleBtn"),
    t = document.getElementById("translationDropdown"),
    n = document.getElementById("applyTranslations"),
    r = document.getElementById("resetTranslations"),
    i = document.getElementById("showAllTranslations");
  e && t
    ? (baseColumns.forEach((e, t) => {
        addTranslationItem(a, e.title, t, e.visible);
      }),
      additionalJsons.forEach((e) => {
        e.columns.forEach((t, n) => {
          addTranslationItem(
            a,
            `${e.title} ${n + 1}`,
            `${e.name}-${t}`,
            e.name === defaultAdditionalJson && 0 === n
          );
        });
      }),
      e.addEventListener("click", (a) => {
        a.stopPropagation(),
          (t.style.display = "block" === t.style.display ? "none" : "block");
      }),
      document.addEventListener("click", (a) => {
        a.target.closest(".translation-selector") ||
          "block" !== t.style.display ||
          (applyTranslations(), (t.style.display = "none"));
      }),
      n.addEventListener("click", () => {
        applyTranslations(), (t.style.display = "none");
      }),
      r.addEventListener("click", resetTranslations),
      i.addEventListener("click", showAllTranslations))
    : console.error("Toggle button or dropdown not found");
}
function addTranslationItem(a, e, t, n) {
  const r = document.createElement("div");
  (r.className = "translation-item"),
    (t = String(t)).includes("-title") ||
      ((r.innerHTML = `\n      <input type="checkbox" id="trans-${t}" value="${t}" ${
        n ? "checked" : ""
      }>\n      <label for="trans-${t}">${e}</label>\n  `),
      a.appendChild(r),
      (translationStates[t] = n),
      (initialTranslationStates[t] = n));
}
function applyTranslations() {
  const a = table.page();
  document
    .querySelectorAll('#translationList input[type="checkbox"]')
    .forEach((a) => {
      const e = a.value;
      if (((a = a.checked), "string" == typeof e && e.includes("-"))) {
        const [t, n] = e.split("-");
        a !== table.column(getColumnIndices(t)[parseInt(n) + 1]).visible() &&
          toggleTranslation(t, parseInt(n));
      } else table.column(parseInt(e)).visible(a);
      translationStates[e] = a;
    }),
    additionalJsons.forEach((a) => {
      const e = getColumnIndices(a.name)[0];
      (a = getColumnIndices(a.name)
        .slice(1)
        .some((a) => table.column(a).visible())),
        table.column(e).visible(a);
    }),
    table.draw(),
    table.page(a).draw("page");
}
function resetTranslations() {
  document
    .querySelectorAll('#translationList input[type="checkbox"]')
    .forEach((a) => {
      a.checked = initialTranslationStates[a.value] || !1;
    });
}
function toggleBaseColumn(a) {
  const e = table.column(a);
  e.visible(translationStates[a]), (baseColumns[a].visible = e.visible());
}
function initializeNavigationBoxes() {
  initializeQDropdown("surah", 1, 114),
    initializeQDropdown("juz", 1, 30),
    updateAyahDropdown(),
    $(".q-nav-value").on("click", function () {
      QtoggleDropdown($(this).attr("id").replace("Value", ""));
    }),
    $(".q-nav-arrow").on("click", function () {
      QnavigateArrow($(this).data("type"), $(this).data("direction"));
    }),
    $(document).on("click", function (a) {
      $(a.target).closest(".q-nav-box").length || $(".q-dropdown").hide();
    }),
    $(".q-dropdown").on("hide", function () {
      var a = $(this).attr("id").replace("Dropdown", "");
      searchInputValues[a] = $(this).find(".q-dropdown-search").val();
    });
}
