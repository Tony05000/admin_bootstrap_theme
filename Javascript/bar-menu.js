const collapseBtn = document.getElementById('sidebar-menu-collapse');
const sidebarMenu = document.getElementById('sidebar-menu');
const topbarMenu = document.getElementById('topbar-menu');
const mainContainer = document.getElementById('main-container');
const clearfix = document.getElementById('clearfix');
const xsBreakpoint = 991;
let collapseToggle = false;

if ( window.innerWidth <= xsBreakpoint ) {
    collapseToggle = true;
}

setSidebarCollapse( collapseToggle );

collapseBtn.addEventListener('click', function() {
    this.classList.toggle('is-active');
    collapseToggle = ! collapseToggle
    setSidebarCollapse( collapseToggle );
});

clearfix.addEventListener('click', function() {
    this.classList.toggle('is-active');
    collapseToggle = ! collapseToggle
    setSidebarCollapse( collapseToggle );
});

window.addEventListener('resize', function() {
    if ( window.innerWidth <= xsBreakpoint ) {
        collapseToggle = true;
        collapseBtn.classList.add('is-active');
    } else {
        collapseToggle = false;
        collapseBtn.classList.remove('is-active');
    }
    setSidebarCollapse( collapseToggle );
});

function setSidebarCollapse ( collapseToggle ) {
    if ( collapseToggle ) {
        hideSidebarMenu();
        hideClearfix();
    } else {
        showSidebarMenu();
        showClearfix();
    }
}

function showSidebarMenu () {
    sidebarMenu.style.left = 0 + 'px';
    topbarMenu.classList.remove('topbar-menu-full-width');
    setFullWidthMainContainer();
}

function hideSidebarMenu () {
    sidebarMenu.style.left = -250 + 'px';
    topbarMenu.classList.add('topbar-menu-full-width');
    mainContainer.style.left = 0 + 'px';
    mainContainer.classList.add('main-container-full-width');
    
}

function setFullWidthMainContainer() {
    if (window.innerWidth > xsBreakpoint) {
        mainContainer.classList.remove('main-container-full-width');
        mainContainer.style.left = 250 + 'px';
    }
}

function hideClearfix() {
    if (window.innerWidth <= xsBreakpoint) {
        clearfix.classList.remove('show-clearfix');
    }
}

function showClearfix() {
    if (window.innerWidth <= xsBreakpoint) {
        clearfix.classList.add('show-clearfix');
    }
}


