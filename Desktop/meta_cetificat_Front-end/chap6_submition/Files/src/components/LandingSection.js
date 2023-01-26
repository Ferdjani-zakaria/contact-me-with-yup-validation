import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={20}>
      <VStack spacing={5}>
        <Avatar size="xl" name="pete" src="https://i.pravatar.cc/150?img=7"/>
        <Heading as='h6' size='sm'>{greeting}</Heading>
      </VStack>
      <VStack spacing={5}>
        <Heading as='h1' size='2xl'>{bio1}</Heading>
        <Heading as='h1' size='2xl'>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
