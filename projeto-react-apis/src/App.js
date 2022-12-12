import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./Router/Router";

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
