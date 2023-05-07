import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [name, setName] = useState();
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");

  const params = useParams();

  const mystyle = {
    fontFamily: "'Life Savers',cursive",
    fontSize: "129px",
  };

  function setvalues(e) {
    setName(e.name);
    setSummary(e.summary);
    if (e.image != null) {
      setImage(e.image.original);
    }
  }

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    let result = await fetch("https://api.tvmaze.com/search/shows?q=all");
    result = await result.json();
    const filteredData =  result.filter((e) => {
      return e.show.id == params.id;
    });

    setvalues(filteredData[0].show);
  };

  return (
    <div className="container  pt-5 pb-5 c1">
      <div className="card mb-3 ">
        <div className="row g-0 d-flex align-items-center justify-content-center">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="fs-1" style={mystyle}>
                {name}
              </h1>

              <p className="card-text fs-4">{summary}</p>
              <p className="card-text">
                <button
                  type="button"
                  className="btn  btn-lg"
                  style={{ backgroundColor: "#9a1c36", color: "white" }}
                >
                  Book Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
