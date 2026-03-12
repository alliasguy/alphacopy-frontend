import React, { useState, useEffect } from 'react'
import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Tickertape from '../Tickertape'
import TrustBadge from '../TrustBadge'
import { BsArrowRight, BsPlayCircle, BsShieldCheck } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const Landpage = () => {
  const navigate = useNavigate()
  // Simple fake live counter for "Active Copiers"
  const [copiers, setCopiers] = useState(12845);

  useEffect(() => {
    const interval = setInterval(() => {
      setCopiers(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='landpage'>
      <div className="background-effects">
        <div className="glow-orb top-left"></div>
        <div className="glow-orb bottom-right"></div>
        <div className="grid-overlay"></div>
      </div>

      <Header />

      <div className='landpage-content-wrapper'>
           
              <motion.div className="landpage-text-container" 
                  
              >
                  {/* <motion.div className="landpage-header">
                      <motion.span className="landpage-line"></motion.span>
                      <motion.div className="site-name"><span className="highlight">apexcopytrade</span></motion.div>
                      <motion.span className="landpage-line"></motion.span>
                  </motion.div> */}
                <motion.h1
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                    <span className="landpage-highlight">copytrading</span> made seemless
                </motion.h1>
                <motion.p
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                    Providing you the opportunity to copy experts in more than 50 assets for continuous income. 
                  </motion.p>
                  <div className="launch-btn-container">
                <motion.button className='launch-btn'
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}
                    onClick={()=>{
                        navigate('/signup')
                    }}
                >
                    <span>start trading</span>
                </motion.button>
                </div>
              </motion.div>
              
          </div>
          
          <Tickertape />
    </main>
  )
}

export default Landpage
