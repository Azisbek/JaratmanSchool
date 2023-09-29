const body = document.getElementById("body");
const icons = document.getElementById("icons_modal");
const header = document.getElementById("header");
const section = document.getElementById("section");
const icons_teacher = document.getElementById("icons_teacher");
const main_content = document.querySelector(".content_block_text");
const modal = document.getElementById("display-none");
const img_teacher = document.getElementById("img_teacher");
const modal2 = document.getElementById("modall_css");
const img_naprav_container = document.getElementById("img_naprav_container");
const footer = document.getElementById("footer");
const none = document.getElementById("none");

const buttonModal = document.getElementById("button_section");
buttonModal.addEventListener("click", () => {
  modal.style.display = "block";
  modal.style.overflowY = "visible";
  header.style.display = "none";
  main_content.style.display = "none";
  section.style.display = "none";
  icons_teacher.style.display = "none";
  body.style.backgroundColor = " rgb(2, 0, 0, 0.6)";
  img_naprav_container.style.display = "none";
  img_teacher.style.display = "none";
  modal2.style.display = "none";
  footer.style.display = "none";
  none.style.display = "none";
});

const buttonClose = document.getElementById("close_button");
buttonClose.addEventListener("click", () => {
  modal.style.display = "none";
  header.style.display = "flex";
  main_content.style.display = "block";
  section.style.display = "flex";
  icons_teacher.style.display = "flex";
  body.style.backgroundColor = "#ffff";
  // img.style.display = "block";
  img_teacher.style.display = "flex";
  img_naprav_container.style.display = "flex";
  modal2.style.display = "flex";
  footer.style.display = "block";
  none.style.display = "block";
});
