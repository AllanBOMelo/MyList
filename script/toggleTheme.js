const body = document.querySelector('body');
const toggleThemeIcon = document.getElementById('toggleTheme');
const addTaskIcon = document.getElementById('addIcon');
const pageLogo = document.getElementById('pageLogo');



    function toggleThemeDark () {
        body.style.backgroundColor = "#141414";
        document.getElementById('datep').style.color = "#F2F2F2";
        document.getElementById('list').classList.add('textoDark');

        /* Img icon change */

        toggleThemeIcon.src = "./img/themeLight.png"
        addTaskIcon.src = "./img/addIconLight.png"
        pageLogo.src = "./img/LogoLight.png"

        /* Onclick event change */

        toggleThemeIcon.setAttribute("onclick", "toggleThemeLight()");
 
    };

    //// 

    function toggleThemeLight() {
        body.style.backgroundColor = "#FDFDFD";
        document.getElementById('datep').style.color = "#2D2017";
        document.getElementById('list').classList.remove('textoDark');

        /* Img icon change */

        toggleThemeIcon.src = "./img/theme.png"
        addTaskIcon.src = "./img/addIcon.png"
        pageLogo.src = "./img/LogoDark.png"

        /* Onlick event change */

        toggleThemeIcon.setAttribute("onclick", "toggleThemeDark()");

    };
