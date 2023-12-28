const ShoppingCards = ({ title, image, category, rating }) => {
  return (
    <div className="shop-card">
      {<img src={image} alt='Dress' className='img' />}
      <h2>{title}</h2>
      <h3>{rating.rate}</h3>
      <h3>{category}</h3>
    </div>
  );  
};

export default ShoppingCards;
