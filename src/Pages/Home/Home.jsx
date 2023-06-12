import { Helmet } from "react-helmet";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";
import StudentReview from "./StudentReview/StudentReview";
import GetInTouch from "./GetInTouch/GetInTouch";
import CeoMessage from "./CeoMessage/CeoMessage";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MaxCoach | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <CeoMessage></CeoMessage>
      <PopularInstructors></PopularInstructors>
      <StudentReview></StudentReview>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
