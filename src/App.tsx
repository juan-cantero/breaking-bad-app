import React,{Component} from 'react';
import Header from './components/Header';
import {breakingBadApi,CharacterType} from './Apis/BreakingBadApi';

import './App.css';
import CharacterList from './components/CharacterList';
import SearchBar from './components/SearchBar';

interface State {
  characters:CharacterType[] 
  isLoading:boolean;
  searchText:string;
}
interface Prop{
  
}

class App extends Component<Prop,State>{
  
  state:State = {
    characters:[],
    isLoading:true, 
    searchText:''

  }

  componentDidMount(){
    const fetchCharacters = async() =>{
      const characters  = await breakingBadApi.getCharacters()
      console.log(characters)
      this.setState({characters:characters,isLoading:false})
    }
    fetchCharacters()
  }

  setSearchText = (text:string) =>{
    this.setState({searchText:text})
  }
  
  render(){ 
    let {characters,searchText} = this.state
    const fileteredCharacters = 
      characters.filter(c=>c.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
    <div className="App">
      <Header/>
      <SearchBar setSearchText={this.setSearchText}/>
      <CharacterList isLoading={this.state.isLoading} characters= {fileteredCharacters}/>
    </div>
  )
    }
}

export default App;
