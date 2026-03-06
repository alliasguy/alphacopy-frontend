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

      <div className='landpage-hero-wrapper'>
        <motion.div
          className='hero-centered-content'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='hero-headline'>
            Master Elite Market Strategies with our<br />
            <span className='hero-highlight-text'>Intelligent Mirror Protocol</span>
          </h1>

          <p className='hero-subheadline'>
            Synchronize professional tactics instantly. Replicate<br />
            winning moves with absolute accuracy in real-time.
          </p>

          <div className='hero-actions'>
            <button className='btn-primary-green' onClick={() => navigate('/signup')}>
              Start Trading
            </button>
          </div>
        </motion.div>
      </div>

      {/* Raw Spread Advantage Section (Alpha Edge) */}
      <div className="raw-spread-section">
        <div className="raw-spread-container">
          {/* Left: Visual Widget Mockups */}
          <div className="raw-visuals-col">
            <div className="trading-widget-grid">
              <div className="widget-card">
                <div className="widget-header">
                  <span className="symbol">EURUSD</span>
                  <span className="change negative">📉 -0.97%</span>
                </div>
                <div className="price-row">
                  <div className="price-box">
                    <span className="label">Bid</span>
                    <span className="price">1.18<span className="big">52</span><sup>6</sup></span>
                  </div>
                  <div className="price-box">
                    <span className="label">Ask</span>
                    <span className="price">1.18<span className="big">53</span><sup>4</sup></span>
                  </div>
                </div>
                <div className="spread-row">
                  <span className="spread-tag">Spread 0.8</span>
                </div>
              </div>

              <div className="widget-card">
                <div className="widget-header">
                  <span className="symbol">XAUUSD</span>
                  <span className="change positive">📈 +9.29%</span>
                </div>
                <div className="price-row">
                  <div className="price-box">
                    <span className="label">Bid</span>
                    <span className="price">4885.<span className="big">18</span></span>
                  </div>
                  <div className="price-box">
                    <span className="label">Ask</span>
                    <span className="price">4885.<span className="big">58</span></span>
                  </div>
                </div>
                <div className="spread-row">
                  <span className="spread-tag">Spread 4.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="raw-content-col">
            <h2 className="section-headline">The Alpha Edge<br />Advantage</h2>
            <p className="section-desc">
              Superior edges define our specialized network ecosystem. Execute with zero-latency, premium pricing, and elite liquidity.
            </p>
            <div className="raw-actions" style={{ justifyContent: 'center' }}>
              <button className="btn-primary-green" onClick={() => navigate('/signup')}>Start Trading</button>
            </div>
          </div>
        </div>
      </div>

      <Tickertape />
    </main>
  )
}

export default Landpage
