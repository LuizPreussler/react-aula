import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

interface ICardProps {
  title: string;
  fontSize: string;
  headerSize: string;
  children: React.ReactNode;
}

const Card = (props: ICardProps) => {
  return (
    <div style={{ border: "1px solid black", fontSize: Number(props.fontSize) }}>
      <span>Title: teste{props.title}</span>
      <div>Footer </div>
    </div>
  );
};

function App() {
  return (
    <>
    <div>
      Test
      <p>Card(s):</p>
      <Card title='Teste-1' fontSize='8'><h1>Exemplo</h1></Card>
      <Card title='Teste-2' fontSize='16'><h2>Exemplo</h2></Card>
      <Card title='Teste-3' fontSize='32'><h3>Exemplo</h3></Card>
      <Card title='Teste-4' fontSize='64'><h4>Exemplo</h4></Card>
    </div>
    </>
  )
}

export default App
