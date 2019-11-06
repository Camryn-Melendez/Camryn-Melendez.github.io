

document.getElementById('funbutton').addEventListener('click', confettiStart);

function confettiStart() {
    document.confetti.start();
}

function confettiStop() {
    confetti.stop();
}