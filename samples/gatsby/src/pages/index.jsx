import * as React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { Link } from 'gatsby';
import { TwicImg } from "@twicpics/components/react";
import { homeContainer } from "./index.module.scss";

const categories = [
    {
        "title": `<TwicImg> use cases`,
        "items": [
            {
                "route": `/art-directions`,
                "imgSrc": `components/greece.jpg`,
                "title": `Art directions`,
            },
            {
                "route": `/basic-grid`,
                "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                "title": `Basic example`,
            },
            {
                "route": `/flip-cards`,
                "imgSrc": `components/flip/orange-1.jpg`,
                "title": `Flip cards`,
            },
            {
                "route": `/grid-and-zoom`,
                "imgSrc": `components/portraits/woman-1.jpg`,
                "title": `Grid & zoom`,
            },
            {
                "route": `/modal`,
                "imgSrc": `components/modal/seagull.jpg`,
                "title": `Modal`,
            },
            {
                "route": `/slider`,
                "imgSrc": `components/slider/pantone.jpg`,
                "title": `Slider`,
            },
            {
                "route": `/slideshow`,
                "imgSrc": `components/slideshow/space-1.jpg`,
                "title": `Slideshow`,
            },
            {
                "route": `/style-driven`,
                "imgSrc": `components/horse.jpg`,
                "title": `Style driven`,
            },
        ],
    },
    {
        "title": `<TwicImg> properties`,
        "items": [
            {
                "route": `/focus`,
                "imgSrc": `components/puppy.jpg`,
                "title": `focus`,
            },
            {
                "route": `/mode`,
                "imgSrc": `components/fox.jpg`,
                "title": `mode`,
            },
            {
                "route": `/placeholder`,
                "imgSrc": `components/cat.jpg`,
                "title": `placeholder`,
            },
            {
                "route": `/position`,
                "imgSrc": `components/position/horse.jpg`,
                "title": `position`,
            },
            {
                "route": `/ratio`,
                "imgSrc": `components/woman-and-winter.jpg`,
                "title": `ratio`,
            },
            {
                "route": `/transition`,
                "imgSrc": `components/peacock.jpg`,
                "title": `transition`,
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
                        { category.items.map( ( item, j ) => (
                            <Link to={ item.route } key={`useCase ${ j }`}>
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
