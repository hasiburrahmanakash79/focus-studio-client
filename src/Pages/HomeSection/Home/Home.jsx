import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularInstructor></PopularInstructor>
           <PhotoGallery></PhotoGallery> 
        </div>
    );
};

export default Home;