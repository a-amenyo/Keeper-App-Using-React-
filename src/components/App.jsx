import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";

// function App (){

//     return <div>
//         <h1>
//             Hello App
//         </h1>
//     </div>
// }
// console.log(notes); 


const App = () => {
  return (
    <div>
      <Header />
      {/* here we map through the notes object */}

      {notes.map(noteItem =>  
      <Note 
        key = {noteItem.key}
        title = {noteItem.title}
        content = {noteItem.content}
        />
      )
      }
      <Footer />
    </div>
  );
};

export default App;
