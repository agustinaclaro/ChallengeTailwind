import { useState } from "react";

export const ControlledInput = () => {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(item);
  }
  return (
    <input
      id="input_navbar"
      className="Navbar_input"
      type={Text}
      placeholder="Nunca dejes de buscar"
      onChange={handleChange}
    ></input>
  );
};
