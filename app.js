//    CONSTANTS
const questionPlacement = document.querySelector("question.value")
const category1 = ["question100", "question200", "question300", "question400", "question500"]
const category2 = ["question600", "question700", "question800", "question900", "question1000"]
const category3 = ["question1001", "question1002", "question1003", "question1004", "question1005"]
const category4 = ["question1006", "question1007", "question1008", "question1009", "question1010"]
const category5 = ["question2001", "question2002", "question2003", "question2004", "question2005"]

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