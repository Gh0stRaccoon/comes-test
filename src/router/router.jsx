import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductDetails from '../pages/productDetails';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/producto/:slug" element={<ProductDetails/>}></Route>
				<Route path="*" element={<ProductDetails/>}></Route>
			</Routes>
		</Router>
	);
}
