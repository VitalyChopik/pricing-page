/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================
const accordionBoxs = document.querySelectorAll('.accordion__box');
accordionBoxs.forEach(item => {
  const accordionBoxBtn = item.querySelector('.accordion__box-title');
  const accordionBoxText = item.querySelector('.accordion__box-text');
  accordionBoxBtn.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.toggle('active');
    } else {
      accordionBoxs.forEach(elem => {
        elem.classList.remove('active');
      });
      item.classList.toggle('active');
    }
  })
});

//tabs
const tableHeaderBoxs = document.querySelectorAll('.table__header-row .table__plans');
const tableBodyRows = document.querySelectorAll('.table__body-row');
const tableHeaderCols = document.querySelectorAll('.table__header-col.table__plans');
const tableHeaderList = document.querySelector('.table__header-list');

tableHeaderCols.forEach((item, index) => {
  const tableHeaderTitle = item.querySelector('.table__header-title');
  const tableHeaderListItem = document.createElement('li');
  tableHeaderListItem.classList.add('table__header-item');
  tableHeaderListItem.innerHTML = tableHeaderTitle.innerHTML;
  tableHeaderList.append(tableHeaderListItem);

  tableHeaderListItem.addEventListener('click', () => {
    if (tableHeaderList.classList.contains('active')) {
      tableHeaderList.classList.remove('active');

      tableHeaderListItem.classList.add('active');

      tableHeaderList.querySelectorAll('.table__header-item').forEach((item, i) => {
        if (i !== index) {
          item.classList.remove('active');
        }
      });
      tableBodyRows.forEach(tableBodyRow => {
        const tableBodyBoxs = tableBodyRow.querySelectorAll('.table__plans');
        tableBodyBoxs.forEach((bodyBox) => {
          bodyBox.classList.remove('active');
        });
        tableBodyBoxs[index].classList.add('active');
      })



      tableHeaderBoxs.forEach((headerBox) => {
        headerBox.classList.remove('active');
      });
      tableHeaderBoxs[index].classList.add('active');
    } else {
      tableHeaderList.classList.add('active');
    }
  });
});

tableBodyRows.forEach(tableBodyRow => {
  const tableBodyBoxs = tableBodyRow.querySelectorAll('.table__plans');
  tableBodyBoxs[0].classList.add('active');
  const tableBodySidebars = tableBodyRow.querySelectorAll('.table__sidebar');
  tableBodySidebars.forEach(elem => {
    const tableBodySidebar = elem.querySelector('.table__body-hover');
    if (tableBodySidebar) {
      elem.classList.add('hover__block');
    }
  });
});
tableHeaderList.firstElementChild.classList.add('active');
tableHeaderBoxs[0].classList.add('active');

