const LengthSlider = () => {
    const length = 16; // Example length
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor="length" className="text-white font-medium">
                    Password Length
                </label>
                <span className="text-blue-400 font-bold text-lg">{length}</span>
            </div>
            <input
                id="length"
                type="range"
                min="8"
                max="64"
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
        </div>
    );
};

export default LengthSlider;
