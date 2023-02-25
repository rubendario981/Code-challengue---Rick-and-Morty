export class Episode {
  constructor(
    public id: number,
    public name: string,
    public episode: string,
    public characters: [],
    public url: string,
    public created: string,
    public air_date?: string
  ) { }
}