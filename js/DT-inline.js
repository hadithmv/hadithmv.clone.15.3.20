/* === === ===
--- REGULAR PAGE CODE ---
=== === === */

//

/* === === ===
--- SET MOBILE WIDTH CODE ---
=== === === */

var isMobile = window.innerWidth <= 800; // Boolean to check if the current view is mobile

/* --- */

/* === === ===
FILI AND FOOTNOTE REMOVE CODE
=== === === */

// define reusable functions for the regular expressions used in the render method. Replace the inline regex replacements with calls to these functions.
function removeThashkeel(data) {
  return data.replace(/[َ|ً|ُ|ٌ|ِ|ٍ|ْ|ّ|~|⁽|⁾|¹²³⁴⁵⁶⁷⁸⁹⁰]/g, "");
}

function removeSmallishFootnotes(data) {
  return data.replace(/[⁽|⁾|¹²³⁴⁵⁶⁷⁸⁹⁰]/g, "");
}
//

/* google-closure-compiler --charset=UTF-8 --js=hmv-script.js --js_output_file=hmv-script.min.js */

/* copyURL BUTTON */
// https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard/48542290#48542290
// https://stackoverflow.com/questions/10568815/replace-all-text-before-a-certain-point
function copyURLToClipButton() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = window.location.href;

  // Replace text preceding "/books/"
  dummy.value = dummy.value
    .replace(/^.*\/books\//, "https://hadithmv.github.io/books/")
    .replace(/^.*\/uc\//, "https://hadithmv.github.io/books/");

  // Replace text preceding "/uc/"

  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  // change copy page url button text
  var button = document.getElementById("copyPageLink");
  var originalText = button.innerHTML;
  var originalStyle = window.getComputedStyle(button);

  function changeButtonText(newText, duration) {
    var originalWidth = button.offsetWidth;
    //var originalTextAlign = originalStyle.textAlign;

    button.style.width = originalWidth + "px";
    button.style.textAlign = "center"; // originalTextAlign
    button.innerHTML = newText;

    setTimeout(function () {
      button.innerHTML = originalText;
      button.style.width = "";
      //button.style.textAlign = "";
    }, duration);
  }

  // Usage example:
  changeButtonText("📋 ކޮޕީ ވެއްޖެ", 1000); // ✓
}

//

// SCROLL TO TOP

function scrollUpTop() {
  // scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// SHOW OR HIDE AYAT FILI

function toggleQuranFili() {
  // https://datatables.net/forums/discussion/61291/how-to-implement-the-data-table-column-visibility-and-order-dynamically

  var isVisible = $(".dataTable").DataTable().column(5).visible();
  $(".dataTable").DataTable().column(5).visible(!isVisible);

  var isVisible = $(".dataTable").DataTable().column(6).visible();
  $(".dataTable").DataTable().column(6).visible(!isVisible);
}

// SHOW OR HIDE SURAH NAME

function toggleSurahName() {
  var isVisible = $(".dataTable").DataTable().column(2).visible();
  $(".dataTable").DataTable().column(2).visible(!isVisible);

  //

  var button = document.getElementById("toggleSurahButton");
  if (button.innerHTML.trim() === "&nbsp; ސޫރަތުގެ ނަތް ފޮރުވާ &nbsp;") {
    button.innerHTML = "&nbsp; ސޫރަތުގެ ނަތް ދައްކާ &nbsp;";
  } else {
    button.innerHTML = "&nbsp; ސޫރަތުގެ ނަތް ފޮރުވާ &nbsp;";
  }
}

// SWITCH BETWEEN IMLAI AND UTHMANI TEXT FOR AYAT

function uthmaniImlai() {
  var isVisible = $(".dataTable").DataTable().column(5).visible();
  $(".dataTable").DataTable().column(5).visible(!isVisible);

  var isVisible = $(".dataTable").DataTable().column(7).visible();
  $(".dataTable").DataTable().column(7).visible(!isVisible);

  //

  var button = document.getElementById("toggleUthmaniImlai");
  if (button.innerHTML.trim() === "&nbsp; ރަސްމު އުޘްމާނީއަށް &nbsp;") {
    button.innerHTML = "&nbsp; ރަސްމު އިމްލާއީއަށް &nbsp;";
  } else {
    button.innerHTML = "&nbsp; ރަސްމު އުޘްމާނީއަށް &nbsp;";
  }
}

// LOAD UTHMANI FONT FOR QURAN ONLY ON BUTTON CLICK

// Dynamically Load And Apply Fonts With JavaScript
// https://awik.io/dynamically-load-apply-fonts-javascript/
// Your font goes here
const fontVar = new FontFace("mergedFont", "url(../font/hafs-400.woff)");
// Function which loads the font and applies it
function loadRasmFont() {
  //console.log("Loading font...");
  fontVar
    .load()
    .then(function (loadedFont) {
      document.fonts.add(loadedFont);
      //html.style.fontFamily = '"mergedFont"';
    })
    .catch(function (error) {
      console.log("Failed to load font: " + error);
    });
}

// CHANGE FILI BUTTON STRING

function filiString() {
  var button = document.getElementById("toggleFiliButton");
  if (button.innerHTML.trim() === "&nbsp; ފިލިތައް ފޮރުވާ &nbsp;") {
    button.innerHTML = "&nbsp; ފިލިތައް ދައްކާ &nbsp;";
  } else {
    button.innerHTML = "&nbsp; ފިލިތައް ފޮރުވާ &nbsp;";
  }
}

// COMBINED QURAN AND RADHEEF CHANGE BOOK
// Function to change the book in the URL
function changeBook(newBook) {
  let currentUrl = window.location.toString();
  let bookType, bookRegex, searchString;

  if (newBook.startsWith("quran")) {
    bookType = "quran";
    searchString = "quran";
    bookRegex =
      /quranHadithmv|quranBakurube|quranJaufar|quranSoabuni|quranRasmee|quranUshru/g;
  } else if (newBook.startsWith("radheef")) {
    bookType = "radheef";
    searchString = "radheef";
    bookRegex =
      /radheefAll|radheefRasmee|radheefEegaal|radheefManiku|radheefNanfoiy/g;
  } else {
    console.error("Invalid book type");
    return;
  }

  if (currentUrl.includes(searchString) || currentUrl.includes("quranUshru")) {
    // Handle transition from quranUshru to other books
    if (currentUrl.includes("quranUshru") && newBook !== "quranUshru") {
      let newUrl = currentUrl.replace("quranUshru", newBook).split("#")[0];
      window.location = newUrl.endsWith(".html") ? newUrl : newUrl + ".html";
    } else {
      window.location = currentUrl
        .replace(bookRegex, newBook)
        .replace(/\:v.*$/, "");
    }
  } else {
    window.location =
      window.location.origin +
      window.location.pathname.replace(/[^\/]*$/, newBook + ".html");
  }
}

// OLD SEPARATE Q AND R CODE:
// QURAN CHANGE BOOK
/*function changeBkQuran(newBook) {
  let currentUrl = window.location.toString();
  if (currentUrl.includes("quran")) {
    window.location = currentUrl
      .replace(
        /quranHadithmv|quranBakurube|quranJaufar|quranSoabuni|quranRasmee/g,
        newBook
      )
      .replace(/\:v.*$/, "");
  } else {
    window.location =
      window.location.origin +
      window.location.pathname.replace(/[^\/]*$/, newBook + ".html");
  }
}

// Radheef CHANGE BOOK
// Change URL to another book while preserving query terms if "radheef" is in the initial URL
function changeBkRadheef(newBook) {
  // Get the current URL as a string
  let currentUrl = window.location.toString();

  // Check if the current URL contains the string "radheef"
  if (currentUrl.includes("radheef")) {
    // If "radheef" is present, replace the current book name with the new book name
    // and remove any part of the URL that comes after ":v" (e.g., ":vf1")
    window.location = currentUrl
      .replace(
        /radheefAll|radheefRasmee|radheefEegaal|radheefManiku|radheefNanfoiy/g,
        newBook
      )
      .replace(/\:v.*$/, "");
  } else {
    // If "radheef" is not present, change the URL to the new book
    // without preserving any query or hash parameters
    window.location =
      window.location.origin +
      window.location.pathname.replace(/[^\/]*$/, newBook + ".html");
  }
}*/

/* OLDER Q CODE
function changeBookQuran(newBook) {
  window.location = window.location
    .toString()
    .replace(
      /quranUshru|quranHadithmv|quranBakurube|quranJaufar|quranSoabuni|quranRasmee|quranMuyassarGhareeb|quranMukhtasar|quranMuyassar|quranSadi|quranBetaqat|quranQiraaath/g,
      newBook
    )
    .replace(/\:v.*$/, "");
}*/
/* OLDER R CODE
// change url to change to another book while preserving query terms
function changeBkRadheef(newBook) {
  window.location = window.location
    .toString()
    .replace(
      /radheefAll|radheefRasmee|radheefEegaal|radheefManiku|radheefNanfoiy/g,
      newBook
    )
    .replace(/\:v.*$/, "");
}*/

//

// dont really need this in books right now, it was only meant for editor or notes content that didnt go back a page after having scrolled down or something
/* https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html/60994204#60994204
  function scrollToTopFully() {
    history.scrollRestoration = "manual";
    window.addEventListener("beforeunload", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  
  // scrapped below this in favor of inline onclick function, prompt:
  // write an inline js onclick function, to reload the window, upto and including ".html" in the url, removing the rest of the url that comes after that
  
  // HARD RELOAD BUTTON - doesnt work for some reason
  /*function reloadUpToHtml() {
    // Get the current URL
    var currentUrl = window.location.href;
    // Find the index of ".html" in the URL
    var htmlIndex = currentUrl.indexOf(".html");
    // If ".html" is found, reload the page up to that point
    //if (htmlIndex !== -1) {
    var newUrl = currentUrl.substring(0, htmlIndex + 5); // Add 5 to include ".html"
    window.location.href = newUrl;
    //} else {
    // ".html" not found, simply reload the page
    //location.reload();
    //}
  }-*
  
  
  /* not using below code anymore, and changed above code using cgpt cuz it didnt work
  // same code above is below triggered on keypress
  
  // http://gcctech.org/csc/javascript/javascript_keycodes.htm
  // https://melwinalm.medium.com/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
  // https://stackoverflow.com/questions/31392863/load-external-javascript-on-desktop-only/31392945#31392945
  if (window.innerWidth > 600) {
    //
    document.onkeyup = function (e) {
      if (e.shiftKey && e.which == 76) {
        // 76 is letter L
        //alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location;
        // added line below
        dummy.value = dummy.value.replace(/^.+hadithmv\./, "https://hadithmv.");
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
    };
    //
  }
  */

// DATE UPDATE SCRIPT?

/*<script>
  window.ga =
    window.ga ||
    function () {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  ga("create", "UA-112777351-1", "auto");
  ga("send", "pageview");
  </script>*/

//

// DESKTOP ONLY KEYBOARD NAV HELP ALERT

/*function myHelp() {
    alert(
      "Keyboard Controls: \n\n [Tab] =Tab Navigation \n [Arrow Keys] = Keyboard Navigation \n [Shift + s] = Show columns \n [Shift + c] = Copy"
    );
  } */
/* \n [Shift + x] = Excel \n [Shift + v] = Csv \n [Shift + p] = Print' */

//////////////////////////////////////

//////////////////////////////////////

//
/* === === ===
 DT CUSTOM JS BELOW
=== === === */
//

//
var table; // Variable to store the DataTable instance
//

// CUSTOM columnDefs CONFIGURATION
var columnDefsconfig = [
  // settings for all book tables
  {
    targets: "_all",
    // hides panes for all other columns
    searchPanes: {
      show: false,
    },
    /*},
  {
    targets: "_all",*/
    render: function (data, type, row) {
      // if \r\n|\n|\r occurs more than once, i dont want <br class="dtBr"> to occure more than once
      return data.replace(/(\r\n|\n|\r)+/g, '\t<br class="dtBr">');
      //return data.replace(/\r\n|\n|\r/g, '\t<br class="dtBr">');
      // return data.replace(/\r\n|\n|\r/g, '\t<br class="dtBr">');
      // return data.replace(/\r\n|\n|\r/g, "\t<br><br>");
      //return data.replace(/\r\n|\n|\r/g, "\t<p><p>");
    }, // for some reason, without the \n replaced above, the single new lines in between same language paragraphs show in console as a single space, and therefore clipboard cannot be customized to show it
    // added space before br, otherwise clipboard copy export has no space
    // leave off applying '<br class="dtBr">' in the divider replacements ـــــــــــــــــــــــــــ in order to have footnotes close together
    // it seems without \t, clipboard copy will not have newlines
  },
];
//

// CUSTOM DT CONFIGURATION
var DTconfig = {
  // can enable this to use globally via spread, but need to disable it if im going to do things like merging multiple js arrays
  //data: data,

  // keytable option is set to !isMobile, which means that it will be true if the user is not on a mobile device (i.e., isMobile is false), and false if the user is on a mobile device (i.e., isMobile is true).
  keys: !isMobile,

  // https://www.gyrocode.com/articles/jquery-datatables-save-and-restore-table-state-using-unique-url/
  keepConditions: true,

  // https://datatables.net/reference/option/columns
  // columns: [null, null, null, null, null, null, null],

  //columnDefs: [],

  layout: {
    top: [
      "search",
      "inputPaging",
      "search",

      {
        buttons: [
          {
            extend: "copy",
            key: {
              key: "c",
              altKey: true,
            },

            titleAttr: "copy",
            text: "⧉ ކޮޕީ",

            //messageBottom: "- ޙަދީޘްއެމްވީ -",

            footer: false,
            header: false,

            fieldSeparator: "\n\n",
            exportOptions: {
              columns: ":visible",

              modifier: {
                page: "current",
              },
            },
            customize: function (data) {
              // Replace different newlines with \n
              data = data.replace(/\r\n|\n|\r/g, "\n");
              // Replace tabs with double newlines
              data = data.replace(/\t/g, "\n\n");
              //data = data.replace(/\t/g, "\n");
              // Replace more than 2 consecutive newlines with just 2 newlines
              data = data.replace(/\n{3,}/g, "\n\n");
              //
              // Convert sans-serif digits to regular digits
              // First, replace sans-serif digits with regular digits
              Object.entries(sansSerifDigits).forEach(
                ([regularDigit, sansSerifDigit]) => {
                  const regex = new RegExp(sansSerifDigit, "g");
                  data = data.replace(regex, regularDigit);
                }
              );
              //
              // NOTE that the below newline reduction will reduce even wanted newlines where footnotes come above other content, like in dfk
              // Split the data at the line of dashes
              let parts = data.split("\n\nـــــــــــــــــــــــــــ\n\n");
              if (parts.length > 1) {
                // Replace all double newlines with single newlines in the part after the line of dashes
                parts[1] = parts[1].replace(/\n\n/g, "\n");
                // Ensure there's a double newline at the very end
                parts[1] = parts[1].replace(/\n$/, "\n\n");
                // Join the parts back together with only a single newline after the dashes
                data =
                  parts[0] + "\n\nـــــــــــــــــــــــــــ\n" + parts[1];
              }
              //

              // print to console
              //console.log(JSON.stringify(data));
              return data;
            },
          },
          /*
          // regular expression to find instances of \n- ޙަދީޘްއެމްވީ - that are preceded by a single newline and replace them with a double newline.
              data = data.replace(
                /(?<!\n)\n- ޙަދީޘްއެމްވީ -/g,
                "\n\n- ޙަދީޘްއެމްވީ -"
              );
              //
              */

          {
            extend: "collection",
            text: "⌥ އިތުރު",
            background: false,

            buttons: [
              {
                extend: "colvis",
                key: {
                  key: "s",
                  altKey: true,
                },

                text: "☰ ދައްކާ/ފޮރުވާ",
                background: false,
                postfixButtons: [
                  // https://datatables.net/forums/discussion/36516
                  {
                    extend: "colvisGroup",
                    text: "ހުރިހާ ދައްކާ &nbsp; +",
                    show: ":hidden",
                    titleAttr: "show all",
                  },
                  // https://datatables.net/extensions/buttons/examples/column_visibility/restore.html
                  {
                    extend: "colvisRestore",
                    text: "ރީސެޓްކުރޭ &nbsp; ↺",
                    titleAttr: "reset toggle",
                  },
                ],
              },
              {
                extend: "searchBuilder",
                key: {
                  key: "b",
                  altKey: true,
                },
                titleAttr: "custom search",
              },
              {
                extend: "searchPanes",
                key: {
                  key: "v",
                  altKey: true,
                },

                config: {
                  cascadePanes: true,

                  viewTotal: true,

                  collapse: false,
                  dtOpts: {
                    select: {
                      style: "multi+shift",
                    },
                  },
                },
              },
              {
                extend: "pageLength",
                background: false,
              },
            ],
          },

          /*{
            extend: "pageLength",

            background: false,
          },*/
        ],
      },
    ],

    bottom: ["inputPaging", "info"],
  }, // layout: { END
}; // var DTconfig = { END

// Remove the defaults
DataTable.defaults.layout = {
  topStart: null,
  topEnd: null,
  bottomStart: null,
  bottomEnd: null,
};
//

// DataTable.defaults.layout = { };
// DataTable.defaults.language = { };

//
Object.assign(DataTable.defaults, {
  // https://datatables.net/reference/option/layout

  // cant have input paging here as default config, otherwise shows up inside searchpanes for some reason

  /*
          layout: {
            top: [
             "search",
              "inputPaging",
        ] }        */

  // https://datatables.net/reference/option/language
  // LANGUAGE SET DEFAULTS
  language: {
    emptyTable: "— ނުފެނުނު —",
    info: "_TOTAL_ ގެ ތެރެއިން _START_ އިން _END_ އަށް",
    infoFiltered: "(ޖުމްލަ ބެލުނީ _MAX_)",
    infoEmpty: "— ނުފެނުނު —",
    //lengthMenu: "ބަރި ދައްކާ _MENU_",
    loadingRecords: "ތައްޔާރުވަނީ...",
    search: "",
    searchPlaceholder: 'ސީދާ ލަފްޒު "މިހެން ހޯދާ"، !މިލަފްޒު ނުލާ ހޯދާ',
    zeroRecords: "— ނުފެނުނު —",
    paginate: {
      first: "<< ",
      last: " >>",
      next: " >",
      previous: "< ",
    },
    /*
            paginate: {
              first: "<< ފުރަތަމަ",
              last: "ފަހު >>",
              next: "ކުރިއަށް >",
              previous: "< ފަހަތަށް",
            }, */

    entries: {
      _: "",
      1: "",
    },

    // https://datatables.net/reference/option/buttons.buttons.text
    buttons: {
      // https://datatables.net/reference/button/pageLength
      pageLength: {
        _: "%d ބަރި ދައްކާ",
        "-1": "ހުރިހާ",
      },
      //colvis: "☰ ފޮރުވާ/ދައްކާ",
      // https://datatables.net/reference/button/copyHtml5
      copyTitle: "&nbsp; ކޮޕީ 📋",
      copySuccess: {
        1: "1 ކޮޕީވެއްޖެ",
        _: "%d ކޮޕީވެއްޖެ",
      },
    },
    searchBuilder: {
      button: "🔍 ކަސްޓަމް ސާޗް",
      add: "+ އިތުރުކުރޭ",
      condition: "ޝަރުތު",
      clearAll: "ރީސެޓް",
      //delete: "Delete",
      data: "ބަރި",
      //right: "Right",
      //left: "Left",
      logicAnd: "އަދި &",
      logicOr: "ނޫނީ |",
      title: {
        0: "ސާޗް ޝަރުތުތައް",
        _: "ސާޗް ޝަރުތުތައް (%d)",
      },
      value: "ލިޔުން",
      valueJoiner: "އަދި",
    },
    searchPanes: {
      // https://datatables.net/reference/option/language.searchPanes.collapse
      // looks like i wont need text: "⧩ ފިލްޓާ" with this
      collapse: { 0: "⧩ ބަރި ފިލްޓާ", _: "⧩ ބަރި ފިލްޓާ (%d)" },
      title: {
        _: "%d ފިލްޓާ ކުރެވިފާ",
        0: "0 ފިލްޓާ ކުރެވިފާ",
        1: "1 ފިލްޓާ ކުރެވިފާ",
      },
      count: "{total}",
      countFiltered: "{shown} ({total})",
      emptyMessage: "— ވަކި އެއްޗެއް ނުޖަހާ —",
      clearMessage: "ފިލްޓާތައް ދުއްވާލާ",
    },
  }, // language END
  //

  //
  // https://datatables.net/examples/basic_init/state_save.html
  stateSave: true,
  // currently" above works
  // above seems to break table, use the one below
  //bstateSave: true,
  //
  // https://datatables.net/reference/option/stateDuration
  // default is 2 hours, now set to 1 day
  stateDuration: 86400,
  //
  // https://datatables.net/reference/option/ordering
  ordering: false,
  //
  // https://datatables.net/reference/option/orderClasses
  orderClasses: false,
  //
  // https://datatables.net/reference/option/searchDelay
  searchDelay: 350,
  //
  // https://datatables.net/reference/option/autoWidth
  autoWidth: false,
  //
  //
  // https://datatables.net/blog/2014/search-highlighting#:~:text=DataTables'%20built%20in%20search%20features,what%20they%20are%20looking%20for
  searchHighlight: true,
  // https://datatables.net/blog/2017/search-highlighting-with-markjs
  // mark: true,
  //

  // https://datatables.net/blog/2019/scroll-to-top
  // instead of getting the external file, just have the code directly in here
  // scrollToTop: true,

  //

  //
  lengthMenu: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50],
  /*[
    [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, -1],
    [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, "ހުރިހާ"],
  ],*/
  // this sets the default value on table load. make sure the value is available above too
  displayLength: 1,
  //
  /*buttons: [
    {
      // https://datatables.net/reference/button/copy
      extend: "copy",
      // https://datatables.net/reference/option/buttons.buttons.titleAttr
      titleAttr: "copy",
      text: "⧉ &nbsp; ކޮޕީ",
      //https://datatables.net/reference/api/buttons.exportInfo()
      messageBottom: "- ޙަދީޘްއެމްވީ -", //messageTop: "- ޙަދީޘްއެމްވީ -",
      //title: "" // default: html page title, prev was: "hadithmv.com",
      // https://datatables.net/reference/button/copy
      footer: false, // if not set to false, leaves an empty blank line
      header: false,
      //newline: "\n",
      // fieldBoundary: "\n", // this creates extra blank lines even where footer and header are set to false
      fieldSeparator: "\n\n", // \t
      exportOptions: {
        // https://datatables.net/extensions/buttons/examples/html5/columns.html this on its own selects all data on all pages
        columns: ":visible",
        // https://datatables.net/reference/button/copy this on its own selects even column hidden data
        modifier: {
          page: "current",
        },
        // FOR DESKTOP - https://datatables.net/extensions/buttons/examples/initialisation/keys.html
        key: {
          shiftKey: true,
          key: "c",
        },
      },
      customize: function (data) {
        // <br>
        data = data.replace(/\t/g, "\n"); // \n\n
        console.log(JSON.stringify(data));
        return data; // without this, custom data wont be in clipboard
      },
    },
    // https://datatables.net/reference/button/colvis
    {
      extend: "colvis",
      titleAttr: "toggle columns",
      //text: "☰ ފޮރުވާ/ދައްކާ",
      // https://datatables.net/reference/button/collection
      background: false,
      key: {
        shiftKey: true,
        key: "s",
      },
    },
    // https://datatables.net/extensions/searchbuilder/
    // will not work with dates without another plugin
    {
      extend: "searchBuilder",
      titleAttr: "custom search",
      // wont work here, need to set in language it seems
      //text: "🔍 ކަސްޓަމް ސާރޗް",
      key: {
        shiftKey: true,
        key: "b",
      },
    },
    // https://datatables.net/reference/feature/searchPanes
    {
      extend: "searchPanes",
      //text: "⧩ ފިލްޓާ",
      titleAttr: "filter",
      key: {
        shiftKey: true,
        key: "p",
      },
      config: {
        // https://datatables.net/forums/discussion/comment/216621/#Comment_216621 the viewTotal / viewCount / cascade options in SearchPanes really slow things down, particularly when server-side processing is enabled.

        // https://datatables.net/reference/feature/searchPanes.cascadePanes
        cascadePanes: true,
        // https://datatables.net/reference/feature/searchPanes.viewTotal
        viewTotal: true,
        // https://datatables.net/reference/feature/searchPanes.collapse
        collapse: false,
        //orderable: false,
        // https://datatables.net/extensions/searchpanes/examples/initialisation/speedTest.html
        //columns: [0, 1],
        //controls: false,
        // https://datatables.net/reference/feature/searchPanes.initCollapsed
        //initCollapsed: true,
        // https://datatables.net/reference/feature/searchPanes.order
        // order: [[1, 'desc']]
        //searching: false,
        //paging: true,
        dtOpts: {
          // https://datatables.net/extensions/select/examples/initialisation/multi.html
          select: {
            //style: "multi",
            style: "multi+shift",
          },
        },
      },
    },
  ],*/ // buttons: [ END
  /*columnDefs: [
                  {
                    // https://datatables.net/reference/option/columns.searchPanes.show
                    // force all cols to show searchpanes by default
                    searchPanes: {
                      show: true,
                      //controls: false,
                    },
                    //targets: [0]
                    targets: "_all",
                  },
                ],*/
  //
  // https://datatables.net/examples/basic_init/scroll_y_dynamic.html
  /*paging: false,
                     scrollCollapse: true,
                     scrollY: "50vh",*/
  // also consider https://datatables.net/extensions/scroller/

  // https://datatables.net/examples/basic_init/hidden_columns.html
  /*columnDefs: [
                     {
                         target: 2,
                         visible: false,
                         searchable: false
                     },
                     {
                         target: 3,
                         visible: false
                     }
                 ]*/

  // https://datatables.net/examples/advanced_init/column_render.html
}); // Object.assign(DataTable.defaults, { END
//

// Desktop configuration
/*var desktopConfig = {
          // DESKTOP LAYOUT
          // https://datatables.net/extensions/keytable/
          keys: true,
        }; // const desktopConfig  = { END
        //*/

// Function to initialize or reinitialize the DataTable
// function initializeDataTable() {
// Initialize DataTable with chosen config
//new DataTable("#example", {
table = new DataTable("#tableID", {
  //
  //...config
  ...DTconfig,

  // Add any additional options here

  // Data source for the table //data: dataSet,
  //data: data,
  //

  //
}); // new DataTable("#example", { END

// This ensures that the code runs after the entire DOM has been fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  //
  //
  // Focus on search input for desktop view
  // IF DESKTOP, NOT MOBILE
  if (!isMobile) {
    // https://datatables.net/forums/discussion/comment/124081/#Comment_124081
    $("div.dt-search .dt-input").focus();

    // scrollToTop scroll to top on desktop https://datatables.net/blog/2019/scroll-to-top
    // instead of using the plugin externally, place the code here directly
    // it seems this does the same thing as the mobile version of the scroll
    table.on("page", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /*window.scrollTo({
           top: $(table.table().container()).offset().top,
           behavior: "smooth",*/
      });
      /*setTimeout(function () {
                  $(document).scrollTop($(table.table().container()).offset().top);
                }, 10);*/
    }); // table.on("page", function () { END
    //
    // IF MOBILE
  } else {
    // scroll to top of table row on mobile
    table.on("page", function () {
      //setTimeout(function () {
      // https://datatables.net/forums/discussion/comment/175697/#Comment_175697
      // other code works, but navbar hides the top of tr, so this code calculates the height of navbar and scrolls to where it ends
      /*const trElement = document.querySelector("tbody tr");
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      const trPosition =
        trElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = trPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });*/
      document.querySelector("tbody tr").scrollIntoView({ behavior: "smooth" });
      //console.log("Hello world!");
      // added this to hide navbar if it is at a point where it is shown, otherwise it covers first row. but then again, doing this makes it hard to have the navbar shown when needed like when taking screenshots with title
      //document.querySelector(".navbar").classList.add("navbar-hidden");
      //
      //$(document).scrollTop($(table.table().container()).offset().top);
      //$(table.querySelector("tbody tr")).offset().top; // not quite working as is, but the selecters with scrollintoview does work
      //}, 10);
      // OLD SWIPE CODE PART 1
      // moved this swipe enable up here, and disabled it where it was originally from
      //enableSwipe(); // Enable swipe for mobile view
      //
    }); // table.on("page", function () { END

    // NEW SWIPE CODE
    //
    // Set touch-action: auto for tableID https://hammerjs.github.io/touch-action/
    // https://stackoverflow.com/questions/1601933/how-do-i-stop-a-web-page-from-scrolling-to-the-top-when-a-link-is-clicked-that-t
    //document.getElementById("tableID").style.touchAction = "auto";
    // “I can’t select my text anymore!” https://hammerjs.github.io/tips/
    delete Hammer.defaults.cssProps.userSelect;
    //
    // Hammer(tableID).on("swipeleft", function () {
    Hammer(document.querySelector(".dataTable")).on("swipeleft", function () {
      //event.preventDefault(); // Prevent default behavior
      table.page("previous").draw("page");
    });
    //  Hammer(document.getElementById("tableID")).on("swiperight", function () {
    Hammer(document.querySelector(".dataTable")).on("swiperight", function () {
      //event.preventDefault(); // Prevent default behavior
      table.page("next").draw("page");
    });

    //
  } // if (!isMobile) { } else { END

  //
  // changes <input type="text"> type to search type, so that delete icon appears
  // adds a placeholder to the input
  $(".dt-paging-input input")
    .prop("type", "search")
    .attr("placeholder", "ސަފުހާ");
  // add more width, or make text smaller later?
  //

  // upon double click, jump to the page the double clicked entry was on and select it, with rowshowjs
  $("tbody").on("dblclick", "tr", function () {
    if (table.search() !== "") {
      table.search("").draw();
    }
    table.row(this).draw().show().select().draw(false);
  });
  //

  // https://datatables.net/reference/api/search()
  // removes diacritics and punctuation on key up for search
  $(".dt-search .dt-input").on("keyup click", function () {
    var str = $(this).val();
    str = str.replace(
      /[َ|ً|ُ|ٌ|ِ|ٍ|ْ|ّ|~|.|،|؟|-|ـ|’|”|:|؛|/{|/}|/(|/)|/[|/]|«|»|]/g,
      ""
    );
    $(this).val(str);
    //table.search(str).draw();
    // commenting above out allows searchdelay to work with stringreplace
  });
  //
  //
  //
}); // document.addEventListener("DOMContentLoaded", function () { END

