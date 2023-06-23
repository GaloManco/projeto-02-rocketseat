import { ButtonComponet, ButtonVariant } from "./Button.styles";


interface ButtonPorps {
    variant?: ButtonVariant
}

export function Button({variant = 'secondary'}: ButtonPorps){
    return (
    
        <ButtonComponet variant={variant}>Enviar</ButtonComponet>
    )
}
