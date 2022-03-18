import * as React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { Link } from 'gatsby';
import { TwicImg } from "@twicpics/components/react";
import { homeContainer } from "./index.module.scss";

const categories = [
    {
        "title": `Use cases`,
        "items": [
            {
                "route": `/twicBasicGrid`,
                "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                "title": `Basic Example`,
            },
            {
                "route": `/twicArtDirection`,
                "imgSrc": `components/greece.jpg`,
                "title": `Art direction`,
            },
            {
                "route": `/twicFlipCard`,
                "imgSrc": `components/flip/orange-1.jpg`,
                "title": `Flip Card`,
            },
            {
                "route": `/twicLifeCycle`,
                "imgSrc": `components/portraits/woman-1.jpg`,
                "title": `Life cycle`,
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
                "title": `Style Driven`,
            },
        ],
    },
    {
        "title": `Components propreties`,
        "items": [
            {
                "route": `/twicFocus`,
                "imgSrc": `components/puppy.jpg`,
                "title": `Focus`,
            },
            {
                "route": `/twicMode`,
                "imgSrc": `components/fox.jpg`,
                "title": `Mode`,
            },
            {
                "route": `/twicPlaceholder`,
                "imgSrc": `components/cat.jpg`,
                "title": `Placeholders`,
            },
            {
                "route": `/twicPosition`,
                "imgSrc": `components/position/horse.jpg`,
                "title": `Positions`,
            },
            {
                "route": `/twicRatio`,
                "imgSrc": `components/woman-and-winter.jpg`,
                "title": `Ratio`,
            },
            {
                "route": `/twicTransition`,
                "imgSrc": `components/peacock.jpg`,
                "title": `Transition`,
            },
        ],
    },
];

const Home = () => (
    <TwicWrapper framework="gatsby">
        <div className={ homeContainer }>
            { categories.map( ( category, i ) => (
                <div className="twic-panel" key={`category ${ i }`}>
                    <h3>{ category.title }</h3>
                    <div className="twic-grid">
                        { category.items.map( ( item, i ) => (
                            <Link to={ item.route } key={`useCase ${ i }`}>
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
