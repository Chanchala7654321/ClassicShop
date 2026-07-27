import { useEffect, useState } from "react";
import { getCategories } from "../../api/categoryService";
import "./FeaturedCategories.css";

function FeaturedCategories({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  const nextSlide = () => {
    if (startIndex + 4 < categories.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(Math.max(categories.length - 4, 0));
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      onSelectCategory(null); // Deselect if already selected
    } else {
      onSelectCategory(categoryName);
    }
  };

  return (
    <section className="featured-categories">
      <div className="heading">
        <h2>Shop by Category</h2>
      </div>

      <div className="slider-wrapper">
        <button className="slider-btn left-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="category-container">
          {categories
            .slice(startIndex, startIndex + 4)
            .map((category) => (
              <div 
                className={`category-card ${selectedCategory === category.name ? 'selected' : ''}`} 
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                style={{ cursor: 'pointer', border: selectedCategory === category.name ? '2px solid #000' : 'none' }}
              >
                <img src={category.image} alt={category.name} />

                <h3>{category.name}</h3>

                <p>{category.description}</p>
              </div>
            ))}
        </div>

        <button className="slider-btn right-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default FeaturedCategories;