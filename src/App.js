import linhaBase from './linhaBase.png';
import Draggable from 'react-draggable';
import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="App-header">
            <img src={ linhaBase } class="linhaHorizontal" alt="car"/ >
            <img src={ linhaBase } class="linhaVertical" alt="car"/ >
          <Draggable>
              <div className="items">
                  <div>-| |-</div>
              </div>
          </Draggable>

          <Draggable>
              <div className="items">
                  <div>-( )-</div>
              </div>
          </Draggable>

          <Draggable>
              <div className="items">
                  <div>-|/|-</div>
              </div>
          </Draggable>

      </div>
    </div>

  );

}
