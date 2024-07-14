let counter = 0;
let timer;
let isPaused = false;

const counterDisplay = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const pauseButton = document.getElementById('pause');
const likeCountDisplay = document.getElementById('like-count');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');
const submitCommentButton = document.getElementById('submit-comment');
let likes = {};

function startTimer() {
    timer = setInterval(() => {
        if (!isPaused) {
            counter++;
            counterDisplay.textContent = counter;
        }
    }, 1000);
}

startTimer();

minusButton.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});

plusButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        pauseButton.textContent = 'resume';
        minusButton.disabled = true;
        plusButton.disabled = true;
    } else {
        pauseButton.textContent = 'pause';
        minusButton.disabled = false;
        plusButton.disabled = false;
    }
});

counterDisplay.addEventListener('dblclick', () => {
    if (!likes[counter]) {
        likes[counter] = 1;
    } else {
        likes[counter]++;
    }
    likeCountDisplay.textContent = likes[counter];
});

submitCommentButton.addEventListener('click', () => {
    const commentText = commentInput.value;
    if (commentText) {
        const li = document.createElement('li');
        li.textContent = commentText;
        commentList.appendChild(li);
        commentInput.value = '';
    }
});
