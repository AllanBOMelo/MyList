const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const addIcon = document.getElementById('addIcon');



    function toggleThemeDark () {
        body.style.backgroundColor = "#141414";
        document.getElementById('datep').style.color = "#F2F2F2";

        document.getElementById('button').innerHTML = '<img src="./img/themeLight.png" alt="ThemeIcon" onclick="toggleThemeLight()" id="toggle">';
        document.getElementById('pageLogo').innerHTML = '<img src="./img/LogoLight.png" alt="PageLogo" class="logo">';
        document.getElementById('iconButton').innerHTML = '<img src="./img/addIconLight.png" alt="AddIcon" onclick="openModalWindow()" id="addIcon">';
 
        document.getElementById('list').classList.add('textoDark');
    };



    function toggleThemeLight() {
        body.style.backgroundColor = "#FDFDFD";
        document.getElementById('datep').style.color = "#2D2017";
    
        document.getElementById('button').innerHTML = '<img src="./img/theme.png" alt="ThemeIcon" onclick="toggleThemeDark()" id="toggle">';
        document.getElementById('pageLogo').innerHTML = '<img src="./img/LogoDark.png" alt="PageLogo" class="logo">';
        document.getElementById('iconButton').innerHTML = '<img src="./img/addIcon.png" alt="AddIcon" onclick="openModalWindow()" id="addIcon">';

        document.getElementById('list').classList.remove('textoDark');
    };
