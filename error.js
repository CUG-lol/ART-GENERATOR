  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 1000000) + 1;

  // If the Traffic Is 1 Millon Then Error (Due to server amouts)
  if (randomNumber === 1000000) {
    window.location.href = 'error.html';
  }
