import image_for_delivery_header from "../assets/image_for_delivery_header.png";
import "./Delivery.css";
export default function Delivery() {
  return (
    <div className="Delivery">
      <img
        className="Image_for_delivery_header"
        src={image_for_delivery_header}
        alt=""
      />
      <div className="Deliveryy">
        <div className="methods">
          <h4>Shipping methods:</h4>
          <p>
            Courier Delivery: Fast and convenient delivery directly to your
            doorway.
          </p>
          <p>
            Pick-up points: The possibility of pickup in a convenient place for
            you.
          </p>
          <p>
            Postal delivery: Sending orders by postal services for remote
            regions.
          </p>
        </div>
        <div className="regions">
          <h4>Delivery regions:</h4>
          <p>National Delivery: Sending orders all over the country.</p>
          <p>
            International delivery: The ability to send orders outside the
            country.
          </p>
        </div>

        <div className="time">
          <h4>Delivery time:</h4>
          <p>
            Indication of approximate delivery dates for different regions and
            delivery methods.
          </p>
          <p>
            Information about possible delays due to external factors (for
            example, weather conditions or holidays).
          </p>
        </div>

        <div className="cost">
          <h4>Shipping cost:</h4>
          <p>
            The designation of the cost of delivery or information about free
            delivery under certain conditions (for example, minimum order or
            promotions).
          </p>
        </div>
      </div>
    </div>
  );
}
