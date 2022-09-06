var driver1 = document.getElementById("driver1");
var driver1Imagem = document.getElementById("driver1-img");
var lastro1 = document.getElementById("lastro1");
var lastro1Imagem = document.getElementById("lastro1-img");
var pontos1 = document.getElementById("pontos1");
var driver2 = document.getElementById("driver2");
var driver2Imagem = document.getElementById("driver2-img");
var lastro2 = document.getElementById("lastro2");
var lastro2Imagem = document.getElementById("lastro2-img");
var pontos2 = document.getElementById("pontos2");

var pilotoDoDia = "1";

//Os pontos nas corridas de 50% dos grid SENNA ->

var PrimeiraPosicaoCorrida = "25"
var SegundaPosicaoCorrida = "21"
var TerceiraPosicaoCorrida = "18"
var QuartaPosicaoCorrida = "16"
var QuintaPosicaoCorrida = "14"
var SextaPosicaoCorrida = "12"
var SetimaPosicaoCorrida = "10"
var OitavaPosicaoCorrida = "08"
var NonaPosicaoCorrida = "07"
var DecimaPosicaoCorrida = "06"
var DecimaPrimeiraPosicaoCorrida = "05"
var DecimaSegundaPosicaoCorrida = "04"
var DecimaTerceiraPosicaoCorrida = "03"
var DecimaQuartaPosicaoCorrida = "02"
var DecimaQuintaPosicaoCorrida = "01"


//Os pontos nas corridas sprint do grid Senna SENNA

var PrimeiraPosicaoSprint = "10"
var SegundaPosicaoSprint = "09"
var TerceiraPosicaoSprint = "08"
var QuartaPosicaoSprint = "07"
var QuintaPosicaoSprint = "06"
var SextaPosicaoSprint = "05"
var SetimaPosicaoSprint = "04"
var OitavaPosicaoSprint = "03"
var NonaPosicaoSprint = "02"
var DecimaPosicaoSprint = "01"
var DecimaPrimeiraPosicaoSprint = "00"
var DecimaSegundaPosicaoSprint = "00"
var DecimaTerceiraPosicaoSprint = "00"
var DecimaQuartaPosicaoSprint = "00"
var DecimaQuintaPosicaoSprint = "00"



// Pilotos ->

var joãoAnselmo = "João Anselmo";
var joãoAnselmoImagem = "pilotos/anlsemo_camp.jpg";

var felipeSilva = "Felipe Silva";
var felipeSilvaImagem = "pilotos/mazepin.png"


// Fim Pilotos ->


// Carros ->
var williams = "Williams"
var williamsImagem = "equipes-f1/Williams.png"
var astonMartin = "Aston Martin"
var astonMartinImagem = "equipes-f1/AstonMartin.png"

// Fim Carros ->


// Posições corrida Australia ->


var PosicaoAnselmoAustralia = TerceiraPosicaoCorrida;
var PosicaoFelipeSilvaAustralia = SextaPosicaoCorrida;



// Posições corrida Italia ->

var PosicaoAnselmoItalia = QuintaPosicaoCorrida;

// Posições corrida Singapura ->

var PosicaoAnselmoSingapura = SegundaPosicaoCorrida;

// Posições corrida Brasil ->

var PosicaoAnselmoBrasil = TerceiraPosicaoCorrida;
// Posições corrida Miami ->

var PosicaoAnselmoMiami = SegundaPosicaoCorrida;

// FIM CORRIDAS NORMAIS ->



// Corridas Sprint ->


// Posições Sprint Itália ->

var PosicaoAnselmoItaliaSprint = QuintaPosicaoSprint;
// Posições Sprint Brasil ->

var PosicaoAnselmoBrasilSprint = DecimaPrimeiraPosicaoSprint;

//Piloto do Dia

PilotoDoDiaJoaoAnselmoVal = 1


//Contagem de Pontos ->

var poinstJoaoAnselmo = parseInt(PilotoDoDiaJoaoAnselmoVal) + parseInt(PosicaoAnselmoAustralia) + parseInt(PosicaoAnselmoItalia) + parseInt(PosicaoAnselmoItaliaSprint) + parseInt(PosicaoAnselmoSingapura) + parseInt(PosicaoAnselmoBrasil) + parseInt(PosicaoAnselmoBrasilSprint) + parseInt(PosicaoAnselmoMiami);
var pointsFelipeSilva =  parseInt(PosicaoFelipeSilvaAustralia);



// inserção das informações ->


// Driver 1 ->
driver1.innerHTML = felipeSilva;
driver1Imagem.setAttribute("src",felipeSilvaImagem);
lastro1.innerHTML = williams;
lastro1Imagem.setAttribute("src",williamsImagem);
pontos1.innerHTML = pointsFelipeSilva;


// Driver 2 ->
driver2.innerHTML = joãoAnselmo;
driver2Imagem.setAttribute("src",joãoAnselmoImagem);
lastro2.innerHTML = williams;
lastro2Imagem.setAttribute("src",williamsImagem);
pontos2.innerHTML = poinstJoaoAnselmo;


var joãoAnselmoDriver = document.getElementById("joaoAnselmoDriverSennaT8");
var etapa1Anselmo = document.getElementById("etapa1Anselmo");
var etapa2Anselmo = document.getElementById("etapa2Anselmo");
var etapa2SprintAnselmo = document.getElementById("etapa2SprintAnselmo");
var etapa3Anselmo = document.getElementById("etapa3Anselmo");
var etapa4Anselmo = document.getElementById("etapa4Anselmo");
var etapa4SprintAnselmo = document.getElementById("etapa4SprintAnselmo");
var etapa5Anselmo = document.getElementById("etapa5Anselmo");

etapa1Anselmo.innerHTML = PosicaoAnselmoAustralia;
etapa2Anselmo.innerHTML = PosicaoAnselmoItalia;
etapa2SprintAnselmo.innerHTML = PosicaoAnselmoItaliaSprint;
etapa3Anselmo.innerHTML = PosicaoAnselmoSingapura;
etapa4Anselmo.innerHTML = PosicaoAnselmoBrasil;
etapa4SprintAnselmo.innerHTML = PosicaoAnselmoBrasilSprint;
etapa5Anselmo.innerHTML = PosicaoAnselmoMiami;
joãoAnselmoDriver.innerHTML = joãoAnselmo;


var pontosAnselmo = document.getElementById("pontosAnselmo") ;
var PilotoDoDiaJoaoAnselmoEl = document.getElementById("PilotoDoDiaJoaoAnselmo");
PilotoDoDiaJoaoAnselmoEl.innerHTML = PilotoDoDiaJoaoAnselmoVal;
pontosAnselmo.innerHTML = poinstJoaoAnselmo



