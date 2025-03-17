import data from './data.json';


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
  details: {
    [key: string]: string | number | string[];
  };
  reviews: {
    user: string;
    comment: string;
    rating: number;
    date: string;
  }[];
}


function sortByPrice(products: Product[], order: "asc" | "desc"): Product[] {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price; 
    }
  });
}


const sortedProductsAsc = sortByPrice(data, "asc");
console.log("Products sorted by price (ascending):", sortedProductsAsc);

const sortedProductsDesc = sortByPrice(data, "desc");
console.log("Products sorted by price (descending):", sortedProductsDesc);