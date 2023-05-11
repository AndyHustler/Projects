var userName = "Андрей Попов";
var userStatus = "Администратор";
var connactionStatus = "Подключение установлено";

function MainMenuLiAdd (liObj) {
    const ul = document.querySelector('.top_line_content_menu ul');
    liObj.li.forEach((i) => {
        let text = document.createElement('div');
        text.className = "horizontal_menu_text";
        text.innerText = i.text;
        let li = document.createElement('li');
        li.appendChild(text);
        const vmdiv = document.createElement('div');
        vmdiv.className = "virtical-menu virtical-menu-dropdown";
        let vm = new VirticalMenu();
        vmdiv.appendChild(vm.create(i.vm));
        li.appendChild(vmdiv);
        ul.appendChild(li);
    });
}

function MainPage () {
    const mainPageContent =
    `<div class="main_layout">` +
        `<header class="module_header">` +
            `<div class="top_line_content">` +
                `<div class="top_line_content_left_side">` +
                    `<img class="img_left_side" src="images/greenatom_logo.png" alt="logo">` +
                    `<span>` +
                        `База данных АТС` +
                    `</span>` +
                `</div>` +
                `<div class="top_line_content_menu">` +
                `</div>` +
                `<div class="top_line_content_info">` +
                    `<div id="user_info_user_name" class="top_line_content_user_name">${userName}</div>` +
                    `<div id="user_info_user_status" class="top_line_content_status">${userStatus}</div>` +
                    `<div class="top_line_content_server_info">Подключение к серверу</div>` +
                    `<div id="server_info_user_status" class="top_line_content_status">${connactionStatus}</div>` +
                `</div>` +
            `</div>` +
        `</header>` +
        `<main class="main">` +
        
        `</main>` +
    `</div>`;
    const root = document.getElementById('root');
    root.innerHTML = mainPageContent;
    const mainMenu = document.querySelector('.top_line_content_menu');
    const ul = document.createElement('ul');
    mainMenu.appendChild(ul);
    MainMenuLiAdd (mainMenuItems);
    MainMenuLiAdd (adminPanel);
};
