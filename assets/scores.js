function highScores() {
    var userScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    userScores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < userScores.length; i++) {
      var olTag = document.createElement('ol');
      olTag.textContent = userScores[i].initials + userScores[i].score;
      var liEl = document.getElementById('highscores');
      liEl.appendChild(olTag);
    }
  }

highScores();