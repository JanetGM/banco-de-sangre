import React from 'react';
import styled from 'styled-components';
import {
    Link,
 } 
from 'react-router-dom';


const Login = () => {
 const Title = styled.h1`
 font-weight: bold;
  font-size: 3.5em;
  color: #3F2222;
  margin-botom:10px;
`;
const TextLogin = styled.p`
font-weight: bold;
font-size: 1.5em;
color: black;
text-align:left;
margin-left:0px;
`;

const Input = styled.input`

color: palevioletred;
font-size: 1em;
border: 1px solid ;
border-color:#2F5FDB;
border-radius: 5px;
padding: 0.2em;
nargin:0.2em;
`;
const Button = styled.button`
color:color;
border: 2px solid palevioletred;
border-radius: 5px;
width:12em;
padding:0.5em;
background-color:#CE4E4E;
`; 

const ContainerLogin =styled.div`
background-attachment: fixed;
background-position: center center;
background-size: cover;
margin-left:0px;
background-image:url('https://s3-alpha-sig.figma.com/img/5dc7/7e1f/7b524d8b014ba86c442fa00ec7e9e538?Expires=1561939200&Signature=KSeqBGRBRpsrjK2OJq-w1p1XpX2VziOEmQe-kphqd~BFJofpcOV5DiPJf~T1heTMmKgaCfH72MQr-wZOPmfYD-p67F-siWCMr5VrzCebyzc7JHUg9UI84VwC8ddkeWsZs4Hp59kM22HBwQwNdLfiDWEbnkyqe2PKowlvgS0Jn6Jw3kHMNiMaFKSK23VtAbQYhEcMLdDSt6c0S0h2eb-wR6SZaBFgaIbhNjOXFaIbw-pPx5595u9SvijjJ8HegsGA5D2g4KJxo9mEuFkkZPiETIsmjFuzo~TyXgiIDOn6YQZCDm5yVweDO8qb62HU5QpAkPnG6EB6Y0mS7vi65lNGIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
width: 100vw;
height: 100vw;


`;

    return(
        <>
            <ContainerLogin>
             <div className="container-fluid ml-4">
                <div className="row">
                    <div className="col- mb-5">
                    <Title className="form " style={{"marginTop":"400px"}}>Yawar Web</Title>
                    </div>
                </div>
                <div className="row">
                    <div className="col-">       
                    <TextLogin>Usuario:</TextLogin> 
                    <TextLogin>Contraseña:</TextLogin>
                    </div>
                    <div className="col- mt-2">
                    <p><Input></Input></p>
                    <p><Input type="password"></Input></p>
                    <Button><Link to="/menu" >Ingresar</Link></Button>
                    </div>
                </div>
                </div>
            </ContainerLogin>
        </>
    )

}
export default Login;