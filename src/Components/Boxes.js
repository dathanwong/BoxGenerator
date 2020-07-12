import React, { useState } from 'react';
import styles from './styles.module.css';

const Boxes = (props) => {
    return ( 
        <div className="row">{
            props.boxes.map((color, i) =>
                <div key={i} className={styles.box} style={{backgroundColor:color}}></div>
            )
        }
        </div>
     );
}
 
export default Boxes;