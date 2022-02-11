import './TwicSlideShow.scss';
import Slideshow, { SlideshowItem } from "./slideshow/Slideshow";
import { TwicWrapper } from '@twicpics/components-demo-wrapper/wrapper/react';
import { TwicImg } from '@twicpics/components/react';

/**
 * Displays images in grid with responsive rules setted on li width
 * Custom behaviour on twic done ( scale 0 to 1 rather than opacity )
 * No placeholder
 */


function TwicSlideshow() {
    return (
        <TwicWrapper redirect="www.twicpics.com" tags={["tag1", "tag2", "tag3"]}>
            <div className="twic-slideshow-container">
                <Slideshow>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="auto" src="codepen/tp-snow.jpg"></TwicImg>
                    </SlideshowItem>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="auto" src="codepen/tp-cafe.jpg"></TwicImg>
                    </SlideshowItem>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="auto" src="codepen/tp-castle.jpg"></TwicImg>
                    </SlideshowItem>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="auto" src="codepen/tp-cereals.jpg"></TwicImg>
                    </SlideshowItem>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="200x200" src="codepen/tp-doggy.jpg"></TwicImg>
                    </SlideshowItem>
                    <SlideshowItem>
                        <TwicImg className='twic-slideshow-responsive' focus="auto" src="codepen/tp-lake.jpg"></TwicImg>
                    </SlideshowItem>
                </Slideshow>
            </div>
        </TwicWrapper>
    );
}

export default TwicSlideshow;
