const PasswordDisplay = () => {
    return (
        <div className="flex items-center justify-between gap-4 bg-slate-800 p-4 rounded-lg mb-4">
            <input
                type="text"
                readOnly
                className="bg-transparent text-white text-xl font-mono w-full focus:outline-none"
                placeholder="P@$$w0rd"
            />
            <button className="text-white text-lg hover:text-blue-400 transition-colors">
                📋
            </button>
        </div>
    );
};

export default PasswordDisplay;
