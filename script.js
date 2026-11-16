const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  document.querySelectorAll(".error").forEach((item) => item.textContent = "");
  document.getElementById("formFeedback").textContent = "";

  let valid = true;
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Please enter your full name.";
    valid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (subject.length < 3) {
    document.getElementById("subjectError").textContent = "Please enter a subject (at least 3 characters).";
    valid = false;
  }
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Your message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formFeedback").textContent =
      "Thank you, " + name + ". Your form passed validation. This demo does not send messages.";
    form.reset();
  }
});
