
const facts = [
    "Os gatos têm",
    "uma visão noturna incrível, permitindo-lhes ver com um sexto da luz que um humano precisa.",
    "Os gatos têm 32 músculos em cada orelha, o que lhes dá uma incrível capacidade de mover as orelhas independentemente.",
    "Gatos podem fazer até 100 diferentes sons, enquanto os cães podem fazer cerca de 10.",
    "Os gatos têm um órgão especial no palato chamado órgão de Jacobson, que lhes permite detectar feromônios."

];


function getRandowFact(){
    const randowIndex = math.floor(Math.random() * facts.length);
    return facts[randowIndex];

}


document.getElementById('factButton').addEventListener('click', function(){
    const fact = getRandowFact();
    document.getElementById('funFact').textContent = fact;

    });