(function () {
    // let editPortfolioEditSiteLogo = document.getElementById('editPortfolioEditSiteLogo')
    // let editPortfolioMiniImg = document.getElementById('editPortfolioMiniImg')
    // let editPortfolioTemplate = document.getElementById('editPortfolioTemplate')
    let deleteButton = document.querySelectorAll('.delete-button-img')
    deleteButton.forEach(function(val) {
        val.addEventListener('click', function (e) {
            e.preventDefault()
            let idData = this.dataset.deletebutton
            let pathImg = this.dataset.img
            let inputFile = document.getElementById(idData).style.display = 'initial'
            let dataBaseString = this.dataset.database
            console.log(idData)
            console.log(pathImg)
            console.log(dataBaseString)
            $.ajax({
                url: '/admin/delete-image',
                method: "delete",
                headers: {
                    'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
                },
                data: {img: pathImg, string: dataBaseString},
            })
        })
    })
})()
