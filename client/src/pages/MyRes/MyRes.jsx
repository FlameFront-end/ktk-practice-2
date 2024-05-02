import s from './MyRes.module.scss'
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import { allRes } from '../../data.js'

const MyRes = () => {
	const getClassName = (status) => {
		switch (status) {
			case 'Принято':
				return s.green
			case 'Отказ':
				return s.red
			default:
				return ''
		}
	}

	return (
		<MainLayout>
			<div className={s.wrapper}>
				<h2 className={s.title}>Мои заявки</h2>
				<ul className={s.list}>
					{allRes.map((item) => (
						<li key={item.id} className={s.item}>
							<img src={item.image} alt={item.name} className={s.image} />
							<div className={s.text}>
								<h3 className={s.name}>{item.name}</h3>
								<p>Порода: {item.breed}</p>
								<p>Пол: {item.gender}</p>
								<p>Расцветка: {item.color}</p>
								<p>Дополнительная атрибутика: {item.attributes.join(', ')}</p>
								<p className={`${s.status} ${getClassName(item.status)}`}>
									{item.status}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</MainLayout>
	)
}

export default MyRes
