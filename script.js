let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer1': 'Robbie Williams',
        'answer2': 'Lady Gaga',
        'answer3': 'Tim Berners-Lee',
        'answer4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Was bedeutet das HTML Tag &lt;a&gt;?',
        'answer1': 'Text Fett',
        'answer2': 'Container',
        'answer3': 'Ein Link',
        'answer4': 'Kursiv',
        'right_answer': 3
    },
    {
        'question': 'Wie bindet man eine Webseite in eine Webseite ein?',
        'answer1': '&lt;iframe&gt;, &lt;fram&gt;, and &lt;frameset&gt;',
        'answer2': '&lt;iframe&gt;',
        'answer3': '&lt;frame&gt;',
        'answer4': '&lt;frameset&gt;',
        'right_answer': 2
    },
    {
        'question': 'Wie stellt man Text am BESTEN fett dar?',
        'answer1': '&lt;strong&gt;',
        'answer2': 'css nutzen',
        'answer3': '&lt;bold&gt;',
        'answer4': '&lt;b&gt;',
        'right_answer': 1
    },
    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer1': 'readonly',
        'answer2': 'max',
        'answer3': 'from',
        'answer4': 'spellcheck',
        'right_answer': 1
    },
    {
        'question': 'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut Title aus?',
        'answer1': 'a[title]{...}',
        'answer2': 'a > title {...}',
        'answer3': 'a.title {...}',
        'answer4': 'a=title {...}',
        'right_answer': 1
    },
    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer1': 'let 100 = rate;',
        'answer2': '100 = let rate;',
        'answer3': 'rate = 100;',
        'answer4': 'let rate = 100;',
        'right_answer': 4
    }
];

let currentQuestion = 0;  //variable erstellen die auf 0 gesetzt wird
let rightquestion = 0; //variable erstellen die auf 0 gesetzt wird
let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAIL = new Audio('sounds/fail.mp3');

//load function
function init() {
    document.getElementById('number').innerHTML = questions.length; //ladet die Anzahl der gesamten Fragen und gibt sie aus.

    showquestion();
}

function showquestion() {
    
    if (gameisover()) {
        showendscreen();
    } else {
        updateprogressbar();
        updatenextquestion();
    }
}

function gameisover(){
    return currentQuestion >= questions.length;
}

function answer(selectedBTN) {  //definierte onclick Funktion selectedBTN ruft die id des geklickten Elements ab.
    let question = questions[currentQuestion];

    let rightAnswer = `answer${question['right_answer']}`; //die richtige Antwort anzeigen 

    let questionanswer = selectedBTN.slice(-1); // das letzte Zeichen ('Char') wird vom string abgefragt.

    if (rightAnwserSelected(questionanswer)) { // Abfrage ob die Antwort richtig oder falsch ist
        document.getElementById(selectedBTN).classList.add('question-right');
        AUDIO_SUCCESS.play(); //Musik bei erfolg abspielen
        rightquestion++;
    } else {
        document.getElementById(selectedBTN).classList.add('question-wrong');
        document.getElementById(rightAnswer).classList.add('question-right');
        AUDIO_FAIL.play(); // Musik bei misserfolg abspielen
    }

    document.getElementById('next-button').disabled = false; //Button wird Enabled
}

function rightAnwserSelected(questionanswer) {
    return questionanswer == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++; //wird von z.b. 0 auf 1 erhöht usw.

    document.getElementById('next-button').disabled = true; //Button wird Disabled

    removeButtons(); // buttons zurücksetzen

    showquestion(); //nächste frage laden
}

function restartGame(){
    //alles zurücksetzen
    rightquestion = 0;
    currentQuestion = 0;
    document.getElementById('quiz-end').style = 'display: none';
    document.getElementById('quiz-body').style = '';
    init();
}

function removeButtons() {
    //Anzeige zurücksetzen
    document.getElementById('answer1').classList.remove('question-right');
    document.getElementById('answer1').classList.remove('question-wrong');
    document.getElementById('answer2').classList.remove('question-right');
    document.getElementById('answer2').classList.remove('question-wrong');
    document.getElementById('answer3').classList.remove('question-right');
    document.getElementById('answer3').classList.remove('question-wrong');
    document.getElementById('answer4').classList.remove('question-right');
    document.getElementById('answer4').classList.remove('question-wrong');
}

function showendscreen() {
    document.getElementById('quiz-end').style = ''; //display: none entfernen
    document.getElementById('quiz-body').style = 'display: none'; // display: none hinzufügen
    document.getElementById('end-of-question').innerHTML = questions.length; //Anzeige Anzahl der Fragen 
    document.getElementById('right-of-question').innerHTML = rightquestion; //Anzeige von wieviel Fragen da richtig sind
}

function updateprogressbar(){
    let percent = (currentQuestion +1) / questions.length;
    percent = Math.round(percent * 100); //Progress bar prozent Rechnung 
    document.getElementById('progress-bar').innerHTML = `${percent} %`; //Prozent Anzeige in Progress bar
    document.getElementById('progress-bar').style = `width ${percent}%`; //die Width zu Prozent Anzeige anpassen
}

function updatenextquestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-of').innerHTML = currentQuestion + 1; //Anzeige um einen erhöhen
    document.getElementById('questiontext').innerHTML = question['question']; //fragt die Frage ab und zeigt sie an
    document.getElementById('answer1').innerHTML = question['answer1']; //fragt die Antworten ab und zeigt sie an
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}