import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from "react";

const initialState = {
    artist: "",
    song: "",
};
const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialState);
    const toast = useToast();

    const handleChangeInput = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.artist || !form.song) {
            toast({
                title: "Error!!",
                description: "The fields artist | song is required",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        handleSearch(form);
    };

    return (
        <>
        <Box mb="15">
            <form onSubmit={handleSubmit}>
                <label htmlFor="artist">Artist</label>
                <Input
                    name="artist"
                    placeholder="Enter artist"
                    value={form.artist}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    variant="filled" 
                />
                <label htmlFor="song">Song</label>
                <Input
                    name="song"
                    placeholder="Enter song"
                    value={form.song}
                    onChange={handleChangeInput}
                    autoComplete="off"
                    variant="filled" 
                />
                <Button type="submit" px="8" colorScheme="blue" > Search</Button>
            </form>
            </Box>
        </>
    );
};

export default SongForm;
