import {Link} from 'react-router-dom';
import illustrationImage from '../assets/illustration.svg';

function NotFound() {
    return (
        <section className="max-w-7xl flex flex-col gap-y-3 items-center justify-center mx-auto px-4">
            <img src={illustrationImage} alt="Illustration"/>
            <h3 className={'text-[40px]'}>Ohh!</h3>
            <p className={'text-gray-500'}>We can't seem to find the page you are looking for.</p>
            <Link to="/" className="text-[#10B981]">Back Home</Link>
        </section>
    );
}

export default NotFound;
