// Menú desplegable para celulares
const botonMenu = document.querySelector("#menu-boton");
const navegacion = document.querySelector("#navegacion");

if (botonMenu && navegacion) {
  botonMenu.addEventListener("click", () => {
    const abierto = navegacion.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  navegacion.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navegacion.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Abrir menú");
    });
  });
}

// Animaciones al entrar en pantalla. Si el navegador no lo soporta, el contenido igual se ve.
const elementosAnimados = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementosAnimados.forEach((elemento) => observador.observe(elemento));
} else {
  elementosAnimados.forEach((elemento) => elemento.classList.add("visible"));
}

// Para agregar una cuenta regresiva cuando confirmen la fecha:
// 1. Crear en index.html un elemento con id="cuenta-regresiva".
// 2. Cambiar FECHA_EVENTO por una fecha ISO con zona horaria de Argentina.
// Ejemplo: const FECHA_EVENTO = "2026-11-12T09:00:00-03:00";
// Se deja vacío para no inventar la fecha del evento.
const FECHA_EVENTO = "";

const cuentaRegresiva = document.querySelector("#cuenta-regresiva");

if (FECHA_EVENTO && cuentaRegresiva) {
  const fechaObjetivo = new Date(FECHA_EVENTO);

  function actualizarCuenta() {
    const diferencia = fechaObjetivo.getTime() - Date.now();

    if (Number.isNaN(fechaObjetivo.getTime())) {
      cuentaRegresiva.textContent = "Próximamente";
      return;
    }

    if (diferencia <= 0) {
      cuentaRegresiva.textContent = "¡La ExpoTec ya llegó!";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    cuentaRegresiva.textContent = `${dias} días · ${horas} h · ${minutos} min`;
  }

  actualizarCuenta();
  window.setInterval(actualizarCuenta, 60000);
}
