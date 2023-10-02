/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import style from "./Section.module.css"
import Image from "../../assets/im.png";

function  Section(){
    return(
        <div>
            <div>
            <p className={style.p}>You don't have to
             <b>Fight them Alone</b></p>
             </div>
            <div className={style.wrapper}>
     <img src={Image} className={style.img} alt='Image' size={20}/>
     </div>
     </div>
    )
};

export default Section;