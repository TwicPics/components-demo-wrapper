import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import Link from 'next/link';
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const categories = [
    {
        "title": `<TwicImg> use cases`,
        "items": [
            {
                "route": `/twicBasicGrid`,
                "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                "title": `Basic example`,
            },
            {
                "route": `/twicArtDirection`,
                "imgSrc": `components/greece.jpg`,
                "title": `Art direction`,
            },
            {
                "route": `/twicFlipCard`,
                "imgSrc": `components/flip/orange-1.jpg`,
                "title": `Flip cards`,
            },
            {
                "route": `/twicLifeCycle`,
                "imgSrc": `components/portraits/woman-1.jpg`,
                "title": `Grid & Zoom`,
            },
            {
                "route": `/twicModal`,
                "imgSrc": `components/modal/seagull.jpg`,
                "title": `Modal`,
            },
            {
                "route": `/twicSlider`,
                "imgSrc": `components/slider/pantone.jpg`,
                "title": `Slider`,
            },
            {
                "route": `/twicSlideshow`,
                "imgSrc": `components/slideshow/space-1.jpg`,
                "title": `Slideshow`,
            },
            {
                "route": `/twicStyleDriven`,
                "imgSrc": `components/horse.jpg`,
                "title": `Style driven`,
            },
        ],
    },
    {
        "title": `<TwicImg> properties`,
        "items": [
            {
                "route": `/twicFocus`,
                "imgSrc": `components/puppy.jpg`,
                "title": `focus`,
            },
            {
                "route": `/twicMode`,
                "imgSrc": `components/fox.jpg`,
                "title": `mode`,
            },
            {
                "route": `/twicPlaceholder`,
                "imgSrc": `components/cat.jpg`,
                "title": `placeholder`,
            },
            {
                "route": `/twicPosition`,
                "imgSrc": `components/position/horse.jpg`,
                "title": `position`,
            },
            {
                "route": `/twicRatio`,
                "imgSrc": `components/woman-and-winter.jpg`,
                "title": `ratio`,
            },
            {
                "route": `/twicTransition`,
                "imgSrc": `components/peacock.jpg`,
                "title": `transition`,
            },
        ],
    },
];

const Home = () => (
    <TwicWrapper framework="next">
        <div className={ styles[ `home-container` ] }>
            { categories.map( ( category, i ) => (
                <div className="twic-panel" key={`category ${ i }`}>
                    <h3>{ category.title }</h3>
                    <div className="twic-grid">
                        { category.items.map( ( item, j ) => (
                            <Link href={ item.route } key={`useCase ${ j }`}>
                                <figure className="twic-item">
                                    <TwicImg
                                        src={ item.imgSrc }
                                        focus="auto"
                                        ratio="0.95">
                                    </TwicImg>
                                    <figcaption>
                                        <p>{ item.title }</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        ) ) }
                    </div>
                </div>
            ) )}
        </div>
    </TwicWrapper>
);

export default Home;
