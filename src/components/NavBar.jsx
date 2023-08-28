import { useState } from "react";

export const NavBar = () => {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
    console.log(item);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <header className="flex p-6 lg:px-8 bg-yellow-300">
      <img className="w-70 m-1" alt="logo ML" src="../assets/Logo_ML.png"></img>

      <form
        className="m-auto flex max-w-screen-xl flex-1"
        action="/ProductList"
        onSubmit={handleSubmit}
      >
        <input
          key="input_navbar"
          className=" w-max h-8 flex-1 l px-2 p-3 text-black rounded-lg "
          type="text"
          name="search"
          placeholder="Nunca dejes de buscar"
          onChange={handleChange}
        ></input>

        <button
          id="btn-search"
          className="h-8 bg-gray-300 px-2 py-1 rounded-xl"
        >
          <img
            src="../assets/ic_Search.png"
            alt="lupa buscador"
            id="btn-search"
          ></img>
        </button>
      </form>
    </header>
  );
};
