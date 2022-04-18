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
      <h4>WE MAKE PEOPLE GENUINELY HAPPY</h4>
      <div className="row">
        {userReview.map((review) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            {review.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
