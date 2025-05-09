import { useEffect } from 'react';
import { AnimatedSection } from '../animation/AnimationSection';
import logo from '../assets/logo.png';
import bodyLogo from '../assets/bodyImage.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import talata from '../assets/talata.jpg';
import service1 from '../assets/service-1.jpeg';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import logo1 from '../assets/logo-1.avif';
import logo2 from '../assets/logo-2.avif';
import logo3 from '../assets/logo-3.avif';
import logo4 from '../assets/logo-4.avif';
import logo5 from '../assets/logo-5.avif';
import logo7 from '../assets/logo-7.avif';
import logo8 from '../assets/logo-8.avif';
import logo9 from '../assets/logo-9.avif';
import logo10 from '../assets/logo-10.avif';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full">
        <AnimatedSection
            className="relative w-full h-screen overflow-hidden"
            config={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 }
            }}
        >
            <motion.div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${bodyLogo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
            
            <div className="relative z-20 w-full pt-16 flex flex-col items-center justify-center px-4 py-6 text-center text-white">
            <AnimatedSection config={{
                initial: { opacity: 0, y: -50, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { delay: 0.3, type: "spring", stiffness: 100 }
            }}>
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <img 
                    src={logo} 
                    alt='logo' 
                    className='w-[300px] md:w-[400px] lg:w-[500px] h-auto max-h-[250px] object-contain' 
                />
                </motion.div>
            </AnimatedSection>
            
            <AnimatedSection config={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.8 }
            }}>
                <motion.h1 
                className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4'
                animate={{
                    textShadow: ["0 0 8px rgba(234, 179, 8, 0.5)", "0 0 16px rgba(234, 179, 8, 0.7)", "0 0 8px rgba(234, 179, 8, 0.5)"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                >
                STUDIO BAYMOH
                </motion.h1>
            </AnimatedSection>
          
            <AnimatedSection config={{
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 1 }
            }}>
                <p className='text-xl md:text-2xl lg:text-xl max-w-2xl mx-auto leading-relaxed text-yellow-100'>
                Where creative vision meets technical excellence - your premier partner for innovative audiovisual solutions
                </p>
            </AnimatedSection>
          
            <AnimatedSection config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.8 }
            }}>
                <Link to="contact" smooth={true} duration={500} offset={-50}>
                <motion.div
                    className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 px-7 py-3 rounded-full mt-4 text-2xl font-medium shadow-lg shadow-yellow-900/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact
                </motion.div>
                </Link>
            </AnimatedSection>
          
            <AnimatedSection config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.8 }
            }}>
                <div className='flex justify-center gap-6 mt-8'>
                {[
                    { name: 'facebook', color: '#3b5998', link: 'https://www.facebook.com/baymoh.prod/' },
                    { name: 'instagram', color: '#e1306c', link: 'https://www.instagram.com/baymoh_/' },
                    { name: 'tiktok', color: '#010101', link: 'https://www.tiktok.com/@baymoh_' }
                ].map((social, index) => (
                    <motion.a 
                    key={social.name} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    whileHover={{ 
                        scale: 1.1,
                        backgroundColor: `${social.color}80`
                    }}
                    whileTap={{ scale: 0.9 }}
                    custom={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + 0.1 * index }}
                    >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {social.name === 'facebook' && (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                        )}
                        {social.name === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        )}
                        {social.name === 'tiktok' && (
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        )}
                    </svg>
                    </motion.a>
                ))}
                </div>
            </AnimatedSection>
        </div>
      </AnimatedSection>

        <AnimatedSection
            className='relative z-20 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200 text-black py-16 px-8 md:px-32'
            config={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0, duration: 0.8 }
            }}
        >
            <div className='flex flex-col lg:flex-row lg:w-[70%] w-[90%] mx-auto justify-between gap-8 lg:gap-16 py-8'>
            <div className="w-full lg:w-[60%]">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-4 md:mb-6'>Welcome</h1>
                <p className='text-base sm:text-lg md:text-xl font-light leading-relaxed'>
                <span className='underline decoration-yellow-400'>BAYMOH</span>, a leading company in the field of audiovisual production, digital education, and virtual events. We are proud to provide integrated solutions that help our clients excel in the rapidly evolving digital world.
                <br /><br />
                Since our establishment in 2022, despite the short duration, we have earned a distinguished reputation thanks to the expertise of our technical and creative team. We constantly strive to develop our skills and discover the latest technologies to be the ideal partner for our clients on their journey towards digital success.
                </p>
            </div>

            <div className='w-full lg:w-[40%] flex flex-col gap-4'>
                <div className='relative rounded-xl overflow-hidden border-2 border-yellow-600 shadow-lg shadow-yellow-900/50'>
                <img 
                    src={talata} 
                    alt="logo" 
                    className='w-full h-auto max-h-64 object-cover'
                />
                </div>
                
                <div className='bg-yellow-700 p-4 rounded-lg text-white flex justify-between items-center mt-[-40px] z-10 border border-yellow-500 shadow-lg shadow-yellow-900/30'>
                <div className='text-center'>
                    <h1 className='text-2xl sm:text-3xl font-semibold text-yellow-200'>+150</h1>
                    <p className='text-sm sm:text-base text-yellow-100'>Happy clients</p>
                </div>
                <div className='h-8 w-px bg-yellow-400/50'></div>
                <div className='text-center'>
                    <h1 className='text-2xl sm:text-3xl font-semibold text-yellow-200'>15</h1>
                    <p className='text-sm sm:text-base text-yellow-100'>Years of experience</p>
                </div>
                </div>
            </div>
            </div>
        </AnimatedSection>

      <AnimatedSection
        config={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0, duration: 0.4 }
        }}
      >
            <div className='w-[90%] lg:w-[70%] mx-auto text-center mt-20'>
            <h1 className='text-5xl uppercase font-semibold mb-4'>We are BAYMOH !!!</h1>
            <p className='mb-12'>BAYMOH is a project that came about after years of extensive work during which we have learned various digital skills. Among the areas we currently offer are: 1. Audiovisual studio 2. Online education 3. Event organization</p>
            
            <div className='flex w-[100%] flex-col md:flex-row justify-between gap-8 md:gap-6 mt-4'>
                {[
                { img: service1, title: "Audiovisual Production", desc: "We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results." },
                { img: service2, title: "Digital Education", desc: "We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results." },
                { img: service3, title: "Virtual Events", desc: "We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results." }
                ].map((service, index) => (
                <AnimatedSection
                    key={index}
                    config={{
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.1 * index }
                    }}
                >
                    <div className='w-full md:w-[100%] text-start transition-all duration-300 hover:scale-[1.02]'>
                        <div className='bg-white w-[100%] rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:border-yellow-500'>
                            <img 
                            src={service.img} 
                            className='w-full h-48 object-cover'
                            alt={service.title}
                            />
                            <div className='px-4 py-4'>
                            <h1 className='text-lg md:text-xl font-semibold mb-2'>{service.title}</h1>
                            <p className='text-sm md:text-base'>
                                {service.desc}
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        <button className='bg-yellow-600 hover:bg-yellow-500 py-3 border border-yellow-400 rounded-full w-[50%] mx-auto text-white font-medium transition-all duration-300 shadow-md shadow-yellow-900/30 hover:shadow-yellow-900/50'>
                        Learn more
                        </button>
                    </div>
                    </div>
                </AnimatedSection>
                ))}
            </div>
            </div>
        </AnimatedSection>

      <AnimatedSection
        className='relative z-20 bg-gradient-to-b from-amber-800 to yellow py-16 px-4 sm:px-8 md:px-16 lg:px-32 mt-20'
        config={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0, duration: 0.6, ease: "easeOut" }
        }}
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold uppercase mb-4 text-amber-100'>
            Build Your Vision With Us
          </h1>
          <p className='text-xl sm:text-2xl text-amber-200 mb-12'>
            Let's transform your creative potential into reality
          </p>

          <AnimatedSection config={{
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.2 }
          }}>
            <div className='mt-10 rounded-2xl overflow-hidden border-4 border-amber-700 shadow-2xl shadow-amber-900/30'>
              <iframe 
                className='w-full aspect-video' 
                src="https://www.youtube.com/embed/Wc2cARkhr4k?si=FbL5Cq6mpGQa0jGa" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>
          </AnimatedSection>

          <AnimatedSection config={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 }
          }}>
            <div className='mt-16'>
              <Link
                to="contact" 
                smooth={true} 
                duration={500}
                offset={-50}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-semibold shadow-lg shadow-amber-900/30 text-white w-fit mx-auto transition-all duration-300"
                >
                  Start Your Creative Journey
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>
                  <br /><br />
          <h1 className='text-4xl sm:text-5xl font-bold uppercase mb-4 text-amber-100'>
            Our clients
          </h1>
          <p className='text-xl sm:text-2xl text-amber-200 mb-12'>
            Our collaborative partnerships have enabled us to drive impact and <br />
            transform the way our clients engage with their stakeholders.
          </p>

          <div className='flex flex-wrap gap-8 justify-center px-4'>
            {[logo1, logo2, logo3, logo4, logo5, logo7, logo8, logo9, logo10].map((logo, index) => (
              <AnimatedSection
                key={index}
                config={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.1 * index }
                }}
              >
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg p-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 1}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}