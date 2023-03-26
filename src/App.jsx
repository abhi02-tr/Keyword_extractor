import { useState } from "react";
import viteLogo from "/vite.svg";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import KeywordsModal from "./components/KeywordsModal";

function App() {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt:
            "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
            text +
            "",
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.8,
          presence_penalty: 0.0,
        }),
      };
      console.log(text);
      // console.log(import.meta.env.API_URL);
      const response = await fetch(
        "https://api.openai.com/v1/completions",
        options
      );
      const data = await response.json();
      console.log(data);
      setKeywords(data.choices[0].text.trim());
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box bg="blue.400" color="white" height="100%" paddingTop={70}>
      <Container centerContent maxW="3xl">
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <KeywordsModal
          keywords={keywords}
          loading={loading}
          isOpen={isOpen}
          closeModal={closeModal} 
        />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
