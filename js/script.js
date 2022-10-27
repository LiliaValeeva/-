// -----------------------BURGER------------------------
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  });
});

// -----------------------SWIPER------------------------
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// -----------------------TABS------------------------
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__link').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.work__card').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__link').forEach(function (e) {
        e.classList.remove('work__link--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__link--default');
      });
    });

  })
})

// -----------------------АККОРДИОН------------------------
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// -----------------------SERCH------------------------
const search = document.querySelector('.search');
const page = document.querySelector('.page');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search--active');
});

page.addEventListener('click', function () {
  search.classList.remove('search--active');
});

