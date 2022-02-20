/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import Modal from "./modal";

const images = [
    {
        "url": `codepen/tp-canyon.jpg`,
        "caption": `canyon`,
    },
    {
        "url": `codepen/eiffel-tower.jpg`,
        "caption": `eiffel tower`,
    },
    {
        "url": `codepen/tp-lake.jpg`,
        "caption": `lake`,
    },
    {
        "url": `codepen/tp-rasp.jpg`,
        "caption": `rasp`,
    },
];

const TwicModal = () => {

    const [ idModalToOpen, setIdModalToOpen ] = useState( null );

    const openModal = _idModalToOpen => {
        setIdModalToOpen( _idModalToOpen );
    };

    const closeModal = () => {
        setIdModalToOpen( null );
    };

    return (
        <TwicWrapper>
            <div className="twic-modal-container">
                <div className="twic-abstract">
                    <h1>
                        A Modal Revealer
                    </h1>
                    <p>Move your mouse over images below</p>
                </div>
                <div className="twic-grid">
                    { images.map( ( image, i ) => (
                        <div className="twic-item" key={i}>
                            <figure className="poster-wrapper" onClick={ () => openModal( i )}>
                                <TwicImg
                                    src={ image.url }>
                                </TwicImg>
                                <figcaption>
                                    <p>Click me</p>
                                </figcaption>
                            </figure>
                            <Modal
                                show={ i === idModalToOpen }
                                onClose={ closeModal }
                                image={ image }
                            ></Modal>
                        </div>
                    ) ) }
                </div>
            </div>
        </TwicWrapper>
    );
};

export default TwicModal;
