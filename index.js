//Dom Access
var btn = document.getElementById('buttons');
var con = document.getElementById('container'); 
var box = document.getElementById('result') ;
var one = document.getElementById('1')  ;
var two = document.getElementById('2')  ;
var three = document.getElementById('3')  ;
var four = document.getElementById('4')  ;
var five = document.getElementById('5')  ;
var six = document.getElementById('6')  ;
var seven = document.getElementById('7')  ;
var eight = document.getElementById('8')  ;
var nine = document.getElementById('9')  ;

//DOM Access for rows,columns and diagonals
var r1 = document.getElementsByClassName('row1');
var r2 = document.getElementsByClassName('row2');
var r3 = document.getElementsByClassName('row3');
var c1 = document.getElementsByClassName('column1');
var c2 = document.getElementsByClassName('column2');
var c3 = document.getElementsByClassName('column3');
var d1 = document.getElementsByClassName('diagonal1');
var d2 = document.getElementsByClassName('diagonal2');


startGame();

btn.addEventListener('click', () => {  
	startGame();
});

function startGame()
	{
	
	clean();
	//variable declarations
		var xChance =0; 
		var oChance =0;
		var totalClicks =0;

	//Event Listeners
	one.addEventListener('click', () =>{
		{
		var value = oneclick();
		one.innerHTML = value ;
		winner();
		}
	},{ once: true });
	two.addEventListener('click', () =>{
		{
		var value = oneclick();
		two.innerHTML = value ;
		winner();
		}
	}, { once: true });
	three.addEventListener('click', () =>{
		{
		var value = oneclick();
		three.innerHTML = value ;
		winner();
		}
	}, { once: true });
	four.addEventListener('click', () =>{
		{
		var value = oneclick();
		four.innerHTML = value ;
		winner();
		}
	}, { once: true });
	five.addEventListener('click', () =>{
		{
		var value = oneclick();
		five.innerHTML = value ;
		winner();
		}
	}, { once: true });
	six.addEventListener('click', () =>{
		{
		var value = oneclick();
		six.innerHTML = value ;
		winner();
		}
	}, { once: true });
	seven.addEventListener('click', () =>{
		{
		var value = oneclick();
		seven.innerHTML = value ;
		winner();
		}
	}, { once: true });
	eight.addEventListener('click', () =>{
		{
		var value = oneclick();
		eight.innerHTML = value ;
		winner();
		}
	}, { once: true });
	nine.addEventListener('click', () =>{
		{
		var value = oneclick();
		nine.innerHTML = value ;
		winner();
		}
	}, { once: true });

	// Click Functions
function oddEven(num){
	if(num % 2 == 0)
		return  'even';
	return 'odd' ;
}

function oneclick(){
	totalClicks+=1;
	if( oddEven(totalClicks) == 'odd' ){
		return 'X';
	}
	else{
		return 'O';
	}
}

//cleaning function

function clean(){
	one.innerHTML =  '';
	two.innerHTML =  '';
	three.innerHTML =  '';
	four.innerHTML =  '';
	five.innerHTML =  '';
	six.innerHTML =  '';
	seven.innerHTML =  '';
	eight.innerHTML =  '';
	nine.innerHTML =  '';		
	result.innerHTML = '';
}

//checker functions
function rowCheck(row){
	if(row[0].textContent == 'X' && row[1].textContent == 'X' && row[2].textContent == 'X') 
	{
		return 'X';
	}
	else if(row[0].textContent == 'O' && row[1].textContent == 'O' && row[2].textContent == 'O')
	{
		return 'O'
	}
}
function columnCheck(column){
	if(column[0].textContent == 'X' && column[1].textContent == 'X' && column[2].textContent == 'X')
	{
		return 'X';
	}
	else if(column[0].textContent == 'O' && column[1].textContent == 'O' && column[2].textContent == 'O'){
		return 'O';
	}
}
function diagonalCheck(diagonal){
	if(diagonal[0].textContent == 'X' && diagonal[1].textContent == 'X' && diagonal[2].textContent == 'X') 
	{
		return 'X'; 
	}
	else if(diagonal[0].textContent == 'O' && diagonal[1].textContent == 'O' && diagonal[2].textContent == 'O'){
		return 'O';
	}
}

// winner checking function

function winner()
{
   if(totalClicks % 6 == 0){
	if(rowCheck(r1) == 'X')
		{	
			box.innerHTML = 'Player 1 has won';
			
		}
	else if(rowCheck(r1) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
			
		}
	else if(rowCheck(r2) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
			
		}
	else if(rowCheck(r2) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
			
		}
	else if(rowCheck(r3) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
			
		}
	else if(rowCheck(r3) == 'O')
		{			
			box.innerHTML  = 'Player 2 has won';
		}
	else if(columnCheck(c1) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
		}
	else if(columnCheck(c1) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
		}
	else if(columnCheck(c2) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
		}
	else if(columnCheck(c2) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
		}
	else if(columnCheck(c3) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
		}
	else if(columnCheck(c3) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
		}
	else if(diagonalCheck(d1) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
		}
	else if(diagonalCheck(d1) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
		}
	else if(diagonalCheck(d2) == 'X')
		{
			box.innerHTML = 'Player 1 has won';
		}
	else if(diagonalCheck(d2) == 'O')
		{
			box.innerHTML  = 'Player 2 has won';
		}
	else
		{
			box.innerHTML = 'Match die';	
		}
	}
	
}

} 

