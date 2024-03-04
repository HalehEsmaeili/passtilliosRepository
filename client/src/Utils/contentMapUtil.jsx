import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance.js";
import betweenLine from "../public/images/header/colorTiles.png";
const ContentMapUtil = (props) => {
  const [mappingJson, setMappingJson] = useState([]);
  useEffect(() => {
    ///props.pageSection needed?
    axiosInstance
      .get(`/api/content/contentForMapping/${props.pageId}`)
      .then((response) => {
        console.log("response for team", response.data);
        setMappingJson(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving section data:", error);
      });
  }, [props.pageId]);

  return (
    <div className="contentMap">
      {mappingJson.length > 0 ? (
        mappingJson.map((item, index) => (
          <div className="mappedContentContainer" key={index}>
            <h1 className="mappedContentH" id={`title-${index}`}>
              {item.title}
            </h1>
            <p className="mappedContentTxt" id={`text-${index}`}>
              {item.text}dgpin mü ijgbümär0 mjusü09juvt0m +0 mug0j9ujm origj mrt0üh ujm jb0üdfpgioj  0tri j0 09pte p0e9t jp0ti j0e +0epih j
            </p>
            <img style={{opacity:.5,marginTop:"0%",marginBottom:"0%",display:"inline-block",marginLeft:"0%",width:"35%"}} src={betweenLine}></img>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default ContentMapUtil;
