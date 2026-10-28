# Invitación digital ExpoTec

Página estática de invitación a la ExpoTec de la EEST N.º 1 Ing. José Rafael Cantón, Coronel Brandsen.

## Archivos

- `index.html`: contenido y secciones de la página.
- `css/estilos.css`: colores, diseño adaptable a celular, animaciones y estilos.
- `js/script.js`: menú móvil, animaciones de aparición y opción de cuenta regresiva.

## Cómo abrirla

1. Descargá y descomprimí la carpeta.
2. Abrí `index.html` en el navegador para probarla.
3. Para editar el proyecto, abrí la carpeta completa en Visual Studio Code.

No requiere instalar dependencias, usar Node.js ni configurar una base de datos.

## Antes de publicarla

Revisar y completar:
- Fecha y horarios definitivos de la ExpoTec.
- Dirección exacta y acceso al establecimiento.
- Descripciones de actividades que la organización confirme.
- Si corresponde, enlaces oficiales de la escuela.

El botón de Google Maps abre una búsqueda de la escuela. Verifiquen que el pin sea el correcto antes de imprimir el QR o difundir la invitación.

## Publicarla gratis con GitHub Pages

1. Creá un repositorio en GitHub.
2. Subí `index.html`, `css/`, `js/` y `README.md` manteniendo la estructura.
3. En el repositorio, entrá en **Settings → Pages**.
4. En la opción de publicación, elegí la rama principal y la carpeta raíz (`/root`).
5. Guardá y esperá a que GitHub genere el enlace público.

Después podés crear un QR que apunte a ese enlace. Probalo con varios celulares antes de imprimir los carteles.

## Cambiar colores

En la parte superior de `css/estilos.css`, dentro de `:root`, están las variables principales:
- `--fondo`: fondo azul oscuro.
- `--celeste`: color luminoso principal.
- `--azul`: azul secundario.
- `--violeta`: detalles violetas.
- `--verde`: acentos verdes.

## Cuenta regresiva opcional

En `js/script.js`, completá `FECHA_EVENTO` con fecha, hora y zona horaria confirmadas. Para mostrarla, agregá en `index.html` un elemento como:

`<p id="cuenta-regresiva"></p>`

No se activa por defecto porque la fecha y el horario todavía deben confirmarse.
