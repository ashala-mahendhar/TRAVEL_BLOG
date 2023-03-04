function colo()
{


var col=["1st.jpg","a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg","a6.jpg","a7.jpg","a8.jpg","a9.jpg","a10.jpg","a11.jpg",
"a12.jpg","a13.jpg","a14.jpg","a15.jpg"]
var len=col.length;
var ran=Math.random()*len;
var roundnum=Math.round(ran)
document.getElementById("a").style.backgroundImage="URL(../ASSESTS/IMAGES/"+col[roundnum]+")"
var updatethetime=setTimeout(function(){colo()},2000)
}
// FROM HERE GALLARY CODE STARTS
function imgk(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute=("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute=("style","display:none;")
   
}