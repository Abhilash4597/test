import React, { useEffect, useState } from 'react';

export default function List() {

  const [search, setSearch] = useState('');
  const [view, setView] = useState(false);
  const [text, setText] = useState(true);

  const data = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg',
      title: 'Elephant trunk tusks',
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg',
      title: 'Owl ,bird of prey.',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__340.jpg',
      title: 'Iceland arctic fox',
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__340.jpg',
      title: 'Parrot yellow macaw',
    },
    {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512__340.jpg',
      title: 'Fox sleeping resting',
    },
    {
      id: 6,
      img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg',
      title: 'Flowers butterfly',
    },
    {
      id: 7,
      img: 'https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431__340.jpg',
      title: 'Bird branch perched',
    },
    {
      id: 8,
      img: 'https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467__340.jpg',
      title: 'Lion head face mane',
    },
    {
      id: 9,
      img: 'https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247__340.jpg',
      title: 'Sea turtle diving',
    },
    {
      id: 10,
      img: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Cat young animal kitten',
    },
    {
      id: 11,
      img: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg',
      title: 'Dove bird flight wings.',
    },
    {
      id: 12,
      img: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg',
      title: 'Dolphin sea ocean',
    },
    {
      id: 13,
      img: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg',
      title: 'Kingfisher bird',
    },
    {
      id: 14,
      img: 'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__340.jpg',
      title: 'Bird fluttering berries',
    },
    {
      id: 15,
      img: 'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658__340.jpg',
      title: 'Fox wildlife red fox',
    },
    {
      id: 16,
      img: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg',
      title: 'Fox nature animals',
    },
    {
      id: 17,
      img: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__340.jpg',
      title: 'Cat portrait',
    },
    {
      id: 18,
      img: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515__340.jpg',
      title: 'Lion roar africa',
    },
    {
      id: 19,
      img: 'https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436__340.jpg',
      title: 'Bird robin spring',
    },
    {
      id: 20,
      img: 'https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228__340.jpg',
      title: 'Hedgehog pet mammal',
    },
    {
      id: 21,
      img: 'https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052__340.jpg',
      title: 'Swan water white',
    },
    {
      id: 22,
      img: 'https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009__340.jpg',
      title: 'Playing Elephant',
    },
    {
      id: 23,
      img: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg',
      title: 'Puppy pet canine dog',
    },
    {
      id: 24,
      img: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888__340.jpg',
      title: 'Tiger swamp big cat',
    },
    {
      id: 25,
      img: 'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg',
      title: 'African lion wild cat',
    },
    {
      id: 26,
      img: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509__340.jpg',
      title: 'Leopard safari mammal',
    },
    {
      id: 27,
      img: 'https://cdn.pixabay.com/photo/2015/10/12/15/46/animal-984573__340.jpg',
      title: 'Mammal fallow deer stag',
    },
    {
      id: 28,
      img: 'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035__340.jpg',
      title: 'Horses fauna nature',
    },
    {
      id: 29,
      img: 'https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777__340.jpg',
      title: 'Elephant black-and-white',
    },
    {
      id: 30,
      img: 'https://cdn.pixabay.com/photo/2016/08/14/17/04/ladybugs-1593406__340.jpg',
      title: 'Ladybugs insects pair',
    },
  ];

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
    setText(!text);
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
              <option value="">
                Select
              </option>
              <option value="Size">Image-Size</option>
              <option value="Name">Name</option>
            </select>
          </form>
        </div>
        <button className="btn search-sort" onClick={handleClick}>
          {text ? 'Grid' : 'List'}
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
