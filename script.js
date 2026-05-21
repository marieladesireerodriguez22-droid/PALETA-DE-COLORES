// Variable global para recordar los colores actuales en memoria
let currentPalette = [];

document.getElementById('generateBtn').addEventListener('click', function() {
    const size = parseInt(document.getElementById('paletteSize').value);
    
    // Vaciamos la memoria anterior para crear una paleta nueva
    currentPalette = [];

    for (let i = 0; i < size; i++) {
        // Generamos los componentes de color de forma aleatoria
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        // Guardamos los valores crudos en memoria
        currentPalette.push({ r, g, b });
    }

    // Dibujamos la paleta en la pantalla
    renderPalette();
    showToast('Paleta generada correctamente');
});

// NUEVO: Detecta el cambio en el selector de formatos
document.getElementById('colorFormat').addEventListener('change', function() {
    // Si ya existe una paleta guardada en memoria, la redibuja en el formato elegido
    if (currentPalette.length > 0) {
        renderPalette();
    }
});

// Función encargada únicamente de pintar las tarjetas en el HTML
function renderPalette() {
    const format = document.getElementById('colorFormat').value;
    const container = document.getElementById('paletteContainer');
    
    // Limpiamos la pantalla sin borrar la memoria
    container.innerHTML = '';

    currentPalette.forEach(color => {
        let colorString = '';
        
        // Corregido: Previene códigos HEX inválidos rellenando con ceros a la izquierda
        const hexValue = ((color.r << 16) | (color.g << 8) | color.b).toString(16).padStart(6, '0').toUpperCase();

        if (format === 'hex') {
            colorString = '#' + hexValue;
        } else if (format === 'hsl') {
            colorString = rgbToHsl(color.r, color.g, color.b);
        }

        const colorCard = document.createElement('div');
        colorCard.classList.add('color-card');
        
        colorCard.innerHTML = `
            <div class="color-box" style="background-color: #${hexValue};"></div>
            <div class="color-info">
                <p>${colorString}</p>
            </div>
        `;

        // Copiar el texto formateado actual al portapapeles
        colorCard.addEventListener('click', () => {
            navigator.clipboard.writeText(colorString);
            showToast(`¡Copiado: ${colorString}!`);
        });

        container.appendChild(colorCard);
    });
}

// Función auxiliar: Conversión matemática de RGB a HSL
function rgbToHsl(r, g, b) {
    let r_norm = r / 255, g_norm = g / 255, b_norm = b / 255;
    let max = Math.max(r_norm, g_norm, b_norm), min = Math.min(r_norm, g_norm, b_norm);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Gris plano
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r_norm: h = (g_norm - b_norm) / d + (g_norm < b_norm ? 6 : 0); break;
            case g_norm: h = (b_norm - r_norm) / d + 2; break;
            case b_norm: h = (r_norm - g_norm) / d + 4; break;
        }
        h = Math.round(h * 60);
    }
    return `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

// Función para mostrar las notificaciones Toast con control de clics rápidos
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }

    toast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

    
    






    
