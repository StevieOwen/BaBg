import location from'../icons/location.png'
import phone from'../icons/phone.png'
import facebook from'../icons/facebook.png'
import instagram1 from'../icons/instagram1.png'
import tiktok from'../icons/tik-tok.png'
let Footer=()=>{
    return(
        <footer>
            <p><span><img src={location} width='5%' alt=''/></span><span></span></p>
            <p><span><img src={phone} width='5%' alt=''/></span></p>
            <hr/>
            <div>
                <img src={facebook} width='7%'alt=''/>
                <a href='https://www.instagram.com/shop_whith_me_by_ba.bg?igsh=MTR4ZGVpemozd3U4dg=='><img src={instagram1}width='7%' alt=''/></a>
                <img src={tiktok}width='7%' alt=''/>
            </div>
        </footer>
    )
}

export default Footer;