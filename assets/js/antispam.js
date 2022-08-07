let name = null
let phone = null
let randQuestions = null

function modalAntiSpam() {
    let contactsButton = document.getElementById('contactsButton')
    contactsButton.addEventListener('click', function (e) {
        e.preventDefault()

        name = document.getElementById('formInputName').value;
        phone = document.getElementById('formContactPhone').value;
        let errorInputForm = document.getElementById('errorInputForm');

        let errorFormInput = "";
        //let regexOne = /[А-Яа-яЁё]{2,14}/;
        if (name == "") errorFormInput += "<p>Вы не ввели Ваше имя !!!</p>";

        //console.log(regexOne.test(name));
        if (phone == "") errorFormInput += "<p>Вы не ввели свой номер телефона</p>"

        if (errorFormInput != "") {
            errorInputForm.innerHTML = errorFormInput;
        } else {
            let questions = [
                ['Сколько будет два плюс два? (Ответ напишите цифрой)', 4],
                ['Назовите столицу России? ', 'Москва'],
                ['Какой сейчас век? (Ответ напишите цифрой)', 21]
            ]

            let rand = Math.floor(Math.random()*questions.length)
            randQuestions = questions[rand]
            // Получить модальный
            let modal = document.getElementById("myModal");

            // Получить элемент <span>, который закрывает модальный
            let span = document.getElementsByClassName("close")[0];

            // Когда пользователь нажимает на кнопку, откройте модальный
            modal.style.display = "block";


            // Когда пользователь нажимает на <span> (x), закройте модальное окно
            span.onclick = function() {
                modal.style.display = "none";
            }

            // Когда пользователь щелкает в любом месте за пределами модального, закройте его
            window.onclick = function(event) {
                if (event.target == modal) modal.style.display = "none";
            }

            let modelQuestions = document.getElementById('modelQuestions')
            modelQuestions.innerText = randQuestions[0]
        }
    })
}

modalAntiSpam();
document.getElementById('questionButton').addEventListener('click', function () {
    let inputModal = document.getElementById('inputModal').value;
    let errorInput = "";
    let modal = document.getElementById('myModal')
    let errorAnswerQuestion = document.querySelector('.errorAnswerQuestion');
    if (inputModal == "") errorInput = "Вы не ответили на вопрос";
    if (inputModal != randQuestions[1]) errorInput = "Ответ на вопрос не верный, попробуйте еще раз";

    if (errorInput != "") {
        errorAnswerQuestion.innerText = errorInput;
    } else {
        errorAnswerQuestion.innerText = "";
        $.ajax({
            type: 'POST', //
            url: '/contacts-form', //
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'json', //
            data: {name , phone},
            success: function(data){
                if (data.answer == "ok") {
                    modal.style.display = "none";
                    document.getElementById('inputModal').value = "";
                    document.getElementById('formContacts').reset();
                    new Toast({
                        title: false,
                        text: 'Ваше сообщение успешно отправленно',
                        theme: 'success',
                        autohide: true,
                        interval: 3000
                    });
                    name = null
                    phone = null
                    randQuestions = null
                }
            }
        })
    }
})
