import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack bgColor={"white"} borderRadius={"lg"} alignItems={"start"} w={"lg"}>
      <VStack>
        <Image src={imageSrc} borderRadius={"lg"} marginLeft={0.1}></Image>
        <VStack display={"flex"} alignItems={"flex-start"} padding={"3.5"}>
          <Heading color={"black"} size={"md"} paddingRight={"24"}>
            {title}
          </Heading>
          <Text color={"gray"} fontSize={"16"}>
            {description}
          </Text>
          <HStack>
            <Text
              color={"blackAlpha.900"}
              fontSize={"sm"}
              fontWeight={"medium"}
            >
              See more
              <FontAwesomeIcon
                icon={faArrowRight}
                size="1x"
                style={{ marginLeft: "5" }}
              />
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
