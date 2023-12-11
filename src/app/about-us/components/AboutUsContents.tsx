import { 
    Box,
    Heading,
    Container,
    Text,
    Stack,
    chakra,
    Highlight,
    useColorModeValue
    } from "@chakra-ui/react";
import OurHistory from "./OurHistory";

export default function AboutUs() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        // textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 15, md: 10 }}
      >
        <Heading
          fontWeight={600}
          textAlign={"center"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"100%"}
        >
            <Highlight
              query='ABOUT US'
              styles={{ px: '5', py: '1', rounded: 'full', bg: 'orange.100' }}
            >
            ABOUT US
            </Highlight>
        </Heading>
        <chakra.h2 pt={10} textAlign={"center"} fontSize="3xl" fontWeight="700">
            <Highlight
              query='VAPESTORE'
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.300' }}
            >
            We are The Biggest and also The Most Complete VAPESTORE in Batam
            </Highlight>
        </chakra.h2>
        <OurHistory />
      </Stack>
    </Container>
    </Box>
  );
}