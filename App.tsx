import * as React from 'react';
import MSF from './MSF';

export default function App() {{
  const {steps,currentStepIndex}=MSF([
    <div>one</div>,
    <div>two</div>]) }
  return (
    <div style={{position:"relative", background:"white",
    border: "solid 1px black",
    padding:"2rem",margin:"1rem", borderRadius:".5rem",
    fontFamily:"Arial"   }}>
      <form action="">
        <div style={{position:"absolute"
      ,top:".5rem", right:".5rem"}}> {currentStepIndex+1}/{steps.length}

        </div>
        {step}
      </form>
    </div>
  );
 }