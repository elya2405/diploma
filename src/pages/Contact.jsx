import image_for_contact_header from "../assets/image_for_contact_header.png";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <img
        className="Image_for_contact_header"
        src={image_for_contact_header}
        alt=""
      />
      <div className="Contacttt">
      <div className="block_1">
          <div className="block_1_content">
            <h2>Contacts</h2>
            <p>Электронная почта: info@sportwearstore.com</p>
            
            <p>Address: Street, City, Country, Postal Code</p>
            <p>Phone: +X XXX XXX-XXXX</p>
          </div>
        </div>

        <div className="block_2">
          <div className="block_2_content">
            <h2>Working hours:</h2>
            <p>Monday - Friday: 9:00 - 18:00</p>
            <p>Saturday: 10:00 - 15:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
        
      
    </div>
  );
}
