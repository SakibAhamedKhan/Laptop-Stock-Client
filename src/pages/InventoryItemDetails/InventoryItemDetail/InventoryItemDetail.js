import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import './InventoryItemDetail.css'

const InventoryItemDetail = ({item, handleRefresh}) => {
	const {_id, name, description, image, price, quantity, supplier} = item;
	// const quantityShow = parseInt(quantity);
	const [quantityShow, setQuantityShow] = useState(parseInt(quantity));
	const [showLoading, setShowLoading] = useState(false);

	
	const handleDelivered = () => {
		setShowLoading(true);
		let quantityInt = parseInt(quantity);
		if(quantityInt >= 1){
			quantityInt--;
			setQuantityShow(quantityInt);
			const doc = {
				quantity: ''+quantityInt
			}
			fetch(`http://localhost:5000/updateQuantity/${_id}`, {
				method:'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(doc)
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				handleRefresh();
				setShowLoading(false);
			})
		}
		
	}
	return (
		<div className='container InventoryItemDetail mx-auto d-flex flex-column justify-content-center align-items-center'>
			<img height={300} src={image} alt="" />
			<h4>{name}</h4>
			<p className='my-2'><span className='fw-bold'>Product ID:</span> {_id}</p>
			<p className='my-2'><span className='fw-bold'>Supplier:</span> {supplier}</p>
			<h5 className='my-2'>Price: ${price}</h5>
			<h5 className='d-flex'>Qunatity: <span className='ms-2'>{showLoading? <Loading></Loading>: `${quantityShow}`}</span></h5>
			{
				quantity === '0' ?
				<button className='btn btn-warning my-2' disabled>Out Of Stock</button>
				:
				<button onClick={handleDelivered} className='btn btn-success my-2'>Delivered</button>
			}
			<p style={{textAlign:'justify'}}><span className='fw-bold'>Details:</span> {description}</p>
		</div>
	);
};

export default InventoryItemDetail;