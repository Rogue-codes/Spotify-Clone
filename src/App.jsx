import { useEffect } from "react";
import Login from "./components/login/Login";
import Spotify from "./components/spotify/Spotify";
import { useAppContext } from "./utils/AppProvider";
import { reducerCases } from "./utils/Constants";

function App() {
  const [{ token }, dispatch] = useAppContext();
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];

      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div className="App">{token ? <Spotify /> : <Login />}</div>;
}

export default App;
