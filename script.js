// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
  
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Perform form validation
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('textarea');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Send form data to the server (You may need to implement the server-side logic separately)

  // Reset the form
  form.reset();
  alert('Thank you for your message! We will get back to you soon.');
});
