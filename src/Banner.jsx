export default function Banner({banner}) {
    return (
        <div className="banner">
            <div className="container">
                {banner[0] && banner[0].body && (
                    <div className="text-white uppercase" dangerouslySetInnerHTML={{__html: banner[0].body.value}}/>
                )}
            </div>
        </div>
    );
}