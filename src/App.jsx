import React, {useEffect, useState} from 'react';
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Teasers from "./Teasers.jsx";

export default function App() {
    const [logo, setLogo] = useState({});
    const [menu, setMenu] = useState([]);
    const [social, setSocial] = useState([]);
    const [banner, setBanner] = useState({});
    const [importantTeaser, setImportantTeaser] = useState({});
    const [teasers, setTeasers] = useState({});
    const [slider, setSlider] = useState({});


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
        fetchDataFromServer('http://91.107.217.207/design-tutorials-first?_format=json', setSlider);

    }, []);


    return (
        <>
            <div className="dark container mx-auto">
                <Header websiteURL={websiteURL} logo={logo} menu={menu} social={social}/>
                <Banner banner={banner}/>
                <Teasers websiteURL={websiteURL} importantTeaser={importantTeaser} teasers={teasers} containerClass={'teasers'}/>
            </div>
            <div className="white container mx-auto">
                <Teasers websiteURL={websiteURL} teasers={slider} containerClass={'teasers__slider'}/>
            </div>
        </>
    );
};