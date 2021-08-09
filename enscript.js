let enquestions = [
    {
        'question': 'Who invented HTML?',
        'answer1': 'Robbie Williams',
        'answer2': 'Lady Gaga',
        'answer3': 'Tim Berners-Lee',
        'answer4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'What does the HTML tag mean &lt;a&gt;?',
        'answer1': 'Text bold',
        'answer2': 'Container',
        'answer3': 'a link',
        'answer4': 'cursiv',
        'right_answer': 3
    },
    {
        'question': 'How do you integrate a website into a website?',
        'answer1': '&lt;iframe&gt;, &lt;fram&gt;, and &lt;frameset&gt;',
        'answer2': '&lt;iframe&gt;',
        'answer3': '&lt;frame&gt;',
        'answer4': '&lt;frameset&gt;',
        'right_answer': 2
    },
    {
        'question': 'What is the BEST way to make text bold?',
        'answer1': '&lt;strong&gt;',
        'answer2': 'css use',
        'answer3': '&lt;bold&gt;',
        'answer4': '&lt;b&gt;',
        'right_answer': 1
    },
    {
        'question': 'Which attribute can NOT be used for text area?',
        'answer1': 'readonly',
        'answer2': 'max',
        'answer3': 'from',
        'answer4': 'spellcheck',
        'right_answer': 1
    },
    {
        'question': 'How do you choose all elements of type &lt;a&gt; with the title attribute?',
        'answer1': 'a[title]{...}',
        'answer2': 'a > title {...}',
        'answer3': 'a.title {...}',
        'answer4': 'a=title {...}',
        'right_answer': 1
    },
    {
        'question': 'How do you define a variable in JavaScript?',
        'answer1': 'let 100 = rate;',
        'answer2': '100 = let rate;',
        'answer3': 'rate = 100;',
        'answer4': 'let rate = 100;',
        'right_answer': 4
    }
];

let encurrentQuestion = 0;  //variable erstellen die auf 0 gesetzt wird
let enrightquestion = 0; //variable erstellen die auf 0 gesetzt wird
let ENAUDIO_SUCCESS = new Audio('sounds/success.mp3');
let ENAUDIO_FAIL = new Audio('sounds/fail.mp3');

//load function
function eninit() {
    document.getElementById('number').innerHTML = questions.length; //ladet die Anzahl der gesamten Fragen und gibt sie aus.

    enshowquestion();
}

function enshowquestion() {
    
    if (gameisover()) {
        showendscreen();
    } else {
        updateprogressbar();
        updatenextquestion();
    }
}

function gameisover(){
    return encurrentQuestion >= enquestions.length;
}

function answer(selectedBTN) {  //definierte onclick Funktion selectedBTN ruft die id des geklickten Elements ab.
    let enquestion = enquestions[encurrentQuestion];

    let enrightAnswer = `answer${question['right_answer']}`; //die richtige Antwort anzeigen 

    let enquestionanswer = selectedBTN.slice(-1); // das letzte Zeichen ('Char') wird vom string abgefragt.

    if (enquestionanswer == enquestion['right_answer']) { // Abfrage ob die Antwort richtig oder falsch ist
        document.getElementById(selectedBTN).classList.add('question-right');
        ENAUDIO_SUCCESS.play(); //Musik bei erfolg abspielen
        enrightquestion++;
    } else {
        document.getElementById(selectedBTN).classList.add('question-wrong');
        document.getElementById(enrightAnswer).classList.add('question-right');
        ENAUDIO_FAIL.play(); // Musik bei misserfolg abspielen
    }

    document.getElementById('next-button').disabled = false; //Button wird Enabled
}

function nextQuestion() {
    encurrentQuestion++; //wird von z.b. 0 auf 1 erhöht usw.

    document.getElementById('next-button').disabled = true; //Button wird Disabled

    removeButtons(); // buttons zurücksetzen

    showquestion(); //nächste frage laden
}

function restartGame(){
    //alles zurücksetzen
    enrightquestion = 0;
    encurrentQuestion = 0;
    document.getElementById('bg-quiz-end').src = 'img/background.jpg';
    document.getElementById('quiz-end').style = 'display: none';
    document.getElementById('quiz-body').style = '';
    eninit();
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
    document.getElementById('bg-quiz-end').src = 'img/bg-end.jpg';
    document.getElementById('quiz-end').style = ''; //display: none entfernen
    document.getElementById('quiz-body').style = 'display: none'; // display: none hinzufügen
    document.getElementById('end-of-question').innerHTML = enquestions.length; //Anzeige Anzahl der Fragen 
    document.getElementById('right-of-question').innerHTML = enrightquestion; //Anzeige von wieviel Fragen da richtig sind
}

function updateprogressbar(){
    let percent = (encurrentQuestion +1) / enquestions.length;
    percent = Math.round(percent * 100); //Progress bar prozent Rechnung 
    document.getElementById('progress-bar').innerHTML = `${percent} %`; //Prozent Anzeige in Progress bar
    document.getElementById('progress-bar').style = `width: ${percent}%`; //die Width zu Prozent Anzeige anpassen
}

function updatenextquestion(){
    let question = enquestions[encurrentQuestion];
    document.getElementById('question-of').innerHTML = encurrentQuestion + 1; //Anzeige um einen erhöhen
    document.getElementById('questiontext').innerHTML = question['question']; //fragt die Frage ab und zeigt sie an
    document.getElementById('answer1').innerHTML = question['answer1']; //fragt die Antworten ab und zeigt sie an
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}