import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import s from './Cart.module.scss'
import React from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'

const Cart = () => {
	const snap = useSnapshot(state)

	const handleDelete = (id) => {
		state.shopProductArray = snap.shopProductArray.filter(
			(item) => item.id !== id
		)
	}

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<h2 className={s.title}>Корзина</h2>
				{snap.shopProductArray.length ? (
					<>
						<ul className={s.list}>
							{snap.shopProductArray.map((item) => (
								<li key={item.id} className={s.item}>
									<div className={s.product}>
										<img src={item.image} alt={item.name} className={s.image} />
										<div className={s.text}>
											<h3 className={s.name}>{item.name}</h3>
											<p>Порода: {item.breed}</p>
											<p>Пол: {item.gender}</p>
											<p>Расцветка: {item.color}</p>
											<p>
												Дополнительная атрибутика: {item.attributes.join(', ')}
											</p>
										</div>
									</div>
									<button
										className={s.delete}
										onClick={() => handleDelete(item.id)}
									>
										Удалить
									</button>
								</li>
							))}
						</ul>
						<button className={s.btn}>Отправить заявку</button>
					</>
				) : (
					<div className={s.empty}>Корзина пуста</div>
				)}
			</div>
		</LayoutCenter>
	)
}

export default Cart
