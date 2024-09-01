var hmvVersionNo = 3.16;

// above is version no  var for hmv, shown in sidemenu and maybe main index page

// NAVBAR CODE below

function createNavbar() {
  const pageTitle = document.title;
  /*    Navbar 
        .Side Menu
        ..Dropdown menu item
        ...Nested dropdown
        ....Nested sub-dropdown
        */
  // Define the HTML structure for the navbar and side menu
  // MINIFY THIS HTML WITH KANGAX. if need to edit, format with something else then reminify
  // Insert the navbar HTML into the container
  document.getElementById("navbar-container").innerHTML = `
<nav class=navbar>
   <div class=navbar-left><img alt="Site Icon"class=site-icon onclick=goToHomePage() src=../img/logo/logo.svg title="back to homepage"></div>
   <div class=navbar-center><span class=page-title>${pageTitle}</span></div>
   <div class=navbar-right title=menu><span class=menu-icon>☰</span></div>
</nav>
<div class=side-menu id=sideMenu>
   <div class=side-menu-close onclick=toggleSideMenu()>×</div>
   <ul>
      <li><a href=../books/index.html>● މައި ސަފުހާ</a>
      <li onclick=sideMenutoggleDropdown(this) class=dropdown>
         <a><span class=dropdown-arrow>◄</span>ބައިތައް</a>
         <ul class=dropdown-content>
            <li onclick=sideMenutoggleDropdown(this,event) class=sub-dropdown>
               <a><span class=dropdown-arrow>◄</span>ގުރްއާން</a>
               <ul class=sub-dropdown-content>
                  <li><a href=../books/quranHadithmv.html>ޙަދީޘްއެމްވީގެ ތަރުޖަމާ</a>
                  <li><a href=../books/quranRasmee.html>ރަސްމީ ތަރުޖަމާ</a>
                  <li><a href=../books/quranBakurube.html>ބަކުރުބެގެ ތަރުޖަމާ</a>
                  <li><a href=../books/quranJaufar.html>ޖަޢުފަރުގެ ގުރްއާން ތަފްސީރު*</a>
                  <li><a href=../books/quranSoabuni.html></a>
                  <li><a href=../books/quranUshru.html>ފަހު ދިހަބައި ކުޅަ އެއްބައިގެ ތަފްސީރު</a>
                  <li><a href="https://archive.org/details/malinge-hussain-didi-quran-tharujamaa-aai-thafseer"
                     target="_blank">جهود علماء المالديف في ترجمة معاني القرآن الكريم وتفسيره</a>
               </ul>
            <li onclick=sideMenutoggleDropdown(this,event) class=sub-dropdown>
               <a><span class=dropdown-arrow>◄</span>ޙަދީޘް</a>
               <ul class=sub-dropdown-content>
                  <li><a href=../books/allAthar.html>އެއްކުރަމުންދާ ޙަދީޘާއި އަޘަރު*</a>
                  <li><a href=../books/muwattaMalik.html>މުވައްޠައު މާލިކު*</a>
                  <li><a href=../books/umdathulAhkam.html>ޢުމްދަތުލް އަޙްކާމް</a>
                  <li><a href=../books/hisnulMuslim.html>މުސްލިމުންގެ ކިއްލާ</a>
                  <li><a href=../books/arbaoonAajurry.html>އާޖުއްރީގެ ސާޅީސް ޙަދީޘް*</a>
                  <li><a href=../books/akhbaruShuyukh.html>ޝައިޚުންގެ ޚަބަރުތަކާއި އެބޭކަލުންގެ އަޚްލާގު</a>
                  <li><a href=../books/akhlaqHamalathilQuran.html>އާޖުއްރީގެ ގުރްއާން އުފުލާ މީހުންގެ އަޚްލާގު</a>
                  <li><a href=../books/bulughulMaram.html>ބުލޫޣުލް މަރާމް*</a>
                  <li><a href=../books/arbaoonNawawi.html>ނަވަވީގެ ސާޅީސް ޙަދީޘް</a>
                  <li><a href=../books/riyaduSaliheen.html>ރިޔާޟުއްޞާލިޙީން*</a>
                  <li><a href="https://archive.org/details/uloomul-hadith-dv-ahmed-faruq-mohamed" target="_blank">ޙަދީޘް މުސްޠަލަޙު ފަސޭހަކުރުން PDF</a></li>
               </ul>
            <li onclick=sideMenutoggleDropdown(this,event) class=sub-dropdown>
               <a><span class=dropdown-arrow>◄</span>އަގީދާ</a>
               <ul class=sub-dropdown-content>
                  <li><a href=../books/allAqida.html>އެއްކުރަމުންދާ އަގީދާގެ ފޮތްތައް</a>
                  <li><a href=../books/usooluSunnahAhmed.html>އަޙްމަދުގެ ސުންނަތުގެ އުސޫލުތައް*</a>
                  <li><a href=../books/sharhuSunnahBarbahari.html>ބަރްބަހާރީގެ ސުންނަތުގެ ޝަރަހަ*</a>
                  <li><a href=../books/aqidatuRaziyain.html>ދެ ރާޒީންގެ އަގީދާ*</a>
                  <li><a href=../books/kitabulEmanAbiUbaid.html>އަބޫ ޢުބައިދުގެ އީމާންކަމުގެ ފޮތް</a>
                  <li><a href=../books/nawaqidulislam.html>އިސްލާމްކަން ގެއްލޭ ކަންތައް</a>
                  <li><a href=../books/qawaidulArbau.html>ހަތަރު ގަވާއިދު</a>
                  <li><a href=../books/usooluSiththa.html>ހަ އުސޫލު*</a>
                  <li><a href=../books/usooluThalaatha.html>ތިން އުސޫލު</a>
                  <li><a href=../books/quranUshru.html#quranTable=:p69.html>މުސްލިމަކަށް މުހިއްމުވާ ހުކުމްތައް</a>
                  <li><a href=../books/sharhuSunnahBarbahari-DFK.html>ބަރްބަހާރީގެ ސުންނަތުގެ ޝަރަހަ - DFK</a>
               </ul>
            <li onclick=sideMenutoggleDropdown(this,event) class=sub-dropdown>
               <a><span class=dropdown-arrow>◄</span>ބަސް</a>
               <ul class=sub-dropdown-content>
                  <li><a href=../mauhad/arabic.html>މަދީނާ އަރަބި ފޮތްތައް</a>
                  <li>
                     <a href="../books/radheefAll.html" onclick="changeBkRadheef('radheefAll'); return false;">އެއްކުރަމުންދާ ރަދީފުތައް</a>
                  </li>
                  <li>
                     <a href="../books/radheefRasmee.html" onclick="changeBkRadheef('radheefRasmee'); return false;">ރަސްމީ ރަދީފު</a>
                  </li>
                  <li>
                     <a href="../books/radheefEegaal.html" onclick="changeBkRadheef('radheefEegaal'); return false;">އަލްއީގާޡް</a>
                  </li>
                  <li>
                     <a href="../books/radheefManiku.html" onclick="changeBkRadheef('radheefManiku'); return false;">މަނިކުގެ ރަދީފު</a>
                  </li>
                  <li>
                     <a href="../books/radheefNanfoiy.html" onclick="changeBkRadheef('radheefNanfoiy'; return false;)">ނަންފޮތް</a>
                  </li>
                  <li><a href=../notes/info/lafzuVakikohLiyumugeQawaid.html>ލަފުޒު ވަކިކޮށް ލިޔުމުގެ ގަވާއިދު (ދިވެހި)</a>
                  <li><a href="https://archive.org/details/dhifihuristhu"
                     target="_blank">ދިފިހުރިސްތު (PDF)</a>
                  <li><a href=../notes/info/NukuthaajehiAkuruthahBeynunkuraaneHama.html>ތާނައިގައި ހުރި ނުކުތާޖެހި އަކުރުތައް ބޭނުންކުރާނެ ހަމަ</a>
                  <li><a href="https://archive.org/details/dhivehi_bahuge_qawaidhu"
                     target="_blank">ދިވެހިބަހުގެ ގަވާއިދު (PDF)</a>
                  <li><a href="https://archive.org/details/latin_akurun_liyumuge_qawaidhu"
                     target="_blank">ތާނަލިޔުމުގެ ގަވާއިދު (PDF)</a>
               </ul>
         </ul>
      <li><a href=../notes/info/contact.html>ކުށެއް/ހިޔާލެއް ހުށަހެޅުމަށް</a>
      <li><a href=../notes/info/helpTranslate.html>ތަރުޖަމާގައި އެހީވެދިނުމަށް</a>
      <li><a href=../notes/info/FAQ.html>ތަކުރާރުކޮށް ކުރެވޭ ސުވާލުތައް</a>
      <li><a href=../notes/info/contributors.html>އެހީތެރިން</a>
      <li onclick=openDiv() class=versionNo>⚙️ އިސްދާރު: v${hmvVersionNo}
      <li><a href=https://t.me/ashraafmv>ފަރުމާ ކުރީ: އަބޫ ޔަޙްޔާ، މުޙައްމަދު އަޝްރާފު އިބްރާހީމް</a>
      <li style=font-size:90%>މަދީނާގެ ޙަދީޘް ކުއްލިއްޔާގެ ދަރިވަރެއް
      <li onclick='window.scrollTo({top:0,behavior:"smooth"})'href=# style=cursor:pointer;user-select:none>▲ މައްޗަށް ސްކްރޯލްކުރޭ
      <li onclick=sideMenutoggleDropdown(this) class=dropdown>
         <a>↺ ސަފުހާ ރީލޯޑު</a>
         <ul class=dropdown-content>
            <li><a href=# onclick=window.location.reload()>މަޑު ރީލޯޑު</a>
            <li><a onclick='window.location.href=window.location.href.split(".html")[0]+".html"'>ހަރު ރީލޯޑު</a>
         </ul>
   </ul>
</div>
`;
}

