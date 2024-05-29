import { Container, Text, VStack, Heading, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Image src="https://placehold.co/600x400" alt="Heysan Logo" boxSize="150px" />
        <Heading as="h1" size="2xl">
          Welcome to Heysan
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Heysan is your go-to platform for connecting with like-minded individuals and sharing your passions. Join us and be part of a vibrant community!
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
