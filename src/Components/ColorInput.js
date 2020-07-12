import React, { useState } from 'react';

const ColorInput = (props) =>{

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const handleClick = e =>{
        e.preventDefault();
        if(color && height){
            props.addBox(color, height);
            setColor("");
            setHeight("");
        }
    };

    return(
        <form onSubmit={handleClick}>
            <div className="row justify-content-center my-2">
                <div className="col-1">Color</div>
                <input required name="color" type="text" className="col-3" onChange={e => setColor(e.target.value)} value={color}/>
            </div>
            <div className="row justify-content-center my-2">
                <div className="col-1">Height</div>
                <input required name="height" type="text" className="col-3" onChange={e => setHeight(e.target.value)} value={height}/>
            </div>
            <div className="row justify-content-center my-2">
                <div className="col">
                    <button className="btn btn-secondary" type="submit">Add</button>
                </div>
            </div>
        </form>
    );

}

export default ColorInput;