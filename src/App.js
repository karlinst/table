import React from "react";
import GitHubContributionChart from "./Component/Table/Table"; 
import './App.css'

import Cube from "./Component/Cube/Cube";




const contributionData = [
  { date: '2023-07-21', count: 2 },
  { date: '2023-08-05', count: 2 },
  { date: '2023-08-12', count: 2 },
  { date: '2023-12-02', count: 2 },
  { date: '2023-11-12', count: 2 },
  { date: '2023-09-02', count: 2 },
  { date: '2024-01-02', count: 2 },
  { date: '2024-02-20', count: 2 },

];

const App = () => {
  return (
    <div className="App">
      <div className="cubes">
        <Cube/>
      </div>
      <GitHubContributionChart contributionData={contributionData} />
      <div>
        <h1>
          
        </h1>
      </div>
    </div>
  );
};

export default App;
