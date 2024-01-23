import React from "react";
import { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import TypingEffect from "../typingEffect/typingEffect";
import { LeftSection } from "./HeroStyles";

 const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide"  style={{ color: "#13ADC7" }}>
        {isReadMore ? "...Voir plus" : " Voir moins"}
      </span>
    </p>
  );
};

const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey salut,
        </SectionTitle>
        <div style={{ fontSize: "24px", marginBottom: "6px" }}>
          <TypingEffect
            staticText="Je suis"
            text={[
              "Joel",
              "développeur",
              "Front End",
              "autodidacte",
              "diplômé Bac+5",
            ]}
          />
        </div>
        <SectionText>
        Infos
Autodidacte et passionné par le monde de la tech, en particulier le développement web, je mets au service de votre entreprise mes connaissances en développement Front End. Diplômé d'un{" "}
          <a
            href="https://www.hetic.net/formations/mastere-cto-tech-lead"
            style={{ color: "#13ADC7" }}
          >
            Mastère CTO & Tech Lead
          </a>{" "}
          de l'école{" "}
          <a href="https://www.hetic.net/" style={{ color: "#13ADC7" }}>
            HETIC
          </a>{" "}
          plus de 3 ans d'expérience, le métier de développeur Front End, le déploiement et la gestion des sites Web, n’ont plus de secrets pour moi. 
Porté vers la résolution des problèmes complexes, et la recherche des solutions innovantes, c’est avec enthousiasme que je travaille pour atteindre des résultats de qualité supérieure.
Vous recherchez un collaborateur motivé, polyvalent, et capable de relever des défis ? N'hésitez pas à me contacter !
        </SectionText>

        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("/files/Joel.pdf", "_blank");
          }}
        >
          Mon CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
