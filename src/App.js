import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Cards from "./components/memoryCards/Cards";

function App() {
  // const access_key = "JsrkR2MnSnVEzM5iq1hLoLokZaslyzS2MAFgr6xQ86lNMs2FyWzKe51J";
  const [images, setImages] = useState([]);
  // const imageCount = 6; // Số lượng ảnh muốn lấy
  // const query = "nature"; // Chủ đề ảnh (thiên nhiên)
  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(
          `/images.json`
          // headers: {
          //   Authorization: `${access_key}`,
          // },
        );
        // console.log("Full API response:", response.data); // Kiểm tra toàn bộ response
        if (response.data.photos) {
          setImages(response.data.photos || []);
        }
      } catch (error) {
        console.log("lỗi nè" + error);
      }
    }
    getImage();
  }, []);

  return <div className="App">{<Cards cards={images} />}</div>;
}

export default App;
