const cta = document.getElementById("stickyCta");

const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const ctaSection = document.querySelector("#cta");


function isVisible(el) {
  if (!el) return false;

  const rect = el.getBoundingClientRect();

  return rect.top < window.innerHeight && rect.bottom > 0;
}


function updateCTA() {

  const inHero = isVisible(hero);
  const inFooter = isVisible(footer);
  const inCTA = isVisible(ctaSection);

  if (inHero || inFooter || inCTA) {
    cta.classList.add("hidden");
  } else {
    cta.classList.remove("hidden");
  }

}


window.addEventListener("scroll", updateCTA);
window.addEventListener("resize", updateCTA);
window.addEventListener("load", updateCTA);



/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});