const btn = document.querySelector(".btn");
const btnText = document.querySelector(".btn__text");
const body = document.querySelector("body");

const btnB = document.querySelector(".btnB");
const btnTextB = document.querySelector(".btnB__text");

item = true;
btn.addEventListener("click", () => {
  item = !item;
  btnText.style.left = item ? "0px" : "-200px";
  body.style.backgroundColor = item ? "red" : "green";
});

itemB = true;
btnB.addEventListener("click", () => {
  itemB = !itemB;
  btnTextB.style.top = itemB ? "0px" : "-50px";
  body.style.backgroundColor = itemB ? "rgb(0, 21, 255)" : "rgb(255, 153, 0)";
});
