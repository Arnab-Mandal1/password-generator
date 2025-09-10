const StrengthIndicator = () => {
    const strength = 'Medium'; // Example strength

    return (
        <div className="bg-slate-800 flex items-center justify-between p-4 rounded-lg my-4">
            <span className="text-gray-400 font-medium">STRENGTH</span>
            <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">{strength.toUpperCase()}</span>
                <div className="flex gap-1">
                    <div className="h-7 w-2 bg-yellow-400 rounded-sm"></div>
                    <div className="h-7 w-2 bg-yellow-400 rounded-sm"></div>
                    <div className="h-7 w-2 bg-slate-600 rounded-sm"></div>
                    <div className="h-7 w-2 bg-slate-600 rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};

export default StrengthIndicator;
