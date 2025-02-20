import Form from "../components/form.jsx";
import Items from "../components/items.jsx";

function Home() {
    return (
        <section className="max-w-7xl mx-auto px-4 mt-10">
            <Form />
            <section className="mt-10 grid grid-cols-3 gap-6  ">
                <Items />
            </section>
        </section>
    );
}

export default Home;
