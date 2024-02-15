import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import HeroPage from "./Home/HeroPage";
import TweetPage from "./Home/TweetPage";
function Home() {
    const userInfos = useSelector((state) => state.users.value);
    return userInfos.token ? <TweetPage /> : <HeroPage />;
}

export default Home;
