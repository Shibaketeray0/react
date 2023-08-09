import React, {useEffect, useState} from 'react';
import { Fade as Hamburger } from 'hamburger-react';
export default function Header({websiteURL, logo, menu, social}) {
    const [isOpen, setOpen] = useState(false);

    const displayMenu = menu.map((link, index) => {
        return (
            <li key={index}>
                <a href={link.link.uri}>
                    {link.title}
                </a>
            </li>
        )
    });
    const displaySocial = social.field_social_links
        ? social.field_social_links.map((link, index) => {
            return (
                <li key={index} className={link.field_link.title}>
                    <a href={link.field_link.uri} target={"_blank"}>
                        <img
                            src={websiteURL + link.field_icon_svg.uri.url}
                            alt={link.field_icon_svg.meta.alt}
                        />
                    </a>
                </li>
            )
        })
        : null;
    const handleBurger = () => {
        let element = document.getElementsByClassName('burger-menu-overlay');
        element[0].classList.toggle('show');
    }
    return (
        <header>
            <div className="container flex justify-between items-center">
                <div className="nav flex items-center justify-between lg:justify-normal w-[100%]">
                    {logo && logo.field_image && (
                        <div className="logo">
                            <a href="#">
                                <img
                                    src={websiteURL + logo.field_image.uri.url}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </a>
                        </div>
                    )}

                    <ul className="menu uppercase hidden lg:flex">{displayMenu}</ul>
                    <div className={isOpen === false ? 'hamburger flex lg:hidden' : 'hamburger top-4 right-4 absolute'}>
                        <Hamburger direction="right" size={24} color={isOpen === false ? 'gray' : 'black'} onToggle={handleBurger} toggled={isOpen} toggle={setOpen}/>
                    </div>


                </div>
                {social.field_social_links && (
                    <ul className="social_links hidden lg:flex">{displaySocial}</ul>
                )}
            </div>
            <div className="burger-menu-overlay text-black bg-white lg:hidden">
                <ul className="menu-burger uppercase flex flex-col">{displayMenu}</ul>
                {social.field_social_links && (
                    <ul className="social-links-burger flex flex-col">
                        {social.field_social_links.map((link, index) => {
                            return (
                                <li key={index} className={link.field_link.title}>
                                    <a href={link.field_link.uri} target={"_blank"}>
                                        {link.field_link.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>

        </header>
    );
};