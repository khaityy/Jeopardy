//    CONSTANTS
const game = document.getElementById('game')
const scoreLog = document.getElementById('score')

const jeopardyCategories = [
  {
    genre: "American Idol Fandom🎤",
    questions: [
      {
        question: "Who was the trio that was apart of the first judging team for American Idol?",
        answer: ["Randy Jackson, Simon Cowell, Paula Abdul"],
        correct: "Randy Jackson, Simon Cowell, Paula Abdul",
        level: "easiest"
      },
      {
        question: "Who is the first American Idol contestant to win the show?",
        answer: ["Kelly Clarkson"],
        correct: "Kelly Clarkson",
        level: "easy"
      },
      {
        question: "Who is the judge that has been apart of the most seasons for American Idol?",
        answer: ["Simon Cowell"],
        correct: "Simon Cowell",
        level: "medium"
      },
      {
        question: "Who is the country singer who won in Season 4 that now is Top 5 for most country songs to land on the Billboard?",
        answer: ["Carrie Underwood"],
        correct: "Carrie Underwood",
        level: "tougher"
      },
      {
        question: "How many total seasons of American Idol are there? Including the newest one?",
        answer: ["Twenty two"],
        correct: "Twenty two",
        level: "hard"
      },
    ],
  },

  {
  genre: "How well do you know your toons?",
  questions: [
    {
      question: "Who is the duo of two animals who have human adventures, with most of the episodes ending in one's failure in something?",
      answer: ["Tom and Jerry"],
      correct: "Tom and Jerry",
      level: "easiest"
    },
    {
      question: "What is the name of the show that features Elmer Fudd?",
      answer: ["Looney Tunes"],
      correct: "Looney Tunes",
      level: "easy"
    },
    {
      question: "Who is the duo that merged as two animals together to make the hit show in the 90s?",
      answer: ["CatDog"],
      correct: "CatDog",
      level: "medium"
    },
    {
      question: "What is the name of the show depicting the life of someone living in the Bikini Bottom?",
      answer: ["Spongebob Squarepants"],
      correct: "Spongebob Squarepants",
      level: "tougher"
    },
    {
      question: "What is the longest running cartoon TV show that seems to predict the future?",
      answer: ["The Simpsons"],
      correct: "The Simpsons",
      level: "hard"
    },
  ],
},

{
  genre: "NBA, NFL, and MLB",
  questions: [
    {
      question: "Who is the most recent winner of the Super Bowl?",
      answer: ["Kansas City Chiefs"],
      correct: "Kansas City Chiefs",
      level: "easiest"
    },
    {
      question: "Who is the most recent MVP for the National Basketball Association?",
      answer: ["Nikola Jokic"],
      correct: "Nikola Jokic",
      level: "easy"
    },
    {
      question: "How many times have the Houston Astros won the MLB title in the past 10 years?",
      answer: ["Two times"],
      correct: "Two times",
      level: "medium"
    },
    {
      question: "What is the name of the football team that unknowingly had a murderer play on the same team as Tom Brady?",
      answer: ["The Patriots"],
      correct: "The Patriots",
      level: "tougher"
    },
    {
      question: "What are the names of the NBA teams who participated in the 'Malice at the Palace' fight?",
      answer: ["The Indiana Pacers and the Detroit Pistons"],
      correct: "The Indiana Pacers and the Detroit Pistons",
      level: "hard"
    },
  ],
},

{
  genre: "Live 📺 Debacles",
  questions: [
    {
      question: "Who is infamous for causing Janet Jackson to have a wardrobe malfunction at the Super Bowl?",
      answer: ["Justin Timberlake"],
      correct: "Justin Timberlake",
      level: "easiest"
    },
    {
      question: "Who is the artist that took the microphone from Taylor Swift to say Beyonce deserved the award more?",
      answer: ["Kanye West"],
      correct: "Kanye West",
      level: "easy"
    },
    {
      question: "Who took the blame for saying the wrong name for the winner of Miss Universe in 2015?",
      answer: ["Steve Harvey"],
      correct: "Steve Harvey",
      level: "medium"
    },
    {
      question: "Who tripped live on their way to accept their Academy Award back in 2013?",
      answer: ["Jennifer Lawrence"],
      correct: "Jennifer Lawrence",
      level: "tougher"
    },
    {
      question: "Who jumped on and T-Bagged a fan live on television while trying to reach another part of the stage at an award show?",
      answer: ["Miguel"],
      correct: "Miguel",
      level: "hard"
    },
  ],
},

{
  genre: "🎶 and Hollywood",
  questions: [
    {
      question: "Who is the King of Pop that made the hit songs Thriller and Billie Jean?",
      answer: ["Michael Jackson"],
      correct: "Michael Jackson",
      level: "easiest"
    },
    {
      question: "Who made the hit song Wake me Up Before you Go-Go?",
      answer: ["WHAM!"],
      correct: "WHAM!",
      level: "easy"
    },
    {
      question: "What is the name of the award show meant to acknowledge artists and singers for their discography in the past year?",
      answer: ["The Grammy Awards"],
      correct: "The Grammy Awards",
      level: "medium"
    },
    {
      question: "What is the name of the town infamous for shining a spotlight on future legends in the music industry?",
      answer: ["Motown"],
      correct: "Motown",
      level: "tougher"
    },
    {
      question: "Who has the most entries into the Billboard top 100?",
      answer: ["Drake"],
      correct: "Drake",
      level: "hard"
    },
  ],
},
]

