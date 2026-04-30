// Abrir e fechar card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

// Contagem com segundos
function updateCountdown() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const targetDate = new Date(card.dataset.date);
        const now = new Date();

        let diff = targetDate - now;

        if (diff <= 0) {
            card.querySelector(".countdown").innerHTML = "✅ Meta alcançada!";
            return;
        }

        let totalSeconds = Math.floor(diff / 1000);

        let years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
        totalSeconds %= (365 * 24 * 60 * 60);

        let months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
        totalSeconds %= (30 * 24 * 60 * 60);

        let days = Math.floor(totalSeconds / (24 * 60 * 60));
        totalSeconds %= (24 * 60 * 60);

        let hours = Math.floor(totalSeconds / (60 * 60));
        totalSeconds %= (60 * 60);

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        card.querySelector(".countdown").innerHTML = `
            ⏳ Faltam:<br>
            ${years} anos<br>
            ${months} meses<br>
            ${days} dias<br>
            ${hours} horas<br>
            ${minutes} minutos<br>
            ${seconds} segundos
        `;
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();