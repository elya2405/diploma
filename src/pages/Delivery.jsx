import image_for_delivery_header from "../assets/image_for_delivery_header.png";
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
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
