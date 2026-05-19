document.getElementById('generateBtn').addEventListener('click', function() {
    const size = parseInt(document.getElementById('paletteSize').value);
    const format = document.getElementById('colorFormat').value;
    const container = document.getElementById('paletteContainer');

    //limpair el contenedor
    container.innerHTML = '';

    for (let i =0; i < size; i++) {
        //GENERAR COLORES ALEATORIOS
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        let colorString = '';

        if (format === 'hex') {
            colorString = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();

    } else if (format === 'hsl') {
        //conversión rápida de RGB A HSL
        let r_norm = r / 255, g_norm = g / 255, b_norm = b / 255;
        let max = Math.max(r_norm, g_norm, b_norm), min = Math.min(r_norm, g_norm, b_norm);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; //Acromático
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            swith (max) {
                case r_norm: h = (g_norm - b_norm) / d + (g_norm < b_norm ? 6 : 0); break;
                case g_norm: h = (b_norm - r_norm) / d + 2; break;
                case b_norm: h = (r_norm - g_norm) / d + 4; break;

            }
            h = Math.round(h * 60);
        }
        colorString =  `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    //Crear elemento visual de la tarjeta
    const colorCard = document.createElement('div');
    colorCard.classList.add('color-card');
    


    
}