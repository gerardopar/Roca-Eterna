const sidebar = () => {
    const btnOpen = document.querySelector('#menu-open'); 
    const btnClose = document.querySelector('#menu-close'); 
    const sidebar = document.querySelector('#sidebar');
    const links = document.querySelector('#links');

    btnOpen.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.style.width = '250px';
        links.style.display = 'block';
    });

    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.style.width = '0px';
        links.style.display = 'none';
    });
};

export { sidebar };