export class Movie {
    constructor(
        public id: number,
        public vote_average: number,
        public title: string,
        public overview: string,
        public release_date: string,
        public poster_path: string
    ) {}
}
