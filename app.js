//    CONSTANTS
const user1 = "placeholder"
const submitBtn = document.querySelector('button')
const squareEls = document.querySelector("sqr")
// const categories = [
{ name: 'American Idol Fandom,
  questions: [
    { question: "Who is the first American Idol contestant to win the show?' },
    { question: "Who is the judge that has been apart of the most seasons for American Idol?"},
    { question: ''}



  ]



}

]




['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']













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

  function displayQuestion()





}
}


// RESETS AND UPDATES



// INVOKE RENDER FUNCTION