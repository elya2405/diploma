import image_for_about_header from "../assets/image_for_about_header.jpg";
import "./About.css";
import video_for_about_1 from "../assets/video_2023-05-22_20-20-57.mp4";
export default function About() {
  return (
    <div className="About">
      <img className="Image_for_about_header" src={image_for_about_header} />

      <div className="Video_for_about">
        <div>
          <video className="Video_media" autoPlay muted loop>
            <source
              src={video_for_about_1}
              type="video/mp4"
            />
          </video>
        </div>

        <div className="Welcome">
          <p>
            Welcome to the "Sportwear store" - your ideal destination for
            fashionable and functional sportswear. We are a premium store
            offering a wide selection of quality products for an active
            lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
