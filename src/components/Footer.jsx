import React from "react";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import logo from '../assets/openai.png';

function footer() {
  return (
    <>
      <Box marginTop={50} marginBottom={100}>
        <Flex alignItems="center" justifyContent="center">
            <Image src={logo} alt='logo' marginRight={3}/>
            <Text>Powered By OpenAI</Text>
        </Flex>
      </Box>
    </>
  );
}

export default footer;
