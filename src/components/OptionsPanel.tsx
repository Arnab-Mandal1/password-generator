import LengthSlider from './LengthSlider';
import CharacterOptions from './CharacterOptions';

const OptionsPanel = () => {
    return (
        <div className="bg-slate-800 p-5 rounded-lg mb-4">
            <LengthSlider/>
            <CharacterOptions/>
        </div>
    );
};

export default OptionsPanel;
