// Function to check and redirect if on error.js
function checkAndRedirect() {
  // Check if the user is on the error.js page
  if (window.location.href.includes('error.js')) {
    // Redirect to the specified URL
    window.location.href = 'https://replenish-titan.bydtlwebsites.repl.co/';
  }
}

// Interval to repeatedly check every 3 seconds (adjust as needed)
setInterval(checkAndRedirect, 3000); // 3000 milliseconds = 3 seconds
