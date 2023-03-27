import Header from "react-fullpage/dist/Header";
import Footer from "react-fullpage/dist/Footer";
import JukDo from "../components/Board/Card/Weather/Jukdo";
import Loading from "../components/Loading";

const WaveFind = () => {
    return (
        <>
        <Header />
        <JukDo />
        <Loading />
        <Footer />
        </>
    )
}

export default WaveFind;