// Wait until the entire page is loaded
window.onload = function() {
    // Hide the loader and show the content after 4 seconds (when the slide animation finishes)
    setTimeout(function() {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('content').classList.remove('hidden');
      document.getElementById('content').classList.add('visible');
    }, 1000); // Match this with the timing in the CSS animation
  };
  
// Initialize EmailJS
emailjs.init("SUjp-9XPIHAKKit1v");

// Get the form element
const form = document.getElementById('contact-form');

// Add submit event listener to the form
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_flsr2uc", "template_uaxce9o", {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function(response) {
        console.log("SUCCESS", response);
        alert("Message sent successfully!");
        form.reset();
    })
    .catch(function(error) {
        console.log("FAILED", error);
        alert("Failed to send message. Please try again.");
    });
});
  