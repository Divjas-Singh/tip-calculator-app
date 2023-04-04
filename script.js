let totalBillInput = document.getElementById("totalBill");
let CustomPercentTip = document.getElementById("perCentTip");
let totalPersonInput = document.getElementById("numOfPeople");
let tipPresets = document.querySelectorAll("#tipPerCent li");
let tipAmountPercent;
let personEntered = 1;
let totalBillEntered = 0;

function calcTip(bill, percentSelected = 0, person = 1) {
  let percent = (percentSelected / 100) * bill;
  let tipPerPerson = percent / person;
  let totalBillPerPerson = (bill + percent) / person;
  document.querySelector(".tipPerPerson").innerText =
    "$" + eval(tipPerPerson.toFixed(2));
  document.querySelector(
    ".totalPerPerson"
  ).innerText = `$${totalBillPerPerson.toFixed(2)}`;
}
function presetSelectCheck(tipPresets) {
  tipPresets.forEach((event) => {
    event.classList.contains("buttonClick") &&
      event.classList.remove("buttonClick");
  });
}
totalBillInput.addEventListener("input", (e) => {
  totalBillEntered = Number(e.target.value) || 0;
  calcTip(totalBillEntered);
  totalPersonInput.disabled = totalBillEntered !== 0 ? false : true;
});

tipPresets.forEach((event) => {
  event.addEventListener("click", (e) => {
    CustomPercentTip.value = CustomPercentTip.value != "" ? "" : null;
    presetSelectCheck(tipPresets);
    e.target.classList.add("buttonClick");
    tipAmountPercent = Number(e.target.value);
    calcTip(totalBillEntered, tipAmountPercent);
  });
});
CustomPercentTip.addEventListener("input", (e) => {
  presetSelectCheck(tipPresets);
  tipAmountPercent = Number(e.target.value);
  calcTip(totalBillEntered, tipAmountPercent);
});

totalPersonInput.addEventListener("input", (e) => {
  personEntered = Number(e.target.value) || 1;
  calcTip(totalBillEntered, tipAmountPercent, personEntered);
});
document
  .querySelector("#outputSection button")
  .addEventListener("click", () => {
    location.reload();
  });
