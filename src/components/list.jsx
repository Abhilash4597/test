import React, { useEffect, useState } from 'react';

export default function List() {
  const [data, setData] = useState([]);

  let getData = async () => {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    );
    setData(await response.json());
  };
  console.log(data)

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main-img-container">
        {data.map(item => {
          return (
            <div className="img-container" key={item.id}>
              <img src={item.url} alt="image 1" className="img" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
