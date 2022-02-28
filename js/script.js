var obs=document.querySelectorAll('.obs');
	var din=document.querySelector('.dinosure');
	var gameover=document.querySelector('.game-over');
	var score=0;
	var obsRight=[-10,-Math.floor(Math.random() * 200)-500,-Math.floor(Math.random() * 200)-1000];
	var dinosureBottom=0;
	var flag=true;
	var dinosureSpeed=0;
	var obsLeftSpeed=7;

	console.log(obsLeftSpeed)
	function StartGame(){
		const myInterval = setInterval(myTimer, 1000/60);
		function myTimer() {
			if(flag){
				console.log('False huni time');
				window.addEventListener('keydown',fun);
	
			}
			else{
				console.log("else");
				if(dinosureSpeed==0){
					dinosureSpeed*=-1;
				}
				if(dinosureSpeed==-20){
					console.log('True huni time');
					flag=true;
				}
				dinosureBottom+=dinosureSpeed;
				dinosureSpeed--;
				console.log(dinosureSpeed)
			}
			din.style.bottom=dinosureBottom+"px";
			//obsRight+=obsLeftSpeed;
			obs.forEach((ob,index)=>{
				obsRight[index]+=obsLeftSpeed;
				ob.style.right=obsRight[index]+"px";
	
				if(ob.getBoundingClientRect().right < 0){
					obsRight[index]=-Math.floor(Math.random() * 200)-300;
					if(obsLeftSpeed <13){
						obsLeftSpeed+=2/17;
					}
					score+=1;
				}
				// if(ob.getBoundingClientRect().right < din.getBoundingClientRect().left){
				// 	score+=1;
				// }
		
				if(touching(din.getBoundingClientRect(),ob.getBoundingClientRect())){
					clearInterval(myInterval);
					gameEnd();
				}
			})
			//obs.style.right=obsRight+"px";
			//document.querySelector('.show-score').innerHTML=Math.floor(score/17);
            document.querySelector('.show-score').innerHTML=score;
	
			
		}
	}
	
	function fun(e)
		{
			window.removeEventListener('keydown',fun);

			// console.log(dinosureSpeed);
			dinosureSpeed=20;
			console.log(e.code);
			flag=false;
		}
	function inilzeGame(){
		 score=0;
		 obsRight=[-10,-Math.floor(Math.random() * 200)-500,-Math.floor(Math.random() * 200)-1000];
		 dinosureBottom=0;
		 flag=true;
		 dinosureSpeed=0;
		 obsLeftSpeed=7;
		 gameover.style=`visibility:hidden;`;

	}
	function touching(div1,div2){
	//	let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
	//	let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
	//	return ox && oy;
		if (div1.bottom > div2.top) {
			if ((div1.right-30 >= div2.left && div1.left < div2.right)) {
				return true;
				}
		}else{
			return false;
		}
	}
	function gameEnd(){
		gameover.style=`visibility:visible;`;
		document.querySelector('.game-score').innerHTML=score;
		window.addEventListener('keydown',n);
		function n(e){
			window.removeEventListener('keydown',n);
			if(e.which===32){
				inilzeGame();
				StartGame();
			}
			else{
				gameEnd()
			}
		}


	}
	console.log(obsLeftSpeed)
	window.addEventListener('load', StartGame )
	