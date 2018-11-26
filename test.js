            /** LogIn Form**/

var logForm = document.querySelector('.log-form');
var cover   = document.querySelector('.log-form__back');

function login() {
    logForm.classList.add('j-log-form_active');
    cover.classList.remove('j-log-form__back_off');
    cover.classList.add('j-log-form__back_active');
};

function logout() {
    logForm.classList.remove('j-log-form_active');
    cover.classList.add('j-log-form__back_off');
    cover.classList.remove('j-log-form__back_active');
};

cover.addEventListener('click', function() {
    logForm.classList.remove('j-log-form_active');
    cover.classList.remove('j-log-form__back_active');
    cover.classList.add('j-log-form__back_off');
});

    /*** Slider IN banner ***/
var wallpaper = document.querySelector('.promo');
var nav_left  = document.querySelector('.promo__scroll_left');
var nav_right = document.querySelector('.promo__scroll_right');
    var i     = 0;
    var j     = 0;

nav_left.addEventListener('click', function() {
    console.log(i);
    if (i == 0) {
        wallpaper.classList.remove('j-promo_back-bridge');
        wallpaper.classList.add('j-promo_back-lake');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('j-promo_back-lake');
        wallpaper.classList.add('j-promo_back-night');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('j-promo_back-night');
        wallpaper.classList.add('j-promo_back-bridge');
            i = 0;
         console.log(i);
    }
});

nav_right.addEventListener('click', function() {
      var yes = 'yes';
    console.log(yes);
    if (i == 0) {
        wallpaper.classList.remove('j-promo_back-bridge');
        wallpaper.classList.add('j-promo_back-night');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('j-promo_back-night');
        wallpaper.classList.add('j-promo_back-lake');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('j-promo_back-lake');
        wallpaper.classList.add('j-promo_back-bridge');
            i = 0;
         console.log(i);
    }
});

   /** Sub-menu IN Special offers **/

function addmenu() {
var list = document.querySelector('.sub_list');
list.classList.remove('hidden_item');
};

function dellmenu() {
var list = document.querySelector('.sub_list');
list.classList.add('hidden_item');
};

function addmenu2() {
var list = document.querySelector('.sub2_list');
list.classList.remove('hidden2_item');
};

function dellmenu2() {
var list = document.querySelector('.sub2_list');
list.classList.add('hidden2_item');
};

function addmenu3() {
var list = document.querySelector('.sub3_list');
list.classList.remove('hidden3_item');
};

function dellmenu3() {
var list = document.querySelector('.sub3_list');
list.classList.add('hidden3_item');
};

function addmenu4() {
var list = document.querySelector('.sub4_list');
list.classList.remove('hidden4_item');
};

function dellmenu4() {
var list = document.querySelector('.sub4_list');
list.classList.add('hidden4_item');
};

function addmenu5() {
var list = document.querySelector('.sub5_list');
list.classList.remove('hidden5_item');
};

function dellmenu5() {
var list = document.querySelector('.sub5_list');
list.classList.add('hidden5_item');
};

function addmenu6() {
var list = document.querySelector('.sub6_list');
list.classList.remove('hidden6_item');
};

function dellmenu6() {
var list = document.querySelector('.sub6_list');
list.classList.add('hidden6_item');
};