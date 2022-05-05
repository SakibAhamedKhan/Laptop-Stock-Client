import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
	const [items, setItems] = useState([]);

	useEffect( () => {
		fetch('laptop_data.json')
		.then(res => res.json())
		.then(data => {
			setItems(data.slice(0,6));
		})
	}, []);
	return (
		<div className='container my-5'>
			<h2 className='text-center'>Inventory {items.length}</h2>
			<div className='inventory_items my-5'>
				{
					items.map(item => <InventoryItem
						key={item._id}
						item={item}
					></InventoryItem>)
				}
			</div>
		</div>
	);
};

export default InventoryItems;