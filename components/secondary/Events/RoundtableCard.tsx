import ClockIcon from "@/public/svg/clock_icon.svg"
import LocationIcon from "@/public/svg/location_icon.svg"
import CalendarIcon from "@/public/svg/calendar_icon.svg"
import Link from "next/link";
import { useMemo } from "react";

export interface RoundtableCardProps {
  startDate: string;
  endDate?: string;
  type: string;
  time: string;
  title: string;
  label: string;
  imageUrl: string;
  location: string;
  description: string;
  buttonText?: string;
  destinationUrl: string;
}

const RoundtableCard: React.FC<RoundtableCardProps> = ({
  imageUrl,
  label,
  startDate,
  type,
  title,
  description,
  time,
  location,
  buttonText = "Register to Attend",
  destinationUrl,
}) => {

  const formattedStartDate = useMemo(()=>{
    return formatDate(startDate);
  },[]) 
  return (
    <div className="grid md:grid-cols-3 h-full rounded-lg shadow-lg bg-white">
      <div className="relative h-full min-h-[200px] md:min-h-full">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="absolute inset-0 bg-center bg-cover rounded-l-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r rounded-l-lg from-affc-gray/70 to-transparent flex items-center justify-center md:justify-start p-6">
          <div className="text-white text-center md:text-left font-inter">
            <div className="bg-affc-pink/90 text-white px-3 py-1 rounded inline-block mb-2">
              {label}
            </div>
            <div className="text-lg font-medium font-inter">{formattedStartDate}</div>
            <div className="text-sm opacity-90 font-inter">{type}</div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 p-6 border-l border-l-white">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p 
          className="text-foreground/80 mb-4 font-inter text-sm text-ellipsis whitespace-pre-line line-clamp-5"
        >{description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 font-inter">
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <span className="text-sm">{formattedStartDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon className="text-affc-blue"/>
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <Link
          href={destinationUrl}
          className="inline-flex font-inter items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-4 py-2 text-base"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // @ts-expect-error is correct
  return date.toLocaleDateString('en-US', options);
}

export default RoundtableCard