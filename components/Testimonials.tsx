import { ReactNode } from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react"

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
}: {
  src: string
  name: string
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src}  mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Shop</TestimonialHeading>
              <TestimonialText>
              Good shop, good service, lots of choices, 
              the service is good and of course the price is really reasonable. 
              Its very recommended for people who look for vaping stuff
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Amazing Service</TestimonialHeading>
              <TestimonialText>
              Recommended for tourists looking for vaping needs. 
              around the shop there's alot of tourism spot which called pasir putih carnival market. 
              the vape shop is located inside the carnival market. The staff of the shop is friendly and the price is also reasonable. 
              got to try lot's of local vape juices. 
              the shop keeper is kind enough to share lots of information about vaping which i don't know and helps a lot.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jane Cooper"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              DAMN! a complete range of hardware including sub-ohm and non sub-ohm tanks, 
              regulated and unregulated mods, rebuildable atomizers, spare coils, 
              batteries, building supplies and the usual selection of accessories,
              but they really shine when it comes to their e-liquid selection.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.openhost.co.za/download/bootmin/img/avatar_lg.jpg"
              }
              name={"Brad Wilson"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}