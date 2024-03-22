import { useLanguageContext } from "../context/LanguageContext";
const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <div
      style={{
      width:"50%",
        position: "absolute",
        top:"4%",
        left: "80%",
       
      }}
      
    >
   {/* <label   onClickLanguageChange style={{color:"white",display:"inline-block",marginRight:"5%"}} value={0}>eng</label>
    <label  style={{color:"white",display:"inline-block",marginRight:"5%",marginLeft:"5%"}} value={0}>/</label>
    <label  style={{color:"white",display:"inline-block",marginLeft:"5%"}}  value={1}>de</label>*/}
      {Object.keys(languages).map((lng) => (
        <button onClick={onClickLanguageChange} style={{fontSize:"1.7vw",borderRadius:"3%",border:"2px solid #5a00b4",padding:"2%",marginRight:"2%",width:"15%",backgroundColor:"#090225",color:"white",display:"inline-block",cursor: "pointer",}} key={languages[lng].nativeName} value={lng}>
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelect;