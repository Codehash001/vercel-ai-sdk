import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

export interface ICard {
  pageContent: string;
  metadata: {
    hash: string;
  };
}

interface ICardProps {
  card: ICard;
  selected: string[] | null;
}

export const Card: FC<ICardProps> = ({ card, selected }) => (
  <div
    id={card.metadata.hash}
    className={`card w-full p-5 m-2 ${
      selected && selected.includes(card.metadata.hash)
        ? "bg-blue-100"
        : "bg-blue-200"
    } ${
      selected && selected.includes(card.metadata.hash)
        ? "border-double border-4 border-sky-500"
        : "opacity-60 hover:opacity-80 transition-opacity duration-300 ease-in-out"
    }`}
  >
    <ReactMarkdown>{card.pageContent}</ReactMarkdown>
    <b className="text-xs">{card.metadata.hash}</b>
  </div>
);
