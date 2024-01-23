function activeScroll() {
    const svc1 = document.querySelector('.service1');
    const svc2 = document.querySelector('.service2');
    const svc3 = document.querySelector('.service3');

    let windowHeight = window.innerHeight;
    let elementHeight1 = svc1.getBoundingClientRect().top;
    let elementHeight2 = svc2.getBoundingClientRect().top;
    let elementHeight3 = svc3.getBoundingClientRect().top;

    let elementBottom1 = svc1.getBoundingClientRect().bottom;
    let elementBottom2 = svc1.getBoundingClientRect().bottom;
    let elementBottom3 = svc1.getBoundingClientRect().bottom;

    if (elementHeight1 < windowHeight && elementBottom1 >= 0) {
        svc1.style.opacity = "1";
        svc1.style.transform = "translateY(0)";
    } else {
        svc1.style.opacity = "0";
        svc1.style.transform = "translateY(-150px)";
    }

    if (elementHeight2 < windowHeight && elementBottom2 >= 0) {
        svc2.style.opacity = "1";
        svc2.style.transform = "translateY(0)";
    } else {
        svc2.style.opacity = "0";
        svc2.style.transform = "translateY(-150px)";
    }

    if (elementHeight3 < windowHeight && elementBottom3 >= 0) {
        svc3.style.opacity = "1";
        svc3.style.transform = "translateY(0)";
    }else {
        svc3.style.opacity = "0";
        svc3.style.transform = "translateY(-150px)";
    }

    // 위 코드와 기능은 동일한데 동작이 다름, 코드의 문제는 아닌거 같음 (❗원인파악 필요)
    // const services = document.querySelectorAll('.service');

    // let windowHeight = window.innerHeight;
  
    // services.forEach(function(svc){
    //     let elementHeight = svc.getBoundingClientRect().top;
    //     let elementBottom = svc.getBoundingClientRect().bottom;

    //     if (elementHeight < windowHeight && elementBottom >= 0) {
    //         svc.style.opacity = "1";
    //         svc.style.transform = "translateY(0)";
    //     } else {
    //         svc.style.opacity = "0";
    //         svc.style.transform = "translateY(-150px)";
    //     }
    // })
}

window.addEventListener('scroll', activeScroll);