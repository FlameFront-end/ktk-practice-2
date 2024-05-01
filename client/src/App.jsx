import AppRoutes from './routes/AppRoutes.jsx'
import { SnackbarProvider } from 'notistack'

function App() {
	return (
		<SnackbarProvider
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			maxSnack={2}
			autoHideDuration={2000}
		>
			<AppRoutes />
		</SnackbarProvider>
	)
}

export default App
