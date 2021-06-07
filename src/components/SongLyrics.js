import { Box } from "@chakra-ui/layout";
import React from "react";

const SongLyrics = ({ title, lyrics }) => {
    console.log(lyrics)
    return (
        <>
            <Box maxW="md" borderWidth="1px" borderRadius="lg">
                <h3>{title}</h3>
                <blockquote> {lyrics} </blockquote>
            </Box>
        </>
    );
};

export default SongLyrics;
