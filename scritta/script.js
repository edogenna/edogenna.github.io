document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.getElementById("particles-container");
    const textElement = document.querySelector(".glitter-text");

    // Funzione per creare una singola scintilla
    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Otteniamo le dimensioni e la posizione del testo per centrare l'emissione
        const textRect = textElement.getBoundingClientRect();
        
        // Posizione iniziale casuale vicino al centro del testo, ma distribuita
        // Calcoliamo il centro del testo
        const centerX = textRect.left + textRect.width / 2;
        const centerY = textRect.top + textRect.height / 2;

        // Distribuiamo le particelle in un'area attorno al testo
        // Offset casuale relativo al centro del testo
        // Usiamo width/2 per coprire la larghezza
        const randomX = (Math.random() - 0.5) * textRect.width * 1.2; 
        const randomY = (Math.random() - 0.5) * textRect.height * 1.5;

        // Posizioniamo la scintilla relativa al container che è nel flusso normale, 
        // ma dato che particles-container è nel .container ed è absolute, 
        // dobbiamo calcolare bene gli offset.
        // In questo CSS semplice, il .container centra tutto. 
        // Possiamo posizionare le particelle relative al centro del .container (dove sta il testo).
        
        // Impostiamo la posizione top/left: 50% per partire dal centro del container
        sparkle.style.left = "50%";
        sparkle.style.top = "50%";
        
        // Applichiamo un margine per spostarla al punto di partenza desiderato
        sparkle.style.marginLeft = `${randomX}px`;
        sparkle.style.marginTop = `${randomY}px`;

        // Dimensioni casuali per la scintilla
        const size = Math.random() * 3 + 2; // tra 2px e 5px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        // Variabili CSS custom per il movimento
        // La particella si sposterà leggermente in direzioni casuali
        const tx = (Math.random() - 0.5) * 50; 
        const ty = (Math.random() - 0.5) * 50;
        
        const endTx = tx * 2; // Continua il movimento
        const endTy = ty * 2;

        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        sparkle.style.setProperty('--end-tx', `${endTx}px`);
        sparkle.style.setProperty('--end-ty', `${endTy}px`);

        // Colore variabile (bianco/oro/azzurro chiaro)
        const colors = ['#ffffff', '#fffacd', '#e0ffff'];
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Animazione: durata casuale per varietà
        sparkle.style.animationDuration = `${Math.random() * 1 + 1}s`; // Tra 1s e 2s

        particlesContainer.appendChild(sparkle);

        // Rimuovi la particella dal DOM dopo l'animazione per performance
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    // Genera scintelle continuamente
    // Aumenta la frequenza per un effetto più ricco
    setInterval(createSparkle, 50);
});