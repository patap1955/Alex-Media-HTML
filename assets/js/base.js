(function() {
    // Бургер меню
    let burger = document.querySelector(".header__burger")
    burger.addEventListener('click', function() {
        document.querySelector('.header__nav').classList.toggle('active')
        document.querySelector('.header__burger').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    })

    // Аккрдеон с вопросами и ответами
    let acc = document.getElementsByClassName("question_accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("question_active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Плавный скролинг по переходам пунктов меню
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // Калькулятор расчета стоимости
    let totalPrice = 0;
    let totalPriceBlock = document.getElementById('totalPrice')
    let buttonsPlus = document.querySelectorAll('.span-plus')
    let buttonsMinus = document.querySelectorAll('.span-minus')
    let countBlock = document.getElementById('countBlock')
    let countPage = document.getElementById('countPage')

    buttonsPlus.forEach(function(val) {
        val.addEventListener('click', function() {
            let int = document.getElementById(val.dataset.count)
            int.innerText = Number(int.textContent) + Number(1)
            totalPriceBlock.innerHTML = Number(countBlock.textContent * 4500) + Number(countPage.textContent * 5500)
        })
    })

    buttonsMinus.forEach(function(val) {
        val.addEventListener('click', function() {
            let int = document.getElementById(val.dataset.count)
            int.innerText = Number(int.textContent) - Number(1)
            totalPriceBlock.innerHTML = Number(countBlock.textContent * 4500) + Number(countPage.textContent * 5500)
        })
    })
    if (totalPriceBlock) {
        totalPriceBlock.innerHTML = totalPrice + ' &#8381'
    }
    

    //Маска для телефона
    let inputMaskPhone = document.getElementById('formContactPhone')
    let maskPhone = new Inputmask('+7 (999) 999 99-99');
    maskPhone.mask(inputMaskPhone)

    let inputMaskPhone1 = document.getElementById('calculatePhone')
    let maskPhone1 = new Inputmask('+7 (999) 999 99-99');
    maskPhone1.mask(inputMaskPhone1)
})()

