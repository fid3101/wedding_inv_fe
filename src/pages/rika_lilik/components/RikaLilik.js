import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import OpeningModal from "./OpeningModal"
import Home from './Home'
import Pengantin from './Pengantin'
import Acara from "./Acara"
import BottomNavbar from "./BottomNavbar"
import Ucapan from "./Ucapan"
import Closing from "./Closing"
import Gallery from "./galery";
import AmplopDigital from "./AmplopDigital";
import coupleImage from '../assets/image/brides.png';


const RikaLilikStyle = styled.div`
   
    font-family: 'Glacial Indifference', sans-serif !important;

    .font-estetik {
        font-family: 'moontime', cursive !important;
    }
`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#043D6A',
        },
        secondary: {
            main: '#1A87A1',
        },
        dark: {
            main: '#6D423F',
        },
        light: {
            main: '#FAFFFF',
        },
        gray: {
            main: '#F59C9C'
        }
    },
});

const RikaLilik = () => {  
    
    const history = useHistory();

    useEffect(() => {
        // scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        // listen for history changes and scroll to the top of the page
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });

        // cleanup function to remove the listener when the component unmounts
        return () => {
            unlisten();
        };
    }, [history]);

    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);
    const section3Ref = React.useRef(null);
    const section4Ref = React.useRef(null);
    const section5Ref = React.useRef(null);

    const ogImageUrl = `${window.location.origin}${coupleImage}`;

    return (
        <ThemeProvider theme={theme}>
            <RikaLilikStyle>
                <Helmet>
                    <title>Hendra & Elma Wedding</title>
                    <meta name="description" content="Senin, 15 Mei 2023" />
                    <meta property="og:title" content="Hendra & Elma Wedding" />
                    <meta property="og:description" content="Senin, 15 Mei 2023" />
                    <meta property="og:image" content={ogImageUrl} />
                    <meta property="og:url" content="https://menghitunghari.vercel.app/" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://menghitunghari.vercel.app/hendra_elma" />
                </Helmet>
                <OpeningModal />
                <Home ref={section1Ref}/>
                <Pengantin ref={section2Ref}/>
                <Acara ref={section3Ref}/>
                <Gallery ref={section4Ref} />
                <AmplopDigital/>
                <Ucapan ref={section5Ref}/>
                <Closing/>
                <BottomNavbar
                    sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]}
                />
            </RikaLilikStyle>
        </ThemeProvider>
    );
};

export default RikaLilik;