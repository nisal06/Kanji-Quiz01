//THE AREA WHERE THE KANJI GOES
const kanji = document.querySelector('.kanji');


//THE AREA WHERE THE USER TYPES THE ROMAJI

const input = document.getElementById('input');
//THE BUTTON THE USER CLICKS TO CHECK THEIR ANSWER

const check = document.getElementById('check');

const kanjiObj = {
    やま: "山",
    かわ: "川",
    た: "田",
    び: "日",
    つき: "月",
    かわ: "川",
    た: "田",
    ひ: "火",
    みず: "水",
    き: "木",
    かね: "金",
    つち: "土",
}

const kanjiValue = Object.values(kanjiObj);

const kanjiKey = Object.keys(kanjiObj);

// console.log(kanjiKey[3]);

let counter = 0;

let nowKanji = 
kanjiValue[counter];

let nowRomaji = kanjiKey[counter];



check.addEventListener('click',function(){
    if(input.value === nowRomaji){
        displayCorrect();
        sayCorrect();
    }else{
        displayIncorrect();
    }
    

});

function sayCorrect(){
    if(counter <= kanjiValue.length){
        kanji.innerHTML = 'Correct!'
        setTimeout(function(){
            kanji.innerHTML = nowKanji;

            }, 1000);
        } else {
            kanji.innerHTML = "Good Luck with JLPT !"
        }
      


    }
    


function displayCorrect(){
    if(counter <= kanjiValue.length){
        counter++
        nowKanji = kanjiValue[counter];
        nowRomaji = kanjiKey[counter];
        kanji.innerHTML = nowKanji;
        input.value = '';
    
    }

    
}

function displayIncorrect(){
    kanji.innerHTML = "හරියට ලියපං..මෝඩ පුකා!"
    kanji.style.color = "red";
    input.value = '';
    setTimeout(function(){
        kanji.style.color = "black";
        kanji.innerHTML = nowKanji;
    }, 1000)

}