// Ensure the navbar is created once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createNavbar);

/*
  <nav class="navbar">
        <div class="navbar-left">
            <img src="../img/logo/logo.svg" 
                 title="back to homepage" alt="Site Icon" class="site-icon" onclick="goToHomePage()">
        </div>
        <div class="navbar-center">
            <span class="page-title">${pageTitle}</span>
        </div>
        <div class="navbar-right" 
             title="menu">
        <span class="menu-icon">☰</span>
        </div>
    </nav>
    
    <div class="side-menu" id="sideMenu">
        <div class="side-menu-close" onclick="toggleSideMenu()">×</div>
        <ul>
            <li><a href="../books/index.html">● މައި ސަފުހާ</a></li>
            <li class="dropdown" onclick="sideMenutoggleDropdown(this)">
                <a><span class="dropdown-arrow">◄</span>ބައިތައް</a>
                <ul class="dropdown-content">
                    <li><a href="#">ގުރްއާން</a></li>
                    <li class="sub-dropdown" onclick="sideMenutoggleDropdown(this, event)">
                        <a><span class="dropdown-arrow">◄</span>ޙަދީޘް</a>
                        <ul class="sub-dropdown-content">
                            <li><a href="allAthar.html">އެއްކުރަމުންދާ ޙަދީޘާއި އަޘަރު*</a></li>
                            <li><a href="muwattaMalik.html">މުވައްޠައު މާލިކު*</a></li>
                            <li><a href="umdathulAhkam.html">ޢުމްދަތުލް އަޙްކާމް</a></li>
                            <li><a href="hisnulMuslim.html">މުސްލިމުންގެ ކިއްލާ</a></li>
                            <li><a href="arbaoonAajurry.html">އާޖުއްރީގެ ސާޅީސް ޙަދީޘް*</a></li>
                            <li><a href="akhbaruShuyukh.html">ޝައިޚުންގެ ޚަބަރުތަކާއި އެބޭކަލުންގެ އަޚްލާގު</a></li>
                            <li><a href="akhlaqHamalathilQuran.html">އާޖުއްރީގެ ގުރްއާން އުފުލާ މީހުންގެ އަޚްލާގު</a></li>
                            <li><a href="bulughulMaram.html">ބުލޫޣުލް މަރާމް*</a></li>
                            <li><a href="arbaoonNawawi.html">ނަވަވީގެ ސާޅީސް ޙަދީޘް</a></li>
                            <li><a href="riyaduSaliheen.html">ރިޔާޟުއްޞާލިޙީން*</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="../notes/info/contact.html">ކުށެއް/ހިޔާލެއް ހުށަހެޅުމަށް</a></li>
            <li><a href="../notes/info/helpTranslate.html">ތަރުޖަމާގައި އެހީވެދިނުމަށް</a></li>
            <li><a href="../notes/info/FAQ.html">ތަކުރާރުކޮށް ކުރެވޭ ސުވާލުތައް</a></li>
            <li><a href="../notes/info/contributors.html">އެހީތެރިން</a></li>
            <li class="versionNo" onclick="openDiv()">⚙️ އިސްދާރު: v${hmvVersionNo}</li>
            <li><a href="https://t.me/ashraafmv">ފަރުމާ ކުރީ: އަބޫ ޔަޙްޔާ، މުޙައްމަދު އަޝްރާފު އިބްރާހީމް</a></li>
            <li style="font-size: 90%">މަދީނާގެ ޙަދީޘް ކުއްލިއްޔާގެ ދަރިވަރެއް</li>
            <li style="cursor: pointer; user-select: none;"  href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">▲ މައްޗަށް ސްކްރޯލްކުރޭ</li>
            <li class="dropdown" onclick="sideMenutoggleDropdown(this)">
                <a>↺ ސަފުހާ ރީލޯޑު</a>
                <ul class="dropdown-content">
                    <li><a onclick="window.location.reload()" href="#">މަޑު ރީލޯޑު</a></li>
                    <li><a onclick="window.location.href=window.location.href.split('.html')[0]+'.html'">ހަރު ރީލޯޑު</a></li>
                </ul>
            </li>
        </ul>
    </div>


    ///////////////////
    
  
  <a><span class="dropdown-arrow">◄</span>↺ ސަފުހާ ރީލޯޑު</a>

  <li><a href="#">ބައި 1</a></li>
                    <li class="sub-dropdown" onclick="sideMenutoggleDropdown(this, event)">
                        <a><span class="dropdown-arrow">◄</span>ބައި 2</a>
                        <ul class="sub-dropdown-content">
                            <li><a href="#">ސަބް-ބައި 2.1</a></li>
                            <li class="sub-sub-dropdown" onclick="sideMenutoggleDropdown(this, event)">
                                <a><span class="dropdown-arrow">◄</span>ސަބް-ބައި 2.2</a>
                                <ul class="sub-sub-dropdown-content">
                                    <li><a href="#">ސަބް-ސަބް-ބައި 2.2.1</a></li>
                                    <li>ސަބް-ސަބް-ބައި 2.2.2 (ޓެކްސްޓް)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    */

