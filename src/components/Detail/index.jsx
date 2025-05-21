import { useState, useEffect } from 'react';

export const Detail = ({ day }) => {
  const [items, setItems] = useState(null);
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://nakupy.czechitas.dev/api/${day}`);
      const json = await response.json();
      setItems(json);
    }
  
    if (day !== null) {
      fetchItems();
    }
  }, [day]);

  if (day === null || items === null) {
    return null;
  }
  
  return (
    <div className='box'>
      {items.map((item) => 
        <div className="container" key={item.id}>{item.product}</div>
      )}
    </div>
  );
};
