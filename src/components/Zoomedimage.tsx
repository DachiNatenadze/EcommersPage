import { useState, useEffect } from "react";
import ShoeThumbnail1 from "/public/image-product-1.jpg";
import ShoeThumbnail2 from "/public/image-product-2.jpg";
import ShoeThumbnail3 from "/public/image-product-3.jpg";
import ShoeThumbnail4 from "/public/image-product-4.jpg";

const imgs = [ShoeThumbnail1, ShoeThumbnail2, ShoeThumbnail3, ShoeThumbnail4];

export default function Zoomedimage({
  isOpen,
  selectedSlide,
  closeModal,
  display,
}) {
  const [currentSlide, setCurrentSlide] = useState(selectedSlide);

  useEffect(() => {
    setCurrentSlide(selectedSlide);
  }, [selectedSlide]);

  const slideWidth = currentSlide * 100;

  if (!isOpen && display) {
    return null; // Render nothing if modal is closed
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        display ? "" : "hidden"
      }`}>
      <div className="relative max-w-3xl w-full bg-white rounded-lg p-4">
        <button
          className="absolute top-2 right-2 text-black bg-white rounded-full p-2"
          onClick={closeModal}>
          &times;
        </button>
        <div className="relative w-full overflow-hidden">
          <div
            style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
            className="flex transition-transform duration-700 ease-in-out">
            {imgs.map((img, index) => (
              <img
                key={index}
                className="min-w-full object-cover"
                src={img}
                alt={`Shoe ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 sm:hidden">
          {imgs.map((img, index) => (
            <img
              key={index}
              className={`w-16 h-16 object-cover m-2 cursor-pointer ${
                currentSlide === index ? "border-2 border-orange-500" : ""
              }`}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
