"use client"
import Input from './components/input/input';
import { useState } from 'react';

export default function Index() {
  const [myName, setMyNameState] = useState('My Name')

  const changeName = (name: string) => setMyNameState(name)

  return (
    <section className="section">
      <div className="container">
        <h1 className="heading-h1">Hello {myName}</h1>
        <div className="mt-40" style={{ maxWidth: '450px' }}>
          <Input autofocus={true} value={myName} inputChange={changeName}/>
        </div>
      </div>
    </section>
  );
}
