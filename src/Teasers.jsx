export default function Teasers({websiteURL, importantTeaser, teasers, containerClass}) {
    const parseAlt = (image_field) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(image_field, 'text/html');
        const imgElement = doc.querySelector('img');
        return imgElement ? imgElement.getAttribute('alt') : null;
    }
    const displayImportantTeaser = () => {
        return (
            <>
                {importantTeaser && importantTeaser[0] && (
                    <div className="featured_article flex flex-col">
                        <img className="teaser_image" src={websiteURL + importantTeaser[0].field_image_1} alt={parseAlt(importantTeaser[0].field_image)}/>
                        <div className="date text-gray-500">{importantTeaser[0].field_date}</div>
                        <p className="title text-white"><a href={websiteURL + importantTeaser[0].view_node}>{importantTeaser[0].title_1}</a></p>
                    </div>
                )}
            </>
        );
    }
    const displayTeasers = () => {
        return (
            <>
                {teasers.length > 0 && (
                    <div className={containerClass === 'teasers' ? 'featured_right_section flex flex-col' : 'slider_wrapper'}>
                        {teasers.map((teaser, index) => {
                            return (
                                <div key={index} className="featured_service flex">
                                    <div className="teaser_image flex">
                                        <img src={websiteURL + teaser.field_image_1} alt={parseAlt(teaser.field_image)}/>
                                    </div>
                                    <div className="teaser_content flex flex-col">
                                        <div className="date text-gray-500">{teaser.field_date}</div>
                                        <p className="title text-white"><a href={websiteURL + teaser.view_node}>{teaser.title_1}</a></p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </>
        );
    };
    return (
        <div className={`${containerClass} ${containerClass === 'teasers' ? 'grid grid-cols-2' : ''} flex`}>
                {displayImportantTeaser()}
                {displayTeasers()}
        </div>
    );
}