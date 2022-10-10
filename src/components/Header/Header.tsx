/* eslint-disable react/jsx-no-useless-fragment */
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import HeaderButton from "./HeaderButton";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path !== "/sign-in" && path !== "/sign-up" && path !== "/sign-up/ong" ? (
        <Flex
          w="calc(100vw - 240px)"
          h="56px"
          bg="tertiary"
          pr="23px"
          justify="flex-end"
          align="center"
          columnGap="22px"
          borderBottom="2px solid rgba(0, 0, 0, 0.13)"
          position="fixed"
          top="0"
          right="0"
          zIndex="1"
        >
          <HeaderButton text="Fazer login" path="/sign-in" />
          <HeaderButton text="Cadastre-se" path="/sign-up" />
        </Flex>
      ) : (
        ""
      )}
    </>
  );
}
