            /** LogIn Form**/

var logForm = document.querySelector('.login_form');
var cover = document.querySelector('.back_login');

function login() {
    logForm.classList.add('login_form_active');
    cover.classList.remove('back_login_off');
    cover.classList.add('back_login_active');     
};

function logout() {
    logForm.classList.remove('login_form_active');
    cover.classList.add('back_login_off');
    cover.classList.remove('back_login_active');
};

cover.addEventListener('click', function () {
    logForm.classList.remove('login_form_active');
    cover.classList.remove('back_login_active');
    cover.classList.add('back_login_off');
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
        /*** Slider IN banner ***/

var wallpaper = document.querySelector('.banner');
var nav_left = document.querySelector('.scroll_left');
var nav_right = document.querySelector('.scroll_right');
var i = 0;
var j = 0;

nav_left.addEventListener('click', function () {
    console.log(i);
    if (i == 0) {
        wallpaper.classList.remove('banner_back_promo');
        wallpaper.classList.add('banner_back_greece');
        i = 1;
         console.log(i);
    } else if (i == 1) {
        wallpaper.classList.remove('banner_back_greece');
        wallpaper.classList.add('banner_back_mill');
        i = 2;
         console.log(i);
    } else if (i == 2) {
        wallpaper.classList.remove('banner_back_mill');
        wallpaper.classList.add('banner_back_promo');
        i = 0;
         console.log(i);
    }
});

nav_right.addEventListener('click', function (evt) {
    var yes = 'yes';
    console.log(yes);
/*    j++;
    console.log(j); */
    if (i == 0) {
        wallpaper.classList.remove('banner_back_promo');
        wallpaper.classList.add('banner_back_night');
        i = 1;
         console.log(i);
    } else if (i == 1) {
        wallpaper.classList.remove('banner_back_night');
        wallpaper.classList.add('banner_back_lake');
        i = 2;
         console.log(i);
    } else if (i == 2) {
        wallpaper.classList.remove('banner_back_lake');
        wallpaper.classList.add('banner_back_promo');
        i = 0;
         console.log(i);
    }

});