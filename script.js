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

let currentQuestion = 0;

//load function
function init(){
    document.getElementById('number').innerHTML = questions.length;

    showquestion();
}

function showquestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selectedBTN) {
    
}