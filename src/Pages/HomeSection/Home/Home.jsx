import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
           <PhotoGallery></PhotoGallery> 
        </div>
    );
};

export default Home;