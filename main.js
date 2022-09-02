let calculator = {
	displayValue: '0',
	firstOperand: null,
	operator: null, 
	secondOperand: null
}
function resetCalc(){
	calculator = {
		displayValue: '0',
		firstOperand: null,
		operator: null, 
		secondOperand: null
	}
}
function updateWindow(){
	const wndw = document.querySelector('.window__calc');

	if(calculator.displayValue != Infinity){
		wndw.value = calculator.displayValue;
	}
}
function inputDot(dot){
	if(!calculator.displayValue.includes(dot)){
		calculator.displayValue += dot;
	}
}

function inputNumber(number){
	calculator.displayValue = calculator.displayValue === '0' ? number : calculator.displayValue + number ;
}

const btns = document.querySelector('.buttons');

btns.addEventListener('click', (event) => {
	const target = event.target;

	if(!target.matches('button')){
		return;
	}

	if(target.classList.contains('operator')){
		if (calculator.operator != null && calculator.operator != '='){
			let result = equal();
			calculator.displayValue = String(result);
			updateWindow();
		}


		handleOperator(target.value);
		calculator.firstOperand != null ? inputDigit() : console.log('test');


	}else if(target.classList.contains('all-clear')){
		resetCalc();
		updateWindow();

	}else if(target.classList.contains('decimal')){
		inputDot(target.value);
		updateWindow();
		
	
	}else if(target.classList.contains('equal-sign')){
		let result = equal();
		calculator.displayValue = String(result);
		handleOperator(target.value);

		updateWindow();
	}else{
		inputNumber(target.value);
		updateWindow();
	}


})

function handleOperator(nextOperator){
	const inputValue = parseFloat(calculator.displayValue);

	if(inputValue == Infinity){
		calculator.firstOperand = calculator.firstOperand;
	}else{
		calculator.firstOperand = inputValue;

	}


	calculator.operator = nextOperator;
}

function inputDigit(){
	calculator.displayValue = '0';
}

function equal(){
	calculator.secondOperand = parseFloat(calculator.displayValue);
	if (calculator.operator == '+'){
		return calculator.firstOperand + calculator.secondOperand;
	}

	if(calculator.operator == '-'){
		return calculator.firstOperand - calculator.secondOperand;
	}

	if(calculator.operator == '/'){
		return calculator.firstOperand / calculator.secondOperand;
	}

	if(calculator.operator == '*'){
		return calculator.firstOperand * calculator.secondOperand;

	}
}

window.addEventListener('load', updateWindow());


