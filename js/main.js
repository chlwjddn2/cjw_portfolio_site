'use strict';
// Navbar 스크롤에 따라 투명과 색을 넣어주는 함수
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
const navbar = document.querySelector('.nav');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY>headerHeight) {
        header.classList.add('navbar_dark');
    } else {
        header.classList.remove('navbar_dark');
    }
    scollAnimate();
});

document.addEventListener('scroll', () => {
    
    if(window.scrollY>navbarHeight) {
        navbar.classList.add('navbar_dark');
    } else {
        navbar.classList.remove('navbar_dark');
    }

});


// Navbar 메뉴에서 선택하면 이동하는 함수
const navbarMenu = document.querySelector('.navbar_menu');
const nav = document.querySelector('.nav');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    console.log('link: ', link);
    if(link == null) {
        return;
    } 
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    selectNavItem(target);
});
//Navbar Toggleing 
const navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener('click',() => {
    nav.classList.toggle('open');
});

// 홈 화면 contact 버튼 클릭 시 contact section으로 이동
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
})

// 스크롤 할 떄 투명도 조절
const home =  document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 맨 위로 이동하는 화살표 버튼
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove
        ('visible');
    }
})

arrowUp.addEventListener('click', ()=> {
    scrollIntoView('#home')
});


const sectionIds = [
    '#home', 
    '#about', 
    '#skills', 
    '#work', 
    '#contact'
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
// console.log('section',sections);
// console.log('navItems', navItems);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
}

function scrollIntoView(selector) {
    const scrollTo =  document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
// home화면 애니메이션 효과
const snow_wrap = document.querySelector('.snow_wrap');
function createSnow(){
    const snow = document.createElement("div");
    snow.classList.add('snow');
    snow.style.marginLeft = randomPosition() + 'px';
    // document.body.appendChild(el);
    snow_wrap.appendChild(snow);
}

function randomPosition(){
    return Math.floor(Math.random() * window.innerWidth);
}
for(let i = 0; i<300; i++){
    createSnow();
}

//스크롤 애니메이션 효과
const section = document.querySelectorAll('.ani');
const about = document.querySelector('.about_contanier');
function scollAnimate(){
    const windowHeight = window.innerHeight;
    console.log('windowHeight' + windowHeight);
    console.log('about: ' + about.getBoundingClientRect().top);
    section.forEach((item)=>{
        let itemLocation = item.getBoundingClientRect().top;
        // console.log('item: ',itemLocation);
        if(windowHeight > itemLocation){
        item.classList.add('active');
        }
    });
}

