function SideMenuPage (items) {
    const sideMenu = new VirticalMenu();
    const main = document.querySelector('.main');
    const moduleSideMenu = document.createElement('div');
    moduleSideMenu.className = "module_sideMenu";
    moduleSideMenu.appendChild(sideMenu.create(items));
    const moduleContent = document.createElement('div');
    moduleContent.className = "module_content";
    main.appendChild(moduleSideMenu);
    main.appendChild(moduleContent);
}
