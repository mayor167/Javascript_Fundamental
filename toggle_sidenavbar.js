let sideNavBarStatus = false;
  let sideNavBar = function(){
    let sideBar = document.querySelector(".sidebar");
    let sideBarUl = document.querySelector(".sidebar ul");
    let sideBarTitle = document.querySelector(".sidebar span");
    let sideBarLinks = document.querySelectorAll(".sidebar a");
    if(sideNavBarStatus === false){
        sideNavBarStatus = true; 
        sideBar.style.width = "275px";
        sideBarUl.style.visibility = "visible";
        sideBarTitle.style.opacity = "0.5";
        for(let i =0; i < sideBarLinks.length; i++){
            sideBarLinks[i].style.opacity = "1";
        }
      //  console.log(typeof(sideBarTitle));
    }
    else if( sideNavBarStatus === true){
        sideNavBarStatus = false;
        sideBar.style.width = "60px";
        sideBarUl.style.visibility ="hidden";
       
    }

}
