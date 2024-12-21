document.addEventListener("DOMContentLoaded", () => {
  const jokeDis = document.getElementById("joke-dis");
  const jokeAns = document.getElementById("joke-answer");
  const button1 = document.getElementById("btn-ans");
  const button2 = document.getElementById("btn-ref");

  const fetchJoke = async () => {
      try {
          const response = await fetch('https://official-joke-api.appspot.com/random_joke', { method: 'GET' });
          const joke = await response.json();
          jokeDis.innerHTML = joke.setup;
          jokeAns.innerHTML = joke.punchline;
          jokeAns.style.display = "none";
      } catch (error) {
          alert('Oops! No jokes for you.');
          console.error(error);
      }
  };

  button1.onclick = () => {
      jokeAns.style.display = "block";
  };

  button2.onclick = () => {
      location.reload();
  };

  fetchJoke();
});
