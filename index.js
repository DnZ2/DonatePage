// import "./index.css";
import moment from "moment";

const form = document.querySelector(".donate-form");
const input = document.querySelector(".donate-form__donate-input");

const donateList = document.querySelector(".donates-container__donates");
const totalDonateValue = document.querySelector("#total-amount");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  totalDonateValue.innerText = `${getNumberOfDollars() + Number(input.value)}$`;
  donateList.innerHTML += DonateInfo(input.value);
});

function DonateInfo(donate) {
  const donateDate = new Date(Date.now());
  const date = moment(donateDate).format("MMMM Do YYYY, h:mm:ss a");
  return `<div class="donate-item">${date} - <b>${donate}$</b></div>`;
}

function getNumberOfDollars() {
  const totalDollars = totalDonateValue.innerText;
  return Number(totalDollars.substring(0, totalDollars.length - 1));
}
