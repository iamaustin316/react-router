import React from 'react';

function Home() {
  
  const homeFunction = (e) => {
    console.log(e.target)
  }
  
  return(
    <div>
      <h2>Home</h2>
      <button onClick={homeFunction}>click me</button>
    </div>
  )
}

export default Home;