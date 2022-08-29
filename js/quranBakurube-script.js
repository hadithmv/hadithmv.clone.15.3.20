// global document, window, alert, console, require

// =====================
//      DT JS BELOW
// ====================
$(document).ready(() => {
  // $(document).ready( function () { ===== ===== //
  // from here to var table = $("#fortyNawawi").DataTable({ used to be empty

  $.extend(true, $.fn.dataTable.defaults, {
    // "keys": "true", /* KeyTable extension, old */
  });

  /* js media query on desktop, needs to have quotes */
  if (window.matchMedia("(min-width: 900px)").matches) {
    $.extend(true, $.fn.dataTable.defaults, {
      // desktop, goes rtl --> //'<"dTop"pBfl>rt<"bottom"ip>',
      dom: '<"dTop"pBfl>rtip',
      pageLength: 3, // # rows to display on single page when using pagination
      // lengthMenu: [
      //   [1, 2, 3, 5, 7, 10, 15, 20, -1],
      //   [1, 2, '3 ދައްކާ', 5, 7, 10, 15, 20, 'ހުރިހާ']
      // ], // display range of pages
      keys: { clipboardOrthogonal: "export" }, // strip htmltags off keys copy
      language: {
        paginate: {
          // &nbsp; prevents line breaks
          first: "<<&nbsp;ފުރަތަމަ",
          previous: "<&nbsp;ފަހަތަށް",
          next: "ކުރިއަށް&nbsp;>",
          last: "ފަހު&nbsp;>>",

          info: "_INPUT_", // taken from input plugin, "Page _INPUT_ of _TOTAL_"
        },
      },
    });
  } else {
    /* js media query on mobile, tablet */
    $.extend(true, $.fn.dataTable.defaults, {
      // mobile //'<"mTop"fl> + <"mTop2"p> + <"mTop3"B> rt <"bottom"ip>',
      dom: '<"mTop"fl> + <"mTop2"p> + <"mTop3"B> rtip', // moved to js MQ; dom: '<"dTop"pBfl>rtip',
      pageLength: 1,
      // lengthMenu: [
      //   [1, 2, 3, 5, 7, 10, 15, 20, -1],
      //   ['1 ދައްކާ', 2, 3, 5, 7, 10, 15, 20, 'ހުރިހާ']
      // ], // display range of pages
      language: {
        paginate: {
          // &nbsp; prevents line breaks
          first: "<<",
          previous: "<",
          next: ">",
          last: ">>",

          info: "_INPUT_", // taken from input plugin, "Page _INPUT_ of _TOTAL_"
        },
      },
    });
  } //= =================== end if else

  const table = $("#quranBakurubeTable").DataTable({
    // var table = $("#fortyNawawi").DataTable({
    // NOT DataTable();

    // CHANGE123 JSON
    data: quranBakurube_dataSet, // https://datatables.net/manual/ajax

    columns: [
      {
        data: 0,
        title: "ސޫރަތުގެ ނަން",
        render: function (data, type, row) {
          // removes everything except arabic letters (excludes diacritics), and Mathematical Sans-Serif Digits, and space
          //return data.replace(/[^\u0621-\u064A|\u1d7e2-\u1d7eb|\s]/g, '')
          return data.replace(/[َ|ً|ُ|ٌ|ِ|ٍ|ْ|ّ|~]/g, "");
        },
      },
      {
        data: 1,
        title: "ޖުޒް #",
      },
      {
        data: 2,
        title: "އާޔަތް #",
      },
      {
        data: 3,
        title: "ޤުރްއާން އަރަބިން",
        render: function (data, type, row) {
          data = data.replace(/\s([\u0660-\u0669]+)/, "\u00a0$1");
          data = "﴿" + data + "﴾";
          return data
            .replace(
              "﴿بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
              'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
            )
            .replace(
              "﴿بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
              'بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
            );
        },
      },
      {
        data: 3,
        title: "ޤުރްއާން ފިލިނުޖަހާ",
        render: function (data, type, row) {
          data = data.replace(/\s([\u0660-\u0669]+)/, "\u00a0$1");
          data = "﴿" + data + "﴾";
          // replaces basmalas opening closing brackets non breaks, then kashida, then arabic numbers, then space, then br tag, then makes two spaces into one
          return data
            .replace(
              "﴿بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
              'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
            )
            .replace(
              "﴿بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
              'بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
            )
            .replace(/ـ/g, "")
            .replace(/[^\u0621-\u064A|\s|<br class="br">]/g, "")
            .replace(/\s\s/g, " ");

          //
          /* old code */
          /*
                  /* render: function (data, type, row) {
          // return data.replace(/َ/g, '').replace(/ِ/g, '')
          // below code is shorter, no replace repeat, uses OR instead
          return data.replace(/ّ|َ|ً|ُ|ٌ|ِ|ٍ|ْ|ۡ|ٰ/g, '').replace(/ٱ/g, 'ا')
        } */
        },
      },
      {
        data: 4,
        title: "ލަފްޒީ ތަރުޖަމާ",
      },
      {
        data: 5,
        title: "އިޖްމާލީ މާނަ",
      } /*,
      { // add tafsir asa'di in arabic 
        data: 6,
        title: 'تفسير السعدي*',
        render: function (data, type, row) {
          // return data.replace(/َ/g, '').replace(/ِ/g, '')
          // below code is shorter, no replace repeat, uses OR instead
          return '[تفسير السعدي:] ' + data
        }
      },
      { // add tafsir asa'di in dhivehi 
        data: 7,
        title: 'ތަފްސީރު އައްސަޢްދީ*',
        render: function (data, type, row) {
          // return data.replace(/َ/g, '').replace(/ِ/g, '')
          // below code is shorter, no replace repeat, uses OR instead
          return '[ތަފްސީރު އައްސަޢްދީ:] ' + data
        }
      }*/,
      /* {
        data: 7,
        title: 'ބަކުރުބޭގެ ލަފްޒީ ތަރުޖަމާ*',
        render: function (data, type, row) {
          // return data.replace(/َ/g, '').replace(/ِ/g, '')
          // below code is shorter, no replace repeat, uses OR instead
          return '[ބަކުރުބޭގެ ލަފްޒީ ތަރުޖަމާ:] ' + data
        }
      },
      {
        data: 8,
        title: 'ބަކުރުބޭގެ އިޖްމާލީ މާނަ*',
        render: function (data, type, row) {
          // return data.replace(/َ/g, '').replace(/ِ/g, '')
          // below code is shorter, no replace repeat, uses OR instead
          return '[ބަކުރުބޭގެ އިޖްމާލީ މާނަ:] ' + data
        }
      } */
    ],

    /* https://datatables.net/reference/option/columnDefs */
    columnDefs: [
      //  /* footnote line after bakurube lafzee tharujama */
      {
        targets: 5,
        render: function (data, type, row) {
          data = data + '<br class="Qbr">‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br class="LQbr">';
          return data.replace(/\n/g, '\t<br class="br">'); // without this line breaks not preserved
        },
      },

      /* replace \n newlines from json to <br> in table
      https://datatables.net/forums/discussion/44399/how-can-i-show-multiple-lines-in-cell */
      {
        targets: "_all",
        render: function (data, type, row) {
          return data.replace(/\n/g, '\t<br class="br">');
        }, // added space before br, otherwise clipboard copy export has no space
      }, // later changed that blank space into a \t, so that single new lines could work on clipboard copy

      // classes columns for css in nweb view, but not print.
      // CHANGE123 COL CLASSES AND VISIBILITY/SEARCHABLE

      {
        className: "qCol1", // surah name
        targets: [0],
        visible: true,
        searchable: true,
        searchPanes: {
          show: true,
        },
      },
      {
        className: "qCol2", // juz #
        targets: [1],
        visible: false,
        searchable: true,
        searchPanes: {
          show: true,
        },
      },
      {
        className: "qCol3", // ayah #
        targets: [2],
        visible: false,
        searchable: true,
        searchPanes: {
          show: false,
        },
      },
      {
        className: "qCol4", // quran tanzil
        targets: [3],
        visible: true,
        searchable: false,
        searchPanes: {
          show: false,
        },
      },
      {
        className: "qCol5", // quran plain
        targets: [4],
        visible: false,
        searchable: true,
        searchPanes: {
          show: false,
        },
      },
      {
        className: "qCol7", // dv tarjama
        targets: [5],
        visible: true,
        searchable: true,
        searchPanes: {
          show: false,
        },
      },
      {
        className: "qCol8", // dv tarjama ijmali
        targets: [6],
        visible: true,
        searchable: true,
        searchPanes: {
          show: false,
        },
      } /*
      {
        className: 'qCol9', // tafsir sadi dv
        targets: [8],
        visible: false,
        searchable: false,
        searchPanes: {
          show: false
        }
      },*/,
      /* {
        className: 'qCol8', // bakurube lafzi
        targets: [7],
        visible: false,
        searchable: false,
        searchPanes: {
          show: false
        }
      },
      {
        className: 'qCol9', // bakurube ijmali
        targets: [8],
        visible: false,
        searchable: false,
        searchPanes: {
          show: false
        }
      }, */

      // below strips html tags off keystable copy, second part with keys on
      {
        targets: "all",
        render(data, type, row, meta) {
          if (type === "export") {
            const div = document.createElement("div");
            div.innerHTML = data;
            return div.innerText;
          }
          return data;
        },
      },
      // needed to make keytable strip html tags off copy
    ], // end of columnDefs, previously without visible and searchable options.

    //= ====================
    // DT CUSTOM SETTINGS
    // ====================

    // Automatic column width calculation. Default: true
    // can be disabled as an optimisation -takes time to calculate widths
    autoWidth: false,

    // By default, when data is laoded from an Ajax or Javascript data source
    // creates all HTML elements needed up-front. takes time with large data
    // allows to create the nodes (rows/cells) only when needed for a draw
    // if you load data with 10000 rows, but 10 records paging display length
    // rather than create all 10000 rows, deferred rendering will create 10
    deferRender: true,

    // Enable or disable the display of a 'processing' indicator when the table
    // is being processed (e.g. a sort). This is particularly useful for tables with large
    // amounts of data where it can take a noticeable amount of time to sort the entries.
    processing: true,

    // ordering of columns - by default, allows to click on column head to order
    ordering: false,

    // stateSave: true // Breaks table, use the one below
    // Restore table state on page reload. When enabled aDataTables will store
    // state info like pagination position, display length, filtering and sorting
    // When user reloads the page the table's state will be altered to before
    // DOESNT WORK WITH JSON FETCHED FROM GSHEETS
    bstateSave: true,

    // Duration for which the saved state information is valid. Default: 7200
    // After this period has elapsed the state will be returned to the default.
    // Set state duration to 1 day. Use with above.
    // stateDuration: 60*60*24 //currently set to 1 day, -1 is that session only
    stateDuration: "86400",

    // removes written search input upon state reload
    // "stateSaveParams": function (settings, data) { data.search.search = ""; }

    // Highlight columns being ordered in the table.
    // adds a class to the column cells, which has CSS applied
    // can affect performance with many rows, as it manipulates many DOM elements
    orderClasses: false,

    // Pagination button display options.
    // DataTables has six built-in paging button arrangements:
    // numbers - Page number buttons only (1.10.8)
    // simple - "Previous" and "Next" buttons only
    // simple_numbers - "Previous" and "Next" buttons, plus page numbers
    // full - "First", "Previous", "Next" and "Last" buttons
    // full_numbers - "First", "Previous", "Next", "Last" buttons & page numbers
    // first_last_numbers - "First" and "Last" buttons, plus page numbers
    // Default Value: simple_numbers,
    pagingType: "input",

    // Set a throttle frequency for searching.
    // search will instantly search table on every keypress -clientside proc mode
    // and reduce search call frequency to 400mS in serverside processing mode
    // processing load can be reduced by reducing the search frequency
    searchDelay: 1300,

    // Change options in page length select list.
    // It can be either: 1D array for both displayed option/display length value,
    // or 2Darray where 1st inner array=page length values, 2nd displayed options
    // -1 is used as a value this tells DataTables to disable pagination
    // Default [ 10, 25, 50, 100 ],

    lengthMenu: [
      [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300],
      ["1 ދައްކާ", 2, 3, 5, 10, 20, 30, 50, 100, 200, "300"],
    ],
    // lengthMenu: [[1, 2, 3, 5, 7, 10, 15, 20, -1], ['1 ދައްކާ', 2, 3, 5, 7, 10, 15, 20, 'ހުރިހާ']],
    // lengthMenu: [ [5, 10, 20, 30, 40, -1, 1], ["Show 5", 10, 20, 30, 40,
    // "All", 1] ],

    // Tab index control for keyboard navigation. default DT allows keyboard nav
    // sorting, paging, filtering by adding tabindex attr to required elements
    // Default Value: null
    /* "tabIndex": 0, */

    // Store the DT conditions within the URL hash every time a condition changes
    // (page/length/search/order) making it possible to copy/paste the URL.
    keepConditions: true,

    // keytable, adds keyboard navigation, like in traditional spreadsheet
    keys: true,

    // markjs, a keyword highlighter for strings, arrays or regular expressions.
    mark: true,

    // default "smart" filtering breaks input into individual words and then matches those words in any position and in any order in the table (rather than simple doing a simple string compare).
    search: {
      smart: true,
    },

    //= ====================
    // Internationalisation
    // ====================
    language: {
      /* made these a media query somewhere up
      paginate: {
        first: '<<',
        previous: '<',
        next: '>',
        last: '>>',

        first: '<<&nbsp;ފުރަތަމަ',
        previous: '<&nbsp;ފަހަތަށް',
        next: 'ކުރިއަށް&nbsp;>',
        last: 'ފަހު&nbsp;>>',

        info: '_INPUT_'
},
*/
      buttons: {
        copyTitle: "ކޮޕީ",
        copySuccess: {
          1: "ކޮޕީ ވީ 1 އާޔަތް",
          _: "ކޮޕީ ވީ %d އާޔަތް",
        },
      },

      info: "_TOTAL_ އާޔަތުގެ ތެރެއިން _START_ އިން _END_ އަށް",
      infoFiltered: "(ޖުމްލަ ބެލެވުނީ _MAX_)",
      infoEmpty: "— ނުފެނުނު —",
      lengthMenu: "_MENU_",
      search: "", // Originally "Search:" leave this blank in production
      searchPlaceholder: 'ސީދާ ލަފްޒު "މިހެން ހޯދާ"',
      zeroRecords: "<br><br><br><br>— ނުފެނުނު —<br><br><br><br>",
      searchPanes: {
        emptyMessage: "— ވަކި ނަމެއް ނެތް —",
        clearMessage: "ހުރިހާ ފިލްޓާއެއް ދުއްވާލާ",
        collapse: { 0: "ފިލްޓާތައް", _: "ފިލްޓާތައް (%d)" },
        title: {
          _: "%d ފިލްޓާ ކުރެވިފާ",
          0: "0 ފިލްޓާ ކުރެވިފާ",
          1: "1 ފިލްޓާ ކުރެވިފާ",
        },
        /* i18n: {
          emptyMessage: '</i></b>ހުސްކޮށް</b></i>'
        } */
      },
      /* processing: '- ތައްޔާރުވަނީ -' */ // clashes with zeroRecords on serverside/ajax?
    }, //= =================== End of Internationalisation

    //= ====================
    //      DT CUSTOM DOM
    // ====================
    /* DOM options, https://datatables.net/reference/option/dom,
    https://datatables.net/examples/basic_init/dom.html
         default: lpfrtip
        l - length changing input control
        f - filtering input
        t - The table
        i - Table information summary
        p - pagination control
        r - processing display element
        B - Buttons

< and > - div element
<"class" and > - div with a class
<"#id" and > - div with an ID
<"#id.class" and > - div with an ID and a class */
    // "lBpfrtip",

    // desktop, goes rtl -->
    // dom: '<"top"pBfl>rt<"bottom"ip>',
    // mobile
    // dom: '<"top"fl> + <"top2"p> + <"top3"B> rt <"bottom"ip>',
    // MOVED TO if (window.matchMedia("(min-width: 1200px)").matches) {
    // $.extend(true, $.fn.dataTable.defaults, { ABOVE

    buttons: [
      // datatables.net/extensions/buttons/examples/initialisation/multiple
      // used to use a container before, now 2 buttons
      // { text: "Button 2", action: function ( e, dt, node, conf )
      // { alert( "Button 2 clicked on" ); } },
      {
        extend: "copy",
        key: { key: "c", shiftKey: true },
        text: "ކޮޕީ",
        messageTop: "ބަކުރުބޭގެ ޤުރްއާން ތަރުޖަމާ", // CHANGE123 clipboard message
        title: "" /* title: "hadithmv.com", */,

        //= ====================
        // edits clipboard regex, code to manipulate the data string as desired
        // ====================
        customize(data) {
          /* https://www.rexegg.com/regex-quickstart.html
                    \t Tab, \r Carriage return character,
                    \n Line feed character, \r\n Line separator on Windows
                    */
          // adds string to hadith
          // data = data.replace( /\b([0-9]|[1-4][0-9]|50)\b/g, "No:" );

          // fixes multiple row's lack of line break on desktop
          //     data = data.replace( /\t\r\n/g, "\n\n\n" );

          //  \t = literal tab
          //  \n = LF (Line Feed) → Used as a new line character in Unix/Mac OS X
          //  \r\n = CR + LF → Used as a new line character in Windows

          // data = data.replace(/r\n]/g, '') // needed to make rnr work
          // data = data.replace(/\r\n|\n|\t/gm, '')

          // data = data.replace(/\r\n\r\n/g, ' ') //  ONLY FOR 40N, because it has an inserted title
          // data = data.replace(/\n\n/g, ' ') //  ONLY FOR 40N, because it has an inserted title, the two lines below arent needed for 40n i think

          data = data.replace(/\r\n/g, "\t"); //  prevents first header showing up unneeded (windows)
          data = data.replace(/\n/g, "\t"); //  prevents first header showing up unneeded (linux) this needs to go below windows rn

          data = data.replace(/ސޫރަތުގެ ނަން\t/g, ""); // should be this way instead of /\tފޮތް/
          data = data.replace(/ޖުޒް #\t/g, "");
          data = data.replace(/އާޔަތް #\t/g, "");
          data = data.replace(/ޤުރްއާން އަރަބިން\t/g, "");
          data = data.replace(/ޤުރްއާން ފިލިނުޖަހާ\t/g, "");
          data = data.replace(/ރަސްމު އުޘްމާނީ\t/g, "");
          data = data.replace(/ލަފްޒީ ތަރުޖަމާ\t/g, "");
          data = data.replace(/އިޖްމާލީ މާނަ\t/g, "");
          //data = data.replace(/\t‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾/g, '\n\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n') // adds a line break after takhrij line, use two for a new line
          data = data.replace(
            /‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\t/g,
            "\n\n‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\n"
          );

          data = data.replace(/\t\t/g, "\t"); //  This prevents a double or more line breaks when columns are hidden
          data = data.replace(/\t/g, "\n\n"); // creates line breaks between cell data
          data = data.replace(/\s\s/g, "\n\n"); // turns two spaces into new lines, for multi line text
          data = data.replace(/\n\n\n\n/g, "\n\n"); // turns 4 new lines spaces into 2
          data = data.replace(/\n\n\n/g, "\n\n"); // turns 3 new lines spaces into 2

          data = data.replace(/𝟢 |𝟣 |𝟤 |𝟥 |𝟦 |𝟧 |𝟨 |𝟩 |𝟪 |𝟫 /g, ""); // removes these alt numbers from surah name
          data = data.replace(/𝟢|𝟣|𝟤|𝟥|𝟦|𝟧|𝟨|𝟩|𝟪|𝟫/g, ""); // removes these alt numbers from surah name

          /*
          data = data.replace(/\n\n/g, '\t') // prevents # showing up unneeded (linux)
          data = data.replace(/\r\n\r\n/g, '\t') //  prevents # showing up unneeded (windows)

          data = data.replace(/\t#/g, '')
          data = data.replace(/\tއަރަބި ސުރުހީ/g, '')
          data = data.replace(/\tދިވެހި ސުރުހީ/g, '')
          data = data.replace(/\tއަރަބި ޙަދީޘް/g, '')
          data = data.replace(/\tއަރަބި ފިލިނުޖަހައި/g, '')
          data = data.replace(/\tދިވެހި ތަރުޖަމާ/g, '')
          data = data.replace(/\tތަޚްރީޖު/g, '')
          data = data.replace(/\tތަޚްރީޖު ދިވެހިން/g, '')
          data = data.replace(/\tރިޔާޟުއްޞާލިޙީނުން/g, '')

          data = data.replace(/\t/g, '\n\n') // creates line breaks
*/
          // data = data.replace(/\tތަޚްރީޖު\t/g, '')
          /*
          data = data.replace(/#\t/g, '')
          data = data.replace(/އަރަބި ސުރުހީ\t/g, '')
          data = data.replace(/ދިވެހި ސުރުހީ\t/g, '')
          data = data.replace(/އަރަބި ޙަދީޘް\t/g, '')
          data = data.replace(/އަރަބި ފިލިނުޖަހައި\t/g, '')
          data = data.replace(/ދިވެހި ތަރުޖަމާ\t/g, '')
          data = data.replace(/ތަޚްރީޖު\t/g, '')
          data = data.replace(/ތަޚްރީޖު ދިވެހިން\t/g, '')
          data = data.replace(/ރިޔާޟުއްޞާލިޙީނުން\t/g, '')

          //          data = data.replace(/\n\n/g, '')
          //         data = data.replace(/\r\n\r\n/g, '')

          data = data.replace(/\t/g, '\n\n') // creates line breaks
*/
          /*
          data = data.replace(/#\n/g, '')
          data = data.replace(/އަރަބި ސުރުހީ\n/g, '')
          data = data.replace(/ދިވެހި ސުރުހީ\n/g, '')
          data = data.replace(/އަރަބި ޙަދީޘް\n/g, '')
          data = data.replace(/އަރަބި ފިލިނުޖަހައި\n/g, '')
          data = data.replace(/ދިވެހި ތަރުޖަމާ\n/g, '')
          data = data.replace(/ތަޚްރީޖު\n/g, '')
          data = data.replace(/ތަޚްރީޖު ދިވެހިން\n/g, '')
          data = data.replace(/ރިޔާޟުއްޞާލިޙީނުން\n/g, '')

          data = data.replace(/\t/g, '\n\n') // creates line breaks
*/

          /* data = data.replace( /hadithmv.com\n/g, "hadithmv.com\n\n" );
           //adds new line on android */
          /*
               data = data.replace( /\r/g, "" ); //rids windows platform newline
               data = data.replace( /\t/g, "\n\n" ); */

          //console.log(JSON.stringify(data)) // json stringify to console

          return data;
        },
        //= ============== edits clipboard regex end, customize: function(data) {

        // copies currently displayed and rows
        exportOptions: { columns: [":visible"], rows: [":visible"] },

        // copies currently displayed columns and rows,
        // "exportOptions: { modifier:{columns:[":visible"], rows: [":visible"]}"
        // needs .cards thead { visibility: hidden; } to work
      }, // end of copy customization

      {
        extend: "searchPanes",
        key: { key: "f", shiftKey: true },
        /* Multiselect on clicking only works with Pfrtip Dom not for Bfrtip Dom how can we use it with bfrtip Dom ?
        need to put the SearchPanes configuration into the buttons config option.
        https://datatables.net/extensions/searchpanes/examples/customisation/buttonConfig.html */
        config: {
          collapse: false,
          orderable: false,
          columns: [0, 1],
          cascadePanes: true,
          dtOpts: {
            select: {
              style: "multi",
            },
            ordering: false,
            /* order: [[1, 'desc']] */
          },
        },
      },

      {
        extend: "colvis",
        key: { key: "s", shiftKey: true },
        text: "އިތުރު ބަރިތައް",
        background: false /* removes background fade animation for collection */,
      }, // end of colvis

      // cards code
      /*
              {
                "text": "cards",
                "action": function (e, dt, node) {
                   $(dt.table().node()).toggleClass("cards");
                },
             },
      */
      // cards code END
    ],
  }); // $("#fortyNawawi").DataTable( { - END
  // from here to END OF $(document).ready( function () { used to be empty

  // ====================
  //        SWIPE
  // ====================

  // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
  // that was with jquery, then converted with: https://properprogramming.com/tools/jquery-to-javascript-converter/

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  let xDown = null;
  let yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /* most significant */
      if (xDiff > 0) {
        // left swipe
        table.page("previous").draw("page");
      } else {
        // right swipe */
        table.page("next").draw("page");
      }
    } /* else { // commented out otherwise detected as useless suspicious code
      if (yDiff > 0) {
        // up swipe
      } else {
        // down swipe
      }
    } */
    /* reset values */
    xDown = null;
    yDown = null;
  }
  // ==================== swipe - END

  // ScrollTop - If the user changes the page, scroll to the top
  // js media query on desktop
  if (window.matchMedia("(min-width: 900px)").matches) {
    $(".dataTable").on("page.dt", () => {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "fast"
      ); // smoothen or ease this later ??
      $("main-content").focus();
      // need to set focus at top so DTBS doesn't scroll back to bottom

      const tempScrollTop = $(window).scrollTop();
      // console.log(`Scroll from Top: ${tempScrollTop.toString()}`);
    });
    // js media query on mobile, tablet
  } else {
    $(".dataTable").on("page.dt", () => {
      $("html, body").animate(
        {
          scrollTop: 178, //prev 0 // 148
        },
        "fast"
      );
      $("main-content").focus();
      const tempScrollTop = $(window).scrollTop();
    });
  } // end if else

  //= ====================
  // Add cards media query class to table ID, as well as row border
  // ====================
  /*
    function myFunction() {
        var element = document.getElementById("fortyNawawi");
        element.classList.add("cards");
      }
*/
  if (window.matchMedia("(min-width: 900px)").matches) {
    // js media query on desktop
    /* previously $('fnClass').addClass('row-border')
    $('fnClass').addClass('cards') */
    // CUT FOR QURAN $('.dataTable').addClass('row-border'), // adds rowborder class
    $("div.dataTables_filter input", table.table().container()).focus(); // autofocus search input on page load
    // $('.dataTable').addClass('cards') // ADDED FOR QURAN
    // } else {
    // js media query on mobile, tablet
    // $('.dataTable').addClass('cards')
  } // end if else
  //= =================== Add cards class to table ID - END

  // changes <input class="paginate_input" type="text"> type to search type,
  // so that delete icon appears
  $(".paginate_input").prop("type", "search");

  // adds a placeholder to above <input class="paginate_input" type="text">
  $(".paginate_input").attr("placeholder", "ސަފުހާ...");

  // makes footer visible after script finishes rendering
  $(document).ready(function () {
    $("#footer").removeClass("hidden");
  });

  // adds doubleclick select go to page search was on, with rowshowjs

  // old code
  /*
    $('tbody').on('dblclick', 'tr', function () {
    if (table.search() !== '') {
      table.search('').draw()
    }
    table.row(this).draw().show().select().draw(false)
  })
  */

  // https://stackoverflow.com/questions/27560653/jquery-on-double-click-event-dblclick-for-mobile/27561006#27561006
  // for some reason, dblclick stopped working for table.row(this).draw().show().select().draw(false) on mobile view, which was previously table.row(this).show().select().draw(false)
  // all this was changed due to an update with searchpanes causing a bug https://datatables.net/forums/discussion/comment/208672/#Comment_208672
  var touchtime = 0;
  $("tbody").on("click", "tr", function () {
    if (touchtime == 0) {
      // set first click
      touchtime = new Date().getTime();
    } else {
      // compare first click to this click and see if they occurred within double click threshold
      if (new Date().getTime() - touchtime < 800) {
        // double click occurred
        //alert("double clicked");
        if (table.search() !== "") {
          table.search("").draw();
        }
        table.row(this).draw().show().select().draw(false);
        //
        touchtime = 0;
      } else {
        // not a double click so set as a new first click
        touchtime = new Date().getTime();
      }
    }
  });

  // removes diacritics and punctuation on key up for search
  $(".dataTables_filter input").on("keyup click", function () {
    var str = $(this).val();
    str = str
      .replace(
        "﴿بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
        'بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
      )
      .replace(
        "﴿بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n",
        'بِّسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ\n<br class="br"><br class="br">﴿'
      )
      .replace(/ـ/g, "")
      .replace(
        /[^\u0621-\u064A|^\u0780-\u07B1|^\d|^𝟣||^𝟣|^𝟤|^𝟥|^𝟦|^𝟧|^𝟨|^𝟩|^𝟪|^𝟫|^𝟢|\s|<br class="br">]/g,
        ""
      )
      .replace(/\s\s/g, " ");
    $(this).val(str);
    //table.search(str).draw();
    // commenting above out allows searchdelay to work with stringreplace
  });

  // every time page draws, surah and ayah box update to extract surah and ayah values, the word surah is removed, and arabic numbers are turned into regular digits
  // https://stackoverflow.com/questions/7407111/detect-page-change-on-datatable/34995105#34995105
  $("#quranBakurubeTable").on("draw.dt", function () {
    document.getElementById("surahNameID").value = document
      .getElementsByClassName("qCol1")[1]
      .innerText.replace(/سورة /g, "");
    /*document.getElementById("ayahNoID").value =
      document.getElementsByClassName("qCol4")[1].innerText;*/
    document.getElementById("ayahNoID").value = document
      .getElementsByClassName("qCol4")[1]
      .innerText.replace(/[^١|٢|٣|٤|٥|٦|٧|٨|٩|٠]/g, "")
      .replace(/٠/g, "0")
      .replace(/١/g, "1")
      .replace(/٢/g, "2")
      .replace(/٣/g, "3")
      .replace(/٤/g, "4")
      .replace(/٥/g, "5")
      .replace(/٦/g, "6")
      .replace(/٧/g, "7")
      .replace(/٨/g, "8")
      .replace(/٩/g, "9");
  });

  //
}); // ==================== END OF $(document).ready( function () {
