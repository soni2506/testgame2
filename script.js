function startGame() {
    window.location.href = "category2.html";
  }
  
  function goToHighScores() {
    window.location.href = "highscores.html";
  }
  
  function showAbout() {
    alert("Trivia That'll Trip Ya is a fun, fast-paced trivia game to test your smarts. Choose categories, pick a timer, and beat your own high score!");
  }

  function handleAnswerSelection(button, isCorrect) {
    // Disable all options
    const allButtons = document.querySelectorAll(".option");
    allButtons.forEach(btn => btn.disabled = true);
  
    // Apply correct/incorrect class
    if (isCorrect) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  
    // Move to next question after 1 second
    setTimeout(() => {
      // Reset buttons
      allButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
      });
  
      // Your code to load the next question here:
      loadNextQuestion(); // <- Replace with your actual function
    }, 1000);
  }
  