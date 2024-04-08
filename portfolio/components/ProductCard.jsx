import React from "react";

export const ProductCard = (result) => {

    return (
    
    <div className="card w-96 my-10 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={`${result?.thumbnail}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{result?.title}</h2>
        <p>{result?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
