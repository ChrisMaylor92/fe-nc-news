import { useState } from "react";


export const SortBy = ({setArticles}) => {

    const [value, setValue] = useState("Sort by ...")
    const [order, setOrder] = useState('desc')
    const sortby = [{label: "Date", value:"created_at"}, {label: "Comments", value:"comment_count"}]
    const orderby = [{label: "Ascending", value:"asc"}, {label: "Descending", value:"desc"}]

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setArticles((currArticles) => {
            if(order === 'asc') {
                const copyArticles = [...currArticles]
                copyArticles.sort((a,b) => a[value] > b[value] ? 1 : -1)
                return copyArticles
            }
            if(order === "desc") {
                const copyArticles = [...currArticles]
                copyArticles.sort((a,b) => a[value] > b[value] ? -1 : 1)
                return copyArticles
            }
        })
        
    }

    const handleSortChange = (event) => {
        setValue(event.target.value)
    }
    const handleOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return <form onSubmit={handleSubmit} id="sortbyDropDown">
    <div>
      <label htmlFor="sort-by">
      <div>
        <select id="sort-by" name="sort-by" value={value} onChange={handleSortChange}>
          <option>Sort by...</option>
          {sortby.map((listItem) => {
            return (
              <option
                key={listItem.label}
                value={listItem.value}
              >
                {listItem.label}
              </option>
            );
          })}
        </select>
    </div>
    </label>
    <label>
        <div>
        <select id="order" name="order" value={value} onChange={handleOrderChange}>
          <option>Order...</option>
          {orderby.map((listItem) => {
            return (
              <option
                key={listItem.label}
                value={listItem.value}
              >
                {listItem.label}
              </option>
            );
          })}
        </select>
        
      </div>
      </label>
      
    </div>
    <div id="button-container">
      <button id="submitButton" type="submit">
       Go
      </button>
    </div>
  </form>
}