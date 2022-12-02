import React from "react";
import MyInpute from "../UI/inpute/MyInpute";
import MySelect from "../UI/select/MySelect";


const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            defaultValue="Сортировка по"
            options={[
               { value: "title", name: "все" },
               { value: "status", name: "Корабль" },
               { value: "status", name: "Персонаж" },
               { value: "status", name: "Планета" },
            ]}
         />
         <MyInpute
            placeholder="Search"
            onChange={e => setFilter({ ...filter, query: e.target.value })}
            value={filter.query}
         />
      </div>
   )
}

export default PostFilter;