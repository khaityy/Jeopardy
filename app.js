//    CONSTANTS
const user1 = "placeholder"
const submitBtn = document.querySelector('button')
const questionPlacement = document.querySelector("question")
const category1 = "American Idol Fandom🎤"
const category2 = "How well do you"

function selectQuestions(categories) {
  const selectedQuestions = [];
  categories.forEach(category => {
    const randomIndex = Math.floor(Math.random() * category.questions.length);
    selectedQuestions.push(category.questions[randomIndex]);
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