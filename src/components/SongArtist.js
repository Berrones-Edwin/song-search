import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";

const SongArtist = ({ artist }) => {
    return (
        <>
            <Box maxW="md">
                <Image
                    boxSize="200px"
                    src={artist.strArtistWideThumb}
                    alt={artist.strArtist}
                />
                <Box p={6}>
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {artist.strArtist}
                    </Box>

                    <p>
                        {artist.intBornYear} -{" "}
                        {artist.intDiedYear || "Presente"}
                    </p>
                    <p>{artist.strCountry}</p>
                    <p>
                        {artist.strGenre} - {artist.strStyle}
                    </p>
                    <a
                        href={`http://${artist.strWebsite}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sitio Web oficial
                    </a>
                    {/* <p>{artist.strBiographyEN}</p> */}
                </Box>
            </Box>
        </>
    );
};

export default SongArtist;
