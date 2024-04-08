import Link from "next/link";
import React from "react";

const Products = ({getAllProducts}) => {
  return (

<ul>

  {getAllProducts && getAllProducts.length ?
   getAllProducts.map((prodcutItem)=>(
    <Link  href={`/Product/${prodcutItem.id}`}>
    <li key={prodcutItem.id}>
      {prodcutItem.title}

    </li>
    </Link>
    ))
    :(<h1>No Product</h1>)
}
</ul>

 
  );
};

export default Products;
