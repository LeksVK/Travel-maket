            /** LogIn Form**/
var logForm   = document.querySelector('.j-log-form');
var cover     = document.querySelector('.log-form__back');

function loginShow() {
    logForm.style.display='flex';
    cover.style.display='flex';
    regForm.style.display='none';
};

function loginHide() {
    logForm.style.display='none';
    cover.style.display='none';
};

cover.addEventListener('click', function() {
    logForm.style.display='none';
    cover.style.display='none';
    regForm.style.display='none';
});

            /** Registar Form**/
var regForm   = document.querySelector('.j-reg-form');

function regShow() {
    regForm.style.display='flex';
    cover.style.display='flex';
    logForm.style.display='none';
};

function regHide() {
    regForm.style.display='none';
    cover.style.display='none';
};

    /*** Slider IN banner ***/
var wallpaper = document.querySelector('.j-promo');
var nav_left  = document.querySelector('.promo__scroll_position_left');
var nav_right = document.querySelector('.promo__scroll_position_right');
var i         = 0;
var j         = 0;

nav_left.addEventListener('click', function() {
    console.log(i);
    if (i == 0) {
        wallpaper.classList.remove('promo_cover_back-bridge');
        wallpaper.classList.add('promo_cover_back-lake');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('promo_cover_back-lake');
        wallpaper.classList.add('promo_cover_back-night');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('promo_cover_back-night');
        wallpaper.classList.add('promo_cover_back-bridge');
            i = 0;
         console.log(i);
    }
});

nav_right.addEventListener('click', function() {
    if (i == 0) {
        wallpaper.classList.remove('promo_cover_back-bridge');
        wallpaper.classList.add('promo_cover_back-night');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('promo_cover_back-night');
        wallpaper.classList.add('promo_cover_back-lake');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('promo_cover_back-lake');
        wallpaper.classList.add('promo_cover_back-bridge');
            i = 0;
         console.log(i);
    }
});

   /** Sub-menu IN Special offers **/
function showMenu(elem) {
var stroke    = elem.parentNode;
var list      = stroke.parentNode;
var menu      = list.querySelector('.j-off-item-menu');
var top_nav   = list.querySelector('.offers-item__nav-img_type_top');

    menu.classList.remove('l-hidden');
    top_nav.classList.add('l-hidden');
};

function hideMenu(elem) {
var stroke    = elem.parentNode;
var list      = stroke.parentNode;
var full_list = list.parentNode;    
var top_nav   = full_list.querySelector('.offers-item__nav-img_type_top');
    list.classList.add('l-hidden');
    top_nav.classList.remove('l-hidden');
};