import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        
        const authObject = { 'Project-ID': "259a56ae-ae05-4580-9aff-47ac92933cbb", 'User-Name': username, 'User-Secret': password}

        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject })

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload();
            
        } catch (error) {
            setError('Oops, incorrect credentials.')   
        }
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="tittle">Chat Application</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" vlaue={password} onChange = {(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    <div className="Footer">
                         <p>Developed by @RAZ</p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default LoginForm;