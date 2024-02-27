import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance.js";

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
              {item.text}
            </p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default ContentMapUtil;
