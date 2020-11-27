import React, { useState } from 'react';
import Header from "./components/Header/Header"
import ImageContainer from "./components/ImageContainer/ImageContainer"

function App() {
  const [formData, setFormData] = useState({
    searchInput: ""
  })

  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState("")

  const [imageData, setImageData] = useState([])
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  const fetchImages = async () => {
      try {
          const images = await (await fetch('https://api.unsplash.com/photos', {
          headers: {
              'Authorization': `Client-ID ${accessKey}`
          }
          })).json()
          const filteredImages = images.map(image => {
              return {
                  smallUrl: image.urls.small,
                  fullUrl: image.urls.full,
                  firstName: image.user.first_name,
                  lastName: image.user.last_name,
                  location: image.user.location
              }
          })
          setImageData(filteredImages)
      } catch(error) {
        console.log(error);
        setError("Unable to fetch images. Please connect to the internet");
      }
  }

  const handleChange = (el) => {
      const { value } = el.target;
      setFormData({ searchInput: value });
  }

  const handleSubmit = (el) => {
      el.preventDefault()
      fetchImages();
  }

  return (
    <div className="App">
      <Header input={formData.searchInput} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ImageContainer error={error} imageData={imageData} isSearching={isSearching} input={formData.searchInput} />
    </div>
  );
}

export default App;