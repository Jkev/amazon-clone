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
        <Product
            id="123321341"
            title="the learn startup:"
            price={11.96}
            raiting={5}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL._SY346_.jpg"
        />

        </div>
    )
}

export default Home
