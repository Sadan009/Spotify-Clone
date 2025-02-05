import { createContext, PropsWithChildren, useState, useContext } from "react";
import { Track } from "../types";


type PlayerContexttype = {
    track? : Track;
    setTrack: (track: Track) => void;
}

const PlayerContext = createContext<PlayerContexttype>({
    setTrack: () => {},
});

export default function PlayerProvider({children}:PropsWithChildren) {
    const [track, setTrack] = useState<Track>();
    // console.log(track);
    return(
        <PlayerContext.Provider value={{track, setTrack}}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => useContext(PlayerContext);