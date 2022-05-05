import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({item}) => {
	return (
		<div className='inventory_item container'>
			<div className='inventory_item_part1'>
				<img height={150} src={item.image} alt="" />
			</div>
			<div className='inventory_item_part2'>
				<h4>{item.name}</h4>
				<p>Price: ${item.price}</p>
				<p>Quantity: {item.quantity}</p>
				<p>Supplier: {item.supplier}</p>
				<button className='update-stock-btn d-block ms-auto'>Update Stock</button>
			</div>
		</div>
	);
};

export default InventoryItem;