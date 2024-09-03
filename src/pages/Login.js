import React from 'react'

function Login() {
  return (
    <div>
        <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"space-between", gap:"1rem"}}>
        <input type='email'/>
        <input type='password'/>
        <div style={{display:"flex", gap:"1rem",justifyContent:"space-between", width:"100px"}}>
        <button>log in</button>
        <button>sign up</button>
        </div>
        </div>
    </div>
  )
}

export default Login