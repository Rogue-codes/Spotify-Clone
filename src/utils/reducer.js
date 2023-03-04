import Playlist from "../components/spotify/Playlist"
import { reducerCases } from "./Constants"

export const initialState = {
    token: null,
    playlists : [],
    user: null,
    selectedPlaylistId: "7Afm7C46f611eCOtUDoPp4",
    selectedPlaylist: null,
    currentlyPlaying:null,
    playerState: false,
}

export const reducer = (state,action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN :{
            return {
                ...state, token: action.token
            }
        }
        case reducerCases.SET_PLAYLISTS :{
            return{
            ...state,
            playlists: action.playlists
        }
    }
    case reducerCases.SET_USER:{
        return{
            ...state,user: action.user
        }
    }
    case reducerCases.SET_PLAYLIST:{
        return{
            ...state,selectedPlaylist: action.selectedPlaylist
        }
    }
    case reducerCases.CURRENTLY_PLAYING:{
        return{
            ...state,currentlyPlaying: action.currentlyPlaying
        }
    }
    case reducerCases.SET_PLAYER_STATE:{
        return{
            ...state,playerState: action.playerState
        }
    }
    case reducerCases.SET_PLAYLIST_Id:{
        return{
            ...state,selectedPlaylistId: action.selectedPlaylistId
        }
    }
        default: return state
    }
}