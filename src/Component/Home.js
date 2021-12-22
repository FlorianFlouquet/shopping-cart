import switchImg from './Asset/Products_pictures/switcholed_noir_clean.png'
import './Home.css'

const Home = () => {
    return (
        <div id='home-hero'>
            <img src={switchImg} alt='Switch OLED' id='home-img'/>
            <div id='offer-description'>
                <h1>Nintendo Switch OLED</h1>
                <p>La nouvelle console de Nintendo est enfin disponible chez nous !</p>
                <p>Commandez la dès maintenant:</p>
                <button>Acheter</button>
            </div>
            <canvas id="decorative-background"></canvas>
        </div>
    )
}

export default Home