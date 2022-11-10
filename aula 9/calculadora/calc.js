//criando uma calculadora 
function calculadora (){
//definindo as operações e pegando valor de entrada do usuário
//usaremos o "\n"
const operadora = Number(prompt('Escolha uma opção:\n 1- soma(+)\n 2-subtração (-)\n 3 - multiplicação(*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6- potenciação (**)'));
//verificando se a operação é válida 
if(!operacao|| operacao>=7) {
    alert('Erro - operação  Inaválida!');
    calculadora();

}else{

    //definindo variáveis - todasas entradas devem ser tipo Number
    let n1 = Number (prompt('Insira o primeiro valor'));
    let n2= Number (prompt('Insira o segundo valor '));
    let resultado;
    //verificando se as variáveis são válidas 
    if(!n1|| !n2) {
    alert('Erro-parâmetros Inválidos');
    calculadora();
}else {  
    //definindo as funções
    function soma(){
         resultado= n1+n2;
         //mostrando o resultado usando template strings
         alert(`${n1} + ${n2} = ${resultado}`);
         //dando a opção de chamar uma nova operação 
         novaOperacao();
    }
         function subtracao(){
            resultado= n1-n2;
            //mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação 
            novaOperacao();
         }
            function multiplicacao(){
                resultado= n1*n2;
                //mostrando o resultado usando template strings
                alert(`${n1} * ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação 
                novaOperacao();
            }
                function divisaoReal(){
                    resultado= n1/n2;
                    //mostrando o resultado usando template strings
                    alert(`${n1} / ${n2} = ${resultado}`);
                    //dando a opção de chamar uma nova operação 
                    novaOperacao();
                }

                    function divisaoInteira(){
                        resultado= n1%n2;
                        //mostrando o resultado usando template strings
                        alert(`o resto da divisão entre ${n1} e ${n2} é igual ${resultado}`);
                        //dando a opção de chamar uma nova operação 
                        novaOperacao();
                    }
                        function potenciacao(){
                            resultado= n1**n2;
                            //mostrando o resultado usando template strings
                            alert(` ${n1} e ${n2}ª potencia é igual ${resultado}`);
                            //dando a opção de chamar uma nova operação 
                            novaOperacao();
                 }
                //novaOperação
                function novaOperacao(){
                    let opcao = prompt('Deseja fazer outra operação?\n 1- sim\n 2 - não');
                    if (opcao==1){
                     calculadora();
                    }else if(opcao==2){
                        alert('até mais!');
                    }else{
                        alert('Digitem uma opção!');
                        novaOperacao();
                    }

                    }
                }
            
            }
             /* 
            //escolhendo uma operação 
            //usando if e else
            if(operacao ==1){
                soma();
            }else if (operacao ==2){
                subtração();
            }else if (operação==3){
                multiplicação();
            }else if (operacao==4){
                divisaoreal
            }else if (operação==5){
                divisaointeira
            }else if (operação==6) {
                 potenciação();
               
            }*/
            
         //Usando stwich case como alternativa (comentar um dois)
         
         switch(operacao){
            case 1: 
            soma ();
            break;
            
            case 2: 
            subtracao();
            break;
            
            case 3: 
            multiplicacao();
            break;
           
            case 4: 
            divisaoReal()
            break;
          
            case 5: 
            divisaoInteira()
            break;
            
            case 6: 
           potenciacao()
            break;
         }
    }
    calculadora();