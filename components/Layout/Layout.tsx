import React from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const Layout: React.FC = ({ children }) => { //Function Component
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;