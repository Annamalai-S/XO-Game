//Dom Access
var btn = document.getElementById('buttons');
var xbtn = document.getElementById('x');
var obtn = document.getElementById('o');
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

btn.style.visibility = 'hidden';
startGame();

btn.addEventListener('click', () => {  
	startGame();
});

function startGame()
{
	//variable declarations
	var userChance =0; 
	var computerChance =0;
	var totalClicks =0;
	var completedIndex =[];
	var uncompleted = [one, two, three, four, five, six, seven, eight, nine];
	var grids = [r1, r2, r3, c1, c2, c3, d1, d2];

	var selectedItem = grids[(Math.floor( Math.random() * 8) )];
	var userChoice ;
	var computerChoice;
	var result;
	var	array = grids[random(8)];
	var	children = [];
	for(i=0;i<3;i++)
	{
		children[i] = array[i] ;
	}

	clean();

	con.style.visibility = 'hidden';
	xbtn.style.visibility = 'visible';
	obtn.style.visibility = 'visible';

	xbtn.addEventListener('click',() => 
		{userChoice = 'X'; computerChoice = 'O'; con.style.visibility = 'visible';xbtn.style.visibility = 'hidden';
	obtn.style.visibility = 'hidden'; btn.style.visibility = 'hidden';}, {once:true});
	
	obtn.addEventListener('click',() => 
		{userChoice = 'O'; computerChoice = 'X'; con.style.visibility = 'visible';xbtn.style.visibility = 'hidden';
	obtn.style.visibility = 'hidden'; btn.style.visibility = 'hidden';}, {once:true});
	
	//Event Listeners
	one.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		one.innerHTML = userChoice;
		remove(one);
		autoplay();
		}
	},{ once: true });
	two.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		two.innerHTML = userChoice ;
		remove(two);
		autoplay();
		}
	}, { once: true });
	three.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		three.innerHTML = userChoice ;
		remove(three);
		autoplay();
		}
	}, { once: true });
	four.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		four.innerHTML = userChoice ;
		remove(four);
		autoplay();
		}
	}, { once: true });
	five.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		five.innerHTML = userChoice ;
		remove(five);
		autoplay();
		}
	}, { once: true });
	six.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		six.innerHTML = userChoice ;
		remove(six);
		autoplay();
		}
	}, { once: true });
	seven.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		seven.innerHTML = userChoice;
		remove(seven);
		autoplay();
		}
	}, { once: true });
	eight.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		eight.innerHTML = userChoice ;
		remove(eight);
		autoplay();
		}
	}, { once: true });
	nine.addEventListener('click', () =>{
		{
		totalClicks++;
		winner();
		nine.innerHTML = userChoice ;
		remove(nine);
		autoplay();
		}
	}, { once: true });


// functions
	function random(upper){
		return (Math.floor( Math.random() * upper) );
	}

	// Click Functions
	function oddEven(num){
		if(num % 2 == 0)
			return  'even';
		return 'odd' ;
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
		box.innerHTML = '';
	}

	//Autoplay functions

	function remove(child1){
		var index = uncompleted.indexOf(child1);
		uncompleted.splice(index,1);
	}

	function presentIn(number, array){
		var flag = false;
		for(i = 0; i < array.length; i++){
			if(array[i] == number){
				flag = true;
			}
		}
		if(flag == true){
			return true;
		}
		return false;
	}

	function childAppender()
	{
		var num = Math.floor( Math.random() * 3) ;
		//console.log('num: ',num);
		if(presentIn(num, completedIndex)){
			childAppender();
		}
		else 
		{
			console.log('completedIndex:',completedIndex);
			completedIndex.push(num);
			child = children[num];
			if(child.textContent != ''){
				var length = uncompleted.length;
				child  = uncompleted[ Math.floor( Math.random() * length) ];
			}
		}
	}
	function autoplay()
	{
		totalClicks++;
		winner();
		childAppender();
		console.log(child);
		child.textContent = computerChoice;
		remove(child);
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
	  if(totalClicks%6== 0)
	  {
		if(rowCheck(r1) == 'X')
			{	
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(rowCheck(r1) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(rowCheck(r2) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(rowCheck(r2) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(rowCheck(r3) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(rowCheck(r3) == 'O')
			{			
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c1) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c1) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c2) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c2) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c3) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(columnCheck(c3) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(diagonalCheck(d1) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(diagonalCheck(d1) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(diagonalCheck(d2) == 'X')
			{
				box.innerHTML = 'Player X has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else if(diagonalCheck(d2) == 'O')
			{
				box.innerHTML = 'Player O has won';
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			}
		else
			{
				box.innerHTML = 'Match Die';	
				btn.style.visibility = 'visible';
				console.log(totalClicks);
			} 
		}
	}
}

