// -------- -------- SWIPER -------- -------- //

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});


// -------- ------ TABS TRAFIC ------ -------- //

// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {

    // 1. Скрыть все content box
    contentBoxes.forEach(function (item) {
      item.classList.add('hidden');
    });

    // 2. Выбрать нужный content box и показать его
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');

  })
})

// -------- -- QUESTION ACCARDION -- -------- //    

const accordion_item = document.querySelectorAll(".accordion_item");
accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".activeA");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});
function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("activeA");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("activeA");
    content.style.height = content.scrollHeight + 10 + "px";
  }
};


const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  })
})



