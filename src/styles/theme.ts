import { createTheme, responsiveFontSizes} from "@mui/material";
import "@fontsource/sofia-sans-condensed/700.css";
import "@fontsource/roboto";

let theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
}
);

theme = responsiveFontSizes(theme);

export default theme;