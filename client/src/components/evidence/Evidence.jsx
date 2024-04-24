import "./evidence.scss";
import { evidenceImages } from "../../lib/mockData";
import { useState } from "react";

function Evidence() {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="evidence">
      {imageIndex !== null && (
        <div className="fullslider">
          <div className="left-arrow">
            <div className="arrow">
              <img src="/left-arrow.jpg" alt="" className="left" />
            </div>
          </div>
          <div className="image-viewer">
            <img src={evidenceImages[imageIndex].image} alt="" />
          </div>
          <div className="right-arrow">
            <div className="arrow">
              <img src="/left-arrow.jpg" alt="" />
            </div>
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img
          src={evidenceImages[0].image}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {evidenceImages.slice(1, 4).map((image, index) => (
          <img
            src={image.image}
            alt=""
            key={image.id}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Evidence;
