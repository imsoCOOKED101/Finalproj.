document.addEventListener("DOMContentLoaded", () => {
  const jokeDisplay = document.getElementById("joke-dis");
  const btnAnswer = document.getElementById("btn-answer");
  const btnRefresh = document.getElementById("btn-refresh");

  // Function to fetch a joke
  const fetchJoke = async () => {
      try {
          const response = await fetch("https://official-joke-api.appspot.com/random_joke");
          if (!response.ok) throw new Error("Failed to fetch joke");
          const data = await response.json();
          jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
      } catch (error) {
          jokeDisplay.textContent = "Oops! Couldn't fetch a joke.";
          console.error(error);
      }
  };

  // Event listeners
  btnAnswer.addEventListener("click", fetchJoke);
  btnRefresh.addEventListener("click", () => {
      jokeDisplay.textContent = "Click below for a joke!";
  });
});
