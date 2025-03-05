import "./Login.css"

export default function Login() {
  return (
  <>
  <h1 className="log">Login Form </h1>
<div className="login">
<form action="">
  <label htmlFor="">Enter Username : </label>
    <input className="user" type="text" placeholder="Username" /> <br /> <br />
    <label htmlFor="">Enter Password : </label>
    <input className="pass" type="password" placeholder="Enter Password" /> <br /><br />
    <button className="btn">Login</button>
  </form>
</div>
 
  </>
  )
}