
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
