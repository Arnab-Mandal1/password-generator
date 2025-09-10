const CharacterOptions = () => {
    const options = [
        {id: 'uppercase', label: 'Include Uppercase'},
        {id: 'lowercase', label: 'Include Lowercase'},
        {id: 'numbers', label: 'Include Numbers'},
        {id: 'symbols', label: 'Include Symbols'},
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
            {options.map((option) => (
                <div key={option.id} className="flex items-center">
                    <input
                        id={option.id}
                        type="checkbox"
                        className="h-5 w-5 accent-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor={option.id}
                           className="ml-3 text-white text-sm font-medium cursor-pointer select-none">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CharacterOptions;