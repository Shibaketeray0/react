import {stripHtmlTags} from "./App.jsx";
import {parseAttribute} from "./App.jsx";
export default function Testimonial({websiteURL, testimonials}) {
    return (
        <div className="testimonials">
            {testimonials.length > 0 && (
                testimonials.map((testimonial, index) => {
                    return (
                      <div className="testimonial" key={index}>
                          <img src={websiteURL + testimonial.field_image_1} alt={parseAttribute(testimonial.field_image, 'img', 'alt')}/>
                          <div className="testimonial_content">
                              <div className="body">
                                  {stripHtmlTags(testimonial.body)}
                              </div>
                              <div className="user">
                                  <a href={websiteURL + parseAttribute(testimonial.title, 'a', 'href')}>@{testimonial.field_remember}</a>
                              </div>
                          </div>
                      </div>
                    );
                })
            )}
        </div>
    );
}