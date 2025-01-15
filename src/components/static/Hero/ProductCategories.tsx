import { categories } from "@/data/data";
import React from "react";
import CategoryCard from "./CategoryCard";

const ProductCategories = () => {
  return (
    <div>
      <h3 className="p-4 font-rowdies text-amber-800 text-3xl text-center font-semibold">
        Explore Product Categories
      </h3>
      <p className="text-black font-rowdies p-4 text-center font-thin">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        aliquid asperiores ipsa, blanditiis architecto pariatur praesentium
        maxime cumque, reprehenderit, dolore sunt cum voluptatibus adipisci
        nihil aspernatur? Quaerat officiis necessitatibus officia?
      </p>
      <div className="flex justify-center items-center flex-wrap">
        {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.link}
            />
          
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
