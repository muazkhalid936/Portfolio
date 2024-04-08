import React from "react";
import Card from "@/components/card";
async function fecthAllProdcuts() {
  const reposnse = await fetch("https://dummyjson.com/products", {
    method: "GET",
    cache:"no-store"
  });
  const result = await reposnse.json();
  if (result && result.products && result.products.length)
    return result.products;
}

export default async function Product() {
  const getAllProducts = await fecthAllProdcuts();

  return (
    <>
      <h1>Prodcuts Fetched</h1>
      <Card getAllProducts={getAllProducts} />
    </>
  );
}
