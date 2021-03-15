import React, { useState } from "react";
import Header from "./components/Header/Header";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    searchInput: ""
  });

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");
  const [imageData, setImageData] = useState([]);
  const [modalShouldShow, setModalShouldShow] = useState(false);
  const [modalImage, setmodalImage] = useState({
    image: "",
    firstName: "",
    lastName: ""
  });

  const fetchImages = async (options = null) => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    setHasSearched(false);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${formData.searchInput}&page=${page}&per_page=${perPage}`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        }
      );

      if (response.status === 200) {
        setHasSearched(true);
        const { results: images } = await response.json();
        const filteredImages = images.map((image) => {
          return {
            smallUrl: image.urls.small,
            fullUrl: image.urls.regular,
            firstName: image.user.first_name,
            lastName: image.user.last_name,
            location: image.user.location
          };
        });
        if (options && options.appendImages) {
          setImageData([...imageData, ...filteredImages]);
          setPage(page + 1);
          return;
        }
        setImageData([...filteredImages]);
        setPage(page + 1);
      }
    } catch (error) {
      setHasSearched(false);
      if (!error.response) {
        setError("Unable to fetch images. Please connect to the internet");
      }
      console.log(error);
    }
  };

  const handleChange = (el) => {
    setHasSearched(false);
    const { value } = el.target;
    setFormData({ searchInput: value });
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    fetchImages();
  };

  const showModal = (el, { firstName, lastName, location }) => {
    // if(el.target.className == "image")
    const image = el.target.getAttribute("data-full-image-url");
    setmodalImage({ image, firstName, lastName, location });
    setModalShouldShow(true);
    // console.log(image)
  };

  const closeModal = (el) => {
    if (el.target.className.includes("modal-overlay")) {
      setmodalImage("");
      setModalShouldShow(false);
    }
  };

  return (
    <div className="App">
      <Header
        input={formData.searchInput}
        hasSearched={hasSearched}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ImageContainer
        error={error}
        imageData={imageData}
        input={formData.searchInput}
        showModal={showModal}
      />
      {imageData.length && (
        <button
          className="view-more"
          onClick={() => fetchImages({ appendImages: true })}
        >
          View More
        </button>
      )}
      <Modal
        firstName={imageData.firstName}
        lastName={imageData.lastName}
        location={imageData.location}
        modalImage={modalImage}
        modalShouldShow={modalShouldShow}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
