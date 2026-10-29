document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});

function orderProduct(product, price, minimum, inputId) {
  const input = document.getElementById(inputId);

  if (!input) {
    alert("Quantity field not found. Please refresh the page.");
    return;
  }

  const quantity = Number(input.value);

  if (
    input.value.trim() === "" ||
    !Number.isInteger(quantity) ||
    quantity < minimum
  ) {
    alert(`Please enter at least ${minimum} for ${product}.`);
    input.focus();
    return;
  }

  const total = price * quantity;

  const message =
    `Hello Leaf Lantern! I'd like to enquire about an order.\n\n` +
    `Product: ${product}\n` +
    `Quantity: ${quantity}\n` +
    `Price per unit: ₹${price}\n` +
    `Estimated total: ₹${total}\n\n` +
    `Please confirm availability, delivery charges, and delivery time.`;

  const whatsappURL =
    `https://wa.me/917293045747?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}
