import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./pages/Countries/Countries";
import Joke from "./pages/Joke/Joke";




const App = () => {
  return (
    <div>
     <Joke/>
     <Countries/>
  
    </div>
  )
}

export default App