// Function to navigate to the homepage
function goToHomePage() {
  window.location.href = "index.html"; // "/";
}

// Function to toggle the side menu's visibility
function toggleSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.classList.toggle("open");
}

document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const sideMenu = document.getElementById("sideMenu");

  // Check if the click is inside the navbar
  const isClickInsideNavbar = navbar.contains(event.target);

  // Check if the click is inside the side menu
  const isClickInsideSideMenu = sideMenu.contains(event.target);

  // Check if the site icon is clicked (prevents the side menu from opening)
  const isSiteIconClicked = event.target.classList.contains("site-icon");

  // Check if the menu icon is clicked
  const isMenuIconClicked = event.target.classList.contains("menu-icon");

  // If the menu icon is clicked, toggle the side menu
  if (isMenuIconClicked) {
    toggleSideMenu();
  }
  // If any part of the navbar except the site icon is clicked, toggle the side menu
  else if (isClickInsideNavbar && !isSiteIconClicked) {
    toggleSideMenu();
  }
  // If a click outside the side menu occurs while it's open, close the side menu
  else if (!isClickInsideSideMenu && sideMenu.classList.contains("open")) {
    toggleSideMenu();
  }
});
//

//--------------------
// NAVBAR DROPDOWNS
//--------------------
// Function to toggle dropdowns

