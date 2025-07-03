import React from "react";

export const TodoAdd = () => {

  const onFormSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="description"
        value="Aprender Php"
        placeholder="¿Que hay que hacer?"
      />

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
