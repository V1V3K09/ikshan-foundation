// Wait until the entire page is loaded
window.onload = function() {
    // Hide the loader and show the content after 4 seconds (when the slide animation finishes)
    setTimeout(function() {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('content').classList.remove('hidden');
      document.getElementById('content').classList.add('visible');
    }, 1000); // Match this with the timing in the CSS animation
  };
  