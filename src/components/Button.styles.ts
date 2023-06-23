import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' ;
     


interface ButtonComponentProps {
    variant: ButtonVariant
}

const buttonVariant ={
    primary: 'blue',
    secondary: 'green',
    danger: 'red'
}

export const ButtonComponet = styled.button<ButtonComponentProps>`
    width: 100px;
    height: 50px;


    ${props => css`background-color: ${buttonVariant[props.variant]}`}

`