function addCategory(category) {
  document.createElement('div')
  column.classList.add('genre-column')

  const genreTitle = document.createElement('div')
  genreTitle.classList.add('genre-title')
  genreTitle.innerHTML = category.genre

  column.appendChild(genreTitle)
  game.append(column)

  category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)

    if (question.level === 'easiest') {
      card.innerHTML = 100
    }
    if (question.level === 'easy') {
      card.innerHTML = 200
    }
    if (question.level === 'medium') {
      card.innerHTML = 300
    }
    if (question.level === 'tougher') {
      card.innerHTML = 400
    }
    if (question.level === 'hard') {
      card.innerHTML = 500
    }
  
  card.setAttribute('data-question', question.question)
  card.setAttribute('data-answer-1', question.answers[0])
  card.setAttribute('data-answer-2', question.answers[1])
  card.setAttribute('data-correct', question.correct)
  card.setAttribute('data-value', card.getInnerHTML())

  card.addEventListener('click', flipCard)
  })
}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
  this.innerHTML = ""
  const textDisplay = document.createElement('div')
  textDisplay.classList.add('card-text')
  textDisplay.innerHTML = this.getAttribute('data-question-text')
  const firstButton = document.createElement('button')
  const secondButton = document.createElement('button')
  firstButton.classList.add('first-button')
  secondButton.classList.add('second-button')
  firstButton.innerHTML = this.getAttribute('data-answer-1')
  secondButton.innerHTML = this.getAttribute('data-answer-2')
  this.append(textDisplay, firstButton, secondButton)
  
}

// INIT AND RENDER FUCNTIONS
// function generateBoard() {
//   const gameBoard = document.getElementById('game-board');
//   for (let i = 0; i < categories.length; i++) {
//     const categoryDiv = document.createElement('div');
//     categoryDiv.classList.add('category');
//     categoryDiv.textContent = categories[i];
//     gameBoard.appendChild(categoryDiv);

//   for (let j = 0; i < questions[i].length; j++) {
//   const questionDiv = document.createElement('div');
//   questionDiv.classList.add('question');
//   questionDiv.textContent = `$${(j+1)*100}`;
//   questionDiv.addEventListener('click', () => displayQuestion(i, j));
//   categoryDiv.appendChild(questionDiv);
//   }
// }
// }


// RESETS AND UPDATES



// INVOKE RENDER FUNCTION