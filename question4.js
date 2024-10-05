function checkBlanks() {
    const form = document.getElementById('fill-blanks-form');
    const feedback = document.getElementById('feedback');

    const word1 = form.word1.value.toLowerCase();
    const word2 = form.word2.value.toLowerCase();
    const word3 = form.word3.value.toLowerCase();

    if (word1 === 'rebellion' && word2 === 'stomping' && word3 === 'anthem') {
        feedback.textContent = "Correct! You've successfully filled in the blanks.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! Please try again.";
        feedback.style.color = "red";
    }
}
