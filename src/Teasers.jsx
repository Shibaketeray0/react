export default function Teasers({importantTeaser, teasers}) {
    return (
        <div className="teasers">
            <div className="container">
                <div className="featured_article">
                    {importantTeaser[0] && (
                        importantTeaser[0].field_image
                    )}
                </div>
                <div className="featured_right_section">
                    {teasers.length > 0 && (
                        teasers.map((value, index) => {
                            return (
                                <div key={index} className="featured_service">
                                    {value.title}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}