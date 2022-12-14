import React, { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

// import {  useContext } from "react";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
// import "./shop.styles.scss";

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);
//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((title) => {
//         const products = categoriesMap[title];
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}
//     </div>
//   );
// };

// export default Shop;
