import '../styles/globals.css'
import type {AppProps} from 'next/app'
import HeaderComponent from "../components/Header.component";
import {useEffect, useMemo, useState} from "react";
import {Box, createTheme, CssBaseline, Divider, PaletteMode, ThemeProvider, Typography, useTheme} from "@mui/material";
import {getStoredTheme, getThemeOptions, setStoredTheme} from "../utils/theme";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MyApp({Component, pageProps}: AppProps) {
    const [mode, setMode] = useState<PaletteMode>('dark'); //default is dark theme

    useEffect(() => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            setMode(storedTheme);
        }
    }, []);

    //Update the theme only if it changes
    const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);
    const customTheme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HeaderComponent
                mode={mode}
                onChange={() => {
                    const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark';
                    setMode(newMode);
                    setStoredTheme(newMode);
                }}
            />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <div>
                    <Badge badgeContent={1} color="primary">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={3} color="info">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="warning">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={5} color="error">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={6} color="success">
                        <MailIcon/>
                    </Badge>
                    <div style={{height: '400px', color: customTheme.palette.warning.dark}}>
                        <Typography color="primary" variant="h1">Faizan Shaikh</Typography>
                        <Typography color="secondary" variant="h3">Web Developer</Typography>
                        <Divider/>
                        <Typography variant="h4">Next Js Typescript Dark Mode Material UI </Typography>
                    </div>
                </div>
            </Box>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
