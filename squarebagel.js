function scrollHeroList(direction) {
  const desktopList = document.querySelector(".hero-list");
  const mobileList = document.querySelector(".hero-list-mob");
  const scrollAmount = 200;

  [desktopList, mobileList].forEach(list => {
    if (list) {
      list.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  });
}


function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  } else {
    console.warn(`No section found with id: ${id}`);
  }
}




document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("sidebar");

  if (!openBtn || !closeBtn || !sidebar) {
    console.error("Sidebar elements missing!", { openBtn, closeBtn, sidebar });
    return;
  }

  openBtn.addEventListener("click", () => {
    sidebar.style.left = "0"; // slide sidebar in
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-300px"; // slide sidebar out
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".footer-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const column = toggle.closest(".footer-column");
      column.classList.toggle("active");
    });
  });
});



/** price  slider  */

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const sliderWrapper = document.querySelector(".slider-wrapper");

function updateSlider() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (minVal > maxVal - 1000) {
    minVal = maxVal - 1000;
    minRange.value = minVal;
  }

  if (maxVal < minVal + 1000) {
    maxVal = minVal + 1000;
    maxRange.value = maxVal;
  }

  minPrice.textContent = "Rs." + minVal.toLocaleString();
  maxPrice.textContent = "Rs." + maxVal.toLocaleString();

  sliderWrapper.style.setProperty("--min", minVal);
  sliderWrapper.style.setProperty("--max", maxVal);
}

minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

updateSlider();


const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
}
