const jokeDis = document.getElementById('joke-dis');
const jokeAns = document.getElementById('joke-ans');
const btnAnswer = document.getElementById('btn-answer');
const btnRefresh = document.getElementById('btn-refresh');

let currentJoke = { question: '', answer: '' };

// Fetch a joke from the API
async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    currentJoke = {
      question: joke.setup,
      answer: joke.punchline
    };
    displayJoke();
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeDis.textContent = 'Oops! Something went wrong. Please try again.';
    jokeAns.textContent = '';
  }
}

// Display the joke question
function displayJoke() {
  jokeDis.textContent = currentJoke.question;
  jokeAns.textContent = '';
}

// Show the joke answer
function showAnswer() {
  jokeAns.textContent = currentJoke.answer;
}

// Event listeners
btnAnswer.addEventListener('click', showAnswer);
btnRefresh.addEventListener('click', fetchJoke);

// Fetch the first joke on page load
fetchJoke();