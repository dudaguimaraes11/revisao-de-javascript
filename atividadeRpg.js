// 1. CRIAÇÃO DAS VARIÁVEIS PRINCIPAIS

let nome = "Ártemis";
let classe = "Guerreira";
let nivel = 15;
let vida = 100;
let ouro = 50;
let xp = 80;

// 2. DEFINIÇÃO DE CONSTANTES MÁGICAS

const NOME_ARMA = "Arco da Lua Cristalina";
let danoBase = 100;
const NOME_ARMADURA = "Manto da Caçadora";
const DEFESA_BASE = "30";

console.log (`🏹 Arma:${NOME_ARMA}`);
console.log (`🎇 Dano Base: ${danoBase}`);
console.log (`👑 Nome da armadura: ${NOME_ARMADURA}`);
console.log (`🗡 Defesa Base: ${DEFESA_BASE}`);

// 3. APLICAÇÃO DE OPERADORES DE ATRIBUIÇÃO

xp += 150; // O personagem treinou e ganhou pontos de experiência.
ouro -= 30; // Comprou poção por 30 moedas de ouro.
vida += 40; // Usou a poção e recuperou pontos de vida.  
danoBase *= 2 // A arma foi encantada e seu dano foi dobrado.  

// Resultado Final
console.log (`Relatório da Jornada:`);
console.log (`🧚‍♀️ Herói: ${nome}`);
console.log (`⚔ Nível: ${nivel}`);
console.log (`🎇 XP: ${xp}`);
console.log (`✨ Ouro: ${ouro}`);
console.log (`💖 Vida: ${vida}`);
console.log (`🗡 Dano Base: ${danoBase}`);

// 4. CÁLCULO DE ATRIBUTOS FINAIS

let ataqueTotal;
let defesaTotal;

ataqueTotal = nivel + danoBase;
defesaTotal = DEFESA_BASE + (nivel / 2);

console.log (`🎇O atributo total de ataque é:${ataqueTotal};`);
console.log (`🎇 O atributo total de defesa é: ${defesaTotal}.`);


// 5. AVALIAÇÃO DE PRONTIDÃO COM OPERADORES LÓGICOS

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// 6. GERAÇÃO DA LORE DO PERSONAGEM

console.log (`LORE DA HEROINA: ${nome} 🌟`);
console.log (`Na alvorada do Reino de Thalendor, quando as estrelas ainda sussurravam segredos aos ventos antigos, nasceu uma ${classe} marcada pela lua. ${nome} não veio da realeza, mas sim da sombria floresta de Mystic Falls, vinda de uma longa linhagem de caçadoras comprometidas a manter o equilíbrio entre a luz e as trevas.`);
console.log (`Desde jovem, era uma arqueira talentosa. Seu destino, porém, foi selado ao encontrar o ${NOME_ARMA}, uma relíquia ancestral forjada por elfos na era das constelações, séculos antes de seu nascimento. Dizem que ele só se revela àquelas que carregam em si a coragem da noite e a delicadeza dos seres mais belos da floresta.`);
console.log (`No coração ancestral da floresta encantada, onde ${nome} descansa sob a sombra das raízes e ávidamente escuta o canto da lua, a guerreira mira em direção a seu futuro: uma grande mudança se aproxima.`);
console.log (`Após semanas de treino no Vale das Águas Cristalinas, onde a natureza escolhe apenas os mais fortes e os ventos sopram implacavelmente, ${nome} desafiou os próprios limites. Cada um dos seus movimentos de batalha se tornaram tão naturais quanto o curso do rio que se embrenhava nas sombras místicas daquele reino.`);
console.log (`${nome}, em posse do ${NOME_ARMADURA}, e com a mente afiada, ela gastou 30 de suas barras de ouro, comprou a Poção da Vida e a recuperou totalmente, alcançando ${vida} de vida. À caminho de sua missão, reconhecendo sua bondade, uma ninfa reconheceu seu arco sem exigir nada em troca. Agora, o Arco da Lua Cristalina possui ${danoBase} de dano Base, o bastante para derrotar o maior e mais forte ser das trevas e o cegá-lo completamente com o reflexo da luz viva da lua. Ao todo, Artemis segue com nível ${nivel}, xp ${xp}, e ${ouro} barras de ouro.`);
console.log (`Mas a paz foi breve. A Ordem de Arkenfell caiu e um novo regime foi instituído. Agora resta à ${nome} restaurar a paz de seu reino. Será que ela cumprirá sua missão?`);

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===
// Dados do personagem anterior:

/* nomePersonagem = "Ártemis";
classe = "Guerreira";
nivel = 15;
xp = 230;
ouro = 20; */

// Dados adicionados:

let vidaAtual = 140;
let vidaMaxima = 200;
let manaAtual = 50;
let manaMaxima = 50;
let energia = 100;

