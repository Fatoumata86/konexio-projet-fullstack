$("#btnShowData").click(function () {
    $.ajax({
        url: "http://localhost:8000/all",
        success: function(data, statuts, response) {
            // console.log(data);
            $('.countries').html(data.join(', '))
            $('.countriesNames').html(data.join(', '))
        }
    })
})