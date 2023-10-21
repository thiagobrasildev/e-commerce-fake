import React from "react";

const Filter = () => {
  return (
    <div className="flex mr-0">
      <select className="outline-none border-none cursor-pointer">
        <option selected disabled>
          Filtrar Por:
        </option>
        <option>Menor preço</option>
        <option>Maior preço</option>
        <option>Maior avaliado</option>
        <option>Menor avaliado</option>
        <option>Todos</option>
      </select>
    </div>
  );
};

export default Filter;
