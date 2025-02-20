import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Details() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setCocktail(res.data.drinks[0]);
            })
            .catch(error => console.log(error));
    }, [id]);

    if (!cocktail) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-full mt-[120px] flex items-center justify-center">
            <div className="w-[352px] bg-white shadow-lg rounded-xl">
                <img
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    className="w-full h-[200px] rounded-t-2xl"
                />
                <div className="px-4 flex flex-col items-start gap-y-1 py-[20px]">
                    <h4 className="text-[32px]">{cocktail.strDrink}</h4>
                    <h5 className="text-[24px]">{cocktail.strGlass}</h5>
                    <span className="text-[14px] text-gray-500">{cocktail.strAlcoholic}</span>
                    <p className="text-[16px] mt-4">{cocktail.strInstructions}</p>
                </div>
            </div>
        </section>
    );
}

export default Details;
