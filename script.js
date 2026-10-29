document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".order-button").forEach(button => button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.qty);
    const qty = Number(input?.value), min = Number(button.dataset.min);
    const product = button.dataset.product || "Item";
    if (!Number.isInteger(qty) || qty < min) { alert(`Please enter at least ${min} for ${product}.`); input?.focus(); return; }
    const message = `Hello Leaf Lantern! I'd like to enquire about an order:\nProduct: ${product}\nQuantity: ${qty}\nPlease confirm the total, availability, delivery charge, and delivery date/time.`;
    window.open(`https://wa.me/917293045747?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }));
});
