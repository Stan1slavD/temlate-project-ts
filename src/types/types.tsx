export interface Test{
    test:string;
}

export interface IImage{
    "#text": string;
    size: string;
}

export interface IAlbum{
    name:string;
    playcont: number;
    listeners: number;
    url:string;
    artist:string;
    image: IImage[];
}

export interface IArtist{
    name:       string;
    playcount:  number;
    listeners:  number;
    url:string;
    artist:string
    image: IImage[];
}

export interface IPopularTrack{
    name: string;
    playcount: number;
    listeners: number;
    url: string;
    artist: IArtist;
    image: IImage[];
}

export interface ITopHit{
    name: string;
    playcount: number;
    listeners: number;
    url: string;
    artist: string;
    image: IImage[];
}

export interface ITrack{
    name: string;
    playcount: number;
    listeners: number;
    url: string;
    artist: string;
    image: IImage[];
}