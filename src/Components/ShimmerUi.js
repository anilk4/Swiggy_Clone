const Shimmer = () => {
  return (
    <div className="shop-list">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shop-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
