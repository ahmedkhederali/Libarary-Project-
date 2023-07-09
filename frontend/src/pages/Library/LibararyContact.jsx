import React from 'react';
import "./style.css"
import CommonPage from "../CommonPage";
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import SmallWithNavigation from '../LibararyTitle/LibararyTilte';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';

import { Accordion, AccordionItem, Heading, Center, AccordionButton, AccordionPanel, Box, AccordionIcon } from "@chakra-ui/react";
import Contact from "../LibararyContact/LibararyContact"
const LibararyContact = () => {
    return (
        <>
            <SmallWithNavigation />
            <WithSubnavigation />
            <CaptionCarousel />
            <Center m={5}><Heading> اتصل بنا</Heading></Center>
            <Contact />
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyContact;
