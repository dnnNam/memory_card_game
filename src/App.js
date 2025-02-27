import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
function App() {
  const access_key = "RxSkDMNq1tDaGaRE9ZfVswWJi2BGTryMvTEZrixsa8o";
  const [images, setImages] = useState([]);
  const imageCount = 5; // Số lượng ảnh muốn lấy
  const query = "nature"; // Chủ đề ảnh (thiên nhiên)
  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=${imageCount}`,
          {
            headers: {
              Authorization: `Client-ID ${access_key}`,
            },
          }
        );
        if (response.data.results) {
          setImages(response.data.results);
        }
      } catch (error) {
        console.log("lỗi nè" + error);
      }
    }
    getImage();
  }, []);

  return (
    <div className="App">
      {images.length > 0 &&
        images.map((img, index) => (
          <img key={index} src={img.urls.regular} alt={`Ảnh ${index + 1}`} />
        ))}
    </div>
  );
}

export default App;
