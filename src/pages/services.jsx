import { Box, Flex, Text, Heading, Stack, Button, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Aménagement d'intérieur",
      description: "Notre équipe de spécialistes crée des espaces fonctionnels qui reflètent votre style personnel. De la consultation initiale à la réalisation finale, nous transformons vos visions en réalité.",
    },
    {
      title: "Rénovation complète",
      description: "Pour ceux qui cherchent à donner une nouvelle vie à leur espace, notre service de rénovation complète métamorphose votre intérieur du sol au plafond.",
    },
    {
      title: "Décoration sur mesure",
      description: "Avec un accès à une vaste gamme de fournisseurs et de fabricants, nous personnalisons chaque détail, du choix des meubles aux traitements de fenêtre, pour correspondre parfaitement à votre style.",
    },
    {
      title: "Conseil en couleur",
      description: "Laissez nos experts vous guider à travers le monde complexe des couleurs pour trouver les teintes qui compléteront parfaitement votre espace et refléteront votre personnalité.",
    },
    {
      title: "Éclairage d'ambiance",
      description: "L'éclairage peut faire ou défaire un espace. Nos experts concevront un plan d'éclairage pour mettre en valeur les meilleures caractéristiques de votre maison tout en créant l'ambiance souhaitée.",
    },
    {
      title: "Planification d'espace et Feng Shui",
      description: "Au-delà de la simple esthétique, nous utilisons des principes éprouvés pour améliorer le flux et l'énergie de votre espace, en garantissant une harmonie et un équilibre dans chaque pièce.",
    },
  ];



  return (
    <Box bg="gray.100" minH="100vh" p={5}>
      {/* Navigation */}
      <Flex bg="white" p={5} shadow="xl" justify="space-between" borderRadius="md">
        <Heading size="lg" fontWeight="semibold">
          <Link href="/" passHref>
            <ChakraLink>Alain Terrieur</ChakraLink>
          </Link>
        </Heading>
        <Flex>
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
        </Flex>
      </Flex>

      {/* Title */}
      <Heading mt={10} textAlign="center" size="2xl" fontWeight="bold">
        Nos Services
      </Heading>
      <Text mt={2} textAlign="center" fontSize="xl">
        Découvrez ce que nous offrons pour transformer votre espace
      </Text>

      {/* Main Content */}
      <Stack spacing={10} align="center" py={20} mt={5}>
        {services.map((service, index) => (
          <Box key={index} p={5} shadow="2xl" borderWidth="1px" borderRadius="md" maxW="700px" bg="white">
            <Heading fontSize="xl" mb={4} textAlign="center">{service.title}</Heading>
            <Divider mb={4} />
            <Text>{service.description}</Text>
          </Box>
        ))}

         {/* Contact Section */}
         <Stack spacing={5} mt={20}>
                    <Heading as="h2" size="xl">
                        Contactez-nous
                    </Heading>
                    <Stack spacing={5}>
                        <ChakraLink href="mailto:contact@alainterrieur.com" isExternal>contact@alainterrieur.com</ChakraLink>
                        <ChakraLink href="tel:+1234567890">+12 345 678 90</ChakraLink>
                    </Stack>
                </Stack>
      </Stack>
    </Box>
  );

  
}
