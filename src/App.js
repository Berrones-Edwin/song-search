import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import SongSearch from "./SongSearch";

function App() {
    return (
        <ChakraProvider>
            <SongSearch />
        </ChakraProvider>
    );
}

export default App;
