import Navbar from 'components/Navbar';
import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card-image">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className='home-image-content'>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-card-button">
          <ButtonIcon />
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
