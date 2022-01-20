let submit = document.querySelector(".container form input[type='submit']");
let btn = document.querySelector("button");
submit.onclick = function clickd() {
  let phoneNumber = document.querySelector(
    ".container form input[type='tel']"
  ).value;
  let inpMessage = document.querySelector(
    ".container form input[type='text']"
  ).value;
  let realMessage = document.querySelector(".overlay a");
  let overlay = document.querySelector(".overlay");
  let copy = document.querySelector(".copy");
  let copied = document.querySelector(".copied");

  let message = "";
  let phone = "";
  let allLink = "";
  if (phoneNumber.length >= 11 && phoneNumber.startsWith("01")) {
    phone = phone.concat(2, phoneNumber);
  }
  if (!inpMessage.includes(" ") && !inpMessage.includes("/")) {
    message = inpMessage;
  } else if (inpMessage.includes(" ") || inpMessage.includes("/")) {
    message = inpMessage.replace(/\s/g, "%20").replace(/\\|\//g, "%2F");
  }
  allLink = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  realMessage.setAttribute("href", allLink);
  realMessage.innerHTML = allLink;
  overlay.style.display = "block";

  copy.onclick = function () {
    let realMessage = document.querySelector(".overlay a");
    navigator.clipboard.writeText(realMessage.textContent);
    copied.style.display = "block";
  };
};

btn.onclick = function () {
  let overlay = document.querySelector(".overlay");
  overlay.remove();
  location.reload();
};

document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};
