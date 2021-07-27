import "./rejester.scss"


export default function Register(){
   return (
       <div className="register">
           <div className="top">
           <img className="logo" src="https://media.comicbook.com/2020/06/lucifer-netflix-season-5-premiere-date-1225724.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
            alt="" />
        <button className="loginbutton">Sign In</button>
       </div>
       <div className="container">
           <h1>movies,tv shos.and more.</h1>
           <h2>watch anywhere. Cansel anytime.</h2>
           <p>
               Ready to watch, Enter your email to create or restart your membership.
           </p>
           <div className="input">
               <input type="email" placeholder="email adress"></input>
           <button className="registerbutton">Let The Fun Begin</button>
           
           </div>
       </div>
       </div>
   )



}