import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed bottom-12 flex flex-wrap  justify-center inset-x-0 px-2">
          <div className="flex flex-wrap bg-slate-600 justify-center gap-5 shadow-lg px-2 py-2 rounded-xl">
           
            <button
            onClick={()=>setColor("red")}
             className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"red",color:"wheat",fontWeight:"bolder"}}>Red</button>
            <button 
            onClick={()=>setColor("black")}
            className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"black", color:"wheat",fontWeight:"bolder"}}>Black</button>
            <button 
            onClick={()=>setColor("violet")}
            className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"violet",color:"wheat",fontWeight:"bolder"}}>Violet</button>
            <button
            onClick={()=>setColor("grey")}
             className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"grey",color:"wheat",fontWeight:"bolder"}}>
            Gray</button>
            <button
            onClick={()=>setColor("olive")}
             className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"olive",color:"wheat",fontWeight:"bolder"}}>Olive</button>
            <button
            onClick={()=>setColor("aqua")}
             className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"aqua",color:"wheat",fontWeight:"bolder"}}>Aqua</button>
            <button 
            onClick={()=>setColor("blue")}
            className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"blue",color:"wheat",fontWeight:"bolder"}}>Blue</button>
            <button 
            onClick={()=>setColor("Yellow")}
            className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"yellow",color:"wheat",fontWeight:"bolder"}}>Yellow</button>
            <button 
            onClick={()=>setColor("pink")}
            className="outline-none px-3 py-2 rounded-full" style={{backgroundColor:"pink",color:"wheat",fontWeight:"bolder"}}>Pink</button>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
