import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
	const [items, setItems] = useState([]);

	useEffect( () => {
		fetch('http://localhost:5000/inventoryItem')
		.then(res => res.json())
		.then(data => {
			setItems(data.slice(0,6));
		})
	}, []);
	
	return (
		<div className='container my-5'>
			<h2 className='text-center'>Inventory Items</h2>
			{
				items.length===0 ?

				<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
					<Loading></Loading>
				</div>
				:

				<div className='inventory_items my-5'>
				{
					items.map(item => <InventoryItem
						key={item._id}
						item={item}
					></InventoryItem>)
				}
				</div>
			}
			
		</div>
	);
};

export default InventoryItems;