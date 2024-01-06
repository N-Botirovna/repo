import React, { useRef } from 'react'
import "./registration.css"

function Registration({login}) {

    const username = useRef('');
    const userpass = useRef('');

    const user = {
        username: 'Oybek',
        password: 'Oybek'
      };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(username.current.value);
        let obj = {
            username: username.current.value,
            password: userpass.current.value
        }
        console.log(obj);
        if (obj.username === user.username && obj.password === user.password) {
            login(true); 
            localStorage.setItem('isLogin', "true")
          } else {
            login(false); 
            localStorage.setItem('isLogin', "false");
            alert("Noto'g'ri login yoki parol")
          }
        console.log(login)
    }
    

    
    return (
        <div className="reg">
            <h3>Registration</h3> <br />
            <form action="" onSubmit={handleSubmit}>
                <input ref={username} type="text" name="name" id="name" placeholder='Your name'/>
                <input ref={userpass} type="password" name="pass" id="pass" placeholder='Password'/>
                <button type='Submit'>Send</button>
            </form>
        </div>
    )
}

export default Registration
