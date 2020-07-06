import axios from "axios";

export interface CharacterType {
  char_id: number;
  name: string;
  birthday: string;
  img: string;
  status: string;
  portrayed: string;
  nickname: string;
}

class BreakingBadApi {
  private _characters: CharacterType[];
  constructor() {
    this._characters = [];
  }

  async getCharacters() {
    let characters = await this.fetchCharacters();
    this.setCharacters(characters);
    return this._characters;
  }

  private async fetchCharacters() {
    const response = await axios.get(
      "https://www.breakingbadapi.com/api/characters"
    );
    return response.data;
  }

  private setCharacters(characters: CharacterType[]) {
    characters.forEach((character) => {
      let {
        char_id,
        name,
        birthday,
        img,
        status,
        portrayed,
        nickname,
      } = character;
      this._characters.push({
        char_id,
        name,
        birthday,
        img,
        status,
        portrayed,
        nickname,
      });
    });
  }
}
const breakingBadApi = new BreakingBadApi();
export { breakingBadApi };
