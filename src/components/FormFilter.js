import React from "react";

import List from "./List";

const FormFilter = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: "name",
    });

    console.log(event.target.value);
  };

  const submitPj = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="" onSubmit={submitPj}>
        <div className="">
          <div className="">
            <input
              name="nombre"
              id="name"
              className=""
              type="text"
              placeholder="Busca a tu personaje"
              value={props.filterName}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <select className="formControl" name="especie">
              <option value=""> Selecciona la especie</option>
            </select>
          </div>
        </div>

        <div className="">
          <input type="submit" className="classBtn" value="Buscar personaje" />
        </div>
      </form>
      <fieldset className="claim">
        ¡Aquí encontrarás más info de tus personajes favoritos!
      </fieldset>
      <div>
        <h4> Tus resultados</h4>
      </div>
    </>
  );
};

export default FormFilter;
