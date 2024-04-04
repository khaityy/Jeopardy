//    CONSTANTS
const questionPlacement = document.querySelector("quest")
const category1 = ["sq0", "sq1", "sq2", "sq3", "sq4"]
const category2 = ["sq5", "sq6", "sq7", "sq8", "sq9"]
const category3 = ["sq10", "sq11", "sq12", "sq13", "sq14"]
const category4 = ["sq15", "sq16", "sq17", "sq18", "sq19"]
const category5 = ["sq20", "sq21", "sq22", "sq23", "sq24"]
const categories = [category1, category2, category3, category4, category5]


function selectQuestions(categories) {
  const selectedQuestions = [];
  categories.forEach(category => {
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






function displayQuestion(question) {
  const questionContainer = document.getElementById('')
}






















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