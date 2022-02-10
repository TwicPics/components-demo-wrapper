import './App.css';
import { TwicWrapper } from '@twicpics/components-demo-wrapper/wrapper/react';
import { TwicImg } from '@twicpics/components/react';

function App() {
    return (
        <div className="App">
            <TwicWrapper redirect="www.twicpics.com" tags={ [ "tag1","tag2","tag3" ] }>
                <div className="twic-grid">
                    <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
                    <TwicImg
                        src="football.jpg"
                        ratio="16/9"
                        mode="cover"
                        step="100"
                        placeholder="meancolor"
                    />
                    <TwicImg
                        src="/football.jpg"
                        step="100"
                        focus="auto"
                        ratio="500/800"
                        placeholder="none"
                        alt="custom alt attribute"
                    />
                </div>
            </TwicWrapper>
        </div>
    );
}
export default App;
