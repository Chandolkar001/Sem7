const timerDisplay = document.getElementById("timerDisplay");
const dateTimeInput = document.getElementById("dateTime");
const startButton = document.getElementById("startButton");

const countdownTimer = {
    intervalId: null,
    targetTime: 0,

    startCountdown(targetTime) {
        this.targetTime = targetTime;

        this.intervalId = setInterval(() => {
            const remainingTime = this.targetTime - Date.now();

            if (remainingTime <= 0) {
                this.stopCountdown();
                timerDisplay.textContent = "Time's up!";
            } else {
                const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000)).toString().padStart(2, "0");
                const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)).toString().padStart(2, "0");
                const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, "0");
                const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000).toString().padStart(2, "0");
                timerDisplay.textContent = `${days}d ${hours}:${minutes}:${seconds}`;
            }
        }, 1000);

        startButton.disabled = true;
        dateTimeInput.disabled = true;
    },

    stopCountdown() {
        clearInterval(this.intervalId);
        startButton.disabled = false;
        dateTimeInput.disabled = false;
    }
};

startButton.addEventListener("click", () => {
    const selectedDateTime = new Date(dateTimeInput.value);
    const now = new Date();

    if (selectedDateTime <= now) {
        alert("Please select a future date and time.");
        return;
    }

    countdownTimer.startCountdown(selectedDateTime.getTime());
});
