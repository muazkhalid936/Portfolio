import { ProductCard } from "@/components/ProductCard";

async function fecthProdcut(id) {
  const reposnse = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "GET",
  });
  const result = await reposnse.json();
  return result;
}

export default async function DynamicPage({ params }) {
  const { productdetail } = params;
  const result = await fecthProdcut(productdetail);

  return <ProductCard title={result.title} thumbnail={result.thumbnail} description={result.description} />;
}
