import logo from './logo.svg';
import './App.css';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       <h1>{props.title}</h1>
      </header>
      <body>
      <List lunes={props.lunes}/>
      <p>{props.description}</p>
      </body>
      <footer>
      <Contact contact={props.contact}/>
      </footer>
    </div>
  );
}


function List (props){
  return (
    <ul>
      {props.lunes.map((item,idx) => <li key={idx}>{item}</li>)}
    </ul>
  )
}

function Contact (props){
  return (
    <ul>
      {props.contact.map((item,idx) => <li key={idx}>{item}</li>)}
    </ul>
  )
}
export default App;
