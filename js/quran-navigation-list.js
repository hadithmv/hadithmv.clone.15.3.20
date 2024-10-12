/* !!!
 *
 * QURAN NAVIGATION FUNCTIONS
 *
 */

// QURAN OBJECT MAPS
// this part is not the navigation arrows at the top

// makes ayah numbers arabic
function replaceDigitsWithArabic(data) {
  return data.replace(/[0-9]/g, function (match) {
    return arabicDigits[match];
  });
}
const arabicDigits = {
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
};
//

const ayahCounts = {
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
};

// makes surah numbers into names, Object mapping surah numbers to their Arabic names
const arabicSurahNames = {
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
};

const dhivehiSurahNames = {
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
};

const englishSurahNames = {
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
};
//

// makes numbers into MATHEMATICAL SANS-SERIF DIGIT, Object mapping regular digits to their mathematical sans-serif equivalents
/*const sansSerifDigits = {
        0: "𝟢",
        1: "𝟣",
        2: "𝟤",
        3: "𝟥",
        4: "𝟦",
        5: "𝟧",
        6: "𝟨",
        7: "𝟩",
        8: "𝟪",
        9: "𝟫",
      };*/

// QURAN DROPDOWN CODE
/**
 * Toggles the visibility of a dropdown
 * @param {string} type - The type of dropdown to toggle
 */
// Update the QtoggleDropdown function to display Surah names correctly

// Function to toggle the visibility of a dropdown based on its type
function QtoggleDropdown(type) {
  var dropdown = $("#" + type + "Dropdown"); // Select the dropdown element
  $(".q-dropdown").not(dropdown).hide(); // Hide other dropdowns
  dropdown.toggle(); // Toggle the visibility of the selected dropdown

  // Check if the dropdown is now visible
  if (dropdown.is(":visible")) {
    var currentValue = parseInt($("#" + type + "Value").text()); // Get the current value
    var items = dropdown.find(".q-dropdown-item"); // Find all items in the dropdown
    var currentItem = items.filter(`[data-value="${currentValue}"]`); // Filter for the current item

    // If the current item exists
    if (currentItem.length) {
      currentFocus = items.index(currentItem); // Set the current focus
      addActive(items); // Add active class to the current item
      currentItem[0].scrollIntoView({ block: "center" }); // Scroll to the current item
    } else {
      currentFocus = -1; // Reset focus if no current item
    }
    dropdown.find(".q-dropdown-search").val("").focus(); // Clear and focus the search input
  }
}

/**
 * Updates the value of a navigation box and navigates to the corresponding verse
 * @param {string} type - The type of value to update (surah, ayah, or juz)
 * @param {number} value - The new value
 */
// Update the updateQValue function to display Surah names correctly
function updateQValue(type, value) {
  value = parseInt(value);
  if (type === "surah") {
    $("#" + type + "Value").text(`${value} ${arabicSurahNames[value]}`);
    currentSurah = value;
    currentAyah = 1; // Reset to first ayah when surah changes
    initializeQDropdown("ayah", 1, ayahCounts[currentSurah]);
    $("#ayahValue").text(currentAyah);
    currentJuz = null; // Reset Juz when Surah is selected
  } else if (type === "ayah") {
    currentAyah = value;
    $("#" + type + "Value").text(value);
    currentJuz = null; // Reset Juz when Ayah is selected
  } else if (type === "juz") {
    currentJuz = value;
    $("#" + type + "Value").text(value);
    currentSurah = null; // Reset Surah when Juz is selected
    currentAyah = null; // Reset Ayah when Juz is selected
  }

  navigateToVerse(); // Call the function to navigate to the specified verse

  // Update the currentFocus for the dropdown
  var dropdown = $("#" + type + "Dropdown"); // Select the dropdown element based on the type
  var items = dropdown.find(".q-dropdown-item"); // Find all items within the dropdown
  currentFocus = items.index(items.filter(`[data-value="${value}"]`)); // Set currentFocus to the index of the item that matches the specified value
}

