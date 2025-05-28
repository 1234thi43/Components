import { useState } from "react";
import styles from './MyComponent.module.css'

export const MyComponent = () => {
	const [showText, setShowText] = useState(true);
	const [showRedText, setShowRedText] = useState(true);

	const showTextFunc = () => {
		setShowText(!showText)
	}

	const chengeTextColor = () => {
		setShowRedText(!showRedText)
	}

	const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

	return (
		<>
			{showText && text}
			<button onClick={showTextFunc}>{showText ? 'Скрыть' : 'Показать'} текст</button>
			<button onClick={chengeTextColor}>Изменить цвет текста</button>
		</>
	)
};

