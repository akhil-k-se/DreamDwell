import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../../Server/Controllers/apiRequest";
import UploadWidget from "./UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          images: images,
        },
        postDetail: {
          desc: value,
          size: parseInt(inputs.size),
          LifestyleScore: parseInt(inputs.LifestyleScore),
          SustainabilityScore: parseInt(inputs.SustainabilityScore),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("An error occurred");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1 className="post-heading">Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="title-price-address">
              <div className="item">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />
              </div>
              <div className="item">
                <label htmlFor="price">Price</label>
                <input id="price" name="price" type="number" />
              </div>
              <div className="item">
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />
              </div>
            </div>
            <div className="title-price-address">
              <div className="item">
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Bedroom Number</label>
                <input min={1} id="bedroom" name="bedroom" type="number" />
              </div>
              <div className="item">
                <label htmlFor="bathroom">Bathroom Number</label>
                <input min={1} id="bathroom" name="bathroom" type="number" />
              </div>
            </div>
            <div className="title-price-address">
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type">
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="size">Total Size (sqft)</label>
                <input min={0} id="size" name="size" type="number" />
              </div>
            </div>
            <div className="title-price-address">
              <div className="item">
                <label htmlFor="LifestyleScore">Neighborhood Lifestyle Score</label>
                <select name="LifestyleScore">
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="item">
                <label htmlFor="SustainabilityScore">Sustainability Score</label>
                <select name="SustainabilityScore">
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="item description">
              <label htmlFor="desc">Property History</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item description">
              <label htmlFor="desc">Review</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <button className="sendButton">Add</button>
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
