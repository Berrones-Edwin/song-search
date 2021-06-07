import { HStack } from "@chakra-ui/layout";
import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, bio, lyrics }) => {
    if (!lyrics || !bio) return null;

    const { artist, song } = search;

    return (
        <>
            <HStack maxWidth="100%">
                {lyrics.error ||
                lyrics.err ||
                lyrics.name === "AbortController" ? (
                    <Message
                        msg={`Error: The song ${song} does not exist`}
                        bgColor="#dc4535"
                    />
                ) : (
                    <SongLyrics title={song} lyrics={lyrics.lyrics} />
                )}

                {bio.artists ? (
                    <SongArtist artist={bio.artists[0]} />
                ) : (
                    <Message
                        msg={`Error: The artist ${artist} does not exist`}
                        bgColor="#dc4535"
                    />
                )}
            </HStack>
        </>
    );
};

export default SongDetails;
