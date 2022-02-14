import { TwicWrapper } from '@twicpics/components-demo-wrapper/src/react';
import Link from 'next/link'

const Home = () => {
    return (
      <TwicWrapper redirect="www.twicpics.com">
        <ul>
          <li>
            <Link href="/twicBasicGrid">
              Basic Grid
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
            <Link href="/twicResponsiveGrid">
              Responsive Grid
            </Link>
          </li>
        </ul>
      </TwicWrapper>
    );
  }
  
  export default Home;
