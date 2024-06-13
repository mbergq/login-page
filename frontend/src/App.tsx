import { useState } from "react";

function App() {
  const point: number = 32;
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="underline">{point}</p>
    </>
  );
}

export default App;
