import React from "react";

function Food({ name, picture }) {
  return (
  <div>
    <h2>I like {name} </h2>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240104_289%2F1704350601239abbmK_PNG%2F105486443936250122_269811255.png&type=a340',
  },
  {
    id: 2,
    name: 'gogi',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMjNfOTYg%2FMDAxNzAzMjkyMjc1NTQx.-1yktEfqjqcLUFcreBvJ8wd_P1cIxRkvkeqnloN5ItMg.31FSO4FIypY9r-o25ctHokypRVdD41HYrQNpmQEhCTEg.JPEG.hanroa%2FIMG_6726.jpg&type=a340',
  },
  {
    id: 3,
    name: 'gamja',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMzBfNzUg%2FMDAxNzAxMzQyOTYwOTAy.lIJQGjVyJgvR1y1sDAF-6T8_Ln3hMEqmWlhBNigGRS4g.vPvumXBncm0J3R2N8GtqzGbveOuHgeJokigQCbmfdz4g.PNG.durri1122%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2023-11-30_175916.png&type=a340',
  }
  
];


function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
    ))}
  </div>
  );
}

export default App;
