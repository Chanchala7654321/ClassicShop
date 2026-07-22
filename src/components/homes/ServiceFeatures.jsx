import "./ServiceFeatures.css";
import {
  FaTruck,
  FaUndoAlt,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function ServiceFeatures() {
  const services = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      description: "On orders above ₹999",
    },
    {
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      description: "30 Days Return Policy",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      description: "100% Safe Checkout",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "We're always here to help",
    },
  ];

  return (
    <section className="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">
            {service.icon}
          </div>

          <h3>{service.title}</h3>

          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default ServiceFeatures;