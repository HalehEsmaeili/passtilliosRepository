import React,{useEffect,useState} from "react";
import axiosInstance from "../Api/axiosInstance.js";
import Slider from "../components/Slider.jsx";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages.css";
import "./ArtPage.css";
import paintImg from "../public/images/artpage/whitePaint.png";
import thePainting from "../public/images/artpage/thePainting.png";
import PageHeader from "./PageHeader.jsx";
import NextSteps from "../components/NextSteps.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { useLanguageContext } from "../context/LanguageContext";


const ArtPage = () => {
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  //<img className="headerGif" src={callMe}></img>
  const [productImages, setProductImages] = useState([]);
  const { t } = useLanguageContext();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);


  }, []);
 /*
  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const folderPath = `art/products`;
        // Replace 'your-server-url' with the actual URL of your Express server
        const response = await axiosInstance.post(`api/image/getImages`, { folderPath });
      //setImageUrls([props.image,props.image,props.image]);
      if (response.data.urls && response.data.urls.length > 0) {
        const imagesWithCaptions = response.data.urls.map((imageUrl) => {
          return { url: imageUrl, caption: "" };
        });

        setImageUrls(imagesWithCaptions);
      } else {
        setImageUrls([]);
      }
     
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchProductImages();
  
  
  }, []);
  */

  // Fetch product images
  useEffect(()=>{
    const fetchProductImages = async () => {
      try {
        const response = await axiosInstance.get(`/api/products/product-images`);
        if (response.data.productImages && response.data.productImages.length > 0) {
          const productImagesWithCaptions = response.data.productImages.map((productImage) => {
            return {
              url: productImage.url,
              caption: productImage.caption,
              preis: productImage.preis,
              numberInStock: productImage.number_in_stock,
              description: productImage.description,
            };
          });

          setProductImages(productImagesWithCaptions);
        } else {
          setProductImages([]);
        }
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    };
    fetchProductImages();

  },[]);


const introTxt="Art is a superpower that speaks in its own language of colors, textures, and vibes, hitting you right in the feels and connecting people who just get it. So, how do we tap into that magic for our project? That's what we're figuring out right here!";

  return (
   <div >
<PageHeader  page="art" quote="arttttt-me" image={paintImg}/> 
<PageIntro page="art" txt={introTxt}/>
<Slider images={[{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/art/teaserslideshow/1.png",
              caption: "When the world around you becomes rigid and conformist, and you find yourself in a solitary battle to make room for the playfulness, free-spiritedness, and the out of the box...when you begin to doubt it all and consider blending in with your surroundings to fit in... ",
             
},{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/art/teaserslideshow/2.png",
              caption: "I wish something can break through to you and play the reminder in that very moment! that even the greyness surrounding you, resisting your bold, vibrant colors, will one day realize it needed them all along"
             
},
{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/art/teaserslideshow/3.png",
              caption: "because remember, even the color grey looks its best when paired with bright colors!",
             
}
,{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/art/teaserslideshow/4.png",
              caption: "so dont give in to the greyness of your surroundings instead join in and help inspire your grey surrounding with your unique colors!",
             
},

{
         url: "https://passtillios-bucket-web.s3.eu-central-1.amazonaws.com/art/teaserslideshow/5.png",
              caption: "I have managed to keep my true colors alive one painting at a time... now I wonder if these paintings can be that reminder for someone out there!",
             
}

]}/>
<h1 className="h1-subthemes ">remember the painting I showed you in the home page?</h1>
<img className="pages-imgs " src={thePainting}></img>

<h1 className="h1-subthemes ">what do I plan to do with it?</h1>

{(productImages && productImages.length>0)?
  <Slider images={productImages}/>
  :<div></div>
}
<div className="mappedContentContainer">
<h1 className="mappedContentH">selling will open shortly before the campaign launch!</h1>
<p className="mappedContentTxt">The money generated will be poured back into the project, fueling our journey to make even more extraordinary dreams a reality.

Intrigued by the campaign? Dive deeper on the campaign page!</p>
</div>
{/**TODO:headers :Slider */}
{/**TODO:headers :what i plan to do with it? */}
{/**TODO:headers :why ? */}
{/**TODO:headers :no sale befor the campaing launch! */}
{/** 
<Slider/>
<div className="contactTextContainer">
<h1 className="pagetxt" id="pageHeaderH">Team</h1>
<p className="pagetxt" id="pageTxtP">
Instead how about we embrace the true charm of grey? I believe it's about time we guide it back to being the background color; the perfect backdrop where vibrant and unique colors can take the lead as the main storytellers in the painting of our lives!
</p>
</div>
*/}


<div style={{position:"relative",marginTop:"-100%",marginBottom:"0%"}}>
<NextSteps  currentStation="art" conditionForAnimStart={true} />

</div>

   </div>
   


  );
};

export default ArtPage;
