//    CONSTANTS
const user1 = "placeholder"
const submitBtn = document.querySelector('button')
const squareEls = document.querySelector("sqr")
const categories = [
{ category1: "American Idol Fandom",
  questions: [
    { question100: "Who is the first American Idol contestant to win the show?", answer: "What is Kelly Clarkson"},
    { question200: "Who is the judge that has been apart of the most seasons for American Idol?", answer: "What is Simon Cowell"},
    { question300: "Who is the country singer who won in Season 4 that now is Top 5 for most country songs to land on the Billboard", answer: "What is Carrie Underwood"},
    { question400: "How many total seasons of American Idol are there? Including the newest one?", answer: "What is 22"},
    { question500: "Who is the trio to be the first American Idol judges for the show?", answer: "What is Simon Cowell, Randy Jackson, and Paula Abdul"},
    ]
  },

{ category2: "How well do you know your toons?",
  questions: [
    { question100: "Who is the duo of two animals who have human adventures, with most of the episodes ending in one's failure in something?", answer: "What is Tom and Jerry"},
    { question200: "What is the name of the show that features Elmer Fudd?", answer: "What is Looney Tunes"},
    { question300: "Who is the duo that merged two animals together to make the hit show in the 90s?", answer: "What is CatDog"},
    { question400: "What is the name of the show depicting the life of someone living in the Bikini Bottom?", answer: "What is Spongebob Squarepants"},
    { question500: "What is the longest running cartoon TV show that seems to predict the future?", answer: "What is The Simpsons?"}
    ]
  },

  { category3: "Live TV Debacles",
  questions: [
    { question100: "Who is infamous for causing Janet Jackson to have a wardrobe malfunction at the Super Bowl?", answer: "Who is Justin Timberlake"},
    { question200: "Who is the artist that took the microphone from Taylor Swift to say Beyonce deserved the award more?", answer: "Who is Kanye West"},
    { question300: "Who took the blame for saying the wrong name for the winner of Miss Universe in 2015?", answer: "Who is Steve Harvey"},
    { question400: "Who tripped live on their way to accept their Academy Award back in 2013?", answer: "Who is Jennifer Lawrence"},
    { question500: "Who jumped on and T-Bagged a fan live on television while trying to reach another part of the stage at an award show?", answer: "Who is Miguel"}
    ]
  },

  { category4: "NBA, NFL, and MLB",
  questions: [
    { question100: "Who is the most recent winner of the Super Bowl?", answer: "Who are the Kansas City Chiefs?"},
    { question200: "Who is the most recent MVP for the National Basketball Association?", answer: "Who is Nikola Jokic"},
    { question300: "How many times have the Houston Astros won the MLB title in the past 10 years?", answer: "What is 2 times"},
    { question400: "What is the name of the football team that unknowingly had a murderer play on the same team as Tom Brady?", answer: "Who are the Patriots?"},
    { question500: "What are the names of the NBA teams who participated in the 'Malice at the Palace' fight?", answer: "Who are the Indiana Pacers and the Detroit Pistons"}
    ]
  },

  { category5: "Music and Hollywood",
  questions: [
    { question100: "Who is the King of Pop that made the hit songs Thriller and Billie Jean?", answer: "Who is Michael Jackson"},
    { question200: "Who made the hit song Wake me Up Before you Go-Go?", answer: "Who is WHAM!"},
    { question300: "What is the name of the award show meant to acknowledge artists and singers for their discography in the past year?", answer: "What are the Grammy Awards"},
    { question400: "What is the name of the town infamous for shining a spotlight on future legends in the music industry?", answer: "What is "},
    { question500: "Who has the most entries into the Billboard top 100?", answer: "Who is Drake"}
    ]
  }
];

function displayQuestion(question) {
  const questionContainer = document.getElementById('')
}






















// const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8', 'Question 9', 'Question 10', 'Question 11', 'Question 12', 'Question 13', 'Question 14', 'Question 15', 'Question 16', 'Question 17','Question 18', 'Question 19', 'Question 20', 'Question 21', 'Question 22', 'Question 23', 'Question 24', 'Question 25']



//    VARIABLES
let player = user1
let Cat1, Ques1 = 'sqr0'



//    EVENT LISTENER
submitBtn.addEventListener('click', handleClick)
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
function generateBoard() {
  const gameBoard = document.getElementById('game-board');
  for (let i = 0; i < categories.length; i++) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.textContent = categories[i];
    gameBoard.appendChild(categoryDiv);

  for (let j = 0; i < questions[i].length; j++) {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.textContent = `$${(j+1)*100}`;
  questionDiv.addEventListener('click', () => displayQuestion(i, j));
  categoryDiv.appendChild(questionDiv);
  }







}
}


// RESETS AND UPDATES



// INVOKE RENDER FUNCTION