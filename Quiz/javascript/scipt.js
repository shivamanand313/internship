function submitAnswers(){
  var total = 5;
  var score = 0;
  var q1=document.forms["quizForm"]["q1"].value;
  var q2=document.forms["quizForm"]["q2"].value;
  var q3=document.forms["quizForm"]["q3"].value;
  var q4=document.forms["quizForm"]["q4"].value;
  var q5=document.forms["quizForm"]["q5"].value;

//validation
  for(i=1;i<total;i++)
  {
    if(eval('q'+i)=='' || eval('q'+i)==null)
    {alert("u missed question  " +i);
      return false;
    }
  }
//Set answers
var answers=["a","b","c","d","d"];
if(q1==answers[0])
{score++;}
if(q2==answers[1])
{score++;}
if(q3==answers[2])
{score++;}
if(q4==answers[3])
{score++;}
if(q5==answers[4])
{score++;}
//1
var results = document.getElementById('results');
results.innerHTML  = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
alert(score);
//var qw = document.getElementById('results');
//qw.innerHTML = <h3>"your score"<span>score</span></h3>;
//document.getElementById('results').innerHTML=<h3>"Your Score is "<span?+ score</span></h;

	//Display Results
	//var results = document.getElementById('results');
	//results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	//alert('You scored '+score+' out of ' +total);

	return false;
}



}
