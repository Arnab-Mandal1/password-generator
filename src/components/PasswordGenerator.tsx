import PasswordDisplay from './PasswordDisplay';
import OptionsPanel from './OptionsPanel';
import StrengthIndicator from './StrengthIndicator';
import GenerateButton from './GenerateButton';

const PasswordGenerator = () => {
    return (
        <main className="bg-slate-900 max-w-md mx-auto rounded-lg shadow-lg p-6">
            <PasswordDisplay/>
            <OptionsPanel/>
            <StrengthIndicator/>
            <GenerateButton/>
        </main>
    );
};

export default PasswordGenerator;
