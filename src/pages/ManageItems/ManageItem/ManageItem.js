import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = ({item}) => {
	const navigate = useNavigate();

	return (
		<div className='manage-item'>
			<div className='manage-item-part1'>
				<img src={item.image} height={80} alt="" />
				<h5>{item.name}</h5>
				<p className='m-0'>Price: {item.price}</p>
				<p className='m-0'>Quantity: {item.quantity}</p>
			</div>
			<div className='manage-item-part2'>
				<button onClick={() => {
					navigate(`/inventory/${item._id}`)
				}} className='update-stock-btn mx-2'>Update Stock</button>
				<button className='update-stock-btn bg-danger mx-2'>Delete</button>
			</div>
		</div>
	);
};

export default ManageItem;