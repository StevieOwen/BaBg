import logo from "../images/logo.jpg"
import loupe from"../icons/loupe.png"
import menu from'../icons/menu.png'
import Dropdown from "../Dropdown_menu/dropdown"
import { useState } from "react"
function Navbar(){
    const [openMenu, setOpenMenu]=useState(false);
    let input_search=()=>{

    }
    
return(
    <nav>
        <div className="navbar"> 
            <div>
                <img src={logo} alt="Logo" className='logo' width='70%'/>
            </div>
            
            <div>
                <img src={menu} alt="navbar_icon" className='navbar_icon' onClick={()=>{setOpenMenu((prev)=>!prev);console.log(openMenu) }}  width='50%'/>
                
            </div>
        </div>
        {
            openMenu && <Dropdown/>
        }
        

        <div className='search'>
            <input type="text" value='' placeholder="Search...." onChange={input_search}/>
            <input type="submit" value="" className='search_input'/>
            <img src={loupe} alt="search icon" className='searh_icon' width='5%' />
        </div>  
    </nav>
)
}
export default Navbar;