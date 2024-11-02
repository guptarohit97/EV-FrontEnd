import './Background.css'

import video from '../../assets/video1.mp4'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Backgroud = ({playStaus,heroCount}) => {
    if(playStaus)
        return (
            <video className='background fade-in' autoplay loop muted>
                <source src={video} type='video/mp4'></source>
            </video>
    )
    else if(heroCount===0)
        return <img src={img1} className='background fade-in'></img>
    else if(heroCount===1)
        return <img src={img2} className='background fade-in'></img>
    else if(heroCount===2)
        return <img src={img3} className='background fade-in'></img>
    

}

export default Backgroud
