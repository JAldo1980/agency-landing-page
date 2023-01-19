const btn1 = document.getElementById("btn1");
const toggleBtn = document.querySelector(".toggle-btn");

// ✅ Toggle button text on click
btn1.addEventListener("click", function handleClick() {
  const initialText = "*Additional Information";

  toggleBtn.classList.toggle("dark");

  if (btn1.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn1.innerHTML = "<span>close</span>";
  } else {
    btn1.textContent = initialText;
  }

  const boxIt = document.querySelector(".box");
  boxIt.classList.toggle("active");
});

// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// mobile navigation

const hamburger = document.querySelector(".hamburger");

const dropDown = document.querySelector(".drop-down");

const heroImg = document.querySelector(".hero-img");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");

  dropDown.classList.toggle("active");
});
