import video from"../images/video.mp4";
import slide2 from"../images/slide2.jpeg"
import short3 from"../images/short3.jpeg"
export default function Slider(){
    return(
        <section className="slider_container">
            <div className="slider_wrapper">
                <div className="slider">
                    <img src={slide2} alt=''/>
                    <img src={slide2} alt=''/>
                    <img src={short3} alt=''/>
                </div>
                <div className='slider-nav'>
                    <a href='#slide-1'></a>
                    <a href='#slide-2'></a>
                    <a href='#slide-3'></a>
                </div>
            </div>
        </section>
    )
}