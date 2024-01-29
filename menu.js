let ham_main_menus = document.querySelectorAll('.ham_main_menu');
let ham_bar = document.querySelector('.hamburger_bar img');

function menu(event) {
    let ham_sub = event.currentTarget.querySelector('.ham_sub_menu');

    ham_sub.style.display = ham_sub.style.display === "block" ? "none" : "block";
}

function bar() {
    ham_main_menus.forEach(function(ham_main) {
        ham_main.style.display = ham_main.style.display === "block" ? "none" : "block";
    });
}

// 모든 .ham_main_menu 요소에 대해 이벤트 리스너 등록
ham_main_menus.forEach(function(ham_main) {
    ham_main.addEventListener('click', menu);
});

ham_bar.addEventListener('click', bar);