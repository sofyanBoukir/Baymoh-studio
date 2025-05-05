import { Link } from 'react-router-dom'
import agLogo from '../assets/talata-logo.png'
import { links } from '../constants/links'


export const Header = () => {
    const pathName = window.location.pathname

    return (
        <div className='flex justify-between md:px-[5%] items-center color-to-blue'>
            <div>
                <img className='w-40 h-20' src={agLogo} alt="logo"/>
            </div>
            
            <div className='flex gap-10 justify-center lg:w-[30%] md:w-[50%] text-xl text-blue-100'>
                <Link to={links.home} className={`hover:text-blue-400 duration-100 hover:underline ${pathName === links.home ? 'text-blue-400 underline' :null}`}>Home</Link>
                <Link to={links.studio} className={`hover:text-blue-400 duration-100 hover:underline ${pathName === links.studio ? 'text-blue-400 underline' :null}`}>Studio</Link>
                <Link to={links.events} className={`hover:text-blue-400 duration-100 hover:underline ${pathName === links.events ? 'text-blue-400 underline' :null}`}>Events</Link>
                <Link to={links.projects} className={`hover:text-blue-400 duration-100 hover:underline ${pathName === links.projects ? 'text-blue-400 underline' :null}`}>Projects</Link>
                <Link to={links.contact} className={`hover:text-blue-400 duration-100 hover:underline ${pathName === links.contact ? 'text-blue-400 underline' :null}`}>Contact</Link>
            </div>

            <div className='flex gap-2'>
                <div>
                    <a href="facebook.com">
                        <svg style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </a>
               </div>

               <div>
                    <a href="instagram.com">
                        <svg style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                    </a>
               </div>

               <div>
                    <a href="tiktok.com">
                        <svg style={{ fill: 'white' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                        </svg>
                    </a>
               </div>
            </div>
        </div>
    )
}
