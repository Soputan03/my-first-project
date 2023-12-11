import {
    Container,
    chakra,
    Card,
    CardHeader,
    CardBody,
    Flex,
    Box,
    Heading,
    Text,
    Image,
  } from "@chakra-ui/react";
  
  export default function OurCulture() {
    return (
      <Container maxW={"5xl"} mt={7} mb={"12"}>
        <chakra.h2 fontSize="3xl" fontWeight={"700"} textAlign={"center"} mb={7}>
          Making you have anything in one placed!
        </chakra.h2>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card maxW="md">
            <Image
              objectFit="cover"
              src="https://www.vapersmap.com/imgs/11/10862/the-vaporium_68900_810x550.jpg"
              alt="Diversity & Inclusion Board"
            />
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">A Complete Device and Liquid</Heading>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                You can search anything you wanted here, such as device,
                liquid, cotton, and any other vaping equipment. and if you want
                something that we doesn't have in the store that day, we will also
                happy to help you search it
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    );
  }