# PROYECTOM1-DESIREÉ.RODRIGUEZ
# Generador de Paletas de Colores 🎨

Una aplicación web sencilla y rápida para generar combinaciones de colores aleatorias y copiar sus códigos con un solo clic.

---

1. ¿Cómo se construyó? (Decisiones Técnicas)
Este proyecto se hizo utilizando tecnologías web puras, lo que ayuda a que cargue de inmediato:
* **HTML5:** Para armar la estructura de la página (botones, menús y el contenedor).
* **CSS:** Para que la página se vea ordenada y moderna. Usé *Flexbox* para acomodar las tarjetas de colores y creé una animación para el cartel de aviso (*toast*).
* **JavaScript:** Para crear la lógica del proyecto: genera los colores al azar, calcula sus códigos (HEX/HSL) y los copia al portapapeles del usuario usando la función `navigator.clipboard`.

---

2. ¿Cómo se usa? (Instrucciones)
La pantalla es muy fácil de usar:
1. Abre el menú **Tamaño** y elige si quieres 6, 8 o 9 colores.
2. Abre el menú **Formato** y elige si quieres el código en **HEX** (ej: #FF5733) o **HSL** (ej: hsl(11, 100%, 60%)).
3. Haz clic en el botón **"Generar Paleta"** para ver los nuevos colores.
4. Si quieres usar un color, **haz clic sobre su tarjeta** y el código se guardará en tu portapapeles. ¡Listo para pegar!

---

3. ¿Cómo ejecutar el proyecto en tu computadora?
No necesitas instalar Node.js ni configurar ningún servidor. Es un proyecto estático.

1. Descarga los tres archivos del proyecto (`index.html`, `styles.css` y `script.js`) y guárdalos juntos en una misma carpeta.
2. Asegúrate de que el HTML tenga enlazados los archivos de CSS y JS.
3. Haz **doble clic** sobre el archivo `index.html`.
4. Se abrirá automáticamente en tu navegador web (Chrome, Edge, Firefox, etc.).g


