import { Helmet } from "react-helmet";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";
import StudentReview from "./StudentReview/StudentReview";
import GetInTouch from "./GetInTouch/GetInTouch";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MaxCoach | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <StudentReview></StudentReview>
      <PopularInstructors></PopularInstructors>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
