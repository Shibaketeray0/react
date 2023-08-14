import {stripHtmlTags} from "./App.jsx";

export default function Static({websiteURL, staticBlock, textColor}) {


    return (
        <div className="static_block">
            {staticBlock.body && staticBlock.field_title && (
                <div className="left_section">
                    <p className="title">
                        {staticBlock.field_title}
                    </p>
                    <div className="body opacity-50">
                        {stripHtmlTags(staticBlock.body.value)}
                    </div>
                    <div className="button_link">
                        <a href={staticBlock.field_link.uri}
                           className={textColor === 'black' ? 'text-white bg-black border border-solid border-black' : 'border border-solid border-white'}>{staticBlock.field_link.title}</a>
                    </div>
                </div>
            )}
            {staticBlock.field_image && (
                <div className="right_section">
                    <img src={websiteURL + staticBlock.field_image.uri.url} alt={staticBlock.field_image.alt}/>
                </div>
            )}
        </div>

    );
}