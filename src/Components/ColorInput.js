import React, { useState } from 'react';

const ColorInput = (props) =>{

    const [color, setColor] = useState("");

    const handleClick = e =>{
        e.preventDefault();
        if(color){
            props.addBox(color);
            setColor("");
        }
    };

    return(
        <form onSubmit={handleClick}>
            <div className="row">
                <div className="col-1">Color</div>
                <input required name="color" type="text" className="col-5" onChange={e => setColor(e.target.value)} value={color}/>
                <button className="btn btn-secondary">Add</button>
            </div>
        </form>
    );

}

export default ColorInput;