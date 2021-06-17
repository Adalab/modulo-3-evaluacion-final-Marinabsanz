import React from "react";

const FormFilter = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: "name",
    });

    console.log(event.target.value);
  };

///////////////////////// no lo puedo agrupar??????????
// const FilterByGender = props => {
//   const handleChange = ev => {
//     props.handleFilter({
//       value: ev.target.value,
//       key: 'gender'
//     });

//////////////////////

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


            <div>
            <label className="" htmlFor="gender">
        Género:
      </label>

      <select
        className=""
        name="gender"
        id="gender"
        key= 'gender'
        value={props.filterGender}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binary">Unknow</option>
      </select>
                 


            </div>
          </div>
          {/* <div className="">
            <select className="formControl" name="especie" id='especie'>
              <option value=""> Selecciona la especie</option>
            </select>
          </div> */}
        </div>

       
      </form>
     
      <div>
        <h4> Tus resultados</h4>
      </div>
    </>
  );
};

export default FormFilter;
