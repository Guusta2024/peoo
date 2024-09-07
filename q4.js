const apiUrl = 'https://worldcupjson.net/teams';

fetch(apiUrl)
.then(Response => Response.json())
.then(selecoes => { 
    console.log(selecoes);
    console.log(selecoes.groups[0].teams[1].name)

// atualização do select
const select = document.querySelector('#escolhaGrupo');
let button = document.querySelector('#butao');
button.addEventListener('click', () => {
    console.log(select.value)
    
    if (select.value == "A"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h2>grupo A</h2>
        <table>
            <tr>
                <th>seleção</th>
                <th>pts</th>
                <th>p</th>
                <th>v</th>
                <th>e</th>
                <th>d</th>
                <th>gm</th>
                <th>gc</th>
                <th>sg</th>
            </tr>
            <tr>
                <th>${selecoes.groups[0].teams[0].name}</th>
                <th>${selecoes.groups[0].teams[0].group_points}</th>
                <th>${selecoes.groups[0].teams[0].games_played}</th>
                <th>${selecoes.groups[0].teams[0].wins}</th>
                <th>${selecoes.groups[0].teams[0].draws}</th>
                <th>${selecoes.groups[0].teams[0].losses}</th>
                <th>${selecoes.groups[0].teams[0].goals_for}</th>
                <th>${selecoes.groups[0].teams[0].goals_against}</th>
                <th>${selecoes.groups[0].teams[0].goal_differential}</th>
            </tr>
            <tr>
                <th>${selecoes.groups[0].teams[1].name}</th>
                <th>${selecoes.groups[0].teams[1].group_points}</th>
                <th>${selecoes.groups[0].teams[1].games_played}</th>
                <th>${selecoes.groups[0].teams[1].wins}</th>
                <th>${selecoes.groups[0].teams[1].draws}</th>
                <th>${selecoes.groups[0].teams[1].losses}</th>
                <th>${selecoes.groups[0].teams[1].goals_for}</th>
                <th>${selecoes.groups[0].teams[1].goals_against}</th>
                <th>${selecoes.groups[0].teams[1].goal_differential}</th>
            </tr>
            <tr>
                <th>${selecoes.groups[0].teams[2].name}</th>
                <th>${selecoes.groups[0].teams[2].group_points}</th>
                <th>${selecoes.groups[0].teams[2].games_played}</th>
                <th>${selecoes.groups[0].teams[2].wins}</th>
                <th>${selecoes.groups[0].teams[2].draws}</th>
                <th>${selecoes.groups[0].teams[2].losses}</th>
                <th>${selecoes.groups[0].teams[2].goals_for}</th>
                <th>${selecoes.groups[0].teams[2].goals_against}</th>
                <th>${selecoes.groups[0].teams[2].goal_differential}</th>
            </tr>
            <tr>
                <th>${selecoes.groups[0].teams[3].name}</th>
                <th>${selecoes.groups[0].teams[3].group_points}</th>
                <th>${selecoes.groups[0].teams[3].games_played}</th>
                <th>${selecoes.groups[0].teams[3].wins}</th>
                <th>${selecoes.groups[0].teams[3].draws}</th>
                <th>${selecoes.groups[0].teams[3].losses}</th>
                <th>${selecoes.groups[0].teams[3].goals_for}</th>
                <th>${selecoes.groups[0].teams[3].goals_against}</th>
                <th>${selecoes.groups[0].teams[3].goal_differential}</th>
            </tr>
        </table>`
}
if (select.value == "B"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>top</h1>`
}if (select.value == "C"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}if (select.value == "D"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}if (select.value == "E"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}if (select.value == "F"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}if (select.value == "G"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}if (select.value == "H"){
    console.log("certo")
    document.getElementById("tabela").innerHTML = 
        `<h1>Ok</h1>`
}
});


});
