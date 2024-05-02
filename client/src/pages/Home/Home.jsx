import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import s from './Home.module.scss'
import { Input, ProductGrid } from '../../components'

const Home = () => {
	return (
		<MainLayout>
			<div className={s.container}>
				<h2 className={s.title}>Каталог</h2>
				<Input placeholder='Поиск' className={s.search} />
			</div>
			<ProductGrid />
		</MainLayout>
	)
}

export default Home
