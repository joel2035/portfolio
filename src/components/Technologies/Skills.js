import {
  DiJavascript,
  DiDatabase,
  DiAngularSimple,  
  DiPhp,
  DiReact,
  DiGoogleAnalytics,
} from "react-icons/di";
import { SiGit, SiGithubactions } from "react-icons/si";

export const Skills = [
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => (
      <>
        React.js, Nextjs en front et Typescript pour
        le typage
      </>
    ),
  },
  {
    slug: "Php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>Php natif, Symfony et CodeIgniter </>,
  },
  {
    slug: "React Native",
    Component: DiReact,
    title: "React Native",
    Description: () => (
      <>
        {" "}
        J'utilise React Native pour développer des applications mobiles Android/IOS
      </>
    ),
  },
  {
    slug: "sql_nosql",
    Component: DiDatabase,
    title: "SQL/NoSQL",
    Description: () => (
      <>J'ai déjà travaille sur du MySQL, PostgreSQL, MongoDB et Firebase.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git est un outil que j'utilise au quotidien (GitHub, Gitlab)</>
    ),
  },
  {
    slug: "Angular",
    Component: DiAngularSimple,
    title: "Angular",
    Description: () => (
      <>
        Pour le développement des sites web
      </>
    ),
  },
  {
    slug: "GoogleAnalytics",
    Component: DiGoogleAnalytics,
    title: "Google Analytics",
    Description: () => <>Vue sur les audiences des sites Web</>,
  },
  {
    slug: "actions",
    Component: SiGithubactions,
    title: "Github Actions",
    Description: () => <>workflows CI/CD</>,
  },
];
