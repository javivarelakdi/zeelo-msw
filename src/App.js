import "./App.css"
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(async res => {
      if (res.status !== 200) {
        setData('uh oh error!');
      }
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
}

const App = () => {
  const [itemsList] = useFetch('/items');
 
  return (
    <div>
      { itemsList !== null
        && itemsList.map((item) => {
        return (<div key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>{item.title}</div>
          <div>{item.author}</div>
          <div>{item.price}</div>
        </div>)
      })}
    </div> 
  );
}

export default App;
