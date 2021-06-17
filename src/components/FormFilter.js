import React from "react";


//funcion manejadora para ir filtrando 

const FormFilter = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: event.target.id,
    });

    console.log(event.target.value);
  };


  const submitPj = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="colorfonts" onSubmit={submitPj}>
        <div className="">
          <div className="">
            <input
              name="nombre"
              id="name"
              className="colorfonts"
              type="text"
              placeholder="Busca a tu personaje"
              value={props.filterName}
              onChange={handleChange}
            />


            <div>
            <label className="" htmlFor="gender">
        Género:
      </label>

      <select
        className="classBtn"
        name="gender"
        id="gender"
        key= 'gender'
        value={props.filterGender}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="Female">Mujer</option>
        <option value="Male">Hombre</option>
        <option value="unknown">Unknown</option>
      </select>
                 

            </div>
          </div>
          {/* <div className="">
            <select className="formControl" name="especie" id='especie'>
              <option value=""> Selecciona la especie</option>
                <option value=""> Selecciona la especie</option>
                <option value=""> Selecciona la especie</option>
            </select>
          </div> */}
        </div>

       
      </form>
     
      <div>
        <h4 className='colorfonts'> Tus resultados</h4>
      </div>
    </>
  );
};

export default FormFilter;
