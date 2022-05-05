import React from 'react';
import Headers from '../../Shared/Headers/Headers';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css'

const Home = () => {
	return (
		<div>
			<Headers></Headers>
			<Banner></Banner>
			<InventoryItems></InventoryItems>
		</div>
	);
};

export default Home;