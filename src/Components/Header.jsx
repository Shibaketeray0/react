import React, {useState} from 'react';

export default function Header({websiteURL, logo, menu, social}) {
    const [isOpen, setOpen] = useState(false);
    const handleBurger = () => {
        setOpen(isOpen => !isOpen);
        document.body.classList.toggle("overflow-hidden");
    }
    // main navigation
    const displayMenu = menu.map((link, index) => {
        return (
            <li key={index}>
                <a href={link.link.uri}>
                    {link.title}
                </a>
            </li>
        )
    });
    // social links
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

                    <div className="burger flex lg:hidden text-gray-400" onClick={handleBurger}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </div>

                </div>
                {social.field_social_links && (
                    <ul className="social_links hidden lg:flex">{displaySocial}</ul>
                )}
            </div>
            {/*re-rendering main menu and social links for burger menu*/}
            <div
                className={`burger-menu-overlay ${isOpen && ("show")} text-black bg-white lg:hidden overflow-scroll transition-all`}>
                <div className="burger burger-close flex lg:hidden text-black" onClick={handleBurger}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
                <ul className="menu-burger uppercase flex flex-col bg-white">
                    {
                        menu.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.link.uri}>
                                        <span className="arrow-left">
                                            ↳
                                        </span>
                                        {link.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                {social.field_social_links && (
                    <ul className="social-links-burger flex flex-col bg-white">
                        {social.field_social_links.map((link, index) => {
                            return (
                                <li key={index} className={link.field_link.title}>
                                    <a href={link.field_link.uri} target={"_blank"}>
                                    <span className="arrow-left">
                                        ↳
                                    </span>
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