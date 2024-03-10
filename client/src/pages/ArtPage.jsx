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

const ArtPage = () => {
 // // <Container className="container" fluid style={{width:"100%",backgroundColor:"green"}}>
  //<img className="headerGif" src={callMe}></img>
  const [productImages, setProductImages] = useState([]);

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




  return (
   <div >
<PageHeader pageId={4}  page="Art" image={paintImg}/> 
<PageIntro/>
<h1 className="h1-subthemes ">so rember the painting I showed you in the home page?</h1>
<img className="pages-imgs " src={thePainting}></img>
<h1 className="h1-subthemes ">what do I plan to do with it?</h1>
{(productImages && productImages.length>0)?
  <Slider images={productImages}/>
  :<div></div>
}
<div className="mappedContentContainer">
<h1 className="mappedContentH">no selling before the campaign launch!</h1>
<p className="mappedContentTxt">so rember the painting I showed you in the home page?so rember the painting I showed you in the home page?so rember the painting I showed you in the home page?so rember the painting I showed you in the home page?so rember the painting I showed you in the home page?</p>
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
