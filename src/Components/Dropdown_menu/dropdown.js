import cargo from"../icons/cargo.png"
import tshirt from"../icons/tshirt.png"
import pullover from"../icons/pullover.png"
import shirt1 from"../icons/shirt1.png"
import shorts from"../icons/shorts.png"
import house from"../icons/house.png"

export default function Dropdown(){
    return(
        <ul className='navlist click'>
                    <div className='li_item'><img src={house} alt="home icon" width='15%'/><li><a href='/home'>Home</a></li></div>
                    <div className='li_item'><img src={tshirt} alt="tshirt icon" width='15%'/><li><a href='/t-shirt'>T-Shirt</a></li></div>
                    <div className='li_item'><img src={shirt1} alt="shirt icon " width='15%'/><li><a href='/chemises'>Chemises</a></li></div>
                    <div className='li_item'><img src={shorts} alt=" short icon" width='15%'/><li><a href='/culottes'>Shorts</a></li></div>
                    <div className='li_item'><img src={cargo} alt=" pant icon" width='15%'/><li><a href='/pantalons'>Pantalons</a></li></div>
                    <div className='li_item'><img src={pullover} alt=" pull icon" width='15%'/><li><a href='/pull'>Pullover</a></li></div>
                </ul>
    )
}