/**
 * Updates the ayah dropdown based on the current surah
 */
function updateAyahDropdown() {
  // Determine the maximum number of ayahs for the current surah.
  // If currentSurah is not set or ayahCounts[currentSurah] is undefined, default to 1.
  var maxAyah = ayahCounts[currentSurah] || 1;
  initializeQDropdown("ayah", 1, maxAyah); // Initialize the ayah dropdown with values from 1 to maxAyah.
  $("#ayahValue").text("1"); // Set the displayed value of the ayah to "1", indicating the first ayah.
}

/**
 * Handles navigation when arrow buttons are clicked
 * @param {string} type - The type of navigation (surah, ayah, or juz)
 * @param {string} direction - The direction of navigation ("prev" or "next")
 */
function QnavigateArrow(type, direction) {
  var current, // Variable to hold the current value (surah, ayah, or juz)
    max, // Variable to hold the maximum value for the current type
    min = 1; // Minimum value for navigation, set to 1

  // Determine the current value and maximum based on the type of navigation
  if (type === "surah") {
    current = currentSurah; // Get the current surah
    max = maxSurah; // Get the maximum number of surahs
  } else if (type === "ayah") {
    current = currentAyah; // Get the current ayah
    max = ayahCounts[currentSurah] || 1; // Get the maximum ayah count for the current surah, default to 1
  } else if (type === "juz") {
    current = currentJuz; // Get the current juz
    max = maxJuz; // Get the maximum number of juz
  }

  // Handle navigation in the "prev" direction
  if (direction === "prev") {
    current--; // Decrement the current value
    if (current < min) {
      // Check if current is less than the minimum
      if (type === "ayah") {
        currentSurah--; // Move to the previous surah
        if (currentSurah < 1) currentSurah = maxSurah; // Wrap around to the last surah if below 1
        updateAyahDropdown(); // Update the ayah dropdown for the new surah
        current = ayahCounts[currentSurah] || 1; // Reset current to the last ayah of the new surah
      } else {
        current = max; // If not ayah, wrap around to the maximum value
      }
    }
  } else {
    // Handle navigation in the "next" direction
    current++; // Increment the current value
    if (current > max) {
      // Check if current exceeds the maximum
      if (type === "ayah") {
        currentSurah++; // Move to the next surah
        if (currentSurah > maxSurah) currentSurah = 1; // Wrap around to the first surah if above max
        updateAyahDropdown(); // Update the ayah dropdown for the new surah
        current = 1; // Reset current to the first ayah of the new surah
      } else {
        current = min; // If not ayah, wrap around to the minimum value
      }
    }
  }

  // Update the displayed value for the current type
  updateQValue(type, current);
}

/**
 * Navigates to the selected verse in the DataTable
 * This function finds the row corresponding to the current Surah and Ayah,
 * scrolls to it, and updates the navigation boxes.
 */
