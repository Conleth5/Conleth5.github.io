import React from 'react';
import './App.css';
import { Welcome } from "./components/Welcome/Welcome"
import {Navbar} from "./components/Navbar/Navbar";



function App() {
    return (
        <main className={'container'}>
            <Navbar/>
            <Welcome/>
        </main>
    )
}

export default App;