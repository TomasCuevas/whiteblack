const TAG_H2 = "H2";
const TAG_H3 = "H3";
const TAG_PRE = "PRE";

export const PTagPreviousH2 = () => {
  const allP = document.querySelectorAll("p");

  for (let i = 0; i < allP.length; i++) {
    const nextElement = allP[i].nextElementSibling;
    const previousElement = allP[i].previousElementSibling;

    if (nextElement?.tagName === TAG_H2 || nextElement?.tagName === TAG_H3) {
      allP[i].classList.add("p__tag-previous-h2");
    }

    if (previousElement?.tagName === TAG_PRE) {
      allP[i].classList.add("p__tag-next-pre");
    }
  }
};
