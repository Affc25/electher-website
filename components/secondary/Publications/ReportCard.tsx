import { Button } from "@/components/ui/";
import FileIcon from "@/public/svg/file_icon.svg";
import Image from "next/image";
type ReportCardProps = {
  type: string;
  date: string;
  imageSrc: string;
  title: string;
  author: string;
  description: string;
  onDownload?: () => void;
};

const ReportCard: React.FC<ReportCardProps> = ({
  type,
  date,
  imageSrc,
  title,
  author,
  description,
  onDownload,
}) => {
  return (
    <div className="rounded-lg font-inter border bg-card text-card-foreground border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
    {/* Header */}
    <div className="flex flex-col space-y-1.5 p-6 pb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="bg-affc-blue/10 text-affc-blue text-xs px-2 py-1 rounded">
          {type}
        </div>
        <div className="text-xs text-foreground/60">{date}</div>
      </div>

      <div className="mb-3">
        <div className="relative w-full h-40 overflow-hidden rounded-lg mb-3">
          <Image
            fill
            alt={title}
            src={imageSrc}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h3 className="tracking-tight font-playfair-display text-xl font-semibold line-clamp-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs">By {author}</p>
    </div>

    {/* Content */}
    <div className="p-6 py-3 flex-grow">
      <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
    </div>

    {/* Footer */}
    <div className="flex items-center p-6 pt-0">
      <Button
        onClick={onDownload}
        className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border bg-white border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm w-full flex items-center justify-center gap-2"
      >
        <FileIcon className="w-4 h-4" />
        Download Report
      </Button>
    </div>
  </div>
  );
};

export default ReportCard;
