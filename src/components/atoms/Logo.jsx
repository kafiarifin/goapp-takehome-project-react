import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function Logo({ props, imageLogo, altLogo }) {
    return (
        <Image h={8} src={imageLogo} alt={altLogo} {...props} />
    );
}