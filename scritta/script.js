document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.getElementById("particles-container");
    const textElement = document.querySelector(".glitter-text");

    // Troviamo il container specifico per le particelle, ora dentro il wrapper
    // Nota: nel nuovo HTML abbiamo spostato particles-container dentro .text-wrapper o simile
    // Ma l'id è unico quindi getElementById funziona sempre.
    const particlesContainer = document.getElementById("particles-container");

    // Funzione per creare una singola scintilla
    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Otteniamo le dimensioni e la posizione del testo per centrare l'emissione
        const textRect = textElement.getBoundingClientRect();
        
        // Posizione: ORA VOGLIAMO COPRIRE TUTTO IL TESTO 
        // L'effetto "solo dentro" è gestito dal CSS mix-blend-mode: overlay.
        // Quindi generiamo particelle su tutta l'area del testo.
        
        const randomX = (Math.random() - 0.5) * textRect.width; // 100% larghezza
        const randomY = (Math.random() - 0.5) * textRect.height * 0.9; // 90% altezza (font ha un po' di padding vert)

        sparkle.style.left = "50%"; // Relativo al centro del wrapper/screen se posizionato bene
        sparkle.style.top = "50%";
        
        // Nota: se il particles-container è ora dentro .text-wrapper che è grande quanto il testo,
        // left: 50% / top: 50% è il centro del testo. Perfetto.
        
        sparkle.style.marginLeft = `${randomX}px`;
        sparkle.style.marginTop = `${randomY}px`;

        // Dimensioni casuali per la scintilla
        const size = Math.random() * 8 + 4; // tra 4px e 12px più grandi per vedere la forma
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

        // Colore variabile (Argento/Bianco/Grigio chiaro)
        const colors = ['#FFFFFF', '#F0F0F0', '#E5E5E5', '#C0C0C0', '#DCDCDC'];
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Animazione: durataBianco/Giallo chiaro per brillare meglio in overlay)
        // In overlay mode, il bianco su rosa diventa rosa molto chiaro. 
        // Il nero diventa trasparente.
        const colors = ['#FFFFFF', '#FFEEEE', '#FFFFE0']; s e 2s

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