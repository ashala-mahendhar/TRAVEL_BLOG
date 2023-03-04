function vis()
{
    document.getElementById("passwor").removeAttribute("type")
    document.getElementById("img").setAttribute("src","./ASSESTS/IMAGES/openeyesmoney.png")
}
function notvis()
{
    document.getElementById("img").setAttribute("src","./ASSESTS/IMAGES/closingmonkey.png")
    document.getElementById("passwor").setAttribute("type","password")
}
function fun()
{
    var mail="m@gmail.com"
    var pass=12345
    var useremail=document.getElementById("Email").value
    var userpass=document.getElementById("passwor").value
    if(useremail==mail && userpass==pass)
    {
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("for").setAttribute("action","./HTML/index.html")
        document.getElementById("Email").style.borderColor="blue"
        document.getElementById("passwor").style.borderColor="blue"
    }
    else if(useremail!=mail && userpass==pass)
    {
        document.getElementById("Email").style.borderColor="red"
        document.getElementById("passwor").style.borderColor="blue"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(255, 17, 17),rgb(73, 13, 146))"
        document.getElementById("result").innerHTML="Entered The Correct Email"
        
    }
    else if(useremail==mail && userpass!=pass)
    {
        document.getElementById("passwor").style.borderColor="red"
        document.getElementById("Email").style.borderColor="blue"
        document.getElementById("result").innerHTML="Entered The Correct Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(73, 13, 146),rgb(255, 17, 17))" 
    }
    else
    {
        document.getElementById("passwor").style.borderColor="red"
        document.getElementById("Email").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered The Correct Email and Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,red 100%,pink)"
    }
}