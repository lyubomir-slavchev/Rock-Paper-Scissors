var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var resultMessage = document.getElementsByClassName("result");
var userScore = 0 ;
var computerScore = 0;

function main (){
	 var result = ~~(Math.random() * 3);
	 var message = "";
	  switch (result){ 
	 case 0: 
	  userScore++;
	  message= "Rock beats scissors.You Win!";
	  break;
	  case 1: 
	  message= "Rock equals rock.Draw!";
	  break;
	  case 2: 
	  computerScore++;
	  message= "Rock loses to paper.You Lose!";
	  break;
	  } 
	  
	  
	  
	  userScore_span.innerHTML = userScore;
	  computerScore_span.innerHTML = computerScore;
	 resultMessage[0].innerHTML = message;
}


function main1 (){
	 var result = ~~(Math.random() * 3);
	 var message = "";
	  switch (result){ 
	 case 0: 
	  userScore++;
	  message= "Paper covers rock.You Win!";
	  break;
	  case 1: 
	  message= "Paper equals Paper.Draw!";
	  break;
	  case 2: 
	  computerScore++;
	  message= "Paper loses to scissors.You Lose!";
	  break;
	  } 
		  userScore_span.innerHTML = userScore;
	  computerScore_span.innerHTML = computerScore;
	 resultMessage[0].innerHTML = message;
}
  
	  function main2 (){
	 var result = ~~(Math.random() * 3);
	 var message = "";
	  switch (result){ 
	 case 0: 
	  userScore++;
	  message= "Scissors beats paper.You Win!";
	  break;
	  case 1: 
	  message= "Scissors equals scissors.Draw!";
	  break;
	  case 2: 
	  computerScore++;
	  message= "Scissors loses to rock.You Lose!";
	  break;
	  } 
	  	  userScore_span.innerHTML = userScore;
	  computerScore_span.innerHTML = computerScore;
	 resultMessage[0].innerHTML = message;
}