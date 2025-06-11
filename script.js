// Contact form handler (no backend, so just demo)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});