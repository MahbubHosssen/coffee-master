import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import CoffeeSection from "../components/CoffeeSection";
import Follow from "../components/Follow";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto"> 
            <CoffeeSection></CoffeeSection>
            </div>
            <div>
                <CardContainer></CardContainer>
            </div>
            <div>
                <Follow></Follow>
            </div>
        </div>
    );
};

export default Home;