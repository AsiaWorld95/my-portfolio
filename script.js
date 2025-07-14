// Theme toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Lightbox
const lightbox = document.getElementById('lightbox');
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightbox.innerHTML = `<img src="${img.src}" alt="">`;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