function navigateToVerse() {
  // Find the target row(s) based on the current Juz, Surah, and Ayah
  var targetRow = table
    .rows() // Get all rows in the DataTable
    .indexes() // Get the indexes of those rows
    .filter(function (value, index) {
      var rowData = table.row(value).data(); // Get the data for the current row
      // Check if currentJuz is set and matches the row's Juz
      if (currentJuz !== null) {
        return parseInt(rowData[0]) == currentJuz; // Compare Juz
      }
      // If currentSurah and currentAyah are set, check for a match
      else if (currentSurah !== null && currentAyah !== null) {
        return (
          parseInt(rowData[1]) == currentSurah && // Compare Surah
          parseInt(rowData[2]) == currentAyah // Compare Ayah
        );
      }
      return false; // Return false if no conditions are met
    });

  // If a target row is found
  if (targetRow.length > 0) {
    var pageInfo = table.page.info(); // Get pagination info
    var targetPage = Math.floor(targetRow[0] / pageInfo.length); // Calculate the target page

    // Navigate to the target page without resetting the current state
    table.page(targetPage).draw(false);

    // Get the row node for the target row
    var rowNode = table.row(targetRow[0]).node();
    if (rowNode) {
      // Scroll the row into view smoothly
      rowNode.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Update the navigation boxes with the data of the target row
    updateAllQValues(table.row(targetRow[0]).data());
  }
}

/**
 * Updates all navigation box values based on the given row data
 * @param {Array} rowData - The data of the current row
 */
function updateAllQValues(rowData) {
  // Parse the current Juz from the row data and convert it to an integer
  currentJuz = parseInt(rowData[0]);

  // Parse the current Surah from the row data and convert it to an integer
  currentSurah = parseInt(rowData[1]);

  // Parse the current Ayah from the row data and convert it to an integer
  currentAyah = parseInt(rowData[2]);

  // Update the displayed value for the Juz navigation box
  $("#juzValue").text(currentJuz);

  // Update the displayed value for the Surah navigation box, including the Arabic name
  $("#surahValue").text(
    `${currentSurah} ${arabicSurahNames[currentSurah]}` // Display Surah number and its Arabic name
  );

  // Update the displayed value for the Ayah navigation box
  $("#ayahValue").text(currentAyah);
}

// Configuration for the DataTable
// Initialize the current Surah to the first Surah (1)
let currentSurah = 1;

// Initialize the current Ayah to the first Ayah (1)
let currentAyah = 1;

// Initialize the current Juz to the first Juz (1)
let currentJuz = 1;

// Define the maximum number of Surahs in the Quran
const maxSurah = 114;

// Define the maximum number of Juz in the Quran
const maxJuz = 30;

// Initialize dropdowns after table initialization
function initializeNavigationBoxes() {
  // Initialize the Surah dropdown with values from 1 to maxSurah
  initializeQDropdown("surah", 1, maxSurah);

  // Initialize the Juz dropdown with values from 1 to maxJuz
  initializeQDropdown("juz", 1, maxJuz);

  // Update the Ayah dropdown based on the current Surah
  updateAyahDropdown();

  // Event listener for clicks on navigation box values
  $(".q-nav-value").on("click", function () {
    // Get the type of navigation from the clicked element's ID
    var type = $(this).attr("id").replace("Value", "");
    // Toggle the dropdown for the selected navigation type
    QtoggleDropdown(type);
  });

  // Event listener for clicks on navigation arrows
  $(".q-nav-arrow").on("click", function () {
    // Get the type and direction of navigation from the clicked element's data attributes
    var type = $(this).data("type");
    var direction = $(this).data("direction");
    // Navigate to the previous or next Surah/Ayah/Juz based on the direction
    QnavigateArrow(type, direction);
  });

  // Event listener for clicks outside of navigation boxes
  $(document).on("click", function (event) {
    // If the click is outside of any navigation box, hide all dropdowns
    if (!$(event.target).closest(".q-nav-box").length) {
      $(".q-dropdown").hide();
    }
  });
}

let currentFocus = -1; // Initialize the current focus index for dropdown item navigation

/**
 * Initializes the dropdown for the specified type with a range of values
 * @param {string} type - The type of dropdown (e.g., "surah" or "ayah")
 * @param {number} min - The minimum value for the dropdown
 * @param {number} max - The maximum value for the dropdown
 */
function initializeQDropdown(type, min, max) {
  var dropdown = $("#" + type + "Dropdown"); // Select the dropdown element based on the type
  dropdown.empty(); // Clear any existing items in the dropdown

  // Append a search input field to the dropdown for filtering items
  dropdown.append(
    '<input type="text" class="q-dropdown-search" placeholder="ލިޔޭ ނޫނީ ތިރިއަށް ފިތާ">'
  );

  // If the dropdown type is "ayah", set the max to the count of ayahs for the current surah
  if (type === "ayah") {
    max = ayahCounts[currentSurah]; // Use the ayah count for the current surah
  }

  // Populate the dropdown with items from min to max
  for (var i = min; i <= max; i++) {
    var displayText = i; // Default display text is the number itself
    // If the dropdown type is "surah", include names in different languages
    if (type === "surah") {
      displayText = `${i} ${arabicSurahNames[i]} ${dhivehiSurahNames[i]} ${englishSurahNames[i]}`;
    }
    // Append each item to the dropdown
    dropdown.append(
      '<div class="q-dropdown-item" data-value="' +
        i +
        '">' +
        displayText +
        "</div>"
    );
  }

  // Event listener for clicks on dropdown items
  dropdown.on("click", ".q-dropdown-item", function () {
    var value = $(this).data("value"); // Get the value of the clicked item
    updateQValue(type, value); // Update the corresponding value based on the type
    dropdown.hide(); // Hide the dropdown after selection
  });

  // Event listener for input in the search field
  dropdown.find(".q-dropdown-search").on("input", function () {
    var searchValue = removeDiacritics($(this).val().toLowerCase()); // Get the search input and normalize it
    dropdown.find(".q-dropdown-item").each(function () {
      var itemText = removeDiacritics($(this).text().toLowerCase()); // Normalize item text
      // Show or hide items based on whether they include the search value
      $(this).toggle(itemText.includes(searchValue));
    });
    currentFocus = -1; // Reset focus when search input changes
  });

  // Event listener for keydown events on the search input
  dropdown.find(".q-dropdown-search").on("keydown", function (e) {
    var items = dropdown.find(".q-dropdown-item:visible"); // Get visible items in the dropdown
    if (e.keyCode == 40) {
      // Down arrow key
      e.preventDefault(); // Prevent default scrolling behavior
      currentFocus = currentFocus < items.length - 1 ? currentFocus + 1 : 0; // Move focus down
      addActive(items); // Highlight the currently focused item
    } else if (e.keyCode == 38) {
      // Up arrow key
      e.preventDefault(); // Prevent default scrolling behavior
      currentFocus = currentFocus > 0 ? currentFocus - 1 : items.length - 1; // Move focus up
      addActive(items); // Highlight the currently focused item
    } else if (e.keyCode == 13) {
      // Enter key
      e.preventDefault(); // Prevent default form submission
      if (currentFocus > -1) {
        // If an item is focused
        if (items.length) items[currentFocus].click(); // Trigger click on the focused item
      }
    }
  });
}

/**
 * Adds the "active" class to the currently focused item in the dropdown
 * and scrolls it into view.
 * @param {Array} items - The list of dropdown items
 */
function addActive(items) {
  if (!items) return false; // If no items are provided, exit the function
  removeActive(items); // Remove the "active" class from all items
  $(items[currentFocus]).addClass("active"); // Add the "active" class to the currently focused item
  // Scroll the currently focused item into view
  $(items[currentFocus])[0].scrollIntoView({
    block: "nearest", // Align the item to the nearest edge of the viewport
    inline: "nearest", // Align the item to the nearest edge horizontally
  });
}

/**
 * Removes the "active" class from all items in the dropdown.
 * @param {Array} items - The list of dropdown items
 */
function removeActive(items) {
  items.removeClass("active"); // Remove the "active" class from all items
}

/**
 * Helper function to remove diacritics from a given text.
 * @param {string} text - The input text from which diacritics will be removed
 * @returns {string} - The text without diacritics
 */
function removeDiacritics(text) {
  return text.replace(/[َُِّْٰۡۚٓـًٌٍّٔ]/g, ""); // Use a regular expression to remove diacritic characters
}

//let table;
let additionalColumns = []; // Tracks which additional translations are currently visible

const baseJsonUrl = "../js/json/"; // Base URL for all JSON files

// Base columns that are always present in the table
// These represent the core Quran data structure
const baseColumns = [
  { data: "0", title: "ޖުޒް", visible: false },
  { data: "1", title: "ސޫރަތް", visible: false },
  { data: "2", title: "އާޔަތް #", visible: false },
  { data: "3", title: "ބިސްމި", visible: true },
  {
    data: "4",
    title: "އާޔަތް (އިމްލާއީ)",
    visible: true,
    /* add brackets to ayah */
    //data = "﴿" + data + "﴾";
    render: function (data, type, row) {
      data = data.replace(/\s([\u0660-\u0669]+)/, "\u00a0$1");
      // combines ayah and number columns together
      data = "﴿" + data + " " + row[2] + "﴾";
      // makes ayah numbers arabic
      data = replaceDigitsWithArabic(data);
      return data;
    },
  },
  {
    data: "5",
    title: "ރަސްމު އުޘްމާނީ",
    visible: false,
    render: function (data, type, row) {
      // this places a non break character before the numbers, also replaces a space before the numbers
      data = data.replace(/\s([\u0660-\u0669]+)/, "\u00a0$1");
      /* reverse brackets because thats how the font file needs it */
      // combines ayah and number columns together
      data = "﴿" + data + " " + row[2] + "﴾";
      //data = "﴿" + data + "﴾";
      // makes ayah numbers arabic
      data = replaceDigitsWithArabic(data);
      return data;
    },
  },
];

// Configuration for additional translations that can be toggled
// name: filename without extension
// column: which column index in the JSON contains the translation text
// title: display name for the translation
// This allows for dynamic loading of different translations or tafsirs
const additionalJsons = [
  { name: "quranHadithmv", column: 0, title: "ޙަދީޘްއެމްވީ ތަރުޖަމާ:" },
  { name: "quranRasmee", column: 0, title: "ރަސްމީ ތަރުޖަމާ:" },
  { name: "quranBakurube", column: 1, title: "ބަކުރުބެ ތަރުޖަމާ:" },
  { name: "quranJaufar", column: 0, title: "ޖަޢުފަރު ތަފްސީރު:" },
  { name: "quranSoabuni", column: 1, title: "ޞ ތަފްސީރު:" },
  { name: "quranMukhtasar", column: 0, title: "مختصر التفسير:" },
  { name: "quranMuyassar", column: 0, title: "التفسير الميسر:" },
];

// The translation that will be shown by default when the page loads
//const defaultAdditionalJson = "quranHadithmv";
const defaultAdditionalJson = currentFileName;

/**
 * Creates all column definitions for the DataTable, including both base columns
 * and additional translation columns (which start hidden)
 * @returns {Array} Array of column definition objects for DataTables
 */
function getAllColumnDefinitions() {
  // Create column definitions for additional translations
  const additionalColumnDefs = additionalJsons.flatMap((json) => [
    // Name column - shows the translation name in bold

    {
      title: `<strong>${json.title}</strong>`,
      data: null,
      name: `${json.title}:name`,
      visible: false,
      render: function () {
        return `<strong>${json.title}</strong>`;
      },
    },

    // Data column - shows the actual translation text
    {
      //title: json.title,
      title: json.title.replace(/:/g, "").trim(), // removes colon from column title columns
      data: null,
      name: json.title,
      visible: false,
      render: function (data, type, row) {
        if (row[json.title]) {
          return row[json.title][json.column];
        }
        return "Loading...";
      },
    },
  ]);

  // Combine base columns with additional columns
  // This allows for a flexible table structure that can accommodate various translations
  return [...baseColumns, ...additionalColumnDefs];
}

//
//
//

/* !!!
 *
 * QURAN TRANSLATION CHECKBOX LIST FUNCTIONS
 * *
 */

/**
 * Toggles visibility of a translation column and loads its data if needed
 * This function handles the dynamic loading and display of additional translations
 * @param {string} jsonName - The name of the translation to toggle
 */
function toggleTranslation(jsonName) {
  // Find the index of the translation in the additionalColumns array
  const index = additionalColumns.indexOf(jsonName);

  // Get information about the translation from the additionalJsons array
  const jsonInfo = additionalJsons.find((j) => j.name === jsonName);

  // Get the length of the base columns
  const baseColumnsLength = baseColumns.length;

  // Find the index of the translation in the additionalJsons array
  const jsonIndex = additionalJsons.findIndex((j) => j.name === jsonName);

  // Calculate column indices (each translation has two columns - name and data)
  const columnIndex = baseColumnsLength + jsonIndex * 2;

  if (index > -1) {
    // Remove column if translation is currently shown
    additionalColumns.splice(index, 1); // Remove the translation from the array
    table.column(columnIndex).visible(false); // Hide the name column for the translation
    table.column(columnIndex + 1).visible(false); // Hide the data column for the translation
  } else {
    // Add column if translation is currently hidden
    additionalColumns.push(jsonName); // Add the translation to the array

    // Asynchronously load the translation JSON data
    $.ajax({
      url: `${baseJsonUrl}${jsonName}.json`, // Construct the URL for the translation JSON
      dataType: "json", // Specify the data type expected from the server
      success: function (data) {
        // Merge new translation data with existing data
        const currentData = table.data().toArray(); // Get the current data in the table

        // Update each row with the new translation data
        currentData.forEach((row, idx) => {
          row[jsonInfo.title] = data[idx]; // Add the translation data to the corresponding row
        });

        // Update the table with merged data and show the new columns
        table.clear(); // Clear the existing table data
        table.rows.add(currentData); // Add the updated data to the table

        // Show the translation columns
        table.column(columnIndex).visible(true); // Show the name column for the translation
        table.column(columnIndex + 1).visible(true); // Show the data column for the translation

        // Redraw the table to show changes
        table.draw(); // Refresh the table to reflect the new data
      },
      error: function (xhr, status, error) {
        console.error("Error loading translation:", error); // Log any errors that occur during the AJAX request
      },
    });
  }
}

/**
 * Shows all available translations
 */
function showAllTranslations() {
  // Iterate over each translation configuration in the additionalJsons array
  additionalJsons.forEach((json) => {
    // Check if the translation is not already included in the additionalColumns array
    if (!additionalColumns.includes(json.name)) {
      // If the translation is not currently shown, toggle its visibility
      toggleTranslation(json.name); // Call the toggleTranslation function to show the translation
    }
  });
}

/**
 * Initializes the translation selector UI with checkboxes
 * This function sets up the user interface for toggling different translations
 */

let translationStates = {}; // Object to track the current state of each translation checkbox
let initialTranslationStates = {}; // Object to store the initial state of each translation checkbox

function initializeTranslationSelector() {
  // Get references to the UI elements for the translation selector
  const translationList = document.getElementById("translationList"); // Container for translation items
  const toggleBtn = document.getElementById("translationToggleBtn"); // Button to toggle the dropdown
  const dropdown = document.getElementById("translationDropdown"); // Dropdown for translation options
  const applyBtn = document.getElementById("applyTranslations"); // Button to apply selected translations
  const resetBtn = document.getElementById("resetTranslations"); // Button to reset translations to initial state
  const showAllBtn = document.getElementById("showAllTranslations"); // Button to show all translations

  // Populate translation list with base columns
  baseColumns.forEach((column, index) => {
    addTranslationItem(
      translationList,
      column.title, // Title of the column
      index, // Index of the column
      column.visible // Initial visibility state of the column
    );
  });

  // Populate translation list with additional translations
  additionalJsons.forEach((json) => {
    addTranslationItem(
      translationList,
      json.title.replace(/:/g, "").trim(), // Clean up the title by removing colons and trimming whitespace
      json.name, // Name of the translation
      json.name === defaultAdditionalJson // Check if this is the default translation to set initial checked state
    );
  });

  // Store initial states of translation checkboxes
  Object.assign(initialTranslationStates, translationStates);

  // Event listener for toggling the dropdown visibility
  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to the document
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block"; // Toggle dropdown visibility
  });

  // Close dropdown and apply changes when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".translation-selector")) {
      // Check if the click is outside the translation selector
      if (dropdown.style.display === "block") {
        applyTranslations(); // Apply selected translations if dropdown is open
      }
      dropdown.style.display = "none"; // Hide the dropdown
    }
  });

  // Apply translations when the apply button is clicked
  applyBtn.addEventListener("click", () => {
    applyTranslations(); // Call function to apply translations
    dropdown.style.display = "none"; // Hide the dropdown after applying
  });

  // Reset translations to their initial state when the reset button is clicked
  resetBtn.addEventListener("click", () => {
    resetTranslations(); // Call function to reset translations
  });

  // Show all available translations when the show all button is clicked
  showAllBtn.addEventListener("click", () => {
    showAllTranslations(); // Call function to display all translations
  });
}

