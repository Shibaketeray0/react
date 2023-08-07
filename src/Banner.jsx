export default function Banner({banner}) {
    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    }
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