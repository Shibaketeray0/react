import {parseAttribute} from "./App.jsx";
import {stripHtmlTags} from "./App.jsx";

export default function Archive({websiteURL, archives}) {
    return (
        <div className="archives">
            {archives.length > 0 && (
                archives.map((archive, index) => {
                    return (
                        <div className="archive" key={index}>
                            {archive.field_date && (
                                <div className="date">{archive.field_date}</div>
                            )}
                            <p className="title">
                                <a href={websiteURL + parseAttribute(archive.title, 'a', 'href')}>
                                    {stripHtmlTags(archive.title)}
                                </a>
                            </p>

                        </div>
                    );
                })

            )}
        </div>
    );
}