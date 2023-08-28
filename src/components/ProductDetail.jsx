import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  useEffect(() => {
    try {
      const searchItem = fetch(`https://api.mercadolibre.com/items/${id}`);
      const resultsItem = searchItem.json();
      setItem(resultsItem.id);

      console.log(item);
    } catch (e) {
      console.log("ERROR", e);
    }
  }, [id]);
  return (
    <div>
      <div ref={item.id} className="flex">
        <div>
          <img className="w-3/5" src={item.thumbnail}></img>
        </div>
        <div className="flex-initial w-64">
          <p>${item.price}</p>
          <p>{item.title}</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 py-4 rounded-lg">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
