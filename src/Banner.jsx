import {stripHtmlTags} from "./App.jsx";
export default function Banner({banner}) {

    return (
        <div className="banner">
                {banner[0] && banner[0].body && (
                    <svg width="100%" viewBox="0 0 70 15" className="banner_text uppercase">
                        <text x="50%" y="60%" fill="white">
                            {stripHtmlTags(banner[0].body.value)}
                        </text>
                    </svg>
                )}
        </div>
    );
}