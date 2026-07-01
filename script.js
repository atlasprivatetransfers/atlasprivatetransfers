const contact = window.TRANSPORTS_ATLAS_CONTACT || {};
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

const phoneDisplay = contact.phoneDisplay || "07 00 00 00 00";
const phoneHref = contact.phoneHref || "+33000000000";
const email = contact.email || "contact@transports-atlas.fr";
const whatsappNumber = contact.whatsappNumber || "33000000000";
const whatsappMessage = contact.whatsappMessage || "Bonjour Atlas Private, je souhaite réserver un trajet.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll(".js-phone-link").forEach((link) => {
  link.href = `tel:${phoneHref}`;
});

document.querySelectorAll(".js-phone-text").forEach((link) => {
  link.textContent = phoneDisplay;
});

document.querySelectorAll(".js-email-link").forEach((link) => {
  link.href = `mailto:${email}`;
});

document.querySelectorAll(".js-email-text").forEach((link) => {
  link.textContent = email;
});

document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Demande bien reçue. Atlas Private revient vers vous rapidement.";
  form.reset();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
