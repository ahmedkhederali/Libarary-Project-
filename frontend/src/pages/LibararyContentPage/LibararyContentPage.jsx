import React from 'react';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import ElectronicService from '../ElectonicService/ElectronicService';
import ProductAddToCart from '../LibararyNews/News';
import BasicStatistics from '../LIbararyStatics/LibabraryStatic';
import SmallWithNavigation from '../LibararyTitle/LibararyTilte';
import LibararyLogoCollage from '../LibararyLogoCollage/LibararyLogoCollage';

const LibararyContentPage = () => {
    return (
        <>
        <SmallWithNavigation/>
        <LibararyLogoCollage/>
            <WithSubnavigation />
            <CaptionCarousel />
            <ElectronicService />
            <ProductAddToCart />
            <BasicStatistics />
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyContentPage;
