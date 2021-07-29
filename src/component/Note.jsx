import React from "react";

const Note=({key,id,title,content,onDelete})=>
{   
    return(
    <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={()=>onDelete(id)}>Del</button>
    </div>
    )
};

export default Note;
