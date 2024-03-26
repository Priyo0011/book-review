import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const Home = () => {
  const home = useLoaderData();
  
  return (
    <div>
      <div className="p-2">
        <div className="hero rounded-md py-10 px-20 bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/src/assets/images/pngwing 1.png" className="mr-8" />
            <div className="mb-6">
              <h1 className="text-5xl font-bold py-8">
                Books to freshen up your bookshelf.
              </h1>
              <Link to='/listed-books' className="btn bg-green-500 text-white">
                View The List
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-6 sm:py-12">
        <div className="space-y-16">
          <div className="space-y-2 text-center">
            <h2 className="text-5xl font-bold">Books</h2> 
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {
                home.map(home=><Card key={home.id} home={home}></Card>)
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
