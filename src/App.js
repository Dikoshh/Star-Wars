import React, { useState } from "react";
import { useMemo } from "react";
import PostFilter from "./Components/PostFilter";
import PostList from "./Components/PostList";
import "./css/style.css"
import r2 from "./images/r2d2.jpg"
import vin from "./images/vin.jpg"
import hatt from "./images/hatt.jpg"
import kam from "./images/kam.jpg"
import cor from "./images/Cor.jpg"
import tat from "./images/Tatooine_EotECR.jpg"
import sok from "./images/sokol.jpg"
import death from "./images/death.jpg"




function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "Мейс Винду", gen: 'Пол: мужской', status: 'Character', img: vin },
      { id: 2, title: "R2D2", gen: 'Пол: робот', status: 'Character', img: r2 },
      { id: 3, title: "Джавва Хатт", gen: 'Пол: мужской', status: 'Character', img: hatt },
      { id: 1, title: "Камино", gen: 'Это здесь, R4. Именно там где она должна быть. Наша пропавшая планета, Камино', status: "planet", img: kam },
      { id: 2, title: "Татуин", gen: 'Ну, если у Вселенной есть центр, то ты на планете, которая находится от него дальше всех', status: "planet", img: tat },
      { id: 3, title: "Карусант", gen: 'Корусант… вся планета — один большой город', status: "planet", img: cor },
      { id: 3, title: "Тысячелетний сокол", gen: 'На этом корабле я дошёл до Кесселя менее чем за двенадцать парсеков', status: "ship", img: sok },
      { id: 3, title: "Звезда смерти", gen: 'Эта станция, отныне, станет главной силой во вселенной. Пора пустить её в ход', status: "ship", img: death },
   ])
   const [filter, setFilter] = useState({ sort: "", query: "" })




   const sortedPosts = useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
   }, [filter.sort, posts])

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
   }, [filter.query, sortedPosts])



   return (
      <div className="App">
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostList posts={sortedAndSearchedPosts} title="Star Wars" />
      </div >
   );

}


export default App;
