fetch("profile.html")
            .then(res=>res.text())
            .then(data=>{ document.getElementById("user-content").innerHTML = data;

            //loading header.js
            const openuser=document.getElementById("openuser");
            const usercontainer=document.getElementById("user-container");

            openuser.addEventListener("click",()=>{
            usercontainer.style.display="block"; });

            window.addEventListener("click",(e)=>{
            if(e.target===usercontainer){
            usercontainer.style.display="none";}
            });

            //loading profile.js
            const scripta=document.createElement("script");
            scripta.src="profile.js";
            document.body.appendChild(scripta);
            });