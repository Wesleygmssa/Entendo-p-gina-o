import { useState } from "react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbailUrl: string;
}

export default function usePhotos(pageLimit: number) {
  const [photos, setPhotos] = useState<Photo>();

  function fetctPhotos(page: number) {
    const virtualPage = (page - 1) * pageLimit < 0 ? 0 : (page - 1) * pageLimit;

    fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${virtualPage}_limit=${pageLimit}`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch(window.alert);
  }
  return {
    fetctPhotos,
    photos,
  };
}
