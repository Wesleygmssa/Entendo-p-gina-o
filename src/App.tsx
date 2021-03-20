import { useEffect } from "react";
import { Header } from "./Header";
import usePagination from "./hooks/UsePagination";
import usePhotos from "./hooks/usePhotos";
import { Container } from "./styles";

function App() {
  const { fetctPhotos, photos } = usePhotos(5);
  // const { setActualPage, actualPage } = usePagination();

  useEffect(() => {
    fetctPhotos(1);
  }, []);

  return (
    <Container>
      <Header title="O que vamos fazer hoje" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={`${photo.url}`}
              style={{ maxWidth: "100%" }}
              alt={`${photo.albumId}`}
            />
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {Array(5)
            .fill("")
            .map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    // setActualPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
        </div>
      </div>
    </Container>
  );
}

export default App;
