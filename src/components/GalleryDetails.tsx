import React from 'react'
import { motion } from 'framer-motion'
import ContainerVariants from '../components/ContainerVariants.tsx'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ.jpg' or i... Remove this comment to see the full error message
import BBQ from './images/gallery/BBQ.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ2.jpg' or ... Remove this comment to see the full error message
import BBQ2 from './images/gallery/BBQ2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis2.jpg' ... Remove this comment to see the full error message
import tennis2 from './images/gallery/tennis2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis3.JPG' ... Remove this comment to see the full error message
import tennis3 from './images/gallery/tennis3.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis4.jpg' ... Remove this comment to see the full error message
import tennis4 from './images/gallery/tennis4.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis5.jpg' ... Remove this comment to see the full error message
import tennis5 from './images/gallery/tennis5.jpg'
// import tennis1 from './images/gallery_img/tennis1.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis6.jpg' ... Remove this comment to see the full error message
import tennis6 from './images/gallery/tennis6.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/backimg.jpg' ... Remove this comment to see the full error message
import backimg from './images/gallery/backimg.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotose.jpg' o... Remove this comment to see the full error message
import kotose from './images/gallery/kotose.jpg'
// import sun from './images/gallery_img/sun.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/river.jpg' or... Remove this comment to see the full error message
import river from './images/gallery/river.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/oikon.jpg' or... Remove this comment to see the full error message
import oikon from './images/gallery/oikon.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/iwai.jpg' or ... Remove this comment to see the full error message
import iwai from './images/gallery/iwai.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi.jpg' o... Remove this comment to see the full error message
import hanabi from './images/gallery/hanabi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/disney.jpg' o... Remove this comment to see the full error message
import disney from './images/gallery/disney.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/band.jpg' or ... Remove this comment to see the full error message
import band from './images/gallery/band.jpg'
// import band2 from './images/gallery_img/band2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/snow.png' or ... Remove this comment to see the full error message
import snow from './images/gallery/snow.png'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/female.jpg' o... Remove this comment to see the full error message
import female from './images/gallery/female.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi3.jpg' ... Remove this comment to see the full error message
import hanabi3 from './images/gallery/hanabi3.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/pink.jpg' or ... Remove this comment to see the full error message
import pink from './images/gallery/pink.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi4.jpg' ... Remove this comment to see the full error message
import hanabi4 from './images/gallery/hanabi4.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/jump.jpg' ... Remove this comment to see the full error message
import jump from './images/gallery/jump.jpg'


// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi1.jpg' ... Remove this comment to see the full error message
import hanabi1 from './images/gallery/hanabi1.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/sleep.jpg' or... Remove this comment to see the full error message
import sleep from './images/gallery/sleep.jpg'

// @ts-expect-error TS(2307): Cannot find module './images/gallery/nagomi.jpg' o... Remove this comment to see the full error message
import nagomi from './images/gallery/nagomi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/yui.jpg' or i... Remove this comment to see the full error message
import yui from './images/gallery/yui.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/fuji.JPG' or ... Remove this comment to see the full error message
import fuji from './images/gallery/fuji.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotomi.jpg' o... Remove this comment to see the full error message
import kotomi from './images/gallery/kotomi.jpg'
// // @ts-expect-error TS(2307): Cannot find module './images/gallery/fifth.jpg' o... Remove this comment to see the full error message
// import fifth from './images/gallery/fifth.jpg'
const GalleryDetailsHeader = () => {
    return (
        <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
        style={{
            margin:'auto'
        }}>
            BESTER &nbsp;
            <p className='text-warning'> Gallery</p>
        </h1>
    )
}

export default function GalleryDetails() {

    const data = [
        {
        row: "first",
        src1: tennis6,
        src2: river,
        src3: hanabi3,
        src4: iwai,
        src5: BBQ2,
        src6: fuji,
        src7: hanabi1,
        src8: band,
        src9: pink
        },
        {
        row: "second",
        src1: backimg,
        src2: BBQ,
        src3: oikon,
        src4: tennis2,
        src5: hanabi,
        src6: disney,
        src7: tennis5,
        src8: kotomi,
        src9: jump
        },
        {
        row: 'third',
        src1: nagomi,
        src2: snow,
        src3: hanabi4,
        src4: yui,
        src5: kotose,
        src6: tennis4,
        src7: sleep,
        src8: female,
        src9: tennis3
        }
    ]

    const ImagesLine = data.map((item) =>
    <div className="col-md-4 px-2" key={item.row}>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src1}
        >
            <div className="my-3 border border-4 border-dark" key={item.src1} style={{overflow:'hidden'}}>
                <img src={item.src1} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src2}>
            <div className="my-3 border border-4 border-dark" key={item.src2} style={{overflow:'hidden'}}>
                <img src={item.src2} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src3}>
            <div className="my-3 border border-4 border-dark" key={item.src3} style={{overflow:'hidden'}}>
                <img src={ item.src3 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src4}>
            <div className="my-3 border border-4 border-dark" key={item.src4} style={{overflow:'hidden'}}>
                <img src={ item.src4 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src5}>
            <div className="my-3 border border-4 border-dark" key={item.src5} style={{overflow:'hidden'}}>
                <img src={ item.src5 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src6}>
            <div className="my-3 border border-4 border-dark" key={item.src6} style={{overflow:'hidden'}}>
                <img src={ item.src6 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src7}>
            <div className="my-3 border border-4 border-dark" key={item.src7} style={{overflow:'hidden'}}>
                <img src={ item.src7 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src8}>
            <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}} key={item.src8} >
                <img src={ item.src8 }className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={item.src9}>
            <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                <img src={ item.src9 } key={item.src9} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
            </div>
        </motion.div>
    </div>
    )
    return (
        <div>
            <motion.div
            variants={ContainerVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
                marginTop: '150px'
            }}>
                <GalleryDetailsHeader/>
            </motion.div>
            <div className="row"
            style={{width: '80%',
                    margin: 'auto',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: '100px',
                    }}>
                {ImagesLine}
            </div>
        </div>
    )
}