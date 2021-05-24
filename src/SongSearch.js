import { Heading, VStack } from "@chakra-ui/layout";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import SongDetails from "./components/SongDetails";
import SongForm from "./components/SongForm";
import { HelperHTTP } from "./helpers/HelperHTTP";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        const { song, artist } = search;
        let urlBio = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURI(
            artist
        )}`;

        let urlSong = `https://api.lyrics.ovh/v1/${encodeURI(
            artist
        )}/ ${encodeURI(song)}`;

        const fetchData = async () => {
            setLoading(true);

            const [artistResponse, songResponse] = await Promise.all([
                HelperHTTP().get(urlBio),
                HelperHTTP().get(urlSong),
            ]);

            console.log(artistResponse, songResponse);

            setBio(artistResponse);
            setLyrics(songResponse);
            setLoading(false);
        };

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <>
            <VStack mt={4} p={4}>
                <Heading>Song Search</Heading>
                
                <SongForm handleSearch={handleSearch} />
                {loading && <Loader />}
                {search && !loading && (
                    <SongDetails search={search} lyrics={lyrics} bio={bio} />
                )}
            </VStack>
        </>
    );
};

export default SongSearch;
