import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // اضافه کردن useNavigate
import axios from 'axios';
import LoadingSpinner from "./loading.jsx";

function Items() {
    const [cocktailData, setCocktailData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate(); // تعریف navigate
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || 'margarita';

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(res => {
                setCocktailData(res.data.drinks || []);
            })
            .catch(error => console.log(error));
    }, [searchTerm]);

    if (cocktailData.length === 0) {
        return <LoadingSpinner />;
    }

    return (
        <section className="w-full mt-[120px] grid grid-cols-3 gap-6">
            {cocktailData.map((cocktail, index) => (
                <div key={index} className="w-[352px] bg-white shadow-lg rounded-xl">
                    <img
                        src={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                        className="w-full h-[200px] rounded-t-2xl"
                    />
                    <div className="px-4 flex flex-col items-start gap-y-1 py-[20px]">
                        <h4 className="text-[18px]">{cocktail.strDrink}</h4>
                        <h5 className="text-[14px]">{cocktail.strGlass}</h5>
                        <span className="text-[12px] text-gray-500">{cocktail.strAlcoholic}</span>
                        <button
                            className="text-white cursor-pointer w-auto bg-[#10B981] px-3 py-[6px] rounded-xl"
                            onClick={() => navigate(`/cocktail/${cocktail.idDrink}`)} // استفاده از navigate
                        >
                            Details
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Items;