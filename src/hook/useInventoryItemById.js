import { useEffect, useState } from "react"

const useInventoryItemById = (id) =>{
	const [item, setItem] = useState({});

	useEffect(()=> {
		fetch(`http://localhost:5000/inventoryItem/${id}`)
		.then(res => res.json())
		.then(data => setItem(data));
	},[]);

	return [item];
}

export default useInventoryItemById;