/**
 * Adds a translation item to the selector list
 * @param {HTMLElement} list - The container element for the translation items
 * @param {string} title - The display title for the translation
 * @param {string|number} value - The value associated with the translation
 * @param {boolean} checked - Whether the translation should be initially checked
 */
function addTranslationItem(list, title, value, checked) {
  // Create a new div element to represent the translation item
  const item = document.createElement("div");
  item.className = "translation-item"; // Set the class name for styling

  // Set the inner HTML of the item, including a checkbox and a label
  item.innerHTML = `
        <input type="checkbox" id="trans-${value}" value="${value}" ${
    checked ? "checked" : ""
  }>
        <label for="trans-${value}">${title}</label>
    `;

  // Append the newly created item to the provided list container
  list.appendChild(item);

  // Update the translationStates object to track the current checked state of the translation
  translationStates[value] = checked;

  // Store the initial checked state of the translation for potential resets
  initialTranslationStates[value] = checked;
}

/**
 * Resets translations to their initial state
 * This function is called when the user wants to revert all changes
 */
function resetTranslations() {
  // Select all checkbox elements within the translation list
  const checkboxes = document.querySelectorAll(
    '#translationList input[type="checkbox"]'
  );

  // Iterate over each checkbox to reset its state
  checkboxes.forEach((checkbox) => {
    const value = checkbox.value; // Get the value associated with the checkbox
    // Set the checkbox's checked state to its initial state
    checkbox.checked = initialTranslationStates[value];
    // Update the translationStates object to reflect the initial state
    translationStates[value] = initialTranslationStates[value];
  });

  // Apply the reset state to update the translations displayed
  applyTranslations();
}

