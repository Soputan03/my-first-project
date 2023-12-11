"use client";

import {
  Container,
  Card,
  CardBody,
  Center,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  chakra,
  SimpleGrid
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function OurTeam() {
  const [team, setTeam] = useState([]);

  const fetchTeamData = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=4");
    const team = await resp.json();
    setTeam(team.results);
    console.log(team.results);
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  return (
    <Container maxW={"5xl"} mt={7} mb={"12"} pb={{ base: 20, md: 20 }}>
    <chakra.h2 fontSize="3xl" fontWeight={"700"} textAlign={"center"} mb={7}>
        Meet Our Team!
      </chakra.h2>
    <SimpleGrid columns={2} spacingX='80px' spacingY='30px'>
      {team.map((user, index) => {
        return (
            <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card maxW="md">
              <CardBody>
                <Center>
                  <Image
                    maxHeight={"200"}
                    src={user.picture.medium}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Center>
                <Stack mt="2" spacing="3">
                  <Heading size="md" textAlign={"center"}>
                    {`${user.name.first} ${user.name.last}`}
                  </Heading>
                  <Text
                    fontSize={"12"}
                    paddingBottom={"5"}
                    textAlign={"center"}
                  >
                    Chief Executive Officer (CEO)
                  </Text>
                  <Text textAlign={"justify"} fontSize={"14"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas facilis consectetur ut voluptate harum voluptatum
                    labore quae veniam, ab quam nemo architecto! Error fugiat
                    asperiores ipsam aspernatur, architecto laudantium
                    distinctio.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
           </Flex>
        );
      })}
    </SimpleGrid>
    </Container>
  );
}