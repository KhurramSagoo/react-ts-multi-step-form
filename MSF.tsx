import { ReactElement, useState } from 'react';
export default function (steps: ReactElement[]) {
  const [currentStepIndex, setCurrentSetupIndex] = useState(0);
  function next() {}
  function back() {}
  function goTo(index:number){
    setCurrentSetupIndex(index)

  }

  return{
  currentStepIndex,
  step: steps[currentStepIndex],
  goTo
}
}
