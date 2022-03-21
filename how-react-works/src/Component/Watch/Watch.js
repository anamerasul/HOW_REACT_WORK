import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {

    const [steps,setSetps]=useState(0)

    const increaseSteps=()=>{
        
        // console.log(steps)
        setSetps(steps+1)}

  useEffect(()=>{

    console.log(steps);
  },[steps])

    return (
        <div>
            <h2>This is my Smart Watch</h2>
            <h3>My Courrent Setps :{steps}</h3>
            <button onClick={increaseSteps} > De DOUR....</button>
            <Display name="GAR" steps={steps}></Display>
        </div>
    );
};

export default Watch;