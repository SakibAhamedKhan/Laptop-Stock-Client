import React, { useEffect, useState } from 'react';
import Headers from '../../Shared/Headers/Headers';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
	const [items, setItems] = useState([]);
	const [refresh, setRefresh] = useState('');

	useEffect(()=> {
		fetch('http://localhost:5000/inventoryItem')
		.then(res => res.json())
		.then(data => setItems(data));
	},[refresh])
	return (
		<div>
			<Headers></Headers>
			<div className='container my-5'>
				<div className='manage-items'>
					{
						items.map(item => <ManageItem
							key={item._id}
							item={item}
						></ManageItem>)
					}
				</div>

			</div>
		</div>
	);
};

export default ManageItems;