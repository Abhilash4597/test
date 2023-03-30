import React, { useEffect, useState } from 'react';

export default function List() {
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

  const data = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/id/1430842114/photo/best-friends.jpg?b=1&s=170667a&w=0&k=20&c=kG5Vr8aDc9KZUMSISMIus6HxWJQx7rQYttGPJ2CbvkU=',
      title: 'Dog lives are too short. Their only fault, really.',
    },
    {
      id: 2,
      img: 'https://media.istockphoto.com/id/1367150296/photo/happy-young-african-american-man-petting-his-dog-outdoors-in-nature.jpg?b=1&s=170667a&w=0&k=20&c=yLiBCLy3VLpPjGm_Rn3N2g9FDwj1osQhV8u97b6E-do=',
      title:
        'A dog is the only thing that can mend a crack in your broken heart.',
    },
    {
      id: 3,
      img: 'https://media.istockphoto.com/id/1349321709/photo/full-length-shot-of-an-adorable-dog-lying-on-the-sofa-at-home.jpg?b=1&s=170667a&w=0&k=20&c=QNW8aqRyNqrKDxmWPgA29775-lML_lJOH5YYl9vGBxk=',
      title: 'The average dog is a nicer person than the average person.',
    },
    {
      id: 4,
      img: 'https://media.istockphoto.com/id/1349321709/photo/full-length-shot-of-an-adorable-dog-lying-on-the-sofa-at-home.jpg?b=1&s=170667a&w=0&k=20&c=QNW8aqRyNqrKDxmWPgA29775-lML_lJOH5YYl9vGBxk=',
      title: 'The dog is a gentleman; I hope to go to his heaven not mans.',
    },
    {
      id: 5,
      img: 'https://media.istockphoto.com/id/1430187772/photo/alert-border-collie-and-obedience-training.jpg?b=1&s=170667a&w=0&k=20&c=DFD4NDeLTa0v2P7Bsr6sRuGJohnLb7HmRib8lt7crIs=',
      title: 'Be the person your dog thinks you are.',
    },
    {
      id: 6,
      img: 'https://media.istockphoto.com/id/1415809177/photo/boxer-puppy-relaxing-on-the-sofa.jpg?b=1&s=170667a&w=0&k=20&c=gNth1Bxjwy1U0Szj5yYNuTMgFNju_TasS7o7mRoMR5A=',
      title:
        'If a man aspires towards a righteous life, his first act of abstinence is from injury to animals.',
    },
    {
      id: 7,
      img: 'https://media.istockphoto.com/id/1398466630/photo/bearded-man-comfortably-sitting-on-a-coach-reading-a-book-and-holding-his-dog.jpg?b=1&s=170667a&w=0&k=20&c=KBTKXgPcQybX3-4JOxLIaFrgaiP_TKhiAOeRqLzOVpw=',
      title:
        'If I could be half the person my dog is, I d be twice the human I am.',
    },
    {
      id: 8,
      img: 'https://media.istockphoto.com/id/1410966682/photo/four-dogs-in-the-forest.jpg?b=1&s=170667a&w=0&k=20&c=b0rENjSTTS7sOlYIzGYGNBPIJgRmefgKoi4SQwwY3cQ=',
      title: 'Dogs leave pawprints on our hearts.',
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1545218553-cdb549f13f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'No one appreciates the very special genius of your conversation as a dog does.',
    },
    {
      id: 10,
      img: 'https://media.istockphoto.com/id/1408603697/photo/cute-smart-funny-puppy-dog-border-collie-holding-toothbrush-in-mouth-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=v3ChCkiIRp4-dXkO5rJhaaa_Lt148R_FR0mNSzxrubc=',
      title:
        'Does not the gratitude of the dog put to shame any man who is ungrateful to his benefactors?',
    },
    {
      id: 11,
      img: 'https://media.istockphoto.com/id/1445008380/photo/the-veterinarian-doctor-treating-checking-on-dog-at-vet-clinic.jpg?b=1&s=170667a&w=0&k=20&c=PMHt4LS_6aMZfzmcOYVJb9tkGjrrIGq59d-jQO4Kuas=',
      title: 'Even the tiniest Poodle or Chihuahua is still a wolf at heart.',
    },
    {
      id: 12,
      img: 'https://media.istockphoto.com/id/1435010849/photo/labrador-retriever-dog-panting-and-ginger-cat-sitting-in-front-of-dark-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=Rr2nJh68FjKPZKvB6VPwnCHT4QEOZR9g_Xh7OxbMIcc=',
      title:
        'The old saw about old dogs and new tricks only applies to certain people.',
    },
    {
      id: 13,
      img: 'https://media.istockphoto.com/id/1435010849/photo/labrador-retriever-dog-panting-and-ginger-cat-sitting-in-front-of-dark-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=Rr2nJh68FjKPZKvB6VPwnCHT4QEOZR9g_Xh7OxbMIcc=',
      title:
        'Outside of a dog, a book is a mans best friend. Inside of a dog its too dark to read.',
    },
    {
      id: 14,
      img: 'https://media.istockphoto.com/id/1366305001/photo/a-dog-in-a-bunny-costume-sitting-on-a-pink-background-golden-retriever-celebrating-easter-and.jpg?b=1&s=170667a&w=0&k=20&c=und11hpyMyUEsDFn77MsCpCf--YAeBhIN0YCNmELmdc=',
      title:
        'Before you get a dog, you can’t quite imagine what living with one might be like; afterward, you can’t imagine living any other way.',
    },
    {
      id: 15,
      img: 'https://media.istockphoto.com/id/1387718984/photo/dachshund-dog-riding-in-car-and-looking-out-from-car-window-happy-dog-enjoying-life-dog.jpg?b=1&s=170667a&w=0&k=20&c=JKPWeo0O5HC0kQTHC3Ux_PEG3K64oT-AcLg6TP5pMFQ=',
      title:
        'Having a dog will bless you with many of the happiest days of your life, and one of the worst.',
    },
    {
      id: 16,
      img: 'https://media.istockphoto.com/id/1402891368/photo/dachshund-wearing-a-blue-dog-collar-standing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=epqGpql0Lb2SZ_pEEMj8hdtD44Y68UEGiS4oizyFx8c=',
      title:
        'No animal I know of can consistently be more of a friend and companion than a dog.',
    },
    {
      id: 17,
      img: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'Once you have had a wonderful dog, a life without one is a life diminished.',
    },
    {
      id: 18,
      img: 'https://images.unsplash.com/photo-1598875706250-21faaf804361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'The dog was created specially for children. He is the god of frolic.',
    },
    {
      id: 19,
      img: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Home is where the dog runs to greet you.',
    },
    {
      id: 20,
      img: 'https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:
        'You think dogs will not be in heaven? I tell you; they will be there long before any of us.',
    },
    {
      id: 21,
      img: 'https://images.unsplash.com/photo-1605197161470-d0261cac6767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:
        'A dog can snap you out of any kind of bad mood that you re in faster than you can think of.',
    },
    {
      id: 22,
      img: 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:
        'The bond with a true dog is as lasting as the ties of this earth will ever be.',
    },
    {
      id: 23,
      img: 'https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title:
        'People love dogs. You can never go wrong adding a dog to the story.',
    },
    {
      id: 24,
      img: 'https://images.unsplash.com/photo-1616781296073-65d3f087de41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title:
        'It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them.',
    },
    {
      id: 25,
      img: 'https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Why does watching a dog be a dog fill one with happiness?',
    },
  ];

  const [search, setSearch] = useState('');

  // console.log(data.filter(user => user.title.toLowerCase().includes('k')));

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
          <select name="Sort" id="select" className="search-sort">
            <option value="">Select</option>
            <option value="Size">Image-Size</option>
            <option value="Name">Name</option>
          </select>
        </div>
      </div>
      <div className="main-img-container">
        {data.filter(data=>data.title.toLowerCase().includes(search)).map(item => {
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
