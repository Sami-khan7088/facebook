import React from "react";
function App() {
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
          <div className="main_log">
            <input type="text"  placeholder="Email address or phone number"/>
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button className="logbtn">Log In</button>
            <br/>
            <div className="forg">
            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten password?</a>
            </div>
          </div>
          <div className="border">
          </div>
          <div className="cbtn">
            <button className="createbtn">Create New Account</button>
          </div>
          </div>
          <div className="create">
          <p style={{marginLeft:"10px"}}><nbsp/><b>Create a Page</b> for a celebrity, brand or business.</p>
        </div>
        </div>
        </div>
        
      </div>
      <div className="footer">
        <div>
          <ul>
            <li style={{"padding-left":"0%"}}>English (UK)</li>
            <li>हिन्दी</li>
            <li>اردو</li>
            <li>ਪੰਜਾਬੀ</li>
            <li>বাংলা</li>
            <li>ગુજરાતી</li>
            <li>मराठी</li>
            <li>தமிழ்</li>
            <li>తెలుగు</li>
            <li>മലയാളം</li>
            <li>ಕನ್ನಡ</li>
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