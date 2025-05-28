import { useState } from 'react';
import styles from './Calculator.module.css';

export const App = () => {
	const [displayValue, setDisplayValue] = useState('');
	const [firstNumber, setFirstNumber] = useState(null);
	const [operation, setOperation] = useState(null);
	const [isResult, setIsResult] = useState(false);

	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// const numbers = [];
	// for (let i = 0; i < 10; i++) {
	// numbers.push(i);
	// }

	const operators = ['+', '-', '=', 'C'];

	const handleNumberClick = (number) => {
		if (isResult) {
		setDisplayValue(number.toString());
		setIsResult(false);
		} else {
		setDisplayValue(displayValue + number);
		}
	};

  	const handleOperatorClick = (operator) => {
		if (operator === 'C') {
		setDisplayValue('');
		setFirstNumber(null);
		setOperation(null);
		setIsResult(false);
		} else if (operator === '=') {
		if (firstNumber !== null && operation) {
			const secondNumber = parseInt(displayValue);
			let result;
			if (operation === '+') {
			result = firstNumber + secondNumber;
			} else if (operation === '-') {
			result = firstNumber - secondNumber;
			}
			setDisplayValue(result.toString());
			setFirstNumber(result);
			setOperation(null);
			setIsResult(true);
		}
		} else {
		if (firstNumber === null) {
			setFirstNumber(parseInt(displayValue));
		}
		setOperation(operator);
		setDisplayValue('');
		setIsResult(false);
    	}
  	};

  	return (
    	<div className={styles.calculator}>
      		<div className={styles.display}>
        		<div className={isResult ? styles.result : styles.input}>
          		{displayValue || '0'}
        		</div>
      		</div>
      		<div className={styles.buttons}>
			{numbers.map((number) => (
				<button key={number} className={styles.button} onClick={() => handleNumberClick(number)}>
					{number}
				</button>
        	))}
        	{operators.map((operator) => (
				<button key={operator} className={styles.operator} onClick={() => handleOperatorClick(operator)}>
					{operator}
				</button>
        	))}
      		</div>
    	</div>
  	);
};
