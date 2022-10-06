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
var felipeSilvaImagem = "pilotos/FelipeSantos.jpeg"


// Fim Pilotos ->


// Carros ->
var williams = "Williams"
var williamsImagem = "equipes-f1/Williams.png"
var astonMartin = "Aston Martin"
var astonMartinImagem = "equipes-f1/AstonMartin.png"
var ferrari = "Ferrari"
var ferrariImagem = "equipes-f1/Ferrari.png"

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

// Posições corrida Inglaterra ->

var PosicaoAnselmoInglaterra = PrimeiraPosicaoCorrida;

// Posições corrida Estados Unidos ->

var PosicaoAnselmoEUA = QuartaPosicaoCorrida;
// Posições corrida Estados Unidos ->

var PosicaoAnselmoAbuDhabi = SegundaPosicaoCorrida;

// FIM CORRIDAS NORMAIS ->



// Corridas Sprint ->


// Posições Sprint Itália ->

var PosicaoAnselmoItaliaSprint = QuintaPosicaoSprint;
// Posições Sprint Brasil ->

var PosicaoAnselmoBrasilSprint = DecimaPrimeiraPosicaoSprint;

// Posições Sprint Brasil ->

var PosicaoAnselmoInglaterraSprint = TerceiraPosicaoSprint;

// Posições Sprint Abudhabi ->

var PosicaoAnselmoAbuDhabiSprint = SegundaPosicaoSprint;

//POLES

var poleJoaoAnselmoVal = "3";
var poleFelipeSilvaVal = "1";
//Piloto do Dia

var PilotoDoDiaJoaoAnselmoVal = "1";
var pilotoDoDiaFelipeSilvaVal = "2";

//Melhor Volta

var MelhorVoltaJoaoAnselmoVal = "3";
var MelhorVoltaFelipeSilvaVal = "2";

//Contagem de Pontos ->

var poinstJoaoAnselmo = parseInt(PilotoDoDiaJoaoAnselmoVal) + parseInt(MelhorVoltaJoaoAnselmoVal) + parseInt(poleJoaoAnselmoVal)+ parseInt(PosicaoAnselmoAustralia) + parseInt(PosicaoAnselmoItalia) + parseInt(PosicaoAnselmoItaliaSprint) + parseInt(PosicaoAnselmoSingapura) + parseInt(PosicaoAnselmoBrasil) + parseInt(PosicaoAnselmoBrasilSprint) + parseInt(PosicaoAnselmoMiami) + parseInt(PosicaoAnselmoInglaterra) + parseInt(PosicaoAnselmoInglaterraSprint) +parseInt(PosicaoAnselmoEUA) + parseInt(PosicaoAnselmoAbuDhabi) + parseInt(PosicaoAnselmoAbuDhabiSprint);
var pointsFelipeSilva = parseInt(poleFelipeSilvaVal) + parseInt(pilotoDoDiaFelipeSilvaVal) + parseInt(MelhorVoltaFelipeSilvaVal) + parseInt(PosicaoFelipeSilvaAustralia);



// inserção das informações ->


// Driver 1 ->
driver1.innerHTML = joãoAnselmo;
driver1Imagem.setAttribute("src",joãoAnselmoImagem);
lastro1.innerHTML = ferrari;
lastro1Imagem.setAttribute("src",ferrariImagem);
pontos1.innerHTML = poinstJoaoAnselmo;


// Driver 2 ->
driver2.innerHTML = felipeSilva;
driver2Imagem.setAttribute("src",felipeSilvaImagem);
lastro2.innerHTML = ferrari;
lastro2Imagem.setAttribute("src",ferrariImagem);
pontos2.innerHTML = pointsFelipeSilva;


var joãoAnselmoDriver = document.getElementById("joaoAnselmoDriverSennaT8");
var etapa1Anselmo = document.getElementById("etapa1Anselmo");
var etapa2Anselmo = document.getElementById("etapa2Anselmo");
var etapa2SprintAnselmo = document.getElementById("etapa2SprintAnselmo");
var etapa3Anselmo = document.getElementById("etapa3Anselmo");
var etapa4Anselmo = document.getElementById("etapa4Anselmo");
var etapa4SprintAnselmo = document.getElementById("etapa4SprintAnselmo");
var etapa5Anselmo = document.getElementById("etapa5Anselmo");
var etapa6Anselmo = document.getElementById("etapa6Anselmo");
var etapa6SprintAnselmo = document.getElementById("etapa6SprintAnselmo");
var etapa7Anselmo = document.getElementById("etapa7Anselmo");
var etapa8Anselmo = document.getElementById("etapa8Anselmo");
var etapa8SprintAnselmo = document.getElementById("etapa8SprintAnselmo");

etapa1Anselmo.innerHTML = PosicaoAnselmoAustralia;
etapa2Anselmo.innerHTML = PosicaoAnselmoItalia;
etapa2SprintAnselmo.innerHTML = PosicaoAnselmoItaliaSprint;
etapa3Anselmo.innerHTML = PosicaoAnselmoSingapura;
etapa4Anselmo.innerHTML = PosicaoAnselmoBrasil;
etapa4SprintAnselmo.innerHTML = PosicaoAnselmoBrasilSprint;
etapa5Anselmo.innerHTML = PosicaoAnselmoMiami;
etapa6Anselmo.innerHTML = PosicaoAnselmoInglaterra;
etapa6SprintAnselmo.innerHTML = PosicaoAnselmoInglaterraSprint;
etapa7Anselmo.innerHTML = PosicaoAnselmoEUA;
etapa8Anselmo.innerHTML = PosicaoAnselmoAbuDhabi;
etapa8SprintAnselmo.innerHTML = PosicaoAnselmoAbuDhabiSprint;
joãoAnselmoDriver.innerHTML = joãoAnselmo;


var pontosAnselmo = document.getElementById("pontosAnselmo") ;
var PilotoDoDiaJoaoAnselmoEl = document.getElementById("PilotoDoDiaJoaoAnselmo");
PilotoDoDiaJoaoAnselmoEl.innerHTML = PilotoDoDiaJoaoAnselmoVal;
pontosAnselmo.innerHTML = poinstJoaoAnselmo;
var MelhorVoltaJoaoAnselmoEl = document.getElementById("MelhorVoltaJoaoAnselmo");
MelhorVoltaJoaoAnselmoEl.innerHTML = MelhorVoltaJoaoAnselmoVal;
var poleJoaoAnselmoEl= document.getElementById("PoleJoaoAnselmo");
poleJoaoAnselmoEl.innerHTML = poleJoaoAnselmoVal;




