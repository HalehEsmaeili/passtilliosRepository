import React from "react";

function Highlighted(props) {
  const text = props.text;
  const highlights = props.highlight;
  const keywords = highlights.split(/\s+/).map(keyword => `\\b${keyword}\\b`);
  const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');

  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  return (
    <p>
      {splitText.map((segment, index) => (
        index % 2 === 0 ? (
          <React.Fragment key={index}>
            {segment}
          </React.Fragment>
        ) : (
          <mark key={index} style={{ color: "#000000", background: "#00EEB9",opacity:0.6 }}>
            {segment}
          </mark>
        )
      ))}
    </p>
  );
}

export default Highlighted;
