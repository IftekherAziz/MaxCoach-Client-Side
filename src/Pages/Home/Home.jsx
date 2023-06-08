import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";
import StudentReview from "./StudentReview/StudentReview";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <StudentReview></StudentReview>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
