import { Link } from 'react-router-dom';

function Form() {
    return (
        <section className=" w-full  flex items-center justify-center">
            <div className="border-2 border-white p-4 rounded-md shadow-lg w-1/2">
                <div className="flex items-center">
                    <input type="text" className="p-2 text-black border-none outline-none rounded-l-md bg-[#E2E8F0] w-full"/>
                    <button className="bg-[#10B981] text-white p-2 rounded-r-md hover:bg-[#059e72]">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Form;
