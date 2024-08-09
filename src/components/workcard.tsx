import { url } from "inspector";
import React from "react";

type WorkCardProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  comment: string;
};

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  img,
  link,
  comment,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img className="max-w-xs max-h-xs" src={img} />
      <a href={link}>{comment}</a>
    </div>
  );
};
