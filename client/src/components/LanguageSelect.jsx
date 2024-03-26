import { useLanguageContext } from "../context/LanguageContext";
const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <div
      style={{
      width:"25%",
        position: "absolute",
        top:"2%",
        left: "75%",
       borderBottom:"3px solid white",
       overflow:"hidden"
      
      }}
      
    >
   {/* <label #00eeb9   onClickLanguageChange style={{color:"white",display:"inline-block",marginRight:"5%"}} value={0}>eng</label>
    <label  style={{color:"white",display:"inline-block",marginRight:"5%",marginLeft:"5%"}} value={0}>/</label>
    <label  style={{color:"white",display:"inline-block",marginLeft:"5%"}}  value={1}>de</label>*/}
      {Object.keys(languages).map((lng) => (
        <button onClick={onClickLanguageChange} style={{fontSize:"2.5vw",borderRadius:"3%",border:"0px solid #5a00b4",padding:"10%",marginRight:"2%",width:"10%",backgroundColor:"#090225",color:"white",display:"inline-block",cursor: "pointer",marginBottom:"2%"}} key={languages[lng].nativeName} value={lng}>
          {lng}
        </button>
     
      ))}
    </div>
  );
};

export default LanguageSelect;