//
//} // function initializeDataTable() { END

// Function to add swipe event listeners
/*function enableSwipe() {
       var tableElement = document.querySelector("#example");
       tableElement.addEventListener("touchstart", handleTouchStart, false);
       tableElement.addEventListener("touchend", handleTouchEnd, false);
     }
     // Function to remove swipe event listeners
     /*function disableSwipe() {
          var tableElement = document.querySelector("#example");
          tableElement.removeEventListener("touchstart", handleTouchStart, false);
          tableElement.removeEventListener("touchend", handleTouchEnd, false);
        }
     // Handle the start of a touch event
     function handleTouchStart(e) {
       touchStartX = e.changedTouches[0].screenX;
     }
     // Handle the end of a touch event
     function handleTouchEnd(e) {
       touchEndX = e.changedTouches[0].screenX;
       handleSwipe();
     }
   
     // Process the swipe gesture
     function handleSwipe() {
       var swipeThreshold = 40; // 50 - Minimum distance traveled to be considered a swipe
       var swipeDistance = touchEndX - touchStartX;
   
       if (swipeDistance > swipeThreshold) {
         table.page("next").draw("page");
       } else if (swipeDistance < -swipeThreshold) {
         // Swipe right: go to previous page
         table.page("previous").draw("page");
         // Swipe left: go to next page
       }
     }*/

// Debounce function to limit the rate at which a function can fire
/*function debounce(func, wait) {
          let timeout;
          return function executedFunction(...args) {
            const later = () => {
              clearTimeout(timeout);
              func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
          };
        }*/

// Handle window resize events
/*function handleResize() {
          var newIsMobile = window.innerWidth <= 800;
          if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            if (isMobile) {
              enableSwipe(); // Enable swipe for mobile view
            } else {
              disableSwipe(); // Disable swipe for desktop view
            }
            //table.destroy(); // Destroy existing table
            //initializeDataTable(); // Reinitialize table with new configuration
          }
        }*/

// Add event listener for window resize, using debounce for performance
//window.addEventListener("resize", debounce(handleResize, 250));

// Initialize the DataTable
//initializeDataTable();
//

//
// BOTTOM
