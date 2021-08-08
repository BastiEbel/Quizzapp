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
        'question': 'Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut Title aus?',
        'answer1': 'Robbie Williams',
        'answer2': 'Lady Gaga',
        'answer3': 'Tim Berners-Lee',
        'answer4': 'Justin Bieber',
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

//load function
function init() {
    document.getElementById('number').innerHTML = questions.length; //ladet die Anzahl der gesamten Fragen und gibt sie aus.

    showquestion();
}

function showquestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question']; //fragt die Frage ab und zeigt sie an

    document.getElementById('answer1').innerHTML = question['answer1']; //fragt die Antworten ab und zeigt sie an
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selectedBTN) {  //definierte onclick Funktion selectedBTN ruft die id des geklickten Elements ab.
    let question = questions[currentQuestion];

    let rightAnswer = `answer${question['right_answer']}`;

    let questionanswer = selectedBTN.slice(-1); // das letzte Zeichen ('Char') wird vom string abgefragt.

    if (questionanswer == question['right_answer']) { // Abfrage ob die Antwort richtig oder falsch ist
        document.getElementById(selectedBTN).classList.add('question-right');
    } else {
        document.getElementById(selectedBTN).classList.add('question-wrong');
        document.getElementById(rightAnswer).classList.add('question-right');
    }

    document.getElementById('next-button').disabled = false; //Button wird Enabled
}

function nextQuestion() {
    currentQuestion++; //wird von z.b. 0 auf 1 erhöht usw.

    document.getElementById('next-button').disabled = true; //Button wird Disabled

    removeButtons();

    showquestion();
}

function removeButtons() {
    document.getElementById('answer1').classList.remove('question-right');
    document.getElementById('answer1').classList.remove('question-wrong');
    document.getElementById('answer2').classList.remove('question-right');
    document.getElementById('answer2').classList.remove('question-wrong');
    document.getElementById('answer3').classList.remove('question-right');
    document.getElementById('answer3').classList.remove('question-wrong');
    document.getElementById('answer4').classList.remove('question-right');
    document.getElementById('answer4').classList.remove('question-wrong');
}