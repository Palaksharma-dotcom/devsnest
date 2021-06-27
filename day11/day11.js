function  check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question1.value;
    var q3=document.quiz.question1.value;
    var q4=document.quiz.question1.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    if(q1=="206"){c++}
    if(q2=="russia"){c++}
    if(q3=="delhi"){c++}
    if(q4=="26"){c++}
    quiz.style.display='none';
    if(c<=3){
        result.textContent='Your score is $c. better luck next time';
    }
    else{
        result.textContent='Your score is $c. congratulations';
    }

}
