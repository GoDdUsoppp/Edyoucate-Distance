document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-counter");
  counters.forEach((counter) => {
    const targetStr = counter.getAttribute("data-target");
    const digits = targetStr.split("");
    counter.innerHTML = "";
    counter.classList.add("odo-wrap");

    digits.forEach((digit, index) => {
      const col = document.createElement("div");
      col.className = "odo-col";
      const finalDigit = parseInt(digit, 10);

      if (isNaN(finalDigit)) {
        col.innerHTML = `<div class="odo-digit">${digit}</div>`;
        col.dataset.offset = 0;
      } else {
        col.style.transitionDuration = `${2 + index * 0.4}s`;
        let stripHTML = "";
        const spins = 2;
        for (let i = 0; i < spins; i++) {
          for (let j = 0; j <= 9; j++)
            stripHTML += `<div class="odo-digit">${j}</div>`;
        }
        for (let j = 0; j <= finalDigit; j++) {
          stripHTML += `<div class="odo-digit">${j}</div>`;
        }
        col.innerHTML = stripHTML;
        col.dataset.offset = spins * 10 + finalDigit;
      }
      counter.appendChild(col);
    });
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cols = entry.target.querySelectorAll(".odo-col");
          cols.forEach((col) => {
            const offset = col.dataset.offset;
            col.style.transform = `translateY(-${offset * 1.1}em)`;
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  const statsSection = document.getElementById("stats-section");
  if (statsSection) observer.observe(statsSection);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
          "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#E50000" }, // Brand Red Dots
            "shape": { "type": "circle" },
            "opacity": { "value": 0.6, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff", // White connecting lines
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "grab" },
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } },
              "push": { "particles_nb": 4 }
            }
          },
          "retina_detect": true
        });
      }
      }, 500);
    });