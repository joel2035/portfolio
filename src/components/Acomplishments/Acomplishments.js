import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { level: "Bachelor web", text: "Développement et intégration web" },
  { level: "Bac+3", text: "Développement web et Mobile" },
  { level: "BAC+4/5", text: "Master CTO & Tech Lead" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Parcours universitaire</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.level}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
