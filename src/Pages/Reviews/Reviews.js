import React from "react";
import "./Reviews.css";
import fb from "../../Images/SocialIcons/fb.png";
import insta from "../../Images/SocialIcons/insta.png";
import { Link } from "react-router-dom";
const Reviews = () => {
  const userReview = [
    {
      id: 1,
      img: "https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png",
      name: "Penelope Bruce",
      title: "I HAD THE BEST WEEK EVER WITH MY FAMILY",
      description:
        "Tour guide is such a warm personality and highly motivated guide (recommendable!). I truly enjoyed walking the six of us through the area. The scenery was beautiful and it was a relieve to walk in such a quiet and peaceful environment. The natural bath on the end was a great way to end the tour.",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      name: "Mary Smith",
      title: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
      description:
        "The atmosphere is so special that it really felt like home to all of us. All respect for guide who does a great job there; a true sample of excellent tour guide!",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5W-3fSGOIcgkl-Z0fFhkIQirjrBHZ2SBct4ZuJ5k9rqe6iWClEGIHgLee0zoCvlhs8KE&usqp=CAU",
      name: "Jack Wilson",
      title: " MOST WONDERFULL MOMENT IN MY LIFE",
      description:
        "She was very professional and during the drive gave us a history lesson about Transylvania, with much detail about the Romanians, Hungarians, Turks, Austrians, Saxons, gypsies and so much more! She is well versed in the culture and made the history come alive. Nico's love of her city and country made our visit the highlight of our trip!",
    },
  ];
  return (
    <div className="review-container container mt-3">
      <h3 className="text-success text-center my-4">PEOPLES REVIEW</h3>
      <br></br>
      <div className="container">
        {userReview.map((review) => {
          return (
            <>
              <div className="shadow-lg bg-light p-3" key={review.id}>
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div>
                      {" "}
                      <img
                        src={review.img}
                        className="review-img rounded"
                        width="200px"
                        height="120px"
                        alt="reviewimage"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 p-2">
                    <div className="social d-flex align-items-center my-2 bg-light">
                      <h5 className=" my-2 me-3">{review.name}</h5>
                      <img src={fb} alt="" />
                      <img src={insta} alt="" />
                    </div>
                    <h6>{review.title}</h6>
                    <p>{review.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
            </>
          );
        })}
      </div>
      <div className="mx-auto w-50 mb-3 p-3">
        <btn className="btn btn-pill w-100 mx-auto p-2 g-btn">
          SEE ALL REVIEW
        </btn>
      </div>
    </div>
  );
};

export default Reviews;
