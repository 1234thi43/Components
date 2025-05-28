import { useState } from 'react'

import './App.css'
import styles from './app.module.css'

function App() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')
	const [isValueVaild, setIsValueValid] = useState(false)

	function onInputButtonClick() {
		const promptValue = prompt()

		if (promptValue !== null) {
			if (promptValue.length >= 3) {
				setIsValueValid(true)
				setValue(promptValue)
				setError('')
			}
			else {
				setIsValueValid(false)
				setValue('')
				setError('Введенное значение должно содержать минимум 3 символа')
			}
		}
	}

	function onAddButtonClick() {
		if (value) {
			const updatedList = [...list, { id: Date.now(), value: value }];
            setList(updatedList);
			setValue('')
			setError('')
		}
	}

  return (
    <div className={styles['app']}>

    <h1 className={styles['page-heading']}>Ввод значения</h1>

    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
    </p>

	{error && <div className={styles['error']}>{error}</div>}

    <div className={styles['buttons-container']}>
      <button className={styles['button']} onClick={onInputButtonClick}>Ввести новое</button>
      <button className={styles['button']} onClick={onAddButtonClick} disabled={!isValueVaild}>Добавить в список</button>
    </div>

    <div className={styles['list-container']}>
      <h2 className={styles['list-heading']}>Список:</h2>

	{list.length > 0 ?
		<ul className={styles['list']}>
			{list.map(({id, value}) => <li key={id}>{value}</li>)}
		</ul>
		:
		<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
	}

    </div>
  </div>
  )
}

export default App
