import { useRef, useState } from "react"
import "./rejester.scss"


export default function Register(){
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")


    const emailRef = useRef()

    const handelFun=()=>{
      setEmail(emailRef.current.value)
    }
    const handelFinish=()=>{
        setPassword(passwRef.current.value)
      }
   return (
       <div className="register">
           <div className="top">
               <div className="wrapper">

           <img className="logo" src="https://media.comicbook.com/2020/06/lucifer-netflix-season-5-premiere-date-1225724.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
            alt="" />
        <button className="loginbutton">Sign In</button>
            </div>
       </div>
       <div className="container">
           <h1>movies,tv shos.and more.</h1>
           <h2>watch anywhere. Cansel anytime.</h2>
           <p>
               Ready to watch, Enter your email to create or restart your membership.
           </p>
           {
               !email ?(

           <div className="input">
               <input type="email" placeholder="email adress" ref={emailRef}></input>
           <button className="registerbutton" onClick={handelFun}>Let The Fun Begin</button>
           
           </div>
               ):(
                <form className="input">
                <input type="password" placeholder="password" ref={passwRef}></input>
            <button className="registerbutton" onClick={handelFinish}>welcome</button>
            
            </form>
               )
           }
       </div>
       </div>
   )



}