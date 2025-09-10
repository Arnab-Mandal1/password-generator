import Header from './Header';
import Footer from './Footer';
import PasswordGenerator from './PasswordGenerator';

function App() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col justify-center items-center font-sans p-4">
            <div className="w-full max-w-md">
                <Header/>
                <PasswordGenerator/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
