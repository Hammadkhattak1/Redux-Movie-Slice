import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/home";
import About from "./pages/about";
import Details from "./pages/details";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />



        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
