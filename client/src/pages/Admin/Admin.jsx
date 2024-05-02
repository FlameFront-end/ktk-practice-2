import s from './Admin.module.scss'
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import { allRes } from '../../data.js'

const Admin = () => {
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
				<h2 className={s.title}>Все заявки</h2>
				<ul className={s.list}>
					{allRes.map((item) => (
						<li key={item.id} className={s.item}>
							<div className={s.order}>
								<img src={item.image} alt={item.name} className={s.image} />
								<div className={s.text}>
									<h3>Заказал: Иванов Иван Иванович</h3>
									<p>
										<a href=''>7(600)213-30-53</a>
									</p>
									<h3 className={s.productName}>{item.name}</h3>
									<p>Порода: {item.breed}</p>
									<p>Пол: {item.gender}</p>
									<p>Расцветка: {item.color}</p>
									<p>Дополнительная атрибутика: {item.attributes.join(', ')}</p>
									<p className={getClassName(item.status)}>{item.status}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</MainLayout>
	)
}

export default Admin
