import { useState } from 'preact/hooks';
import "../styles/global.css"


export default function Greeting({messages}:{messages:string[]}) {
  
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    
   <div >
      <p>{greeting}! Thank you for visiting!</p>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  
  );
}