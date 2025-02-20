import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={'bg-white mb-10'}>
            <section className="max-w-7xl mx-auto flex items-center justify-between mb-[90px]">
                <h1 className="text-[#10B981] text-[44px] font-bold">MixMaster</h1>
                <nav className={'flex items-center gap-x-9'}>
                    <Link to="/" className="text-[16px] hover:text-[#10B981] mr-4">Home</Link>
                    <Link to="/about" className="text-[16px] hover:text-[#10B981] mr-4">About</Link>
                    <Link to="/newsletter" className="text-[16px] hover:text-[#10B981]">Newsletter</Link>
                </nav>
            </section>
        </header>
    );
}

export default Header;
