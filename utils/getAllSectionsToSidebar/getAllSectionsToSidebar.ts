import { v4 as uuid } from "uuid";

export const getAllSectionsToSidebar = () => {
  let allSections: HTMLElement[] = [
    ...(document?.querySelectorAll("#article section") as any),
  ];

  // Array para almacenar los elementos sections que contengan los H3 y H3
  const allH2Sections: HTMLElement[] = [];
  const allH3Sections: HTMLElement[][] = [];

  // Numero del indice del ultimo elemento h2 dentro del bucle
  let h2index = 0;

  // Iterar sobre todas las secciones
  for (let i = 0; i < allSections.length; i++) {
    const firstElementOfSection = allSections[i].firstElementChild;

    if (firstElementOfSection?.tagName === "H2") {
      h2index = i;

      const h2section = allSections[i];
      h2section.setAttribute("id", `${uuid()}`);
      h2section.setAttribute("content", firstElementOfSection.innerHTML);
      allH2Sections.push(h2section);
    }

    if (firstElementOfSection?.tagName === "H3") {
      const h3section = allSections[i];
      h3section.setAttribute("id", `${uuid()}`);
      h3section.setAttribute("content", firstElementOfSection.innerHTML);

      allH3Sections[h2index] = allH3Sections[h2index]
        ? [...allH3Sections[h2index], h3section]
        : [h3section];
    }
  }

  return { allH2Sections, allH3Sections };
};
