import {Link} from 'react-router-dom';
import MyImage from '../assets/image.png';

function Items() {
    return (
        <section className="w-full mt-[120px] flex items-center justify-center">
            <div className={'w-[352px] bg-white shadow-lg rounded-xl '}>
                <img src={MyImage} alt="Item" className={'w-full h-1/12'}/>
                <div className={'px-4 flex flex-col items-start gap-y-1 py-[20px]'}>
                    <h4 className={'text-[32px]'}>GG</h4>
                    <h5 className={'text-[24px]'}>Collins Glass</h5>
                    <span className={'text-[14px] text-gray-500'}>Optional alcohol</span>
                    <button className={'text-white w-auto bg-[#10B981] px-3 py-[6px] rounded-xl'}>Details</button>
                </div>
            </div>
        </section>
    );
}

export default Items;
