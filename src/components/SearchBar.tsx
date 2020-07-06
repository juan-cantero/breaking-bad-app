import React from 'react'

interface Prop {
  setSearchText:Function
}

const SearchBar:React.FC<Prop> = ({setSearchText}) => {

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
     <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          onChange={onChange}
          autoFocus
        />
      </form>
    </section>
  )
  
}

export default SearchBar
