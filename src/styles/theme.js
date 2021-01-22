import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        50: "#d7efff",
        100: "#c1dbee",
        200: "#abc8dc",
        300: "#95b5cb",
        400: "#80a2bb",
        500: "#6b8fab",
        600: "#567d9a",
        700: "#416c8b",
        800: "#2a5b7b",
        900: "#0d4a6c"
    }
};

const Link = {
    baseStyle: {
        textDecoration: "none"
    }
}

const customTheme = extendTheme({
    colors,
    components: {
        Link,
    },
});

export default customTheme;