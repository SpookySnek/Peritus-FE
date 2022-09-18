import { MantineProvider, Text } from '@mantine/core';
import './App.css';

export interface Quote {
  id: number,
  quoteText: string,
  uploadDate: Date,
}


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
