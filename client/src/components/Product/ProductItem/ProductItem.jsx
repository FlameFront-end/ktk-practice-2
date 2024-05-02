import React from 'react'
import s from './ProductItem.module.scss'
import { state } from '../../../state/index.js'
import { useSnapshot } from 'valtio'

const ProductItem = ({ product }) => {
	const snap = useSnapshot(state)

	const addToCart = () => {
		state.shopProductArray = [...state.shopProductArray, product]
	}

	const isProductInArray = snap.shopProductArray.some(
		(p) => p.id === product.id
	)

	const handleDelete = () => {
		state.shopProductArray = snap.shopProductArray.filter(
			(item) => item.id !== product.id
		)
	}

	return (
		<div className={s.item}>
			<div className={s.imageWrapper}>
				<img src={product.image} alt={product.name} className={s.image} />
			</div>
			<div className={s.text}>
				<h3 className={s.name}>{product.name}</h3>
				<p className={s.info}>Порода: {product.breed}</p>
				<p className={s.info}>Пол: {product.gender}</p>
				<p className={s.info}>Цвет: {product.color}</p>
				<p className={s.info}>
					Дополнительная атрибутика: {product.attributes.join(', ')}
				</p>
				{isProductInArray ? (
					<button className={s.delete} onClick={handleDelete}>
						Удалить из корзины
					</button>
				) : (
					<button className={s.addToCart} onClick={addToCart}>
						Добавить в корзину
					</button>
				)}
			</div>
		</div>
	)
}

export default ProductItem
