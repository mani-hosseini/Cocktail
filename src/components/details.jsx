import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import LoadingSpinner from "./loading.jsx";

function Details() {
    const {id} = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                setCocktail(res.data.drinks[0]);
            })
            .catch(error => console.log(error));
    }, [id]);

    if (!cocktail) {
        return <LoadingSpinner/>;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 mt-10 flex flex-col items-center justify-center">
            <Link to="/" className="mb-4 px-4 py-2 bg-[#10B981] text-white rounded">Back to Home</Link>
            <h6 className="font-normal text-2xl mb-4">{cocktail.strDrink}</h6>
            <div className="p-6 rounded-lg flex  items-center justify-center gap-6 ">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
                     className="w-[448px] h-[448px] object-cover rounded-md"/>
                <div className={'space-y-3'}>
                    <div className={'flex items-center gap-x-4'}>
                        <h3 className="text-lg bg-[#6EE7B7] px-1 rounded-md text-[#047857] font-semibold">Name:</h3>
                        <span className="font-normal">{cocktail.strDrink}</span>
                    </div>
                    <div className={'flex items-center gap-x-4'}>
                        <h3 className="text-lg font-semibold px-1 rounded-md bg-[#6EE7B7] text-[#047857] ">Category:</h3>
                        <span
                            className="font-normal">{cocktail.strCategory}</span>
                    </div>
                    <div className={'flex items-center gap-x-4'}>
                        <h3 className="text-lg font-semibold px-1 rounded-md bg-[#6EE7B7] text-[#047857] ">Glass:</h3>
                        <span
                            className="font-normal">{cocktail.strGlass}</span>
                    </div>
                    <div className={'flex items-center gap-x-4'}>
                        <h3 className="text-lg font-semibold px-1 rounded-md bg-[#6EE7B7] text-[#047857] ">Instructions:</h3>
                        <p className="text-gray-700">{cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
}

export default Details;
