import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [ bigcoubt , setbigcoubt ] = useState(0);

  const [onecount , setonecount] = useState(0)
 const [twocount, settwocount] = useState(0);
 const [threecount, setthreecount] = useState(0);

 function icreaseOne() {
  setonecount(onecount => onecount + 1)
  if (onecount > 9 ){
    setonecount(onecount === 1)
  }
 
   }
 function derease() {
  setonecount(onecount => onecount - 1)
  
  if (onecount < 1){
setonecount(onecount === 1)
  }
 }

 function icreaseTwo() {
settwocount(twocount => twocount + 1)
if (twocount > 9 ){
  settwocount(twocount === 0)
}

 }
 function dereaseTwo() {
  settwocount(twocount => twocount - 1)

  if (twocount < 1){
settwocount(twocount === 1)
  }
 }

 function icreaseThree() {
setthreecount(threecount => threecount + 1)
if (threecount > 9 ){
  setthreecount(threecount === 0)
}

 }
 function dereaseThree() {
  setthreecount(threecount => threecount - 1)

  if (threecount < 1){
setthreecount(threecount === 1)
  }
 }

 useEffect(() => {
setbigcoubt( bigcoubt => bigcoubt = onecount + twocount + threecount);

 }, [onecount , twocount , threecount] );

  return (
    <div className="App">
      <h1>Productivity Points: {bigcoubt} </h1>

      <div className="one">
<h3>Title: pages studies this month</h3>
<p><span>Count:</span> {onecount}</p>
<button onClick={icreaseOne}>Increase</button>
<button onClick={derease}>Decrease</button>
      </div>
      <br></br>
      <div className="two">
<h3>Title: Project created this month</h3>
<p><span>Count:</span> {twocount}</p>
<button onClick={icreaseTwo}>Increase</button>
<button onClick={dereaseTwo}>Decrease</button>
      </div>
      <br></br>
      <div className="three">
<h3>Title: shows skipped this month</h3>
<p><span>Count:</span> {threecount}</p>
<button onClick={icreaseThree}>Increase</button>
<button onClick={dereaseThree}>Decrease</button>
      </div>

    </div>
  );
}

export default App;
