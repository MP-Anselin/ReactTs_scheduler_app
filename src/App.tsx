import React from 'react';
import './App.css';

import {GlobalProvider} from './context/GlobalState';
import {HomePage} from "./pages/Home.page";


function App() {
    return (
        <GlobalProvider>
            <HomePage/>
        </GlobalProvider>
    );
}

export default App;
