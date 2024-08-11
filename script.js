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


let targetDate = null;

function setTargetDate() {
  const dateInput = document.getElementById("dateInput").value;
  if (dateInput) {
    targetDate = new Date(dateInput);
    updateCountdown();
  } else {
    alert("Sanani tanlang!");
  }
}

function updateCountdown() {
  if (!targetDate) {
    document.getElementById("countdown").innerHTML = "Sanani tanlang!";
    return;
  }

  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML = "Sanagacha vaqt tugadi!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `<div>${days} kun ${hours} soat ${minutes} minut ${seconds} sekund</div>`;
}

setInterval(updateCountdown, 1000);
