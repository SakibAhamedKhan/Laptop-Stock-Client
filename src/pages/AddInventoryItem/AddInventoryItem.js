import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Headers from '../Shared/Headers/Headers';
import './AddInventoryItem.css'

const AddInventoryItem = () => {
	const [user, loading, error] = useAuthState(auth);


	const handleAddItemSubmit = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const price = event.target.price.value;
		const quantity = event.target.quantity.value;
		const image = event.target.image.value;
		const supplier = event.target.supplier.value;
		const description = event.target.description.value;
		// console.log(user?.email,name, price,quantity, image, supplier, description);
		const doc ={
			email: user.email,
			name,
			price,
			quantity,
			image,
			supplier,
			description
		};
		fetch('http://localhost:5000/addItem', {
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify(doc)
		})
		.then(res => res.json())
		.then(data => toast.success('Successfully Item Added'));

		event.target.reset();
	}
	return (
		<div>
			<Headers></Headers>
			<div className='container addInventoryItem mx-auto'>
				<h3 className='text-center'>Add Inventory Item</h3>
				<form onSubmit={handleAddItemSubmit} className='additem-form'>
					<input type="email" name='email' placeholder='Email of added user' value={user?.email} required disabled/>
					<input type="text" name='name' placeholder='Name'  required/>
					<input type="number" name='price' placeholder='Price'  required/>
					<input type="number" name='quantity' placeholder='Quantity' required />
					<input type="text" name='image' placeholder='Image Link'  required/>
					<input type="text" name='supplier' placeholder='Supplier'  required/>
					<textarea name="description" id="" cols="30" rows="10" required></textarea>
					<button  type='submit' className='update-stock-btn' >Submit Item</button>
				</form>

			</div>
		</div>
	);
};

export default AddInventoryItem;