const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }


    //REMOVE MENU MOBILE

    // const navLink = document.querySelector('nav-menu')

    // const LinkAction = () => {
    //     const navMenu = document.getElementById('nav-menu')
    //     navMenu.classList.remove('show-menu')
    // }
    // navLink.forEach(element => element.addEventListener('click',LinkAction));

    //ADD Shadow Header
    const shadowHeader = () => {
        const Header = document.getElementById('header')
        this.scrollY >= 50 ? Header.classList.add('shadow-header')
        :Header.classList.remove('shadow-header')
    }
    window.addEventListener('scroll', shadowHeader)