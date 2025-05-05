import BookIcon from "@/public/svg/book_icon.svg";

interface InsightCardProps {
  type: string;
  date: string;
  title: string;
  author: string;
  description: string;
  onRead: () => void;
}

const InsightCard = ({
  type,
  date,
  title,
  author,
  description,
  onRead,
}: InsightCardProps) => {
  return (
    <div className="rounded-lg font-inter border bg-white text-gray-900 border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6 pb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="bg-affc-pink/10 text-affc-pink text-xs px-2 py-1 rounded">
            {type}
          </div>
          <div className="text-xs text-foreground/60">{date}</div>
        </div>
        <h3 className="tracking-tight font-playfair-display text-xl font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs">By {author}</p>
      </div>
      <div className="p-6 py-3 flex-grow">
        <p className="text-sm text-foreground/80 line-clamp-3">{description}</p>
      </div>
      <div className="flex items-center p-6 pt-0">
        <button
          onClick={onRead}
          className="w-full flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-affc-blue text-affc-blue hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm"
        >
          <BookIcon className="w-4 h-4" />
          Read Insight
        </button>
      </div>
    </div>
  );
}

export default InsightCard;
