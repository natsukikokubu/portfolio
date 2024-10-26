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
    <div className="bg-white bg-opacity-10 rounded-xl sm:w-full lg:w-100 px-4 pt-4 pb-6 z-30">
      <h2 className="m-auto mb-1 text-sm text-slate-100">{title}</h2>
      <p className="mb-2 m-auto text-xs text-slate-300">{description}</p>
      <a target="_blank" href={link}>
        <img
          className="rounded-xl w-60 h-36 m-auto hover:opacity-80"
          src={img}
        />
      </a>
    </div>
  );
};
