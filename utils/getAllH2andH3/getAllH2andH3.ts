import { v4 as uuid } from "uuid";

export const getAllH2andH3 = () => {
  const allH2 = [...(document?.querySelectorAll("#article h2") as any)];

  // Array para almacenar los elementos <h3>
  const allH3 = [];

  // Itera sobre los elementos <h2>
  for (let i = 0; i < allH2.length; i++) {
    allH2[i].setAttribute("id", `${uuid()}`); // agregar ID al h2 correspondiente
    const h2 = allH2[i];
    // Obtiene el siguiente elemento después del <h2>
    let nextElement = h2.nextElementSibling;
    let h3BetweenH2 = [];
    // Itera sobre los elementos siguientes hasta encontrar otro <h2> o llegar al final
    while (nextElement && nextElement.tagName !== "H2") {
      // Si el elemento es un <h3>, agrégalo al array
      if (nextElement.tagName === "H3") {
        nextElement.setAttribute("id", `${uuid()}`); // agregar ID al h3 correspondiente
        h3BetweenH2.push(nextElement);
      }

      // Obtiene el siguiente elemento
      nextElement = nextElement.nextElementSibling;
    }

    // agregar todos los h3 entre entre 2 h2 al array
    allH3.push(h3BetweenH2);
  }

  return { allH2, allH3 };
};
