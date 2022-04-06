document.getElementById("form").addEventListener("submit", auth);
if(loginSubmit){
    loginSubmit.addEventListener('click', createLogin);
  }
  

async function Userlogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
}

let login = {
    username: username,
    password: password
}

if (employeeLog.username && employeeLog.password){

        
    let data = await fetch(loginURL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeLog)
      

  }).then(response => response.json());

  console.log(data)
}

if(response.status === 200){
    
}