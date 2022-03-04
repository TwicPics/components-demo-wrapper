import React from "react";
import { TwicWrapper } from "@twicpics/components-demo-wrapper/react";
import Link from 'next/link';

const Home = () => (
    <TwicWrapper>
        <ul>
            <li>
                <Link href="/twicBasicGrid">
                    Basic Example
                </Link>
            </li>
            <li>
                <Link href="/twicArtDirection">
                    Art direction
                </Link>
            </li>
            <li>
                <Link href="/twicFlipCard">
                    Flip Card
                </Link>
            </li>
            <li>
                <Link href="/twicFocus">
                    Focus
                </Link>
            </li>
            <li>
                <Link href="/twicLifeCycle">
                    Life cycle
                </Link>
            </li>
            <li>
                <Link href="/twicModal">
                    Modal
                </Link>
            </li>
            <li>
                <Link href="/twicMode">
                    Mode
                </Link>
            </li>
            <li>
                <Link href="/twicPlaceholder">
                    Placeholders
                </Link>
            </li>
            <li>
                <Link href="/twicPosition">
                    Position
                </Link>
            </li>
            <li>
                <Link href="/twicRatio">
                    Ratio
                </Link>
            </li>
            <li>
                <Link href="/twicSlider">
                    Slider
                </Link>
            </li>
            <li>
                <Link href="/twicSlideshow">
                    Slideshow
                </Link>
            </li>
            <li>
                <Link href="/twicStyleDriven">
                    Style Driven
                </Link>
            </li>
            <li>
                <Link href="/twicTransition">
                    Transition
                </Link>
            </li>
        </ul>
    </TwicWrapper>
);

export default Home;
