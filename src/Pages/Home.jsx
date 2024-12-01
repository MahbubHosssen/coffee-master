import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import CoffeeSection from "../components/CoffeeSection";
import Follow from "../components/Follow";

const Home = () => {
    const coffeesData = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto"> 
            <CoffeeSection></CoffeeSection>
            </div>
            <div className="grid grid-cols-2 w-10/12 mx-auto my-12 gap-6">
                {
                    coffeesData.map(coffee => <CardContainer key={coffee._id} coffee={coffee}></CardContainer>)
                }
            </div>
            <div>
                <Follow></Follow>
            </div>
        </div>
    );
};

export default Home;