import {useState} from 'react'
import './App.css';

function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser(event) {
        event.preventDefault();

        console.log(name, email, password, 'name')

        const response = await fetch('http://localhost:9000/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })

        })

        const data = await response.json();
        console.log(data, 'data')
    }
  return (
    <div>
        <h1> Sign Up</h1>
        <form onSubmit={createUser}>
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="Name"
               />

            <br />
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="text"
               placeholder="Email"
               />
            <br />

            <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               type="text"
               placeholder="Password"
               />
            <br />

            <input type='submit' value='Sign up'/>
        </form>

    </div>
  )
}

export default App
