import React from "react";
import style from '../Navbar/Navbar.module.css'
import Image from "../../assets/im.png";

function  Section(){
    return(
        <div className={style.wrapper}>
            <p className={style.p}>You don't have to <b>Fight them Alone</b></p>
            
     <img src={Image} className={style.img} alt='Image' size={30}/>
     </div>
    )
};

export default Section;