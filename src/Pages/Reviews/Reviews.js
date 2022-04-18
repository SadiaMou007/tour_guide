import React from "react";
import "./Reviews.css";
const Reviews = () => {
  const userReview = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?size=626&ext=jpg&ga=GA1.2.1395737918.1641046705",
      name: "Penelope Bruce",
      description: "I HAD THE BEST WEEK EVER WITH MY FAMILY",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?size=626&ext=jpg&ga=GA1.2.1395737918.1641046705",
      name: "Penelope Bruce",
      description: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?size=626&ext=jpg&ga=GA1.2.1395737918.1641046705",
      name: "Penelope Bruce",
      description: "I HAD THE BEST WEEK EVER WITH MY FAMILY",
    },
  ];
  return (
    <div className="review-container container">
      <h4 className="text-success text-center">
      PEOPLES REVIEW
      </h4>
      <br></br>
      <div className="container">
        {userReview.map((review) => {
          return (
            <>
              <div className="shadow-lg bg-light p-3" key={review.id}>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={review.img}
                      className="review-img rounded"
                      width="200px"
                      height="120px"
                      alt="reviewimage"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5 className="text-info">{review.name}</h5>
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
    </div>
  );
};

export default Reviews;
