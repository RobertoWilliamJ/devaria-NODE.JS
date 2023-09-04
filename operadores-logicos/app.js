const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Esse programa vai checar se você é maior de 18 anos e sse você tem habilitação para dirigir o kart');
console.log('além da sua idade precisamos verificar se você está na lista de presença de horário');

readLine.question('Qual o ano do seu nascimento?', ano=>{
    if(ano > 2004){
        console.log('Você não tem 18 anos!');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não)' , temhabilitacao =>{
            if(!(temhabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart!');
            }else{
                readLine.question('Qual o seu nome?', nome =>{
                    switch(nome){
                        case 'Roberto' :
                            console.log('Bem vindo ao kart Roberto!')
                            break;
                            case 'William' :
                                console.log('Bem vindo William')
                                break;
                            default:
                                console.log('Seu nome não está na lista de convidados');
                    }
                })
            }
        })
    }
})