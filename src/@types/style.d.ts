import 'styled-components';
import { defaultTheme } from '../styles/themes/default'

type ThemaType = typeof defaultTheme;


declare module 'styled-components' {
    export interface DefaultTheme  extends ThemaType {}
}