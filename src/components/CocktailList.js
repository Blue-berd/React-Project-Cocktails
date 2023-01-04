/** @format */

import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return (<Loading />);
  }
  if (cocktails.length === 0) {
    return (
      <h4 className="section-title">
        no cocktails matched your search criteria
      </h4>
    );
  }
  return (
    <section section>
      <h2 className="section-title">cocktail</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
