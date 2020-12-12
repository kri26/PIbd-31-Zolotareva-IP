function recording() {
    const form = document.forms[0];

    form.addEventListener("submit", function(event) {

        event.preventDefault();
        var data = new FormData(form);
        var str = 'Вы записаны';
        var doRedirect = true;
        var icon = "success";

        if ((data.get('date') <= null)) {
            str ='Дата не выбрана';
            icon = "error";
            doRedirect = false;
        }
        else if ((data.get('FIO').length < 5)) {
            str ='ФИО слишком короткое';
            icon = "error";
            doRedirect = false;
        } else if ((data.get('number').length <= 10)) {
            str ='Номер слишком короткий';
            icon = "error";
            doRedirect = false;
        }
        swal({
            title: str,
            icon: icon,
            showConfirmButton: false,
            timer: 1500
        })
        

        if (doRedirect) {
            setTimeout(function () {
                window.location.href = "index.html";
            }, 1800); //will call the function after 2 secs.
        }

    });

    form.addEventListener("formdata", event => {
        // event.formData grabs the object
        console.log(event.formData);
    });
}
