import { useState, useEffect } from 'react';
import axios from 'axios';
import MyImage from '../assets/image.png';

function Items() {
    const [cocktailData, setCocktailData] = useState(null);



    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(res => {
                // 3. ذخیره داده‌ها در state
                setCocktailData(res.data.drinks[0]);
            })
            .catch(error => console.log(error));
    }, []);


    if (!cocktailData) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-full mt-[120px] flex items-center justify-center">
            <div className={'w-[352px] bg-white shadow-lg rounded-xl '}>
                <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} className={'w-full h-1/12'} />
                <div className={'px-4 flex flex-col items-start gap-y-1 py-[20px]'}>
                    <h4 className={'text-[32px]'}>{cocktailData.strDrink}</h4>
                    <h5 className={'text-[24px]'}>{cocktailData.strGlass}</h5>
                    <span className={'text-[14px] text-gray-500'}>{cocktailData.strAlcoholic}</span>
                    <button className={'text-white w-auto bg-[#10B981] px-3 py-[6px] rounded-xl'}>Details</button>
                </div>
            </div>
        </section>
    );
}

export default Items;
