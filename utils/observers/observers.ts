export const h2Observers = (h2: HTMLHeadingElement[]) => {
  h2.forEach((element) => {
    // Obtenemos el elemento correspondiente en el sidebar de contenido
    const h2Sidebar = document.getElementById(
      `${element.getAttribute("id")}-sidebar`
    )!;

    const options = {
      threshold: 1, // Valor de intersección requerido para activar la función de devolución de llamada.
    };

    // Observador de intersección para detectar cuando el elemento h2 es visible en la pantalla
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          h2Sidebar?.classList.add("h2__observer"); // Agrega la clase cuando el elemento h2 sea visible
        } else {
          h2Sidebar?.classList.remove("h2__observer"); // Remueve la clase cuando el elemento h2 ya no sea visible
        }
      });
    }, options);

    observer.observe(element); // Observa el elemento h2
  });
};

export const H3Observers = (h3: HTMLHeadingElement[][]) => {
  h3.flat().forEach((element) => {
    // Obtenemos el elemento correspondiente en el sidebar de contenido
    const h3Sidebar = document.getElementById(
      `${element.getAttribute("id")}-sidebar`
    )!;

    const options = {
      rootMargin: "0px 0px -400px 0px",
      threshold: 0, // Valor de intersección requerido para activar la función de devolución de llamada.
    };

    // Observador de intersección para detectar cuando el elemento h2 es visible en la pantalla
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          h3Sidebar?.classList.add("h3__observer"); // Agrega la clase cuando el elemento h2 sea visible
        } else {
          h3Sidebar?.classList.remove("h3__observer"); // Remueve la clase cuando el elemento h2 ya no sea visible
        }
      });
    }, options);

    observer.observe(element); // Observa el elemento h2
  });
};
