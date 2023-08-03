import React, {useEffect, useState} from 'react';

export default function Header({websiteURL, logo, menu, social}) {

    const displayMenu = menu.map((link, index) => {
        if (link.title === 'Blog') {
            return (
                <li key={index} className="active">
                    <a href={link.link.uri}>
                        {link.title}
                    </a>
                </li>
            );
        }
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
                <li key={index}>
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
            <div className="container">
                {logo && logo.field_image && (
                    <img
                        src={websiteURL + logo.field_image.uri.url}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                    />
                )}

                <ul className="nav text-white">{displayMenu}</ul>

                {social.field_social_links && (
                    <ul>{displaySocial}</ul>
                )}
            </div>
        </header>
    );
};