/**
 * Applies the current state of translation checkboxes to the table
 * This function updates the table based on user selections
 */
function applyTranslations() {
  // Select all checkbox elements within the translation list
  const checkboxes = document.querySelectorAll(
    '#translationList input[type="checkbox"]'
  );

  // Iterate over each checkbox to apply its state
  checkboxes.forEach((checkbox) => {
    const value = checkbox.value; // Get the value associated with the checkbox
    const isChecked = checkbox.checked; // Get the checked state of the checkbox

    // Always apply the change, regardless of previous state
    translationStates[value] = isChecked; // Update the translationStates object with the current state

    if (isNaN(value)) {
      // If the value is not a number, it indicates an additional column
      if (isChecked && !additionalColumns.includes(value)) {
        // If the checkbox is checked and the column is not already added, toggle it on
        toggleTranslation(value);
      } else if (!isChecked && additionalColumns.includes(value)) {
        // If the checkbox is unchecked and the column is currently added, toggle it off
        toggleTranslation(value);
      }
    } else {
      // If the value is a number, it indicates a base column
      toggleBaseColumn(parseInt(value)); // Toggle the visibility of the base column based on its checked state
    }
  });
}

/**
 * Toggles visibility of a base column
 * @param {number} index - The index of the base column to toggle
 */
function toggleBaseColumn(index) {
  // Get the column object for the specified index from the DataTable
  const column = table.column(index);

  // Set the visibility of the column based on the current state in translationStates
  column.visible(translationStates[index]);

  // Update the visibility property of the corresponding base column
  baseColumns[index].visible = column.visible(); // Store the current visibility state
}
