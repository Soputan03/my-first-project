import React from "react";
import { Container, Text, Stack, chakra, Heading, Highlight } from "@chakra-ui/react";

const OurHistory = () => {
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"}>
    <Heading lineHeight='tall'>
    <Highlight
    query='Our History'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.100' }}
    >
    Our History
      </Highlight>
    </Heading>
      <Text color={"gray.600"}>
      Established in 2014, 
      we are passionate about electronic cigarettes/vaporisers and quality great tasting 
      e-liquids and we love sharing this life changing experience of switching from smoking to vaping with as many people as possible!
        <br></br>
        <br></br>
        We only sell genuine quality products from trusted suppliers and reputable brands. 
        We're quite fussy when it comes to e-liquids, 
        so we hand-pick each and every e-liquid that we stock from various well known brands along with new up and coming brands. 
        We check our sales data weekly and therefore we know what's popular and what the best sellers are, 
        so we're pretty confident when we recommend an E-liquid to you!
      </Text>
    </Stack>
  );
};

export default OurHistory;