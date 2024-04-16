
let chaveAPI = "ff178148bec20b8119ba65530879e65d"






function clicarNoBotao() {
    let cidade = document.querySelector(".input-busca").value

    buscarAPI(cidade)
}

async function buscarAPI(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=ff178148bec20b8119ba65530879e65d&units=metric").then(resposta => resposta.json())



    colocarNAtela(dados)
}


// async comanddo para acessar dados de servidor da API//

// await fecth then, utilizado quendo esta se usando  api//
//awai = esperar fecth = acessar then = então//


function colocarNAtela(dados) {
    console.log(dados)

    document.querySelector("h2").innerHTML = "Tempo em " + dados.name

    document.querySelector(".Umidade").innerHTML = "Umidade: " + dados.main.humidity + "% "

    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector('.icone').src = "http://openweathermap.org/img/w/" + dados.weather[0].icon

}

