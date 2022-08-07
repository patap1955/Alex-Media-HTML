document.addEventListener('DOMContentLoaded', () => {
    // Логическая функция вывода анимация
    // elem - массив блоков или отдельный блок для анимации
    // className - класс отвечающий за анимацию

    function animate(elem, className = 'animate') {
        let windowCenter = (window.innerHeight / 1.1) + window.scrollY; // ширина экрана * 1.1 + высота на сколько просролили экран
        elem.forEach(el => {

            let observer = new IntersectionObserver(function (entries) {
                //console.log(entries)
                entries.forEach(function (entry) {
                    //console.log(entry.isIntersecting)
                    if (entry.isIntersecting) {
                        return entry.target.classList.add(className)
                        //console.log(entry.target)
                    }
                });
            });

            let scrollOffset = el.offsetParent.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                observer.observe(el)
            }
        })
    }

    let screenBottomItems = document.querySelectorAll('.screen-bottom-item') // Массив блоков с услугами
    let abousAsItems = document.querySelectorAll('.about-as-item') // Массив блоков  О нас
    let stagesWorkInfoItem = document.querySelectorAll('.stages-work-info-item')
    let advantagesItem = document.querySelectorAll('.advantages-item')
    let pricesItem = document.querySelectorAll('.prices-item')
    let portfolioItem = document.querySelectorAll('.portfolio-item')
    let formItem = document.querySelectorAll('.form-item')

    animate(screenBottomItems);
    animate(abousAsItems);
    animate(stagesWorkInfoItem);
    animate(advantagesItem);
    animate(pricesItem);
    animate(portfolioItem);
    animate(formItem);
    window.addEventListener('scroll', () => {
        animate(screenBottomItems);
        animate(abousAsItems);
        animate(stagesWorkInfoItem);
        animate(advantagesItem);
        animate(pricesItem);
        animate(portfolioItem);
        animate(formItem);
    })
})
