import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import talataImage from '../assets/talata.jpg'
import { Link } from 'react-scroll';
export const Studio = () => {
    const images = [
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--2-h-m2WQrBENz8F27axG.png",
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--3-h-YD04pEb3EBC4n50v.png",
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--33-h-dWxblLE8LgCbRLn8.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        goToNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        setCurrentIndex(isFirstImage ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
    };

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: {
        opacity: 0,
        transition: { duration: 0.3 },
        },
    };

  return (
    <div>
        <div className="relative w-full h-[200px] lg:h-[360px] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                key={currentIndex}
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full h-full"
                >
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full lg:h-[360px] h-[200px] object-cover"
                />
                </motion.div>
            </AnimatePresence>

            <motion.button
                onClick={goToPrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-[40%] hidden lg:block left-5 text-white rounded-full w-12 h-12 text-2xl z-10 items-center justify-center cursor-pointer transition-all"
            >
                <svg width="40" height="50" color='white' viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(-1,1) translate(-14,0)">
                        <path d="M1 25L13 13L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </motion.button>

            <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-[40%] hidden lg:block right-5 text-white rounded-full w-12 h-12 text-2xl z-10 items-center justify-center cursor-pointer transition-all"
            >
                <svg width="40" height="50" color='white' viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f3299b46="">
                    <path d="M1 25L13 13L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-f3299b46="">
                    </path>
                </svg>        
            </motion.button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                />
                ))}
            </div>
        </div>

        <div className='bg-gradient-to-b from-blue-950 to-sky-900 py-8'>
            <div className='w-[100%] md:w-[70%] mx-auto text-center'>
                <img className='mx-auto w-[100%] md:w-[50%] h-[500px]' src={talataImage} />
                <div className='flex justify-center mt-[-110px]'>
                    <p className='text-4xl font-semibold uppercase rounded-sm py-5 bg-sky-800 text-white w-[95%] md:w-[60%]'>Creative Content Studio</p>
                </div>
                <br />
                <span className='text-white'>
                    Expert guidance in audiovisual production, studio rental, and original content creation awaits you here.
                </span>
            </div>

            <div className="mt-16 w-full px-4 md:px-8 lg:px-12 xl:px-0 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="group flex flex-col">
                        <Link
                            to="content_creation" 
                            smooth={true} 
                            duration={500} 
                            className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img 
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0000000000-dOq4NXQ7grT8x0oE.png" 
                            alt="Content Creation"
                            />
                        </Link>
                        <Link 
                            to="content_creation" 
                            smooth={true} 
                            duration={500} 
                            className="mt-4 text-center"
                        >
                            <span className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer">
                            Content Creation
                            </span>
                        </Link>
                        </div>

                        <div className="group flex flex-col">
                        <Link 
                            to="visual_identity" 
                            smooth={true} 
                            duration={500} 
                            className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img 
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0-A1aJrgvv47fp6w9D.png" 
                            alt="Visual Identity"
                            />
                        </Link>
                        <Link 
                            to="visual_identity" 
                            smooth={true} 
                            duration={500} 
                            className="mt-4 text-center"
                        >
                            <span className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer">
                            Visual Identity
                            </span>
                        </Link>
                        </div>

                        <div className="group flex flex-col">
                        <Link 
                            to="photography" 
                            smooth={true} 
                            duration={500} 
                            className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img 
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/000000-Yan9z2PPX5iOD2qL.png" 
                            alt="Photography"
                            />
                        </Link>
                        <Link 
                            to="photography" 
                            smooth={true} 
                            duration={500} 
                            className="mt-4 text-center"
                        >
                            <span className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer">
                            Photography
                            </span>
                        </Link>
                        </div>

                        <div className="group flex flex-col">
                        <Link 
                            to="content_video" 
                            smooth={true} 
                            duration={500} 
                            className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img 
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=268,h=245,fit=crop/mxB75M8GpXFPvRla/00-AVLbND66jqSBKQVb.png" 
                            alt="Content video"
                            />
                        </Link>
                        <Link 
                            to="content_video" 
                            smooth={true} 
                            duration={500} 
                            className="mt-4 text-center"
                        >
                            <span className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer">
                            Content video
                            </span>
                        </Link>
                        </div>

                        <div className="group flex flex-col">
                        <Link 
                            to="marketing_digital" 
                            smooth={true} 
                            duration={500} 
                            className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img 
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,h=221,fit=crop/mxB75M8GpXFPvRla/untitled-2-mjEqNn13jDIQeO3O.png" 
                            alt="Marketing digital"
                            />
                        </Link>
                        <Link
                            to="marketing_digital" 
                            smooth={true} 
                            duration={500} 
                            className="mt-4 text-center"
                        >
                            <span className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer">
                            Marketing digital
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='text-center mt-20 text-white'>
                    <h1 className='text-5xl font-semibold uppercase'>Creative Projects</h1>
                    <span className='text-2xl font-semibold'>Explore our diverse portfolio of innovative audiovisual creations.</span>
                    <br /><br /><br />
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-b from-blue-950 to-sky-800 py-20'>
            <div className='mx-auto text-center' id='content_creation'>
                <div
                    className="block transition-all duration-300 hover:-translate-y-2"
                >
                    <img 
                    className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0000000000-dOq4NXQ7grT8x0oE.png" 
                    alt="Content Creation"
                    />
                </div>
                <br />
                <h1 className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer">
                    Content Creation
                </h1>
                <br />
                <span className='text-xl font-semibold text-white'>
                    Produce an engaging multimedia content series across podcast, Instagram Reels, YouTube videos, <br /> and targeted ads to captivate your audience.
                </span>

                <div className='flex justify-between gap-3 lg:gap-0 flex-col lg:flex-row w-[90%] mx-auto mt-6'>
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/pzE8alwIIyk?si=QcvfrSSum-QkU8lz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/6W2QrNdDRlg?si=fCRDt12DImWBFJ2m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>     
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/dil3XmzfJCg?si=mNTjCJf-dA4XP-M1" title="YouTube video player" ></iframe>
                </div>
            </div>
            
            <br /><br /><br />

            <div className='mx-auto text-center' id='visual_identity'>
                <div
                    className="block transition-all duration-300 hover:-translate-y-2"
                >
                    <img 
                    className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0-A1aJrgvv47fp6w9D.png" 
                    alt="Visual Identity"
                    />
                </div>
                <br />
                <h1 className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer">
                    Visual Identity
                </h1>
                <br />
                <span className='text-xl font-semibold text-white'>
                    Produce an engaging multimedia content series across podcast, Instagram Reels, YouTube videos, <br /> and targeted ads to captivate your audience.
                </span>

                <div className='grid grid-cols-3 lg:grid-cols-8 w-[90%] mx-auto mt-6'>
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fgsdfg-m7VKkqQ3E4IJW2BB.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-2-mnl95ZgWE4f48oEQ.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/sadaqa-2-Aq2oN1gWQ2TrZ8VJ.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/group-3-copy-dJo4NEQZlntM6rza.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fggsdfgh-mxB78EoMJ4Ua3RBl.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/0-1-YrDNX9gqyoHrk116.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/5555-dWxb0p3vGZfgPJN8.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/1-1-A3QJro62aaigbJWo.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/vgvsdfgf-AGB4vLQn50UZ2gZ6.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fdfgfgsrf-AVLbNWZ77QFqBklJ.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-3-dJo4NEQZEGhW3b1K.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/layer-2-ALpob0yeVMCZ3O8K.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/vector-smart-object-mp897egW8RuwNMpr.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/4-A0xVroz18asWKzN8.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-1-m5KbrpJMMOIK8Gz7.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/hero-text-effect-copy-AR0bV58LQjHGEOnQ.png' />
                </div>
            </div>

            <br /><br /><br />

            <div className='mx-auto text-center' id='photography'>
                <div
                    className="block transition-all duration-300 hover:-translate-y-2"
                >
                    <img 
                    className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/000000-Yan9z2PPX5iOD2qL.png" 
                    alt="Photography"
                    />
                </div>
                <br />
                <h1 className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer">
                    Photography
                </h1>
                <br />
                <span className='text-xl font-semibold text-white'>
                    Turn on the lights, prepare the camera, say CHEESE
                </span>

                <div className='grid grid-cols-3 lg:grid-cols-6 w-[90%] mx-auto mt-6'>
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-9-AGB4vLawkMhVpzJp.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-4-mk39526bwXu7rB62.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-7-A0xVroORMvUbqbkr.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1a-mjE958RNrnsO9G50.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/ddd-A3QJplq6pvuLygw8.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1-m2WQron3W6cMRo7a.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-5-mxB78EOgQvHV6nkN.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1b-AoPGNn3wG4fDxb2V.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-3-AGB4vLaRNBh1Jj2y.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/ss-AGB4GzeQ6EhJLJB7.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-8-m2WQronZj7CMbWn0.png' />
                    <img className='transition-transform duration-300 ease-in-out hover:scale-110' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1e-YbN9yOWwqntMDqE6.png' />
                </div>
            </div>

            <br /><br /><br />

            <div className='mx-auto text-center' id='content_video'>
                <div
                    className="block transition-all duration-300 hover:-translate-y-2"
                >
                    <img 
                    className="w-84 h-70 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=268,h=245,fit=crop/mxB75M8GpXFPvRla/00-AVLbND66jqSBKQVb.png" 
                    alt="Content video"
                    />
                </div>
                <br />
                <h1 className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer">
                    Content video
                </h1>
                <br />
                <span className='text-xl font-semibold text-white'>
                    Raising the level of brand presence - an indication that visual identity designs help to raise the level <br /> of brand presence and position.
                </span>

                <div className='flex justify-between gap-3 lg:gap-0 flex-col lg:flex-row w-[90%] mx-auto mt-6'>
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/uZDPXFQYz0Q?si=Q7zE95rspJ-Yxf9x" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/vtkQiLkNgOI?si=hbV9MSPlEu3SdlT6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <iframe className='lg:w-[32%] rounded-md shadow-lg' height="315" src="https://www.youtube.com/embed/XpunFFS-n8I?si=d_-WHTAatb56L2oi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <br /><br /><br />

            <div className='mx-auto text-center' id='marketing_digital'>
                <div
                    className="block transition-all duration-300 hover:-translate-y-2"
                >
                    <img 
                    className="w-84 h-70 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,h=221,fit=crop/mxB75M8GpXFPvRla/untitled-2-mjEqNn13jDIQeO3O.png" 
                    alt="Marketing digital"
                    />
                </div>
                <br />
                <h1 className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer">
                    Marketing digital
                </h1>
                <br />
                <span className='text-xl font-semibold text-white'>
                    Transformez votre présence digitale en un véritable levier de croissance.
                </span>

                <div className='flex justify-between gap-3 flex-col w-[60%] mx-auto mt-6'>
                    <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/whatsapp-image-2025-01-30-at-16.58.27_06232f5d-d957qxMPGJUPglEe.jpg' />
                    <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/whatsapp-image-2025-01-30-at-16.58.27_9f049e87-mk3q6RnwJkF95WVn.jpg' />
                    <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/tiktok-lagalerie-des-montre-A1aBxMq561i6KNWr.PNG' />
                </div>
            </div>
        </div>
    </div>
  );
};
