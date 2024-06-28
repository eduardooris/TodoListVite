import React from "react";

function Container({children}) {

return (
<div style={{ borderRadius:"35px", overflow:"hidden", width:"479px", height:"595px" }}>{children}</div>
)
}

export default Container;