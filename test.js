            /** LogIn Form**/
var logForm = document.querySelector('.j-log-form');
var cover   = document.querySelector('.log-form__back');

function login() {
    logForm.style.display='flex';
    cover.style.display='flex';
    regForm.style.display='none';
};

function logout() {
    logForm.style.display='none';
    cover.style.display='none';
};

cover.addEventListener('click', function() {
    logForm.style.display='none';
    cover.style.display='none';
    regForm.style.display='none';
});

            /** Registar Form**/
var regForm = document.querySelector('.j-reg-form');

function regin() {
    regForm.style.display='flex';
    cover.style.display='flex';
    logForm.style.display='none';
};

function regout() {
    regForm.style.display='none';
    cover.style.display='none';
};

    /*** Slider IN banner ***/
var wallpaper = document.querySelector('.j-promo');
var nav_left  = document.querySelector('.promo__scroll_position_left');
var nav_right = document.querySelector('.promo__scroll_position_right');
    var i     = 0;
    var j     = 0;

nav_left.addEventListener('click', function() {
    console.log(i);
    if (i == 0) {
        wallpaper.classList.remove('promo_back-bridge');
        wallpaper.classList.add('promo_back-lake');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('promo_back-lake');
        wallpaper.classList.add('promo_back-night');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('promo_back-night');
        wallpaper.classList.add('promo_back-bridge');
            i = 0;
         console.log(i);
    }
});

nav_right.addEventListener('click', function() {
      var yes = 'yes';
    console.log(yes);
    if (i == 0) {
        wallpaper.classList.remove('promo_back-bridge');
        wallpaper.classList.add('promo_back-night');
            i = 1;
         console.log(i);

    } else if (i == 1) {
        wallpaper.classList.remove('promo_back-night');
        wallpaper.classList.add('promo_back-lake');
            i = 2;
         console.log(i);

    } else if (i == 2) {
        wallpaper.classList.remove('promo_back-lake');
        wallpaper.classList.add('promo_back-bridge');
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
