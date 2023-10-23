import logo from './logo.svg';
import './App.css';
import ContactUs from './pages/contact';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return(
    <ChakraProvider>
    <ContactUs></ContactUs>
    </ChakraProvider>
  );
}

export default App;
