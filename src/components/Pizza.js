import React from 'react';




class Pizza extends React.Component{

  render() {
  return(
    <div className="pizza-list">
    <figure className="pizza">
<div className="pizza__hero">
  <img src="https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-0.3.5&s=dc82336ad3e3873b0a81e9389d346916&auto=format&fit=crop&w=1952&q=80" alt="Pizza" className="pizza__img"/>
</div>
<div className="pizza__content">
  <div className="pizza__title">
    <h1 className="pizza__heading">Pizza Vegetale 👌</h1>
    <div className="pizza__tag pizza__tag--1">#vegetarian</div>
    <div className="pizza__tag pizza__tag--2">#italian</div>
  </div>
  <p className="pizza__description">Yummy veggie pizza with tasty olives, crisp peppers, fresh arugula and original italian tomato sauce.</p>
  <div className="pizza__details">
    <p className="pizza__detail"><span className="emoji">🍕</span>850 kcal</p>
    <p className="pizza__detail"><span className="emoji">⏱</span>30 min</p>
    <p className="pizza__detail"><span className="emoji">⭐️</span>4.7 / 5</p>
  </div>
</div>
<div className="pizza__price">$11.99</div>
</figure>
</div>
  );

}
}



export default Pizza;
