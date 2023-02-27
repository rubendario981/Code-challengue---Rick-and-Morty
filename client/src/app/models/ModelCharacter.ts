export class Character {
  constructor(
    public id:	number,
    public name: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string,
    public origin: {
      name: string,
      url: number
    },
    public location: object,
    public image: string,
    public episode: any,
    public url: string,
    public created: string,
  ) {

  }
}