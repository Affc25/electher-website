import FileIcon from "@/public/svg/file_icon.svg"
import DownloadIcon from "@/public/svg/download_icon.svg"
import { FC } from "react";

interface ResourceCardProps {
  title: string;
  isFeatured?: boolean;
  description: string;
  keywords: string[];
  category: string;
  cta: {
    text: string;
    type: string;
  };

}

const ResourceCard: FC<ResourceCardProps> = ({
  title,
  isFeatured,
  description,
  keywords,
  category,
  cta,
}) => {
  return (
    <div className="rounded-lg font-inter bg-card text-card-foreground border border-affc-pink/20 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-xs font-medium">
            <FileIcon className="text-affc-blue" size={16} />
            <span>{category}</span>
          </div>
          {isFeatured && (
            <span className="text-xs bg-affc-pink/20 text-affc-pink px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="tracking-tight font-playfair-display text-lg font-semibold">
          {title}
        </h3>
      </div>

      <div className="p-6 pb-3 pt-0 flex-grow">
        <p className="text-sm text-foreground/80 mb-3">{description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {keywords.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-affc-gray/10 text-affc-gray/80 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center p-6 pt-0">
        <button
          className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-full flex items-center justify-center gap-2"
        >
          <DownloadIcon size={16} />
          {cta.text}
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
