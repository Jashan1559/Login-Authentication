function forgotpass(){
    var name = document.getElementById("name").value;
    var eml = document.getElementById("email").value;


    let uname=["Jai","Jas","Geet"];
    let mail=["jaivardhan436.be22@chitkara.edu.in","jasmeet449.be22@chitakra.edu.in","jashan436.be22@chitkara.edu.in"];
    let pass=["1234567890","helloWorld","worldHello"];


    var nm = localStorage.getItem("username");
    var pw = localStorage.getItem("password");
    var em = localStorage.getItem("email");

    uname.push(nm);
    mail.push(em);
    pass.push(pw);

    console.log(uname);
    console.log(mail);
    console.log(pass);

    for(let i = 0; i < uname.length; i++ ){
        if(name == uname[i] && eml == mail[i]){
            alert("Your password is " + pass[i]);
        }
        else{
            alert("Invalid Username or email !");
            break;
        }
    }
}
