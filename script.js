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
        
    }

    
}