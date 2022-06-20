import './App.css';
import MyComponent from './components/MyComponent/MyComponent';

function App() {

  const cars = [
    { id: 1, marca: "Ford", modelo: "mustang", ano: 2020 },
    { id: 2, marca: "Fiat", modelo: "onix", ano: 2019 },
    { id: 3, marca: "Ford", modelo: "corsa", ano: 2015 }

  ]

  return (
    <div className="App">
        <h1>React com CSS</h1>
      <div className="main">
        {cars.map(car => (
          <MyComponent key={car.id} marca={car.marca} modelo={car.modelo} ano={car.ano} />
        ))}
      </div>

    </div>
  );
}

export default App; 
