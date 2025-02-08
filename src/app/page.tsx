"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = () => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setImages(data))
        .catch((err) => console.error("Erro ao buscar imagens:", err));
    };

    fetchImages();

    const interval = setInterval(fetchImages, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center content-center gap-3 pr-3 pl-3" key="Home">
      {images.length > 0 ? (
        images.map((data: any, index: number) => (
          <div className="mt-3" key={data._id || index}>
            <Image src={`data:image/png;base64, ${data.printscreen}`} width={450} height={450} alt="Image" />
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
