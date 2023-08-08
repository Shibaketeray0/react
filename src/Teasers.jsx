import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
export default function Teasers({websiteURL, importantTeaser, teasers, containerClass, textColor}) {
    const parseAttribute = (string, tag, attribute) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(string, 'text/html');
        const imgElement = doc.querySelector(tag);
        return imgElement ? imgElement.getAttribute(attribute) : null;
    }
    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    }
    const displayImportantTeaser = () => {
        return (
            <>
                {importantTeaser && importantTeaser[0] && (
                    <div className="featured_article flex flex-col">
                        <img className="teaser_image" src={websiteURL + importantTeaser[0].field_image_1}
                             alt={parseAttribute(importantTeaser[0].field_image, 'img','alt')}/>
                        <div className="date text-gray-600">{importantTeaser[0].field_date}</div>
                        <p className="title text-white"><a
                            href={websiteURL + importantTeaser[0].view_node}>{importantTeaser[0].title_1}</a></p>
                        <div className="body text-gray-500">{stripHtmlTags(importantTeaser[0].body)}</div>
                    </div>
                )}
            </>
        );
    }


    const displayTeasers = () => {
        if (teasers.length > 0) {
            if (containerClass === 'teasers' || containerClass === 'articles') {
                return (
                    <div
                        className={containerClass === 'teasers' ? 'featured_right_section flex flex-col' : 'articles__inner flex flex-wrap'}>
                        {teasers.map((teaser, index) => {
                            return (
                                <div key={index} className="featured_service flex">
                                    <div className="teaser_image flex">
                                        <img src={websiteURL + teaser.field_image_1}
                                             alt={parseAttribute(teaser.field_image, 'img', 'alt')}/>
                                    </div>
                                    <div className="teaser_content flex flex-col">
                                        {teaser.field_date && (
                                            <div className="date text-gray-500">{teaser.field_date}</div>
                                        )}
                                        <p className={containerClass === 'teasers' ? "title text-white" : "title text-black"}>
                                            <a href={websiteURL + parseAttribute(teaser.title, 'a', 'href')}>{stripHtmlTags(teaser.title_1)}</a>
                                        </p>
                                        {teaser.body && (
                                            <div className="body">{stripHtmlTags(teaser.body)}</div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            } else if (containerClass.includes('teasers__slider')) {
                let settings = {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1};
                return (
                    <div className="teasers__slider max-w-[100%]">
                        <Slider {...settings}>
                            {teasers.map((teaser, index) => {
                                return (
                                        <div key={index} className={"feature__slide flex border-r border-solid border-gray-600"}>
                                            <div className="teaser_image flex">
                                                <img src={websiteURL + teaser.field_image_1}
                                                     alt={parseAttribute(teaser.field_image, 'img', 'alt')}/>
                                            </div>
                                            <div className="teaser_content flex flex-col">
                                                {teaser.field_date && (
                                                    <div className="date text-gray-500">{teaser.field_date}</div>
                                                )}
                                                <p className={textColor === "black" ? "title text-black" : "title text-white opacity-50"}>
                                                    <a href={websiteURL + parseAttribute(teaser.title, 'a', 'href')}>{stripHtmlTags(teaser.title_1)}</a>
                                                </p>
                                                {teaser.body && (
                                                    <div className={textColor === 'black' ? "body text-black" : "body text-gray-600"}>{stripHtmlTags(teaser.body)}</div>
                                                )}
                                            </div>
                                        </div>
                                );
                            })}
                            {/*{teasers.map((teaser, index) => {*/}
                            {/*    return (*/}
                            {/*        <div key={index} className={"feature__slide flex border-r border-solid border-gray-600"}>*/}
                            {/*            <div className="teaser_image flex">*/}
                            {/*                <img src={websiteURL + teaser.field_image_1}*/}
                            {/*                     alt={parseAttribute(teaser.field_image, 'img', 'alt')}/>*/}
                            {/*            </div>*/}
                            {/*            <div className="teaser_content flex flex-col">*/}
                            {/*                {teaser.field_date && (*/}
                            {/*                    <div className="date text-gray-500">{teaser.field_date}</div>*/}
                            {/*                )}*/}
                            {/*                <p className={textColor === "black" ? "title text-black" : "title text-white opacity-50"}>*/}
                            {/*                    <a href={websiteURL + parseAttribute(teaser.title, 'a', 'href')}>{stripHtmlTags(teaser.title_1)}</a>*/}
                            {/*                </p>*/}
                            {/*                {teaser.body && (*/}
                            {/*                    <div className={textColor === 'black' ? "body text-black" : "body text-gray-600"}>{stripHtmlTags(teaser.body)}</div>*/}
                            {/*                )}*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    );*/}
                            {/*})}*/}
                        </Slider>
                    </div>
                );
            }
        }
    };
    return (
        <div className={`${containerClass} ${containerClass === 'teasers' ? 'grid grid-cols-2' : ''} flex`}>
            {displayImportantTeaser()}
            {displayTeasers()}
        </div>
    );
}
