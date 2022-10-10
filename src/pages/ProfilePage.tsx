import { Flex } from "@chakra-ui/react";

import InfoBox from "../components/Infos/InfoBox";
import InfoText from "../components/Infos/InfoText";

export default function ProfilePage() {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      m="146px 0 0 240px"
      p="0 177.5px 67px"
    >
      <InfoText
        fontWeight={600}
        fontSize="30px"
        margin="0 0 30px"
        text="Perfil"
      />
      <InfoText
        fontWeight={700}
        fontSize="18px"
        textAlign="left"
        margin="0 0 7px"
        text="Nome"
      />
      <InfoBox height="50px" margin="0 0 25px">
        <InfoText
          fontWeight={600}
          fontSize="20px"
          margin="0"
          text="Marie Antoniete"
        />
      </InfoBox>
      <InfoText
        fontWeight={700}
        fontSize="18px"
        textAlign="left"
        margin="0 0 7px"
        text="Email"
      />
      <InfoBox height="50px" margin="0 0 25px">
        <InfoText
          fontWeight={600}
          fontSize="20px"
          margin="0"
          text="marieantoinette@gmail.com"
        />
      </InfoBox>
    </Flex>
  );
}
