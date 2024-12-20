// components/SliderComponent.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContent from "./TextContent";

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <img
        src="https://res.cloudinary.com/dpohykmqq/image/upload/h_1080/c_fit/v1734414129/VIEN7723_natgwu.jpg"
        className="w-full object-cover no-caret"
        loading="lazy" // Thêm lazy loading
        alt="Wedding Image"
      />
      <TextContent />
    </div>
  );
};

export default SliderComponent;
