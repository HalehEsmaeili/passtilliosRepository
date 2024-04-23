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
     {/*
         url: "images/slideShow/art/slide1/1.png",
              caption: "",
             
*/}
<PageHeader  page="art" quote="arttttt-me" image={paintImg}/> 
<PageIntro page="art" txt={t("pageIntro.art.text")}/>

<h3 className="h1-subthemes ">The painting you saw in the home page</h3>

<img className="pages-imgs " src={thePainting}></img>
<h3 className="h1-subthemes ">is one of my paintings</h3>
<h3 className="h1-subthemes ">what is the plan with it?</h3>


  <Slider images={[
      {
         url: "images/slideShow/art/slide2/1.png",
              caption: "",
             
},

 {
  url: "images/slideShow/art/slide2/3.png",
              caption: ""
             
},
{
  url: "images/slideShow/art/slide2/4.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/5.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/6.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/shoe.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/shoe1.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/speaker.png",
              caption: "",
             
},
{
         url: "images/slideShow/art/slide2/9.png",
              caption: "",
             
}

]}


  />
  <h3 className="h1-subthemes ">Art as a reminder!</h3>
<Slider images={[

{
       url: "images/slideShow/art/slide1/2.png",
            caption: "When the world around you starts feeling all rigid and conformist, and you're in this solo battle trying to squeeze in some playfulness, free-spiritedness, and out-of-the-box thinking... and then you catch yourself doubting it all, thinking maybe you should just blend in with the grey scenery surrounding you to fit the mold...",
           
},{
url: "images/slideShow/art/slide1/3.png",
            caption: "Wouldn't it be cool if a piece of art could play the reminder for you in that moment? You know, that even when everything around you seems to resist your bold, vibrant colors, there's gonna come a time"
           
},
{
url: "images/slideShow/art/slide1/4.png",
            caption: "When even grey starts to realize it look more awesome next to some bright, bold colors!",
           
}
,{
url: "images/slideShow/art/slide1/5.png",
            caption: "Find an art piece that resonates with you, invite it into your life, and let it serve as your reminder: Don't succumb to the greyness and rigidity of your surroundings; instead, inspire them with your bold true colors",
           
},

{
url: "images/slideShow/art/slide1/1.png",
            caption: "I've been keeping my true colors alive, one painting at a time... Now, I'm hoping these paintings can be that little reminder for someone out there.",
           
},
{url: "images/slideShow/art/slide1/6.png",
            caption: "Right now, I only have my own art to offer, but hey, who knows? Someday, we might have a whole squad of artists coming together to create even more one of a kind reminders!"
           
}

]}/>
<div className="mappedContentContainer">
<h3 className="mappedContentH"></h3>

<p className="mappedContentTxt">
Sales will kick off just before the campaign launch, and all the money made from those sales will be poured back into the project, keeping our journey fueled as we strive to turn even more extraordinary dreams into reality. This will continue until we find the perfect investor fit backing the project, After that this will go on more independently from the campaign. what campaign? Dive deeper on the campaign page!</p>
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

<div className="mappedContentContainer">
<h3 style={{marginLeft:"20%", marginRight:"20%"}} className="mappedContentH">Ah by the way! to my Artists out there</h3>

<p className="mappedContentTxt">
Does your artistic expression happen to invovle bold, vibrant colors? I want to hear from you! Let's chat and see if there's a collaboration waiting to happen! send me an email to collab@passtillios.com 😘
</p>
</div>
   </div>
   


  );
};

export default ArtPage;
