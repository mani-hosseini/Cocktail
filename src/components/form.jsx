import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();

            if (data.drinks) {
                setCocktails(data.drinks);
                setError('');
                navigate(`/items?search=${searchTerm}`);
            } else {
                setCocktails([]);
                setError('No Matching Cocktails Found');
            }
        } catch (err) {
            setCocktails([]);
            setError('Error fetching data');
        }
    };

    return (
        <section className="w-full flex items-center justify-center">
            <div className="border-2 border-white p-4 rounded-md shadow-lg w-1/2">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 text-black border-none outline-none rounded-l-md bg-[#E2E8F0] w-full"
                        placeholder="Search for a cocktail..."
                    />
                    <button
                        className="bg-[#10B981] text-white p-2 rounded-r-md hover:bg-[#059e72]"
                        onClick={handleSearch}
                    >
                        Submit
                    </button>
                </div>

                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
        </section>
    );
}

export default Form;
