
        function burgermenu() {
            let menu = document.getElementById("menulist")
            if (menu.style.opacity == "0") {
                menu.style.opacity = "100"
                document.getElementById("menu").classList.add("change")
                document.getElementById("menu-bg").classList.add("change-bg")
                document.querySelector("main").classList.add("blur")
            }
            else {
                menu.style.opacity = "0"
                document.getElementById("menu").classList.remove("change")
                document.getElementById("menu-bg").classList.remove("change-bg")
                document.querySelector("main").classList.remove("blur")
            }

        }
      function loader()
      {
          document.querySelector(".loader").style.display="none";
      }
      function navcng()
      {
          if(scrollY>=200)
          {
              document.querySelector("nav").style.background="#24262b"; 
              document.querySelector("nav").style.transition="all .8s ease"; 
              document.querySelector(".menu").classList.add("scroll");
              document.querySelector(".icon").classList.add("scroll");
          }
          else{
            document.querySelector("nav").style.background="#fff"; 
            document.querySelector(".menu").classList.remove("scroll");
              document.querySelector(".icon").classList.remove("scroll");
          }
      }
