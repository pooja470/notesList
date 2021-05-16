import React,{useState} from 'react';

const Login=()=>{
const [email,setEmail]=useState();
const [password,setPassword]=useState();
return(
  <div>
  <form>
  <h1>Login Here</h1>
  <input type="email" placeholder="Email" value={email} onChange={()=>setEmail(e.target.value)}/>
  <input type="password" placeholder="password" value={password} onChange={()=>setPassword(e.target.value)}/>
  <button type="submit">Submit</button>
  </form>
  </div>
)

}

export default Login;
