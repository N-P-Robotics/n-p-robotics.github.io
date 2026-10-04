// Konfiguracja kolorów i czcionek pod Tailwind CDN
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                tech: ['Orbitron', 'sans-serif'],
            },
            colors: {
                nprobotics: {
                    blue: '#0F4C81',
                    dark: '#0B0F19',
                    card: '#111827',
                    accent: '#38BDF8'
                }
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navContainer = document.getElementById('navbar-container');
            if (navContainer) {
                navContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Błąd podczas ładowania menu:', error));
});
