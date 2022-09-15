import { MantineProvider, Text } from '@mantine/core';
import './App.css';

export interface Quote {
  id: number,
  title: string,
  uploadDate: Date,
  imgUrl: string,
  tag: string
}


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
