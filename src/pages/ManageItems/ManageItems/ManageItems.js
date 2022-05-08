import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headers from '../../Shared/Headers/Headers';
import Loading from '../../Shared/Loading/Loading';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
	const navigate = useNavigate();
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
			<Headers ></Headers>
			<div style={{paddingTop:'70px'}} className='container my-4'>
				<button onClick={ () =>{
					navigate('/addItem');
				}} className='update-stock-btn mb-2 d-block mx-auto'>Add new item</button>
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