// Novos atributos para batalha
let forca = 20;
let defesa = 40;
let agilidade = 15;
let combatesVencidos = 13;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Floresta de Mystic Falls";
let missaoAtual = "Restaurar a Ordem de Arkenfell";

// ESTRUTURA NARRTIVA OBRIGATÓRIA
// PRÓLOGO
console.log (`🌟 PRÓLOGO: No Reino de Thalendor, Ártemis, ágil caçadora da natureza, precisá enfrentar diversos desafios para restaurar a ordem de Arkenfell em seu amado reino. Com a ajuda de seu encantado ${NOME_ARMA} e sua armadura ${NOME_ARMADURA}, forjados há séculos, destinados a acompanhá-la em sua missão e guiá-la em direção à glória, ela explorará a floresta Mystic Falls em busca de respostas e aliados. Será que ela se revelará a grande heroina do reino?`);

// Capítulo I

console.log (`🌟 CAPÍTULO I: Ao se embrenhar na misteriosa floresta de Mystic Falls, Ártemis se depara com três animais cujo nome ela não tinha ideia, mas uma coisa era certa: eram perigosos. Em uma fusão de escorpião com jaguar, as bestas de cinco metros, no mínimo, espumavam de raiva. Embora a heroina não estivesse com medo, escondeu-se atrás de uma grande rocha para que pudesse preparar seu arco com precisão. Assim, trocou suas flechas convencionais por flechas venenosas. Ártemis só tinha uma opção para continuar seu caminho: matá-los. Assim ela poderia ganhar 100xp e prosseguir sua jornada.`);

let matarBesta = true
if (matarBesta) {
    xp +=100;
    console.log (`Em golpes ágeis, Ártemis matou as três bestas e agora, com a recente adição de 100xp, acumulava um total de ${xp} xp.`);
}

let descansar = true
if (descansar) {
    vida += 20
    if (vida > vidaMaxima) vida = vidaMaxima;
    console.log (`Tendo cumprido sua missão diária, pôde parar para descansar na sombra de um grande carvalho e recuperar sua vida, que agora estava em ${vida}.`);
}

// Capítulo II
console.log (`🌟 CAPÍTULO II: Ao amanhecer do segundo dia de sua missão, ${nome} se levantou com os músculos ainda tensos, mas revitalizada. A noite fora tranquila e ela esperava que o dia que se seguisse revelasse grandes vitórias. Ao arrumar seus itens, a caçadora partiu para mais um dia de aventura. Após uma longa caminhada entre raíses e folhas úmidas, ${nome} se deparou com um dos piores destinos da floresta encantada: a Encruzilhada dos Lamentos. As lendas, mitos e boatos que ouvira sobre os três caminhos que estendiam-se a sua frente fizeram-na estremecer. Mas uma escolha tinha que ser feita, pois não restava alternativa.`);

if (classe === "Guerreira") {
    console.log(`O poder de seus antepassados, os mais poderosos guerreiros, flui através de suas veias incentivando-a a honrá-los. Com coragem no coração e mente aberta, ela seguiu em direção ao seu destino, confiante de que o legado de sua linhagem a guiaria.`);
}

if (xp >= 100) {
console.log(`A experiência adquirida em seus ${combatesVencidos} combates anteriores revelou-se valiosa. Procurando rapidamente por sinais que a instruissem sobre o caminho correto, ela os encontrou. Sinais de proteção das Dríades da Natureza estavam marcados nas árvores da primeira trilha.`);
nivel++;
xp += 50;
console.log (`Mostrando sua coragem, a heroina subiu para o próximo nível (nível ${nivel}).`)

} else {
    console.log (`${nome} ainda não havia experiência o sufiente para tomar essa decisão. No entanto, seguiu pelo caminho do meio e deparou-se com um nevoeiro mágico que a desorientou. ${nome} perdeu vida e energia, mas encontrou o caminho correto mais tarde.`);
    vida -=30;
    energia -=40;
}

let encontrouAliado = true;
let famaEntrePovos = 5;

if (encontrouAliado) {
    console.log (`Após inúmeras horas caminhando, ${nome} chegou a uma clareira. Saindo das sombras, o Ancião Andarilho, conhecido no reino como Ledgher, ofereceu a guerreira uma poção de advertência sobre os perigos que se seguiriam à sua frente. Hesitou em aceitar. Mas, seguindo o seu coração, tomou a poção. Ganhou 50xp. Em seguida, sem dizer uma palavra, o Ancião entregou-lhe uma chave dourada. Mesmo sem entender, ${nome} confiou e seguiu seu caminho, mal sabendo que o Ancião enviaria ainda mais ajuda em sua jornada.`);
    xp+=50;
    famaEntrePovos += 2;
} else {
    console.log (`A heroina seguiu seu caminho solitário pela floresta úmida e escura confiando em seus instintos, forçando-se a acreditar que logo chegaria à reposta que salvaria o reino.`)
}
