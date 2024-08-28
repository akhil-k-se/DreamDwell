import React from "react";

const DubaiCards = ({title,content,icon}) => {
  return (
    <div className="w-[400px] flex flex-col h-[300px] gap-2 font-montserrat text-gray-600" >
    <div className="text-[35px]" >
        {icon}
    </div>
      <div className="carddiv">
        <h1 className="text-[25px]">
          {title}
        </h1>
      </div>
      <div>
        <p className="text-[20px]" >
            {content}
        </p>
      </div>
    </div>
  );
};

export default DubaiCards;
