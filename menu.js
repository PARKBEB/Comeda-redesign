let ham_main_menus = document.querySelectorAll('.ham_main_menu');
let ham_nav = document.querySelector('.ham_nav img');
let ham_nav_back = document.querySelector('.ham_nav_back');
let nav_m = document.querySelector('.nav');

function menu(event) {
    let ham_sub = event.currentTarget.querySelector('.ham_sub_menu');

    ham_sub.style.display = ham_sub.style.display === "block" ? "none" : "block";
}

function nav() {
    ham_main_menus.forEach(function(ham_main) {
        ham_main.style.display = ham_main.style.display === "block" ? "none" : "block";
    });

    ham_nav_back.classList.toggle('active'); // 'active' 클래스를 토글
    nav_m.classList.toggle('dim', ham_nav_back.classList.contains('active'));
    // document.body.classList.toggle('dim');
}

function nav_close() {
    ham_main_menus.forEach(function(ham_main) {
        ham_main.style.display = ham_main.style.display === "block" ? "none" : "block";
    });

    ham_nav_back.classList.toggle('active');
    nav_m.classList.toggle('dim', ham_nav_back.classList.contains('active'));
}

// 모든 .ham_main_menu 요소에 대해 이벤트 리스너 등록
ham_main_menus.forEach(function(ham_main) {
    ham_main.addEventListener('click', menu);
});

ham_nav.addEventListener('click', nav);
nav_m.addEventListener('click', nav_close);