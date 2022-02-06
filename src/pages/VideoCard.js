import React from "react";

const VideoCard = ({video}) => 
<div className="videocard">
<video  controls>
    <source src={video} type="video/mp4" />
    </video> 

</div>


export default VideoCard;