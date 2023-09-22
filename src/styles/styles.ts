import styled from "styled-components"

import Banner1 from "../assets/1.png"
import Banner2 from "../assets/2.png"
import Banner3 from "../assets/3.png"
import Banner4 from "../assets/4.png"


export const ContainerAllThings = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 890px;
    flex-direction: column;
    align-items: center;
    
    background-image: url(${Banner1});
    background-size: contain; 
    background-repeat: no-repeat;
    
    div {
        display: flex;
        flex-direction: column;
        width: 700px;
        height: 100%;
        position: absolute;
        top: 300px;
        left: 200px;
    }
    h1 {
        font-size: 70px;
    }
    p {
        font-size: 50px;
    }
`

export const ContainerAboutMe = styled.div`
    display: flex;
    width: 100%;
    height: 890px;
    flex-direction: column;
    align-items: center;
    
    background-image: url(${Banner2});
    background-size: contain; 
    background-repeat: no-repeat;
`

export const ContainerBanner = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    
    background-image: url(${Banner3});
    background-size: contain; 
    background-position: center;
    background-attachment: fixed;
`

export const ContainerTest = styled.div`
    display: flex;
    width: 100%;
    height: 890px;
    
    background-image: url(${Banner4});
    background-size: contain; 
    background-repeat: no-repeat;
`