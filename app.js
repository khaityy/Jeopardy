//    CONSTANTS
const questionPlacement = document.querySelector("quest")
const cat1 = ["sq0", "sq1", "sq2", "sq3", "sq4"]
const cat2 = ["sq5", "sq6", "sq7", "sq8", "sq9"]
const cat3 = ["sq10", "sq11", "sq12", "sq13", "sq14"]
const cat4 = ["sq15", "sq16", "sq17", "sq18", "sq19"]
const cat5 = ["sq20", "sq21", "sq22", "sq23", "sq24"]
const question100 = "sq0"
const question200 = "sq1"
const question300 = "sq2"
const question400 = "sq3"
const question500 = "sq4"
const question600 = "sq5"
const question700 = "sq6"
const question800 = "sq7"
const question900 = "sq8"
const question1000 = "sq9"
const question1001 = "sq10"
const question1002 = "sq11"
const question1003 = "sq12"
const question1004 = "sq13"
const question1005 = "sq14"
const question1006 = "sq15"
const question1007 = "sq16"
const question1008 = "sq17"
const question1009 = "sq18"
const question1010 = "sq19"
const question2001 = "sq20"
const question2002 = "sq21"
const question2003 = "sq22"
const question2004 = "sq23"
const question2005 = "sq24"

const categories = [
  { cat1: "American Idol Fandom🎤",
    questions: [
      { question100: "Who is the first American Idol contestant to win the show?", answer100: "What is Kelly Clarkson"},
      { question200: "Who is the judge that has been apart of the most seasons for American Idol?", answer200: "What is Simon Cowell"},
      { question300: "Who is the country singer who won in Season 4 that now is Top 5 for most country songs to land on the Billboard", answer300: "What is Carrie Underwood"},
      { question400: "How many total seasons of American Idol are there? Including the newest one?", answer400: "What is 22"},
      { question500: "Who is the trio to be the first American Idol judges for the show?", answer500: "What is Simon Cowell, Randy Jackson, and Paula Abdul"},
      ]
    },
  
  { cat2: "How well do you know your toons?",
    questions: [
      { question600: "Who is the duo of two animals who have human adventures, with most of the episodes ending in one's failure in something?", answer600: "What is Tom and Jerry"},
      { question700: "What is the name of the show that features Elmer Fudd?", answer700: "What is Looney Tunes"},
      { question800: "Who is the duo that merged two animals together to make the hit show in the 90s?", answer800: "What is CatDog"},
      { question900: "What is the name of the show depicting the life of someone living in the Bikini Bottom?", answer900: "What is Spongebob Squarepants"},
      { question1000: "What is the longest running cartoon TV show that seems to predict the future?", answer1000: "What is The Simpsons?"}
      ]
    },
  
    { cat3: "Live 📺 Debacles",
    questions: [
      { question1001: "Who is infamous for causing Janet Jackson to have a wardrobe malfunction at the Super Bowl?", answer1001: "Who is Justin Timberlake"},
      { question1002: "Who is the artist that took the microphone from Taylor Swift to say Beyonce deserved the award more?", answer1002: "Who is Kanye West"},
      { question1003: "Who took the blame for saying the wrong name for the winner of Miss Universe in 2015?", answer1003: "Who is Steve Harvey"},
      { question1004: "Who tripped live on their way to accept their Academy Award back in 2013?", answer1004: "Who is Jennifer Lawrence"},
      { question1005: "Who jumped on and T-Bagged a fan live on television while trying to reach another part of the stage at an award show?", answer1005: "Who is Miguel"}
      ]
    },
  
    { cat4: "NBA, NFL, and MLB",
    questions: [
      { question1006: "Who is the most recent winner of the Super Bowl?", answer1006: "Who are the Kansas City Chiefs?"},
      { question1007: "Who is the most recent MVP for the National Basketball Association?", answer1007: "Who is Nikola Jokic"},
      { question1008: "How many times have the Houston Astros won the MLB title in the past 10 years?", answer1008: "What is 2 times"},
      { question1009: "What is the name of the football team that unknowingly had a murderer play on the same team as Tom Brady?", answer1009: "Who are the Patriots?"},
      { question1010: "What are the names of the NBA teams who participated in the 'Malice at the Palace' fight?", answer1010: "Who are the Indiana Pacers and the Detroit Pistons"}
      ]
    },
  
    { cat5: "🎶 and Hollywood",
    questions: [
      { question2001: "Who is the King of Pop that made the hit songs Thriller and Billie Jean?", answer2001: "Who is Michael Jackson"},
      { question2002: "Who made the hit song Wake me Up Before you Go-Go?", answer2002: "Who is WHAM!"},
      { question2003: "What is the name of the award show meant to acknowledge artists and singers for their discography in the past year?", answer2003: "What are the Grammy Awards"},
      { question2004: "What is the name of the town infamous for shining a spotlight on future legends in the music industry?", answer2004: "What is "},
      { question2005: "Who has the most entries into the Billboard top 100?", answer2005: "Who is Drake"}
      ]
    }
  ];

function selectQuestions(categories) {
  const selectedQuestions = [];
  categories.forEach(cat => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    selectedQuestions.push(categories[randomIndex]);
  });
return selectedQuestions;
}


function displayQuestion(question) {
  const questionPlacement = document.getElementById('question-placer');
  questionPlacement.innerHTML += `<p><strong>Category:</strong>${question.question}</p>`;
}

const selectedQuestions = selectQuestions(categories);
selectedQuestions.forEach(question => {
  displayQuestion(question);
});











// questionEls.forEach("sq" => {
//   .addEventListener('click', handleClick)
// })
// resetBtn.addEventListener('click', init)






// function displayQuestion(question) {
//   const questionContainer = document.getElementById('')
// }






















// 



//    VARIABLES




//    EVENT LISTENER
// submitBtn.addEventListener('click', handleClick)
// function handleClick(event) {
//   if (event.target.id === '${$100}') {
//   likesCount = likesCount + 1
//   likeButtonElement.textContent = `${likesCount} like(s). Like this post!`
//   } else {
//     dislikesCount = dislikesCount + 1
//   dislikeButtonElement.textContent = `${dislikesCount} like(s). Like this post!`
//   }
// }


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