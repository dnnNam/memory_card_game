// const access_key = "JsrkR2MnSnVEzM5iq1hLoLokZaslyzS2MAFgr6xQ86lNMs2FyWzKe51J";

import axios from "axios";
import { useEffect, useState } from "react";

function useImages() {
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
  return images;
}

export default useImages;
