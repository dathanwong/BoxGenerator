import React, { useState } from 'react';
import styles from './styles.module.css';

const Boxes = (props) => {
    return ( 
        <div className="row">{
            props.boxes.map((box, i) =>
                <div key={i} className={styles.box} style={{backgroundColor:box.color, height:box.height, width: box.height}}></div>
            )
        }
        </div>
     );
}
 
export default Boxes;