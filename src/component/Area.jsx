import React, { useState } from "react";

const Area=({onAdd})=>
{
    const[isExpanded,setExpanded]=useState(false);
    const [note,setNote]=useState({
        title:"",content:""
    });



    function update(e)
    {
        const{name,value}=e.target;
        setNote((prev)=> {
            return{...prev,[name]:value};
        }
        );
    }

    function handleExpand()
    {
    setExpanded(true);
    }

    function submit(e)
    {
        onAdd(note);
        setNote(
            {title: "",content:""}
        );
        e.preventDefault();
    }

    return(
    <div>
        <form>
            {
                isExpanded && (
                    <input
                        value={note.title} type="text" placeholder="Title" name="title" onChange={update}
                    />)
            }

        <p>
                <textarea value={note.content} name="content" placeholder="Take Notes..." onChange={update} onClick={handleExpand} rows={isExpanded?3:1}></textarea>
        </p>

        <button onClick={submit}>
            Add
        </button>
        </form>
    </div>
    );
};

export default Area;
