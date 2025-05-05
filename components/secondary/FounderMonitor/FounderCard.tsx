import { FC } from "react";
import MapIcon from "@/public/svg/location_icon.svg"
type FounderCardProps = {
  name: string;
  company: string;
  location: string;
  foundedYear: number;
  description: string;
  imageSrc: string;
  tags: string[];
  fundingStage: string;
  fundingAmount: number;
  profileLink: string;
};

const FounderCard: FC<FounderCardProps> = ({
  name,
  company,
  location,
  foundedYear,
  description,
  imageSrc,
  tags,
  profileLink,
}) => {
  return (
    <div className="rounded-lg border bg-card font-inter bg-white text-card-foreground border-none shadow-md overflow-hidden">
      <div className="flex items-center p-6 border-b border-gray-100">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-lg font-playfair-display">{name}</h3>
          <p className="text-sm text-foreground/80">{company}</p>
          <div className="flex items-center mt-1">
            <MapIcon className="text-affc-pink mr-1" size={14} />
            <span className="text-xs">{location}</span>
          </div>
        </div>
      </div>

      <div className="p-6 py-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <div
              key={i}
              className={`text-xs px-2 py-1 rounded-full ${
                i === 0
                  ? "bg-affc-blue/10 text-affc-blue"
                  : i === 1
                  ? "bg-affc-pink/10 text-affc-pink"
                  : "bg-affc-green/10 text-affc-green"
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
      </div>

      <div className="items-center p-6 pt-0 border-t border-gray-100 flex justify-between">
        <div className="text-xs text-foreground/60">Founded {foundedYear}</div>
        <a
          href={profileLink}
          className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default FounderCard;
