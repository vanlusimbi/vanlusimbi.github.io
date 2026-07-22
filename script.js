// ===== Highlight the active page in the navigation =====
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#a3c586";
            link.style.textDecoration = "underline";
        }
    });
});

// ===== Auto-update footer year =====
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = footer.textContent.replace(/\d{4}/, year);
}