function sideMenutoggleDropdown(element, event) {
  // Prevent event bubbling

  if (event) {
    event.stopPropagation();
  }
  const dropdownContent = element.querySelector(
    ".dropdown-content, .sub-dropdown-content, .sub-sub-dropdown-content"
  );
  const arrow = element.querySelector(".dropdown-arrow");
  if (dropdownContent) {
    dropdownContent.classList.toggle("show");
    // Rotate arrow when dropdown is opened/closed

    arrow.style.transform = dropdownContent.classList.contains("show")
      ? "rotate(-90deg)"
      : "";
  }

  // Close other dropdowns at the same level
  const siblings = element.parentElement.children;
  for (let sibling of siblings) {
    if (sibling !== element) {
      const siblingDropdown = sibling.querySelector(
        ".dropdown-content, .sub-dropdown-content, .sub-sub-dropdown-content"
      );
      const siblingArrow = sibling.querySelector(".dropdown-arrow");
      if (siblingDropdown) {
        siblingDropdown.classList.remove("show");
        siblingArrow.style.transform = "";
      }
    }
  }
}

//--------------------
// HIDE NAVBAR ON SCROLL DOWN
//--------------------
document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  const topThreshold = 50; // Show navbar when within 50px of the top
  const scrollThreshold = 200; // Amount to scroll up before showing navbar
  let scrollUpDistance = 0;

  function handleScroll() {
    if (!navbar) return; // Exit if navbar doesn't exist

    // Get current scroll position
    let currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop <= topThreshold) {
      // When scroll is within topThreshold of the top, always show navbar
      navbar.classList.remove("navbar-hidden");
      scrollUpDistance = 0; // Reset scroll up distance
    } else if (currentScrollTop > lastScrollTop) {
      // Scrolling down and beyond topThreshold
      navbar.classList.add("navbar-hidden"); // Hide navbar
      scrollUpDistance = 0; // Reset scroll up distance
    } else {
      // Scrolling up and beyond topThreshold
      scrollUpDistance += lastScrollTop - currentScrollTop; // Accumulate scroll up distance
      if (scrollUpDistance > scrollThreshold) {
        // If scrolled up more than the scrollThreshold
        navbar.classList.remove("navbar-hidden"); // Show navbar
        scrollUpDistance = 0; // Reset scroll up distance
      }
    }

    // Update lastScrollTop for next scroll event
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  // Throttle function to limit how often the scroll event fires
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Function to check if the device is mobile
  function isMobile() {
    return window.matchMedia("(max-width: 599px)").matches;
  }

  if (isMobile()) {
    // Add the scroll event listener only for mobile devices
    window.addEventListener("scroll", throttle(handleScroll, 100));
  }
});
//

