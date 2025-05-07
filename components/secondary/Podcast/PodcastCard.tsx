import PlayIcon from "@/public/svg/play_icon.svg";
import ClockIcon from "@/public/svg/clock_icon.svg";
import ShareIcon from "@/public/svg/share_icon.svg";
import MicIcon from "@/public/svg/microphone_icon.svg";
import CalendarIcon from "@/public/svg/calendar_icon.svg";


interface PodcastCardProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  date: string;
  source: string;
}

const PodcastCard = ({
  title,
  subtitle,
  description,
  duration,
  date,
  source,
}: PodcastCardProps) => {
  return (
    <div className="rounded-lg border bg-white text-card-foreground border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6 pb-0 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-affc-pink">
            <MicIcon className="mr-2" size={16} />
            <span className="text-xs font-medium">{source}</span>
          </div>
          <div className="flex items-center text-xs text-foreground/60 gap-3">
            <div className="flex items-center">
              <ClockIcon className="mr-1" size={12} />
              {duration}
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-1" size={12} />
              {date}
            </div>
          </div>
        </div>
        <h3 className="tracking-tight text-lg font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-foreground/70 mt-1">{subtitle}</p>
      </div>
      <div className="p-6 py-3 flex-grow">
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
      <div className="items-center p-6 pt-0 flex justify-between">
        <button
          className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-3 py-1.5 text-sm flex items-center justify-center"
        >
          <PlayIcon className="mr-2" size={16} />
          Listen Now
        </button>
        <button
          className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 text-affc-gray hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm flex items-center justify-center"
        >
          <ShareIcon className="mr-2" size={16} />
          Share
        </button>
      </div>
    </div>
  );
}

export default PodcastCard;
