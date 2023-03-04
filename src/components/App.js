import logo from '../images/logo.svg';
import '../css/App.css';

function App(details) {
  let styleHeading = {
    background: "yellow",
    textAlign: "right"
  }
  let basicInformation = {
    name: details.name,
    hobbies: ["Sleeping", "Eating", "Coding"],
    age: details.age
  }
  return (
    <div className="App">
      <div style={{backgroundColor: "green", textAlign: "center"}}>
        <h1>I am {basicInformation.name}</h1>
        <p>I am {basicInformation.age} years old</p>
        <p>My hobbies are {basicInformation.hobbies}</p>
      </div>
    </div>
  );
}

export default App;
