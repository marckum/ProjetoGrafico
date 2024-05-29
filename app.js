

$('document').ready(function () {

    $.ajax({
        type: "POST",
        url: "nda.php",
        dataType: "json",
        success: function (data) {

            
           console.log(data)
            
            var nomearray = [];
            var cestasarray = [];

            for (var i = 0; i < data.length; i++) {

                nomearray.push(data[i].nome);
                cestasarray.push(data[i].pontuacao);

            }

            grafico(nomearray,cestasarray);

        }
    });

})

function grafico(nome,pontuacao) {


    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'horizontalBar',
        data: {
            labels: nome,


            datasets: [{
                label: 'Gráfico',
                backgroundColor: ['green', 'blue', 'yellow'],
                borderColor: 'rgb(255, 99, 132)',
                data: pontuacao
            }]
        },

        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}