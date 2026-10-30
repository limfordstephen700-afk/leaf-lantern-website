document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});

const LEAF_LANTERN_WHATSAPP = "917293045747";
function enquireWhatsApp(message) {
  const url = `https://wa.me/${LEAF_LANTERN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
function orderProduct(product, price, minimum, inputId) {
  const input = document.getElementById(inputId);
  if (!input) { alert("Quantity field not found. Please refresh the page."); return; }
  const quantity = Number(input.value);
  if (input.value.trim() === "" || !Number.isInteger(quantity) || quantity < minimum) {
    alert(`Please enter at least ${minimum} for ${product}.`); input.focus(); return;
  }
  const total = price * quantity;
  const message = `Hello Leaf Lantern! I'd like to enquire about an order.\n\nProduct: ${product}\nQuantity: ${quantity}\nPrice per unit: ₹${price}\nEstimated total: ₹${total}\n\nPlease confirm availability, delivery charges, and delivery time.`;
  enquireWhatsApp(message);
}
