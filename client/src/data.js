import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'
import product4 from './assets/product-4.jpg'
import product5 from './assets/product-5.jpg'

export const products = [
	{
		id: 1,
		name: 'Майя',
		breed: 'Корелла',
		gender: 'Женский',
		color: 'Синий',
		attributes: ['Клетка', 'Игрушка'],
		image: product1
	},
	{
		id: 7,
		name: 'Оскар',
		breed: 'Неразлучник',
		gender: 'Мужской',
		color: 'Зеленый',
		attributes: ['Клетка', 'Песок'],
		image: product2
	},
	{
		id: 3,
		name: 'Белла',
		breed: 'Какаду',
		gender: 'Женский',
		color: 'Бело-коричневый',
		attributes: ['Клетка', 'Корм', 'Ветрозащитный чехол'],
		image: product3
	},
	{
		id: 4,
		name: 'Томми',
		breed: 'Амазонка',
		gender: 'Мужской',
		color: 'Красный',
		attributes: ['Клетка', 'Лестница'],
		image: product4
	},
	{
		id: 5,
		name: 'Джесси',
		breed: 'Гоффин',
		gender: 'Женский',
		color: 'Серебристый',
		attributes: ['Клетка', 'Корм', 'Подставка для воды'],
		image: product5
	}
]

export const allRes = [
	{
		id: 1,
		name: 'Майя',
		breed: 'Корелла',
		gender: 'Женский',
		color: 'Синий',
		attributes: ['Клетка', 'Игрушка'],
		image: product1,
		status: 'Отказ'
	},
	{
		id: 7,
		name: 'Оскар',
		breed: 'Неразлучник',
		gender: 'Мужской',
		color: 'Зеленый',
		attributes: ['Клетка', 'Песок'],
		image: product2,
		status: 'Принято'
	}
]
