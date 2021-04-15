var score = parseInt(0);
var formNum = parseInt(0);
var ansBlock;
var correctAns = [1, 2, 0];
var ans = [];
var ques;


function start(){
    document.getElementById("msg").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("headImg").src = "img/quiz.gif";
    document.getElementById("question0").style.display="block";
}

function check(btnId){
    ques=btnId;

    for(var i=0; i<4; ++i){
        if(document.forms[btnId].elements[i].checked){
            ans[btnId] = i;
        }
    }

    ansBlock="ansBlock" + btnId;

    if(ans[btnId] == correctAns[btnId]){
        score++;
        document.getElementById("headImg").src = "img/right.gif";
        document.getElementById(ansBlock).style.visibility="visible";
        document.getElementById(ansBlock).innerHTML="Correct!!!";
    }
    else{
        document.getElementById("headImg").src = "img/wrong.gif";
        document.getElementById(ansBlock).style.visibility="visible";
        document.getElementById(ansBlock).innerHTML="Wrong!!!";
    }
    document.getElementById(btnId).value="Next";
    document.getElementById(btnId).setAttribute("onclick","next()");
}

function next(){
    var oldQues="question" + ques;
    document.getElementById(ansBlock).style.visibility="hidden";
    if(ques == 2){
        document.getElementById(oldQues).style.display="none";
        finalScore();
    }
    else{
        document.getElementById(oldQues).style.display="none";
        ques++;
        var newQues="question" + ques;
        document.getElementById(newQues).style.display="block";
    }
}

function finalScore(){
    document.getElementById("headImg").src = "img/quiz.gif";
    document.getElementById("msg").style.display="block";
    document.getElementById("msg").innerHTML="You Scored " + score + "/3";
}