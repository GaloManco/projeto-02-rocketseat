import styled, { css } from "styled-components";

 export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';


interface ButtonComponetPorps {
    variant:ButtonVariant;
}

const buttonColor = {
    primary: 'blue',
    secondary: 'orange',
    success: 'green',
    danger: 'red'
}


export const ButtonComponent = styled.button<ButtonComponetPorps>`

width: 100px;
height: 40px;
border: none;
margin-right: 3px;

background-color: ${props => props.theme['green-500']};


/* ${props => css`background-color:${buttonColor[props.variant]}`} */

`







