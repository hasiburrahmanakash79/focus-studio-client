import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Success from "../Success/Success";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <div className="container mx-auto p-5">
           <PopularClasses></PopularClasses>
           </div>
            <Success/>
           <div className="container mx-auto p-5">
           <PopularInstructor></PopularInstructor>
           <PhotoGallery></PhotoGallery> 
           </div>
        </div>
    );
};

export default Home;