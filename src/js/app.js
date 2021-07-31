let dark_bg_low = document.querySelector('.bg-popup-low');
let dark_bg_high = document.querySelector('.bg-popup-high');

let aside_menu = document.querySelector('.aside-menu');

let slider_prev = document.getElementsByClassName('slider-button-prev')[0];
let slider_next = document.getElementsByClassName('slider-button-next')[0];
let image = document.getElementById('image');
let slider_counter = document.getElementById('slider-counter-inner');
let margin = 0;
let nSlides = 3;

let catalog = document.querySelector('.catalog');
let categories = document.getElementById('categories');
let categories_items = categories.querySelectorAll('.categories-item');

let authorization = document.querySelector('.authorization');
let registration = document.querySelector('.registration');

slider_counter.innerHTML = '1/' + nSlides.toString();


let updateSlider = () =>
{
    image.style.marginLeft = margin.toString() + '%';
    slider_counter.innerHTML = (margin / (-100) + 1).toString() + '/' + nSlides.toString();
}

let openCatalog = () =>
{
    aside_menu.classList.contains('active') ? aside_menu.classList.remove('active') : 0;
    dark_bg_high.classList.contains('active') ? dark_bg_high.classList.remove('active') : 0;
    catalog.classList.toggle('active');
    dark_bg_low.classList.toggle('active');
}

let toLogin = () =>
{
    dark_bg_high.classList.contains('active') ? 0 : dark_bg_high.classList.add('active');
    aside_menu.classList.contains('active') ? aside_menu.classList.remove('active') : 0;
    registration.classList.contains('active') ? registration.classList.remove('active') : 0;
    catalog.classList.contains('active') ? catalog.classList.remove('active') : 0;
    authorization.classList.add('active');
}

let toRegister = () =>
{
    dark_bg_high.classList.contains('active') ? 0 : dark_bg_high.classList.add('active');
    aside_menu.classList.contains('active') ? aside_menu.classList.remove('active') : 0;
    authorization.classList.contains('active') ? authorization.classList.remove('active') : 0;
    catalog.classList.contains('active') ? catalog.classList.remove('active') : 0;
    registration.classList.add('active');
}

let toggleScroll = () =>
{
    document.body.style.overflowY = ( document.body.style.overflowY == 'hidden') ? 'scroll' : 'hidden';
    console.log(document.body.style.overflowY)
}

document.querySelectorAll('.toLogin').forEach((button) =>
{
    button.addEventListener('click', toLogin)
});

document.querySelectorAll('.toLogin-main').forEach((button) =>
{
    button.addEventListener('click', () =>
    {
        toLogin();
        toggleScroll();
    });
});

document.querySelectorAll('.toRegister').forEach((button) =>
{
    button.addEventListener('click', toRegister);
});

document.querySelectorAll('.openCatalog').forEach((button) =>
{
    button.addEventListener('click', openCatalog);
});

document.querySelector('.openCatalog-aside').addEventListener('click', () =>
{
    openCatalog();
    toggleScroll();
});

document.querySelectorAll('.modal-close').forEach((elem) =>
{
    elem.addEventListener('click', () =>
    {
        authorization.classList.contains('active') ? authorization.classList.remove('active') : 0;
        registration.classList.contains('active') ? registration.classList.remove('active') : 0;
        dark_bg_high.classList.contains('active') ? dark_bg_high.classList.remove('active') : 0;
        toggleScroll();
    })
})

slider_prev.addEventListener('click', () =>
{
    if(margin == 0)
        margin = (nSlides-1) * (-100);
    else
        margin += 100;

    updateSlider();
});

slider_next.addEventListener('click', () =>
{
    if(margin == (nSlides-1) * (-100))
        margin = 0;
    else
        margin -= 100;

    updateSlider();
})


dark_bg_low.addEventListener('click', () =>
{
    dark_bg_low.classList.remove('active');
    catalog.classList.contains('active') ? catalog.classList.remove('active') : 0;
    aside_menu.classList.contains('active') ? aside_menu.classList.remove('active') : 0;
})

categories_items.forEach((el) =>
{
    el.addEventListener('mouseover', () =>
    {
        categories_items.forEach((el) =>
        {
            el.classList.remove('categories-item-hovered');
            el.closest('li').querySelector('.category-inner').style.display = 'none';
        })
        el.classList.toggle('categories-item-hovered');
        el.closest('li').querySelector('.category-inner').style.display = 'block';
    });
});

document.querySelectorAll('.accordion-toggle').forEach((toggle) =>
{
    toggle.addEventListener('click', () =>
    {
        toggle.classList.toggle('active');
    })
});

document.querySelector('.aside-menu-toggle').addEventListener('click', () =>
{
    catalog.classList.contains('active') ? catalog.classList.remove('active') : 0;
    dark_bg_low.classList.contains('active') ? dark_bg_low.classList.remove('active') : 0;
    aside_menu.classList.toggle('active');
    dark_bg_high.classList.toggle('active');
    
    toggleScroll();
});

dark_bg_high.addEventListener('click', () =>
{
    dark_bg_high.classList.toggle('active');
    dark_bg_low.classList.contains('active') ? dark_bg_low.classList.remove('active') : 0;
    aside_menu.classList.contains('active') ? aside_menu.classList.remove('active') : 0;
    authorization.classList.contains('active') ? authorization.classList.remove('active') : 0;
    registration.classList.contains('active') ? registration.classList.remove('active') : 0;

    toggleScroll();
});

document.querySelector('.aside-menu-close').addEventListener('click', () =>
{
    dark_bg_high.classList.remove('active');
    aside_menu.classList.remove('active');

    toggleScroll();
});
