import React from "react";
import useLocalStorage from 'use-local-storage';
// import uaLogo from "../../assets/uaaLogo.png";
// import uaLogo2 from "../../assets/uaLogo2.png"
// import X1app from "../../assets/X1.png"
// import Xapp from "../../assets/X.png"
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from 'react-icons/bs';
import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark': 'light')

    // const themeSwitch = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme)
    // }

    return (
        <div className="footer__container">
            <div className="footer_left">
                <div className='inner_footer_left'>
                    <a href='/#'>
                        {/* {
                            theme === "dark" ? <img src="" width="70px" alt='my_logo' /> : <img src="" width="70px" alt='my_logo' />
                        } */}
                    </a>
                </div>
                <div className="inner_footer_right">
                    <p>Empowering businesses with scalable, secure, and automated Mobile and Web solutions.</p>
                </div>
            </div>

            <div className="footer_right">
                <div className="footer_rit_inner_details">
                    {/* <div className="socials_nested_div">
                        <Socials />
                    </div> */}
                    <div className="footer_rights_div">
                         <span className='copy_text'>&copy;  {currentYear} Uchenna Akubue [ Cholan IT solutions ] </span><p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;