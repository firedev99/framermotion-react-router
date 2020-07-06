import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ image }) => {
    const imageDetails = {
        width: 524,
        height: 650,
    };
    
    const transition = {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }
    const transition1 = {
        duration: 1.4,
        ease: [0.43, 0.13, 0.23, 0.96]
    }

    return (
      <>
        <main>
          <div className='container'>
            <div className='row center'>
              <div className='image-container'>
                <div
                  className='thumbnail'
                  ref={image}
                  style={{
                    width: imageDetails.width,
                    height: imageDetails.height,
                  }}>
                  <div className='frame'>
                    <Link to={`/model/yasmeen-tariq`}>
                      <motion.img 
                        transition={transition}
                        whileHover={{ scale: 1.1 }}
                        src={require(`../assests/model.jpg`)} 
                      />
                    </Link>
                  </div>
                </div>
                <motion.div
                    exit={{opacity: 0}} 
                    transition={transition1}
                    className='information'
                >
                  <div className='title'>Yasmeen Tariq</div>
                  <div className='location'>
                    <span>28.538336</span>
                    <span>-81.379234</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
}

export default Home
