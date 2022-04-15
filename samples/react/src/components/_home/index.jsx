import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { NavLink } from "react-router-dom";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const categories = [
    {
        "title": `<TwicImg> use cases`,
        "items": [
            {
                "route": `/basic-grid`,
                "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                "title": `Basic example`,
            },
            {
                "route": `/art-direction`,
                "imgSrc": `components/greece.jpg`,
                "title": `Art direction`,
            },
            {
                "route": `/flip`,
                "imgSrc": `components/flip/orange-1.jpg`,
                "title": `Flip cards`,
            },
            {
                "route": `/life-cycle`,
                "imgSrc": `components/portraits/woman-1.jpg`,
                "title": `Grid & Zoom`,
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
                "route": `/placeholders`,
                "imgSrc": `components/cat.jpg`,
                "title": `placeholder`,
            },
            {
                "route": `/positions`,
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

function Home() {
    return (
        <TwicWrapper>
            <div className="home-container">
                { categories.map( ( category, i ) => (
                    <div className="twic-panel" key={`category ${ i }`}>
                        <h3>{ category.title }</h3>
                        <div className="twic-grid">
                            { category.items.map( ( item, j ) => (
                                <NavLink to={ item.route } key={`useCase ${ j }`}>
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
                                </NavLink>
                            ) ) }
                        </div>
                    </div>
                ) )}
            </div>
        </TwicWrapper>
    );
}

export default Home;
