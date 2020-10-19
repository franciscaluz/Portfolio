import SochHomepage from "./assets/images/webdesign-soch-1.jpg";
import SochProductPage from "./assets/images/webdesign-soch-2.jpg";
import SeptCinqHomepage from "./assets/images/webdesign-septcinq-1.jpg";
import SeptCinqProductPage from "./assets/images/webdesign-septcinq-2.jpg";
import SeptCinqItemPage from "./assets/images/webdesign-septcinq-3.jpg";

export const projects = [
  {
    id: "",
    client: "SeptCinq",
    client_type: "Boutique de vêtements et vente en ligne",
    project_cat: "Design Web",
    project_type: "Projet Formation",
    project_year: "2018",
    details: "",
    tools: [{ id: "1", tool: "illustrator" }],
    photo_list: [
      { id: "1", name: "homepage", photo: `${SeptCinqHomepage}` },
      { id: "2", name: "product page", photo: `${SeptCinqProductPage}` },
      { id: "3", name: "item page", photo: `${SeptCinqItemPage}` },
    ],
  },
  {
    id: "",
    client: "Soch",
    client_type: "Pâtisserie en ligne",
    project_cat: "Design Web",
    project_type: "Work in progress",
    project_year: "2018",
    details: "",
    tools: [{ id: "1", tool: "figma" }],
    photo_list: [
      { id: "1", name: "homepage", photo: `${SochHomepage}` },
      { id: "2", name: "product page", photo: `${SochProductPage}` },
    ],
  },
];
