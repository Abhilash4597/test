import React, { useEffect, useState } from 'react';

export default function List({data}) {

  const [search, setSearch] = useState('');
  const [view, setView] = useState(true);

  // const [data, setData] = useState([]);
  // let getData = async () => {
  //   let response = await fetch(
  //     'https://jsonplaceholder.typicode.com/albums/1/photos'
  //   );
  //   setData(await response.json());
  // };
  // console.log(data)

  // useEffect(() => {
  //   getData();
  // }, []);
  // let btn = document.getElementsByClassName('btn');
  // console.log(btn);
  // console.log(btn.innerText);

  // # For changing list to grid and vice versa
  function handleClick() {
    setView(!view);
  }

  return (
    <>
      <div className="search-container">
        <form action="">
          <input
            type="text"
            placeholder="Search"
            className="search-sort"
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <div className="select-opt">
          <form action="#">
            <label htmlFor="select"></label>
            <select name="Sort" id="select" className="search-sort">
              <option value="">Select</option>
              <option value="Size">Image-Size</option>
              <option value="Name">Name</option>
            </select>
          </form>
        </div>
        <button className="btn search-sort" onClick={handleClick}>
          {view ? 'List' : 'Grid'}
        </button>
      </div>

      {view ? (
        <div className="grid-img-container">
          {data
            .filter(data => data.title.toLowerCase().includes(search))
            .map(item => {
              return (
                <div className="grid-list-container" key={item.id}>
                  <img src={item.img} alt="image 1" className="grid-img" />
                  <h2>{item.title}</h2>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="list-img-container">
          {data
            .filter(data => data.title.toLowerCase().includes(search))
            .map(item => {
              return (
                <div className="list-container" key={item.id}>
                  <img src={item.img} alt="image 1" className="list-img" />
                  <h2>{item.title}</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati omnis dolores quia culpa rerum, harum, aliquid
                    magnam perspiciatis sit explicabo repudiandae vero
                    recusandae! Cum, sapiente! In enim dignissimos eum eligendi.
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
