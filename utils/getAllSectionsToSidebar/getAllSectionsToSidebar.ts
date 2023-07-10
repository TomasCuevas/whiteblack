import { v4 as uuid } from "uuid";

export const getAllSectionsToSidebar = () => {
  let allSections: HTMLElement[] = [
    ...(document?.querySelectorAll("#article section") as any),
  ];

  // Array para almacenar los elementos sections que contengan los H3 y H3
  const allH2Sections: HTMLElement[] = [];
  const allH3Sections: HTMLElement[][] = [];

  // Numero del indice del ultimo elemento h2 dentro del bucle
  let h2Length = 0;

  // Iterar sobre todas las secciones
  for (let i = 0; i < allSections.length; i++) {
    const firstElementOfSection = allSections[i].firstElementChild;

    if (firstElementOfSection?.tagName === "H2") {
      const h2section = allSections[i];
      h2section.setAttribute("id", `${uuid()}`);
      h2section.setAttribute(
        "content",
        firstElementOfSection.textContent || ""
      );
      allH2Sections.push(h2section);
      h2Length = allH2Sections.length - 1;
    }

    if (firstElementOfSection?.tagName === "H3") {
      const h3section = allSections[i];
      h3section.setAttribute("id", `${uuid()}`);
      h3section.setAttribute(
        "content",
        firstElementOfSection.textContent || ""
      );

      allH3Sections[h2Length] = allH3Sections[h2Length]
        ? [...allH3Sections[h2Length], h3section]
        : [h3section];
    }
  }

  return { allH2Sections, allH3Sections };
};
