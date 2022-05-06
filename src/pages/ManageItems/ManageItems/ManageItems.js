import React, { useEffect, useState } from 'react';
import Headers from '../../Shared/Headers/Headers';
import Loading from '../../Shared/Loading/Loading';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
	const [items, setItems] = useState([]);
	const [refresh, setRefresh] = useState('');

	useEffect(()=> {
		fetch('http://localhost:5000/inventoryItem')
		.then(res => res.json())
		.then(data => setItems(data));
	},[refresh])

	const handleRefresh = () => {
		setRefresh(new Date().getTime());
	}
	return (
		<div>
			<Headers></Headers>
			<div className='container my-5'>
				{
					items.length===0?
					<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
						<Loading></Loading>
					</div>
					:
					<div className='manage-items'>
						{
							items.map(item => <ManageItem
								key={item._id}
								item={item}
								handleRefresh={handleRefresh}
							></ManageItem>)
						}
					</div>
				}

			</div>
		</div>
	);
};

export default ManageItems;