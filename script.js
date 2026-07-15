// Interatividade Premium e Microinterações Estilo Apple
document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll(".premium-card");

    // Efeito de iluminação radial dinâmica seguindo o cursor do mouse (Desktop)
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });

    // Feedback tátil sutil para dispositivos móveis
    cards.forEach(card => {
        card.addEventListener("touchstart", () => {
            card.style.transform = "scale(0.985)";
        }, { passive: true });

        card.addEventListener("touchend", () => {
            card.style.transform = "translateY(-2px) scale(1.012)";
        }, { passive: true });
    });
});