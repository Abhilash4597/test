import React, { useEffect, useState } from 'react';

export default function List() {
  // const [data, setData] = useState([]);

  const data = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/id/1364063831/photo/group-of-magellanic-penguins-gathered-on-a-sandy-beach-on-a-sunny-summer-day.jpg?b=1&s=170667a&w=0&k=20&c=yXuOViRAfCqeXkvtY6DemNZ8VPj1Q3UykIp0JGYRSXE=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 2,
      img: 'https://media.istockphoto.com/id/1347086252/photo/common-chimpanzee.jpg?b=1&s=170667a&w=0&k=20&c=pgUG5TjMBs91vxQPy0stP4RSrVXxMDrGS37-DAWblng=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 3,
      img: 'https://media.istockphoto.com/id/1438188251/photo/white-tailed-eagle.jpg?b=1&s=170667a&w=0&k=20&c=Dra63t9MQ3Dq4SgyUqh_qqQ6gOUyCZYhBT6I1x8xA8o=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 4,
      img: 'https://media.istockphoto.com/id/1420776083/photo/arranging-cut-flowers-from-late-summer-in-the-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=9qV-7sVEOzgLmvzoZs_HmJkQW0e1_Nclm1-EZkICI_8=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 5,
      img: 'https://media.istockphoto.com/id/1367026054/photo/three-white-faced-capuchin-monkey-baby-in-tree-tops-at-cahuita-national-park-costa-rica.jpg?b=1&s=170667a&w=0&k=20&c=f-pX_V8Ut6FRMHCtgYHrZ7Ng6_pQSQRZgZBWYPFYwCI=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 6,
      img: 'https://media.istockphoto.com/id/1420776083/photo/arranging-cut-flowers-from-late-summer-in-the-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=9qV-7sVEOzgLmvzoZs_HmJkQW0e1_Nclm1-EZkICI_8=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 7,
      img: 'https://media.istockphoto.com/id/1343808675/photo/eagle-hunter-in-traditional-costume-with-eagle-in-the-mountains-of-central-asia.jpg?b=1&s=170667a&w=0&k=20&c=5RdE_iOc2A3zLT9rPqjJHnq2HfNRj2C5oU22m0kxexo=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 8,
      img: 'https://media.istockphoto.com/id/1409500140/photo/ants-biting-leaf-to-build-nest-animal-behavior.jpg?b=1&s=170667a&w=0&k=20&c=ytIOWUfd4jwTQvhXOf-0XM6ipXlZCpUMc-P2Nv8EfeM=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 9,
      img: 'https://media.istockphoto.com/id/1409785345/photo/group-of-wildlife-safari-zoo-animals-together-isolated.jpg?b=1&s=170667a&w=0&k=20&c=aTlab7ZQgES0eTWt_LLaGAGcspB37jgI1VBJ77YVCFY=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 10,
      img: 'https://media.istockphoto.com/id/1399426331/photo/lovable-pretty-brown-puppy-and-toothbrush-close-up.jpg?b=1&s=170667a&w=0&k=20&c=ztKhKo01Ck9Meoog_Q3GJGKuInG5QoM7gz7xQlcT6JQ=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 11,
      img: 'https://media.istockphoto.com/id/1347494018/photo/funny-friends-cute-cat-and-corgi-dog-are-lying-on-a-white-bed-together.jpg?b=1&s=170667a&w=0&k=20&c=C185xwRzyc3xu1iv1sGn4_WxdJuqp8tCWYk90aN8QgQ=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 12,
      img: 'https://media.istockphoto.com/id/1444228455/photo/california-sea-lion-in-the-pacific-ocean-california-united-states.jpg?b=1&s=170667a&w=0&k=20&c=5pzxqrOJEAfQGxP-mxh_9ZXRqhQ5ke-mtrBZsN3BrsQ=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 13,
      img: 'https://media.istockphoto.com/id/1367631464/photo/colorful-tucan.jpg?b=1&s=170667a&w=0&k=20&c=Uh9B_sTVcsJDkAVjmSQlbI_HqpJYxujcwefa1afOEbg=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 14,
      img: 'https://media.istockphoto.com/id/1353816537/photo/hamster-and-rabbit-sitting-side-by-side-animal-friendship-concept.jpg?b=1&s=170667a&w=0&k=20&c=ZFp5idNco5MWwW-3by7avN5rGqt4lTYoRW5hrQHav40=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 15,
      img: 'https://media.istockphoto.com/id/1424258672/photo/amazing-close-up-of-a-huge-elephant-moving-in-the-waters-of-an-african-river.jpg?b=1&s=170667a&w=0&k=20&c=hDnfiHMxz3rrvZnWCJ-8X7A-dhY2iWTSGTaSGTrpLRw=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 16,
      img: 'https://images.unsplash.com/photo-1623944864235-db595bfccaad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 17,
      img: 'https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 18,
      img: 'https://images.unsplash.com/photo-1573739711422-68a9d0aa7d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 19,
      img: 'https://images.unsplash.com/photo-1613318282885-2168d00a8d2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
    {
      id: 20,
      img: 'https://media.istockphoto.com/id/1361306507/photo/funny-cat-looking-shocked-with-mouth-open.jpg?b=1&s=170667a&w=0&k=20&c=Uisem9IETWVwUcv7lWUUYD3sN194xifoUQniFwH5WDI=',
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta!',
    },
  ];

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

  return (
    <>
      <div className="main-img-container">
        {data.map(item => {
          return (
            <div className="img-container" key={item.id}>
              <img src={item.img} alt="image 1" className="img" />
              <p>
                {item.id} {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
