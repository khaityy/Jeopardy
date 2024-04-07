//    CONSTANTS
document.addEventListener('DOMContentLoaded', function() {
  const board = document.getElementById('board')
  const modal = document.getElementById('modal');
  const modalQuestionDisplay = document.getElementById('modal-question');
  const modalAnswerDisplay = document.getElementById('modal-answer');
  const answerText = document.getElementById('answer-text');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit');
  const resultDisplay = document.getElementById('result');

  const categories = [ 
{ 
  name: "American Idol Fandom🎤",
  questions: [
    { question: "Who was the trio that was apart of the first judging team for American Idol?", answer: "Randy Jackson, Simon Cowell, Paula Abdul", shown: false },
    { question: "Who is the first American Idol contestant to win the show?", answer: "Kelly Clarkson", shown: false },
    { question: "Who is the judge that has been apart of the most seasons for American Idol?", answer: "Simon Cowell", shown: false },
    { question: "Who is the country singer who won in Season 4 that now is Top 5 for most country songs to land on the Billboard?", answer: "Carrie Underwood", shown: false },
    { question: "How many total seasons of American Idol are there? Including the newest one?", answer: "Twenty two", shown: false }
  ]
},
{ 
  name: "How well do you know your toons?",
  questions: [
    { question: "Who is the duo of two animals who have human adventures, with most of the episodes ending in one's failure in something?", answer: "Tom and Jerry", shown: false},
    { question: "What is the name of the show that features Elmer Fudd?", answer: "Looney Tunes", shown: false },
    { question: "Who is the duo that merged as two animals together to make the hit show in the 90s?", answer: "CatDog", shown: false },
    { question: "What is the name of the show depicting the life of someone living in the Bikini Bottom?", answer: "Spongebob Squarepants", shown: false },
    { question: "What is the longest running cartoon TV show that seems to predict the future?", answer: "The Simpsons", shown: false }
  ]
},
{ 
  name: "NBA, NFL, and MLB",
  questions: [
    { question: "Who is the most recent winner of the Super Bowl?", answer: "Kansas City Chiefs", shown: false },
    { question: "Who is the most recent MVP for the National Basketball Association?", answer: "Nikola Jokic", shown: false },
    { question: "How many times have the Houston Astros won the MLB title in the past 10 years?", answer: "Two times", shown: false },
    { question: "What is the name of the football team that unknowingly had a murderer play on the same team as Tom Brady?", answer: "The Patriots", shown: false },
    { question: "What are the names of the NBA teams who participated in the 'Malice at the Palace' fight?", answer: "The Indiana Pacers and the Detroit Pistons", shown: false },
  ]
},
{ 
  name: "Live 📺 Debacles",
  questions: [
    { question: "Who is infamous for causing Janet Jackson to have a wardrobe malfunction at the Super Bowl?", answer: "Justin Timberlake", shown: false },
    { question: "Who is the artist that took the microphone from Taylor Swift to say Beyonce deserved the award more?", answer: "Kanye West", shown: false },
    { question: "Who took the blame for saying the wrong name for the winner of Miss Universe in 2015?", answer: "Steve Harvey", shown: false },
    { question: "Who tripped live on their way to accept their Academy Award back in 2013?", answer: "Jennifer Lawrence", shown: false },
    { question: "Who jumped on and T-Bagged a fan live on television while trying to reach another part of the stage at an award show?", answer: "Miguel", shown: false },
  ]
},
{ 
  name: "🎶 and Hollywood",
  questions: [
    { question: "Who is the King of Pop that made the hit songs Thriller and Billie Jean?", answer: "Michael Jackson", shown: false },
    { question: "Who made the hit song Wake me Up Before you Go-Go?", answer: "WHAM!", shown: false },
    { question: "What is the name of the award show meant to acknowledge artists and singers for their discography in the past year?", answer: "The Grammy Awards", shown: false },
    { question: "What is the name of the town infamous for shining a spotlight on future legends in the music industry?", answer: "Motown", shown: false },
    { question: "Who has the most entries into the Billboard top 100?", answer: "Drake", shown: false },
  ]
}

];

categories.forEach(category => {
  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category');
  const categoryName = document.createElement('h2');
  categoryName.textContent = category.name;
  categoryDiv.appendChild(categoryName);

  category.questions.forEach((question, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('data-category', category.name);
    square.setAttribute('data-index', index);
    square.textContent = `$${(index + 1) * 100}`;
    square.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const index = parseInt(this.getAttribute('data-index'));
      const questionObj = categories.find(cat => cat.name === category).questions[index];
      if (!questionObj.shown) {
        showModal(questionObj);
        questionObj.shown = true;
      }
      
    });
    categoryDiv.appendChild(square);
  });

  board.appendChild(categoryDiv);
});

function showModal(questionObj) {
  modalQuestionDisplay.textContent = questionObj.question;
  modal.style.display = "block";
  resultDisplay.textContent = "";
  answerInput.value = "";
  answerInput.focus();
}

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  modal.style.display = "none";
});

submitButton.addEventListener('click', function() {
  const answer = answerInput.value.trim().toLowerCase();
  const currentQuestion = modalQuestionDisplay.textContent;
  const category = categories.find(cat => cat.questions.some(q => q.question === currentQuestion));
  if (!category) {
    resultDisplay.textContent = "Category not found!";
    return;
  }

  {

  }
  const questionObj = category.questions.find(item => item.question === currentQuestion);
  if (!questionObj) {
    resultDisplay.textContent = "Question not found!";
    return;
  }
  
  if (answer === questionObj.answer.toLowerCase()) {
    resultDisplay.textContent = "Correct!";
  } else {
    resultDisplay.textContent = "Incorrect my Fwen!";
  }
  });
});
