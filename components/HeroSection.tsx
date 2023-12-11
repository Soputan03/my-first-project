import Head from "next/head"
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue
} from "@chakra-ui/react"

export default function HeroSection() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box bg={useColorModeValue("gray.300", "gray.700")}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            WELCOME TO <br />
            <Text as={"span"} color={"green.400"}>
              VAPORIUM
            </Text>
          </Heading>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
          </Stack>
        </Stack>
      </Container>
      </Box>
    </>
  )
}