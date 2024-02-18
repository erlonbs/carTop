import './styles.css';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4 bg-tertiary ">
      <div className="home-card-button">
        <div className='home-content-button'>

        <input placeholder="Busca"></input>

        <button className="btn btn-secundary text-center btn-icon-buscar">
          Buscar
        </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>{' '}
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>{' '}
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>{' '}
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>{' '}
      </div>
    </div>
  );
};

export default Catalog;
