import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";


function SingleEmoji(emojis){
    return <Entry
               key = {emojis.id}
               icon = {emojis.emoji}
               name = {emojis.name}
               detail = {emojis.meaning}
               />
}


function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
          <dl className="dictionary">
          {emojipedia.map(SingleEmoji)}
          </dl>    
    </div>
  );
}

export default App;
