import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="texto">Ingrese un Texto</label>
      <input
        id="texto"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
