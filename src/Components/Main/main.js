import tshirt1 from'../images/tshirt1.jpeg'
import tshirt2 from'../images/tshirt2.jpeg'
import tshirt3 from'../images/tshirt3.jpeg'
import short1 from'../images/short1.jpeg'
import short2 from'../images/short2.jpeg'
import short3 from'../images/short3.jpeg'
import pant1 from'../images/pant1.jpeg'
import pant2 from'../images/pant2.jpeg'
import pant6 from'../images/pant6.jpeg'
import pull1 from'../images/pull1.jpeg'


let Main=()=>{
    return(
        <main>
            <div className='item_group'>
                <h2>NOUVEAUTES</h2>
                <div className='group'>
                    <div className='item'>
                        <img src={tshirt1} alt="white tshirt" width='100%' />
                        <h4> T-shirt</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={short3} alt="gray short" width='100%' />
                        <h4> Short</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>
                <div className='group'>
                    <div className='item'>
                        <img src={pull1} alt="white pullover" width='100%' />
                        <h4> PullOver</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={pant6} alt="pant" width='100%' />
                        <h4> Pantalon</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>
                
                
            </div>

            <div className='ig'>
                <h4> Rejoignez nous sur notre page Instagram</h4>
                <p>Pour être informé des nouvelles tendances</p>
                <button><a href='https://www.instagram.com/shop_whith_me_by_ba.bg?igsh=MTR4ZGVpemozd3U4dg=='>Abonnez vous!</a></button>
            
            </div>

            <div className='item_group'>
                <h2>T-SHIRT</h2>
                <div className='group'>
                    <div className='item'>
                        <img src={tshirt1} alt="white tshirt" width='100%' />
                        <h4> T-shirt</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={tshirt2} alt="black shirt" width='100%' />
                        <h4> T-shirt</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>   
                <div className='group'> 
                    <div className='item'>
                        <img src={tshirt3} alt="black tshirt" width='100%' />
                        <h4> T-shirt</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={tshirt3} alt="black tshirt" width='100%' />
                        <h4> T-shirt</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>   
            </div>

            <div className='item_group'>
                <h2>SHORTS</h2>
                <div className='group'> 
                    <div className='item'>
                        <img src={short1} alt="short" width='100%' />
                        <h4> Short</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={short2} alt="short" width='100%' />
                        <h4> Short</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>
                <div className='group'> 
                    <div className='item'>
                        <img src={short3} alt="short" width='100%' />
                        <h4> Short</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                    <div className='item'>
                        <img src={short3} alt="short" width='100%' />
                        <h4> Short</h4>
                        <p>lorem ipsum</p>
                        <p><span>Prix</span> <span>5000fcfa</span></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main;