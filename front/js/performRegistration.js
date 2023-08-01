const btnRegistration = document.getElementById("btnregistration");

function performRegistration(){
    var username = String(document.getElementById("registration_username").value);
    var email = String(document.getElementById("registration_email").value);
    var password = String(document.getElementById("registration_pwd").value);
    var regJSO = {
        "uname":username,
        "id":email,
        "pwd":password
    };

    if(username.length == 0){
        alert("사용하실 이름을 입력해 주세요.");
        return;
    }
    else if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.length < 3){
        alert("이메일 형식이 잘못되었습니다.");
        return;
    }
    else if(password.length < 8){
        alert("패스워드가 너무 짧습니다.\n8자 이상으로 입력해 주세요.");
        return;
    }

    fetch("localhost:4444/register", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(regJSO)
    }).then((rawrsp) => {
        if(rawrsp.ok){
            alert("가입 성공! 로그인 화면으로 이동합니다.");
            location.reload();
        }
        else{
            alert(rawrsp.statusText);
        }
    });
}