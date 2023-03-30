const body = document.querySelector('body');
const toggleThemeIcon = document.getElementById('toggleTheme');
const addTaskIcon = document.getElementById('addIcon');
const pageLogo = document.getElementById('pageLogo');



    function toggleThemeDark () {
        body.style.backgroundColor = "#141414";
        document.getElementById('TopPage').classList.add('TopPageDark')
        document.getElementById('datep').style.color = "#F2F2F2";
        document.getElementById('list').classList.add('textoDark');
        document.getElementById('hourList').classList.add('textoDark');
        document.querySelector('footer').classList.add('footerDark')

        document.getElementById('addIconLi').classList.add('optionsHoverDarkMode')
        document.getElementById('toggleThemeLi').classList.add('optionsHoverDarkMode')

        /* Img icon change */

        toggleThemeIcon.src = "./img/themeLight.png"
        toggleThemeIcon.style.transform = "scalex(-1)"
        addTaskIcon.src = "./img/addIconLight.png"
        pageLogo.src = "./img/LogoLight.png"

        /* Onclick event change */

        toggleThemeIcon.setAttribute("onclick", "toggleThemeLight()");
 
    };

    //// 

    function toggleThemeLight() {
        body.style.backgroundColor = "#FDFDFD";
        document.getElementById('datep').style.color = "#2D2017";
        document.getElementById('TopPage').classList.remove('TopPageDark')
        document.getElementById('list').classList.remove('textoDark');
        document.getElementById('hourList').classList.remove('textoDark');
        document.querySelector('footer').classList.remove('footerDark')

        document.getElementById('addIconLi').classList.remove('optionsHoverDarkMode')
        document.getElementById('toggleThemeLi').classList.remove('optionsHoverDarkMode')

        /* Img icon change */

        toggleThemeIcon.src = "./img/theme.png"
        toggleThemeIcon.style.transform = "scalex(1)"
        addTaskIcon.src = "./img/addIcon.png"
        pageLogo.src = "./img/LogoDark.png"

        /* Onlick event change */

        toggleThemeIcon.setAttribute("onclick", "toggleThemeDark()");

    };
