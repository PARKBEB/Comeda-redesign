function carousel() {
    let carouselSlider = document.querySelector('.carousel-slider');
    let list = document.querySelector('.carousel-list');
    // let item = document.querySelector('.carousel-item');
    let list2;

    const speed = 1;

    const width = list.offsetWidth; // 요소의 가로값을 가져옴
    console.log("리스트1:" + width);
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true) // ❗의문 list를 클론하면 그 뒤에 생기는게 아닌가 조사 > 결과 : list2가 carouselSlider에 추가되면서 원본 list와 동일한 위치에 겹쳐져 있게 되기 때문
        carouselSlider.appendChild(list2)
        list2.style.left = `${width}px` // 두 번째 이미지 리스트(list2)를 첫 번째 이미지 리스트(list)의 가로 너비만큼 오른쪽으로 이동시켜 초기 위치를 설정
    }

    // list를 왼쪽으로 이동시키는 역할 && 무한 슬라이드
    function moveFirst() {
        x -= speed;
        if(width >= Math.abs(x)){
            list.style.left = `${x}px` 
        }else{
            x = width
            console.log("실행됨1");
        }
    }

    function moveSecond() {
        x2 -= speed;

        if(list2.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`
        }else{
            x2 = width;
            console.log("실행됨2");
        }
    }

    // 마우스 hover && unHover
    function hover() {
        clearInterval(a); // 설정된 interval해제
        clearInterval(b); // 설정된 interval 해제
    }

    // 0.01초 간격으로 호출함
    function unHover() {
        a = setInterval(moveFirst, 10)
        b = setInterval(moveSecond, 10)
    }

    clone()

    // 진행시간
    let a = setInterval(moveFirst, 10)
    let b = setInterval(moveSecond, 10)

    carouselSlider.addEventListener('mouseenter', hover)
    carouselSlider.addEventListener('mouseleave', unHover)
    console.log("리스트2:" + list2.style.width);
}

carousel();

// 이거 0.01초 마다 list와 list2가 1px씩 왼쪽으로 이동해서 부드럽게 보임 &&  list와 list2가 화면 왼쪽 끝으로 이동하면, 각각의 위치를 다시 초기화하여 무한 슬라이드 효과