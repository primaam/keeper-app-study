import React from "react";
import {Footer, Header, Note} from './components'
import notes from "./sources/Notes";

function App() {


  return (
    <div className="App">
      <Header/>
    {notes.map((item)=>{
      return(

        <Note key={item.key} content={item.content} title={item.title}/>
      )
    })}
      <Footer/>
    </div>
  );
}

export default App;
