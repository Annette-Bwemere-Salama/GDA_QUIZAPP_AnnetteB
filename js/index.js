const login = document.querySelector('.login');
const questions = document.querySelector('.questions');
const questionForm = document.querySelector('.questionForm');
console.log(login, questions)
let compteurA = 100
let nomJouer = document.querySelector('#nomJouer');
let mailjouer = document.querySelector('#mailjouer');
let btnFinal = document.querySelector('#btnFinal');
let nom = document.querySelector('#nom');
let mail = document.querySelector('#email');
let Rinput = document.querySelectorAll('.Rinput');
let Rinput1 = document.querySelectorAll('.Rinput1');
let Rinput2 = document.querySelectorAll('.Rinput2');
let Rinput3 = document.querySelectorAll('.Rinput3');
let Rinput4 = document.querySelectorAll('.Rinput4');
let Rinput5 = document.querySelectorAll('.Rinput5');
let Rinput6 = document.querySelectorAll('.Rinput6');
let Rinput7 = document.querySelectorAll('.Rinput7');
let Rinput8 = document.querySelectorAll('.Rinput8');
let Rinput9 = document.querySelectorAll('.Rinput9');
let Rinput10 = document.querySelectorAll('.Rinput10');
let Rinput11 = document.querySelectorAll('.Rinput11');
let Rinput12 = document.querySelectorAll('.Rinput11');
let Rinput13 = document.querySelectorAll('.Rinput13');
let Rinput14 = document.querySelectorAllG('.Rinput14');
let nombreScore = document.getElementById('nombreScore');
let score = 0;
let button1 = document.querySelector('#button1');
let quittezB = document.querySelectorAll('.quittezB')





const loginForm = document.querySelector('.loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    questions.style.display = 'block'
    login.style.display = 'none'
    compteur();
    console.log('score =' + score);
});

// button1.addEventListener('click', (e) => {
//     questions02.style.display = 'none'
//     containeResults.style.display = 'block';
// });


const containerQuestions01 = document.querySelector('.questions01');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 0;
    for (let i = 0; i < Rinput.length; i++) {
        if (Rinput[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);



    containerQuestions01.style.display = 'block'
    console.log(containerQuestions01);
    questions.style.display = 'none'
    console.log(compteurA);
    compteur();
    compteurA = 100;


})

const questions02 = document.querySelector('.questions02');
//on capte l'evenement
containerQuestions01.addEventListener('submit', (e) => {
    //annulation du comportement par defaut
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput1.length; i++) {
        if (Rinput1[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    //on annule le display none pour dire l'affichage de l'element question02
    questions02.style.display = 'block'
    // On cache l'element containerQuestion01
    containerQuestions01.style.display = 'none'
    console.log(questions02);
    compteur();
    compteurA = 100;

})

const questions3 = document.querySelector('.questions03');
questions02.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 0;
    for (let i = 0; i < Rinput2.length; i++) {
        if (Rinput2[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions3.style.display = 'block'
    questions02.style.display = 'none'
    console.log(questions3);
    compteur();
    compteurA = 100;
})

const questions04 = document.querySelector('.questions04');
questions3.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput3.length; i++) {
        if (Rinput3[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions04.style.display = 'block'
    questions3.style.display = 'none'
    console.log(questions04);
})

const question05 = document.querySelector('.questions05')
questions04.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 3;
    for (let i = 0; i < Rinput4.length; i++) {
        if (Rinput4[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    question05.style.display = 'block'
    questions04.style.display = 'none'
    console.log(question05);
    compteur();
    compteurA = 100;
})

const question06 = document.querySelector('.questions06');
question05.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput5.length; i++) {
        if (Rinput5[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    question06.style.display = 'block'
    question05.style.display = 'none'
    console.log(question06);
    compteur();
    compteurA = 100;
})

const question07 = document.querySelector('.questions07')
question06.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput6.length; i++) {
        if (Rinput6[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    question07.style.display = 'block'
    question06.style.display = 'none'
    console.log(question07);
    compteur();
    compteurA = 100;
})

const questions08 = document.querySelector('.questions08')
question07.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 1;
    for (let i = 0; i < Rinput7.length; i++) {
        if (Rinput7[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions08.style.display = 'block'
    question07.style.display = 'none'
    console.log(questions08);
    compteur();
    compteurA = 100;
})

const questions09 = document.querySelector('.questions09')
questions08.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput8.length; i++) {
        if (Rinput8[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions09.style.display = 'block'
    questions08.style.display = 'none'
    console.log(questions09);
    compteur();
    compteurA = 100;
})


const questions10 = document.querySelector('.questions10')
questions09.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput9.length; i++) {
        if (Rinput9[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions10.style.display = 'block'
    questions09.style.display = 'none'
    console.log(questions10);
    console.log(nom.value);
    compteur();
    compteurA = 100;
})

const questions11 = document.querySelector('.questions11')
questions10.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 2;
    for (let i = 0; i < Rinput10.length; i++) {
        if (Rinput10[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions11.style.display = 'block'
    questions10.style.display = 'none'
    console.log(questions11);
    compteur();
    compteurA = 100;
})

const questions12 = document.querySelector('.questions12')
questions11.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 1;
    for (let i = 0; i < Rinput11.length; i++) {
        if (Rinput11[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions12.style.display = 'block'
    questions11.style.display = 'none'
    console.log(questions12);
    compteur();
    compteurA = 100;
})

const questions13 = document.querySelector('.questions13')
questions12.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 1;
    for (let i = 0; i < Rinput12.length; i++) {
        if (Rinput12[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions13.style.display = 'block'
    questions12.style.display = 'none'
    console.log(questions13);
    compteur();
    compteurA = 100;
})

const questions14 = document.querySelector('.questions14')
questions13.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 1;
    for (let i = 0; i < Rinput13.length; i++) {
        if (Rinput13[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    questions14.style.display = 'block'
    questions13.style.display = 'none'
    console.log(questions14);
    compteur();
    compteurA = 100;
})

const containeResults = document.querySelector('#containeResults');
questions14.addEventListener('submit', (e) => {
    e.preventDefault()
    let reponseClient
    let bonneReponse = 3;
    for (let i = 0; i < Rinput14.length; i++) {
        if (Rinput14[i].checked) {
            reponseClient = i;
        }
    }
    if (reponseClient == bonneReponse)
        score++
    console.log('score =' + score);

    containeResults.style.display = 'block'
    questions14.style.display = 'none'
    console.log(containeResults, questions14);
    console.log(nomJouer, mail);
    nombreScore.innerText = `${score}/15`;
    nomJouer.innerText = nom.value;
    mailjouer.innerText = mail.value;
});

//progressBar
let question02 = document.querySelector('.questions02')

let timer = 0;
function compteur() {
    clearInterval(timer);
    // set interval appelera la fonction apres chaque milisecond
    timer = setInterval(() => {
        if (compteurA >= 0) {
            console.log("progress in - ", compteurA);
            //document.querySelector('.progressBar').style.width = compteurA + '%';
            document.querySelectorAll('.progressBar').forEach((el) => el.style.width = compteurA + '%');
            compteurA--;
        } else {
            clearInterval(timer)
        }

    }, 600);
};

quittezB.forEach((il) => {
    il.addEventListener('click', function () {
        containeResults.style.display = 'block';
        nombreScore.innerText = `${score}/15`;
        nomJouer.innerText = nom.value;
        mailjouer.innerText = mail.value;
    })

})


//quitter
btnFinal.addEventListener('click', function () {
    questions.style.display = 'none';
    containeResults.style.display = 'block';

})




