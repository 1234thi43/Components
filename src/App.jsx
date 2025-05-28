import { useState, useEffect } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState('')
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
        setSteps(data);
    }, []);

	const handleNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

	 const handleStepClick = (index) => {
        setActiveIndex(index);
    };

    const handleReset = () => {
        setActiveIndex(0);
    };

	const isFirstStep = activeIndex === 0;
    const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>

				<h1>Инструкция по готовке пельменей</h1>

				<div className={styles.steps}>

					<div className={styles['steps-content']}>
                        {steps[activeIndex]?.content}
                    </div>

					<ul className={styles['steps-list']}>
                        {steps.map((step, index) => {

                            const isDone = index < activeIndex;
                            const isActive = index === activeIndex;

                            let itemClasses = `${styles['steps-item']} `;

                            if (isDone) {
                                itemClasses += `${styles.done} `;
                            }

                            if (isActive) {
                                itemClasses += styles.active;
                            }

                            return (
                                <li key={step.id} className={itemClasses.trim()}>
                                    <button className={styles['steps-item-button']} onClick={() => handleStepClick(index)}>
                                        {index + 1}
                                    </button>
									
                                    {step.title}
                                </li>
                            );
                        })}
                    </ul>

					<div className={styles['buttons-container']}>
                        <button className={styles.button} onClick={handlePrev} disabled={isFirstStep}>Назад</button>
                        <button className={styles.button} onClick={isLastStep ? handleReset : handleNext}>
                            {isLastStep ? 'Начать сначала' : 'Далее'}
                        </button>
                    </div>
				</div>
			</div>
		</div>
	);
};
