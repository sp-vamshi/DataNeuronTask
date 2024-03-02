import React from "react";

import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  // background: "#f0f0f0",
};

function ResizableContainer(props) {
  const { children } = props;

  return (
    <Resizable minHeight={300} minWidth={400} key={props.id} className={props.className} style={props.style} defaultSize={props.defaultSize}>
      {children}
    </Resizable>
  );
}

export default ResizableContainer;
