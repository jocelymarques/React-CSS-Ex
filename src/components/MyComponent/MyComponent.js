import "./MyComponent.css";

const MyComponent = ({marca, modelo, ano}) => {
  return (
    <div className="container">
          <h1 className="titulo">{marca}</h1>
          <p>Modelo: {modelo}</p>
          <p>Ano: {ano}</p>
    </div>
  )
}

export default MyComponent