//

//

// Close dropdowns when clicking outside
/*window.onclick = function (event) {
  if (!event.target.closest(".dropdown, .sub-dropdown, .sub-sub-dropdown")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    const arrows = document.getElementsByClassName("dropdown-arrow");
    for (let dropdown of dropdowns) {
      dropdown.classList.remove("show");
    }
    for (let arrow of arrows) {
      arrow.style.transform = "";
    }
  }
};*/

//

//

//

/*
 <div class="side-menu" id="sideMenu">
                    <div class="side-menu-close" onclick="toggleSideMenu()">×</div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li class="dropdown">
                            <a href="#">Services</a>
                            <div class="dropdown-content">
                                <a href="#">Service 1</a>
                                <a href="#">Service 2</a>
                                <a href="#">Service 3</a>
                            </div>
                        </li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
*/

//

//

//

/*
The reason you can't right-click on the <a> element to open it in a new tab is that the onclick event handler is used to trigger a JavaScript function (changeBkRadheef('radheefAll')) instead of providing a standard hyperlink (href) that directs to a URL. When an onclick event is used without an href attribute, the browser doesn't interpret the link as a regular hyperlink, and therefore, the right-click context menu for opening in a new tab or window doesn't appear.

Solution:
Add an href attribute: If possible, provide a fallback URL with the href attribute. This way, users can still open the link in a new tab.

<li>
   <a href="your_fallback_url" onclick="changeBkRadheef('radheefAll'); return false;">އެއްކުރަމުންދާ ރަދީފުތައް</a>
</li>

*/
