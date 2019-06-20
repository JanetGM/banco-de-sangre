import React from 'react';
import styled from 'styled-components';
import {
      Link,
   } 
from 'react-router-dom';

const Menu = () => {

    const Navbar = styled.div`
    height:120px;
    background: rgba(18, 16, 16, 0.79);
    padding:30px;

    `;
    const Image = styled.img`
    margin-top:0px;
    width:40px;
    height:40px;
   `;
   const Subtitle = styled.span`
   color:#FFFFFF;
    
   `;
   const UserImage= styled.img`
   border-radius:50%;
   width:40px;
   heigth:40px;
   `;

   const Menucontainer= styled.div`
     height:200px;
     width:180px;
     padding:0px;
     border:blue;
   `;
   const Button= styled.button`
   margin-top:10px;
   height:30px;
   width:220px;
   background-color:white;
   border: 1px solid palevioletred;
   border-radius:6px;
 `;



    return(
        <>
         <Navbar>
             <Subtitle className="mr-5">
             <Image src="https://www.flaticon.es/premium-icon/icons/svg/965/965995.svg"></Image>
              Yawar Web
             </Subtitle>
             <Image src="https://image.flaticon.com/icons/svg/201/201608.svg" className="marginimg"></Image>
             <Subtitle className="mr-4"> Usuario 007</Subtitle>
             <Subtitle>
             <span  className="mt-2"style={{fontSize: "2em", color: "Tomato"}}>
             <Link to ="/login"><i class="fas fa-sign-out-alt"></i></Link>
             </span>  
             </Subtitle>
             
         </Navbar>
         <div className="container-flex " style={{display:"flex" ,marginTop:"10%" , marginLeft:"25%"}}>
         <Menucontainer className="">
             <img alt="donantes" className="img" src="https://www.donantesdesangresalamanca.es/users/image/imagen_1500893523.jpg"/>
             <Button><Link style={{textDecoration:"none",color:"black"}} to="/donor">Consulta de Donantes</Link></Button>
         </Menucontainer>
         <Menucontainer className="offset-1">
              <img className="img"  alt="donantes" src="https://img.playbuzz.com/image/upload/c_crop/f_auto,fl_lossy,q_auto:good/c_limit,w_640/v1526438947/rx8ugtilw6qcdeqzsvhx.jpg"/>
              <Button><Link style={{textDecoration:"none",color:"black"}} to="/stock">Consulta de Stock</Link></Button>
         </Menucontainer>
         <Menucontainer className=" offset-1">
              <img  className="img"alt="donantes" src="https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-vector-minimalistic-search-data-magnifier-image_1082082.jpg"/>
              <Button><Link  style={{textDecoration:"none",color:"black"}} to="/transfer">Consulta de Transferencia</Link></Button>
         </Menucontainer>
         </div>
        
        </>
    )

}
export default Menu;