//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import { Button } from './Button';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.tsx</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//          <Button>Click!</Button>
//      </header>
//    </div>
//  );
//}
//
//export default App;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Room } from './Room';

const Input = styled.div`
    padding: 4px;
    margin: 0 0 4px;

    input {
        border: 1px solid #ccc;
        padding: 2px;
        font-size: 14px;
    }
`;

export const App = () => {
    const [name, setName] = useState('tester');
    const [channel, setChannel] = useState('#gophers');

    return (
            <>
            <Input>
                name: <input value={name} onChange={(e) => setName(e.target.value)} />
            </Input>
            <Input>
                channel: <input value={channel} onChange={(e) => setChannel(e.target.value)} />
            </Input>
            <Room channel={channel} name={name} />
            </>
            );

};

