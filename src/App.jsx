import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Teasers from "./Teasers.jsx";
import Static from "./Static.jsx";

export default function App() {
    const [logo, setLogo] = useState({});
    const [menu, setMenu] = useState([]);
    const [social, setSocial] = useState([]);
    const [banner, setBanner] = useState({});
    const [importantTeaser, setImportantTeaser] = useState({});
    const [teasers, setTeasers] = useState({});
    const [slider1, setSlider1] = useState({});
    const [staticBlock1, setStatic1] = useState({});
    const [slider2, setSlider2] = useState({});
    const [staticBlock2, setStatic2] = useState({});
    const [articles, setArticles] = useState({});




    const websiteURL = 'http://91.107.217.207';

    useEffect(() => {
        const fetchDataFromServer = async (jsonUrl, method) => {
            fetch(jsonUrl)
                .then(response => response.json())
                .then(data => {
                    if(Array.isArray(data)) {
                        method(data);
                    } else {
                        method(data.data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchDataFromServer('http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image', setLogo);
        fetchDataFromServer('http://91.107.217.207/jsonapi/menu_link_content/menu_link_content', setMenu);
        fetchDataFromServer('http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg', setSocial)
        fetchDataFromServer('http://91.107.217.207/jsonapi/node/page', setBanner);
        fetchDataFromServer('http://91.107.217.207/blog-articles-first?_format=json', setImportantTeaser);
        fetchDataFromServer('http://91.107.217.207/blog-articles-second?_format=json', setTeasers);
        fetchDataFromServer('http://91.107.217.207/design-tutorials-first?_format=json', setSlider1);
        fetchDataFromServer('http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image', setStatic1)
        fetchDataFromServer('http://91.107.217.207/editors-choice?_format=json', setSlider2);
        fetchDataFromServer('http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image', setStatic2)
        fetchDataFromServer('http://91.107.217.207/latest-articles?_format=json', setArticles)

    }, []);
    $(window).scroll(function(e){
        if ($(this).scrollTop() > 0) {
            $(".back-to-top").css("opacity", "1");

        } else {
            $(".back-to-top").css("opacity", "0");
        }
    });

    return (
        <>
            <div className="dark container mx-auto" id="top">
                <Header websiteURL={websiteURL} logo={logo} menu={menu} social={social}/>
                <Banner banner={banner}/>
                <Teasers websiteURL={websiteURL} importantTeaser={importantTeaser} teasers={teasers} containerClass={'teasers'}/>
            </div>
            <div className="white container mx-auto">
                <Teasers websiteURL={websiteURL} teasers={slider1} containerClass={'teasers__slider1'}/>
            </div>
            <div className="dark static container mx-auto text-white">
                <Static websiteURL={websiteURL} staticBlock={staticBlock1} textColor={'white'}/>
            </div>
            <div className="white container mx-auto">
                <Teasers websiteURL={websiteURL} teasers={slider2} containerClass={'teasers__slider2'} textColor={'black'}/>
            </div>
            <div className="bg-[#ffd335] static container mx-auto text-black">
                <Static websiteURL={websiteURL} staticBlock={staticBlock2} textColor={'black'}/>
            </div>
            <div className="white container mx-auto text-black">
                <Teasers websiteURL={websiteURL} teasers={articles} containerClass={'articles'}/>
            </div>
            <div className="dark container mx-auto px-40 py-60">
                <Teasers websiteURL={websiteURL} teasers={articles} containerClass={'teasers__slider2 dark-slider'} textColor={'white'}/>
            </div>
            <div className="white container mx-auto">

            </div>
            <a href="#top" className="back-to-top">
                Back to top <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg></a>
        </>
    );
};