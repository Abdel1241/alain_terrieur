import { Box, Flex, Text, Heading, Image, Spacer, Button, Link as ChakraLink, VStack, HStack } from "@chakra-ui/react";
import Link from 'next/link';
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";


// Composant de la barre de navigation
function NavBar() {
    return (
        <Flex bg="white" p={5} shadow="md">
            <Heading size="lg" fontWeight="semibold">
                <Link href="/" passHref>
                    <ChakraLink>Alain Terrieur</ChakraLink>
                </Link>
            </Heading>
            <Spacer />
            <Box>
                <Link href="/presentation" passHref>
                    <Button as={ChakraLink} mr={5} variant="outline">
                        Présentation
                    </Button>
                </Link>
                <Link href="/services" passHref>
                    <Button as={ChakraLink} variant="ghost">
                        Nos Services
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default function Presentation() {
    return (
        <Box bg="gray.100" minH="100vh">
            {/* Navigation */}
            <NavBar />

            {/* Main Content */}
            <Flex direction="column" align="center" justify="center" py={20}>
                <VStack spacing={10}>
                    <Heading as="h1" size="2xl">
                        Bienvenue chez Alain Terrieur
                    </Heading>
                    <Text fontSize="xl" maxW="container.md" textAlign="center">
                        Spécialisé dans la rénovation et la décoration intérieure, Alain Terrieur vous offre une expérience inégalée pour transformer votre espace. Explorez notre expertise et découvrez pourquoi nous sommes les meilleurs dans le métier.
                    </Text>
                    <Image src="/path-to-image.jpg" alt="Exemple d'intérieur rénové" borderRadius="lg" shadow="lg" />

                    <Text fontSize="lg" maxW="container.sm" textAlign="center">
                        Notre mission est de donner vie à vos visions. Chaque espace raconte une histoire, et nous sommes là pour aider cette histoire à se dérouler avec éclat.
                    </Text>
                </VStack>

                {/* Contact Section */}
                <VStack spacing={5} mt={20}>
                    <Heading as="h2" size="xl">
                        Contactez-nous
                    </Heading>
                    <HStack spacing={5}>
                        <ChakraLink href="mailto:contact@alainterrieur.com" isExternal>contact@alainterrieur.com</ChakraLink>
                        <ChakraLink href="tel:+1234567890">+12 345 678 90</ChakraLink>
                    </HStack>
                </VStack>
            </Flex>
        </Box>
    );
}
