import React from "react";

type WorkCardProps = {
  title: string;
  description: string;
  img: string;
  link: string;
};

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  img,
  link,
}) => {
  return (
    <div className="bg-white bg-opacity-5 rounded-xl h-60 w-100 p-4 z-30">
      <h2>{title}</h2>
      <p className="mb-2">{description}</p>
      <a target="_blank" href={link}>
        <img className="rounded-xl w-60 h-36  hover:opacity-80" src={img} />
      </a>
    </div>
  );
};
