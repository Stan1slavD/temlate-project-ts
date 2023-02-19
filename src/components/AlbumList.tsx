import { IAlbum } from "../types/types";
import { FC } from "react";
interface AlbumListProps{
    albums:IAlbum[]
}

const AlbumList: FC<AlbumListProps>=({albums})=>{
    console.log(albums)
return(
    <div>
        {albums.map(album=>{return(<div>
            {album.artist}
        </div>)})}
    </div>
)
}

export default AlbumList;