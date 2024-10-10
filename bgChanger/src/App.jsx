import { useState } from "react";
function App() {
  let  [color, setcolor] = useState( "yellow");
  

  return (
    <>
      <div className="w-full h-screen " style={{ background: color }}></div>
      <div className="fixed fles flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolor("red")}  className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button   onClick={()=>setcolor("green")}  className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
          <button  onClick={()=>setcolor("blue")}  className="outline-none px-4  py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
        </div>
      </div>
    </>
  );
}

export default App;
