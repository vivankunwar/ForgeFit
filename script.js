const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const price = document.getElementById("price");
const description = document.getElementById("price-description");

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    price.textContent = "30";
    description.textContent = "First-time subscriber price";
});


yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    price.textContent = "360";
    description.textContent = "First-time subscriber price";
});
