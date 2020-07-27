import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="http://www.tigostar.com.sv/sites/tigostar.sv/files/amazon-tigostar.png"
                alt=""
            
            />
            {/* Product comp id, title, price, raiting, image */}
            <div className="home__row">
                <Product
                id="123321341"
                title="BenQ XL2740 Monitor LCD 27'"
                price={15139}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61H5%2B4aE0mL._AC_SX522_.jpg"
             />
             <Product
                id="123321341"
                title="ASTRO Gaming A50 Wireless Biauricular Diadema Negro, Azul auricular con micrófono - Auriculares con micrófono (PC/Juegos, Biauricular, Diadema, Negro, Azul, PS3. PS4, PC, Mac, Inalámbrico y alámbrico)"
                price={7712.28}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71m51gjuj2L._AC_SX425_.jpg"
             />

            </div>

            <div className="home__row">
            <Product
                id="123321341"
                title="Intel Intel Core i9-7980XE Processors BX80673I97980X"
                price={45229}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81gkh4npW8L._AC_SL1500_.jpg"
             />
             <Product
                id="123321341"
                title="NZXT Kraken Z63 280 mm - RL-KRZ63-01 - Refrigerador líquido de CPU AIO RGB"
                price={2188}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71%2B4KDq%2BesL._AC_SL1500_.jpg"
             />
             <Product
                id="123321341"
                title="Corsair Elgato Stream Deck - Controlador para contenido en directo, 15 teclas LCD personalizables"
                price={15139}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg"
             />
            </div>
            <div className="home__row">
            <Product
                id="123321341"
                title="Rode RODECaster Pro Podcast Production Studio"
                price={17819}
                raiting={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81KqEUZmJhL._AC_SL1500_.jpg"
             />
            </div>

        </div>
    )
}

export default Home
