import logo from './logo.svg';
import pic from "./linhaBase.png";
//import linhaBase from 'C:\Users\henri\my-app\public';
import Draggable from 'react-draggable';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
           <img src={pic} class='App-logo' alt="car"/>
          <Draggable>
              <div className="chaveamento">
                  <div>--| |--</div>
              </div>
          </Draggable>
          <Draggable>
              <div className="bobina">
                  <div>--( )--</div>
              </div>
          </Draggable>
      </div>
    </div>

  );

}
