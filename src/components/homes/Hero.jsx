import { useEffect, useState } from "react";
import { getHeroSlides } from "../../api/heroService";
import "./Hero.css";

function Hero() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchSlides() {
      try {
        const data = await getHeroSlides();
        setSlides(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  if (slides.length === 0) {
    return <h2>Loading...</h2>;
  }

  const slide = slides[currentSlide];

  return (
    <section className="hero">

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="hero-content">

        <div className="hero-text">

          <span className="badge">
            {slide.badge}
          </span>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <button className="primary-btn">
              {slide.button1}
            </button>

            <button className="secondary-btn">
              {slide.button2}
            </button>
          </div>

        </div>

        <div className="hero-image">
          <img src={slide.image} alt={slide.title} />
        </div>

      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;