fetch('https://official-joke-api.appspot.com/random_joke', {method: 'GET',})
      .then(x => x.json())
      .then(y => myDisplay(y))
      .catch(error => {
        alert('Opps error!');
      });

    function myDisplay(y){
      let jokeDis = document.getElementById('joke-dis');
      let jokeAns = document.getElementById('joke-answer');
      let button1 = document.getElementById('btn-ans');
      let button2 = document.getElementById('btn-ref');

    jokeDis.innerHTML = y.setup;
    jokeAns.innerHTML = y.punchline;
    
    button1.onclick = function(){
      jokeAns.style.display = "block";
        }
             button2.onclick = function(){
             location.reload();
        }
    }