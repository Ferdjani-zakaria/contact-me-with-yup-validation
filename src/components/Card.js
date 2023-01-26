import { Heading, HStack, Image, Text, VStack ,Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <Box bg="#ffffff" rounded="md" overflow="hidden">
      <VStack >
        <Image src={imageSrc} alt="project preview" rounded="md" w="100%"/>
        <Box p={5}>
          <VStack spacing={5} alignItems="flex-start">
            <Heading as="h2" size="md" color="#000000">
              {title}
            </Heading>
            <Text color="#666666" fontSize="sm">{description}</Text>
            <Text color="#000000" fontSize="sm">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
