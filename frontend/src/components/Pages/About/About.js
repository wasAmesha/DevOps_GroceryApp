import React, { useEffect, useState } from 'react';
import classes from './about.module.css';
import StarRatings from 'react-star-ratings';

export default function About() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && review.trim() !== '') {
      const newReview = { rating, review };
      const newReviews = [...reviews, newReview];

      // Update local storage
      localStorage.setItem('reviews', JSON.stringify(newReviews));

      setReviews(newReviews);

      // Clear the form
      setRating(0);
      setReview('');
    }
  }

  return (
    <div>
      <img src='/foods/Cart.jpg' alt="logo" align='right' height='300px'></img>
      <h1 className={classes.title}> What we provide?</h1>
      <p className={classes.para}>We are dedicated to providing you with a seamless and convenient 
        shopping experience, right from the comfort of your own home. 
        With a wide range of categories to choose from, including 
        vegetables, fruits, fish, and meat, we ensure that your kitchen is 
        always stocked with the freshest and highest quality produce</p>
      <h1 className={classes.title}>Why choose us?</h1>
      <p className={classes.para}>
        Choose us for a unique online grocery experience. We prioritize 
        quality, sourcing the finest produce and meats for your table. Our 
        user-friendly platform ensures seamless browsing through 
        categories, making your shopping hassle-free. Trust us to deliver 
        freshness and convenience, backed by a commitment to excellence.
      </p>
      <div className={classes.container}>
        <div className={classes.customer_reviews}>
          <h2  className={classes.review}>Customer Reviews</h2>
          <ul>
            {reviews.map((r, index) => (
              <li key={index}>
                <div>
                  <StarRatings rating={r.rating} starRatedColor="gold" numberOfStars={5} name="rating" />
                </div>
                <div className={classes.para}>{r.review}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.add_review}>
          <h2>Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={handleRatingChange}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div className={classes.para}>
              <textarea
                id="review"
                name="review"
                rows="4"
                cols="50"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder='Comment here!'
                required
              ></textarea>
            </div>
            <button type="submit" className={classes.btn}>Submit</button> 
          </form>
          <p></p>
          <img src='/foods/grocery-delivery.jpg' alt="logo" align='right' height='400px'></img>
        </div>
      </div>
    </div>
  )
};