import AbdmLogo from "./assets/images/project-abdm-logo.svg";
import AbdmHomepage from "./assets/images/project-abdm-1.jpg";
import SeptCinqLogo from "./assets/images/project-septcinq-logo.svg";
import SeptCinqHomepage from "./assets/images/project-septcinq-1.jpg";
import SeptCinqProductPage from "./assets/images/project-septcinq-2.jpg";
import SeptCinqItemPage from "./assets/images/project-septcinq-3.jpg";
import RosemontLogo from "./assets/images/project-rosemont-logo.svg";
import RosemontHomepage from "./assets/images/project-rosemont-1.jpg";
import UnityLogo from "./assets/images/project-unity-logo.svg";
import UnityProject from "./assets/images/project-unity-1.jpg";
import SochLogo from "./assets/images/project-soch-logo.svg";
import SochHomepage from "./assets/images/project-soch-1.jpg";
import SochProductPage from "./assets/images/project-soch-2.jpg";
import QubLogo from "./assets/images/project-qub-logo.svg";
import QubLogin from "./assets/images/project-qub-1.jpg";
import QubHomepage from "./assets/images/project-qub-2.jpg";
import QubItemPage from "./assets/images/project-qub-3.jpg";
import WikiLogo from "./assets/images/project-wiki-logo.svg";
import WikiHomepage from "./assets/images/project-wiki-1.jpg";

export const projects = [
  {
    id: "1",
    slug: "au-bout-du-monde",
    client: "Au Bout du Monde",
    client_type: "Agence de voyage",
    project_cat: ["Design Web"],
    project_type: "Projet Formation",
    project_year: "2018",
    project_logo: `${AbdmLogo}`,
    project_color: "#1ED2AF",
    details:
      "Projet de formation visant la conception visuelle et graphique d'une maquette fonctionnelle.",
    tools: ["Illustrator"],
    photos: [{ id: "1", name: "Page d'Accueil", photo: `${AbdmHomepage}` }],
  },
  {
    id: "2",
    slug: "sept-cinq",
    client: "SeptCinq",
    client_type: "Boutique de vêtements et vente en ligne",
    project_cat: ["Design Web", "Dev"],
    project_type: "Projet Formation",
    project_year: "2018",
    project_logo: `${SeptCinqLogo}`,
    project_color: "#C1FAFF",
    details:
      "Projet de formation visant toutes les étapes depuis la conception et l'élaboration d'une maquette d'un site fictif d'une boutique de vêtements et de vente en ligne, jusqu'à son intégration finale.",
    tools: ["Illustrator", "HTML", "CSS", "JQuery"],
    photos: [
      { id: "1", name: "Page d'Accueil", photo: `${SeptCinqHomepage}` },
      { id: "2", name: "Page Produits", photo: `${SeptCinqProductPage}` },
      { id: "3", name: "Page Produit", photo: `${SeptCinqItemPage}` },
    ],
    url_github: "",
    url_vercel: "",
  },
  {
    id: "3",
    slug: "rosemont",
    client: "Rosemont Camera Gear",
    client_type: "Boutique de vente en ligne",
    project_cat: ["Design Web", "Dev"],
    project_type: "Site e-vitrine",
    project_year: "2018",
    project_logo: `${RosemontLogo}`,
    project_color: "#262626",
    details:
      "Rosemont Camera Gear est une petite entreprise montréalaise spécialisée dans la vente de sangles pour appareil photo qui avait besoin d'un site e-vitrine sur Wordpress afin de renforcer son compte actuel Etsy.",
    tools: ["Illustrator", "Wordpress", "PHP", "Jquery"],
    photos: [
      { id: "1", name: "Page d'Accueil", photo: `${RosemontHomepage}` },
      { id: "2", name: "Page produit", photo: `${SeptCinqProductPage}` },
    ],
  },
  {
    id: "4",
    slug: "unity-design",
    client: "Unity Design",
    client_type: "Entreprise de design",
    project_cat: ["Design Web"],
    project_type: "Projet en cours",
    project_year: "2018",
    project_logo: `${UnityLogo}`,
    project_color: "#FCEA10",
    details:
      "Projet personnel et exercice de style qui se voulait dans l'élaboration et l'intégration d'une maquette avec des mises en pages et jeux d'animations plus tendance 2018.",
    tools: ["Figma"],
    photos: [
      { id: "1", name: "Page Projets", photo: `${UnityProject}` },
      { id: "2", name: "Page Services", photo: `${SochProductPage}` },
    ],
  },
  {
    id: "5",
    slug: "soch",
    client: "Soch",
    client_type: "Pâtisseries et Desserts Faits-Maison",
    project_cat: ["Design Web"],
    project_type: "Projet en cours",
    project_year: "2019",
    project_logo: `${SochLogo}`,
    project_color: "#DDC3C4",
    details:
      "Soch est une petite entreprise privée de pâtisseries et desserts faits-maison pour laquelle j'ai élaboré une maquette fictive pour faciliter une éventuelle expansion vers la vente en ligne et augmenter leur visibilité.",
    tools: ["Figma"],
    photos: [
      { id: "1", name: "Page d'Accueil", photo: `${SochHomepage}` },
      { id: "2", name: "Page Produits Catégorie", photo: `${SochProductPage}` },
    ],
  },
  {
    id: "6",
    slug: "qub",
    client: "Qub",
    client_type: "Service streaming de musique en ligne",
    project_cat: ["Design Web", "Dev"],
    project_type: "Projet Formation",
    project_year: "2020",
    project_logo: `${QubLogo}`,
    project_color: "#FF21B2",
    details:
      "Projet de formation d'un site fictif de streaming de musique, basé sur la dynamisation de la connexion utilisateur, les données type object, ainsi que les différents routages.",
    tools: ["Figma", "React", "JSX", "SASS"],
    photos: [
      { id: "1", name: "Page Connexion", photo: `${QubLogin}` },
      { id: "2", name: "Page d'Accueil", photo: `${QubHomepage}` },
      { id: "3", name: "Page Item", photo: `${QubItemPage}` },
    ],
    url_github:
      "https://github.com/franciscaluz/AEC_Front_End/tree/master/Programmation2/04-projet-1/qub",
    url_vercel: "https://aec-front-end-eight.vercel.app/",
  },
  {
    id: "7",
    slug: "wik-and-morty",
    client: "Wik & Morty",
    client_type: "Open source",
    project_cat: ["Design Web", "Dev"],
    project_type: "Projet Formation",
    project_year: "2020",
    project_logo: `${WikiLogo}`,
    project_color: "#312651",
    details:
      "Projet de formation visant les opération CRUD sur un open source fictif basé sur la série Rick & Morty",
    tools: ["Figma", "React", "JSX", "SASS"],
    photos: [
      { id: "1", name: "homepage", photo: `${WikiHomepage}` },
      { id: "2", name: "product page", photo: `${SochProductPage}` },
    ],
    url_github: "",
    url_vercel: "",
  },
];
