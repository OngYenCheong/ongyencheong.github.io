document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission with simple validation and thank you message
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      response.style.color = "orange";
      response.textContent = "Please fill out all fields.";
      return;
    }

    // Simple email regex check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      response.style.color = "orange";
      response.textContent = "Please enter a valid email address.";
      return;
    }

    response.style.color = "#32cd32";
    response.textContent = `Thanks for reaching out, ${name}! I will get back to you soon.`;

    form.reset();
  });
});
