import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    let result = await fetch("https://api.tvmaze.com/search/shows?q=all");
    result = await result.json();
    setShows(result);
  };

  return (
    <div>
      <div className="container pt-5">
        <div className="row row-cols-3">
          {shows.map((elements) => {
            return (
              <div key={elements.show.id}>
                <div className="col">
                  <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={
                            elements.show.image != null
                              ? elements.show.image.medium
                              : "..."
                          }
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-start">
                          <h5 className="card-title">
                            <Link to={"/detail/" + elements.show.id}>
                              {elements.show.name}
                            </Link>
                          </h5>
                          <p className="card-text">
                            <b>Language</b> : {elements.show.language}
                            <br></br>
                            <b>Premiered</b> : {elements.show.premiered}
                            <br></br>
                            <b>Genre</b> :{" "}
                            {elements.show.genres.map((e) => {
                              return <span>| {e} </span>;
                            })}
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Status: {elements.show.status}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
