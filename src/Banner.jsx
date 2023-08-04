export default function Banner({banner}) {
    return (
        <div className="banner">
                {banner[0] && banner[0].body && (
                    <div className="banner_text text-white uppercase text-center" dangerouslySetInnerHTML={{__html: banner[0].body.value}}/>
                )}
        </div>
    );
}