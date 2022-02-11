import './TwicResponsiveGrid.scss';
import { TwicWrapper } from '@twicpics/components-demo-wrapper/wrapper/react';
import { TwicImg } from '@twicpics/components/react';

/**
 * Displays images in grid with responsive rules setted on li width
 * Custom behaviour on twic done ( scale 0 to 1 rather than opacity )
 * No placeholder
 */
function TwicResponsiveGrid() {
    return (
        <TwicWrapper redirect="www.twicpics.com" tags={["tag1", "tag2", "tag3"]}>
            <div className="responsive-grid-container">
                <ul className="cbp-rfgrid">
                    <li>
                        <a href="#">
                            <TwicImg placeholder="none" ratio="4/3" mode="cover" src="codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TwicImg placeholder="none" ratio="4/3" mode="cover" src="codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-write.jpg" />
                            <div className="text">
                                <h3>write</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-snow.jpg" />
                            <div className="text">
                                <h3>snow</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-rasp.jpg" />
                            <div className="text">
                                <h3>rasp</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-pug.jpg" />
                            <div className="text">
                                <h3>pug</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-moth.jpg" />
                            <div className="text">
                                <h3>moth</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lion.jpg" />
                            <div className="text">
                                <h3>lion</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-lake.jpg" />
                            <div className="text">
                                <h3>lake</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-friend.jpg" />
                            <div className="text">
                                <h3>friend</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cereals.jpg" />
                            <div className="text">
                                <h3>cereals</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-castle.jpg" />
                            <div className="text">
                                <h3>castle</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-canyon.jpg" />
                            <div className="text">
                                <h3>canyon</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-cafe.jpg" />
                            <div className="text">
                                <h3>cafe</h3></div>
                        </a>
                    </li>
                    <li>
                        <a href="#"><TwicImg placeholder="none" ratio="4/3" mode="cover" src="image:codepen/tp-artichoke.jpg" />
                            <div className="text">
                                <h3>artichoke</h3></div>
                        </a>
                    </li>
                </ul>
            </div>
        </TwicWrapper>
    );
}
export default TwicResponsiveGrid;
