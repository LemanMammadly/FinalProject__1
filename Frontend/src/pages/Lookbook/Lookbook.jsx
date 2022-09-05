import React from 'react'
import lookbook from '../../assets/Cargo_woman.jpeg'
import "./Lookbook.css"
import UseCountdown from '../../components/CounDown/UseCountdown'

const Lookbook = () => {
    const endTime=new Date().getTime()+60000*200; 
    const [timeLeft,setEndTime]=UseCountdown(endTime);

    const days=Math.floor(timeLeft /864000)%60
    const hours=Math.floor(timeLeft / 3600000) %60
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;


  return (
    <div className='alldivcount'>
       <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="left col-lg-6">
                    <img className='img-fluid img1' src={lookbook} alt="" />
                </div>
                <div className='white'>
                <div className='coming-soon col-lg-6'>
                    </div>
                           <div className="countdowndiv col-lg-12 text-center">
                           <h5 className='h5'>We are opening up soon!</h5>
                            <div className="countdown">
                               <div className='time'>
                               <span className='timer'>{`${days} : `}</span>
                               <span className='timer'>{`0${hours} :  `}</span>
                               <span className='timer'>{`${minutes} : `}</span>
                               <span className='timer'>{`${seconds}`}</span>
                               </div>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Lookbook