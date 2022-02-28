/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./index.scss";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import { TwicImg } from "@twicpics/components/react";
import Modal from "./modal";

const images = [
    {
        "url": `components/modal/seagull.jpg`,
        "caption": `seagulls`,
    },
    {
        "url": `components/modal/shell.jpg`,
        "caption": `shell`,
    },
    {
        "url": `components/modal/jelly-fish.jpg`,
        "caption": `jelly fish`,
    },
    {
        "url": `components/modal/turtle.jpg`,
        "caption": `turtle`,
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
                        A modal revealer
                    </h1>
                    <p>
                        Click on the image of your choice to reveal a modal.
                    </p>
                </div>
                <div className="twic-grid">
                    { images.map( ( image, i ) => (
                        <div key={i}>
                            <figure className="poster-wrapper twic-item" onClick={ () => openModal( i )}>
                                <TwicImg
                                    src={ image.url }
                                    focus="auto"
                                    ratio="0.95">
                                </TwicImg>
                                <figcaption>
                                    <p>Click</p>
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
