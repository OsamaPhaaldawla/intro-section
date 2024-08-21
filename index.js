let featuresBtn = document.querySelector("#features");
let companyBtn = document.querySelector("#company");
let featuresList = document.querySelector(".features-list");
let companyList = document.querySelector(".company-list");

featuresBtn.addEventListener("click", () => {
  featuresList.classList.toggle("show");
  featuresBtn.classList.toggle("show");
});
companyBtn.addEventListener("click", () => {
  companyList.classList.toggle("show");
  companyBtn.classList.toggle("show");
});

let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.querySelector("#nav-container").classList.add("show");
  document.querySelector(".overlay").classList.add("show");
  document.querySelector("#nav-container");
});

document.addEventListener("click", (e) => {
  let space =
    document.body.clientWidth -
    document.querySelector("#nav-container").clientWidth;
  if (e.pageX < space) {
    document.querySelector("#nav-container").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
  }
});
