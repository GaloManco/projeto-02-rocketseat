
import { ThemeProvider } from 'styled-components';
import { Button } from "./components/Buttons";
import { defaultTheme } from './styles/themes/default';






export function App() {
 

  return (
    <>
     
      <ThemeProvider theme={defaultTheme}>

        <Button variant='secondary'/>
        <Button />
      </ThemeProvider>
    </>
  )
}


