import React from "react";
import PlayIcon from "@/public/svg/play_icon.svg";
import ShareIcon from "@/public/svg/share_icon.svg";
import MicrophoneIcon from "@/public/svg/microphone_icon.svg";
import Image from "next/image";

type PodcastCardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  description?: string;
  showLabel?: boolean;
  labelText?: string;
  podcastName: string;
  duration: string;
  date: string;
};

export default function FeaturedPodcastCard({
  imageUrl,
  title,
  subtitle,
  description,
  showLabel = true,
  labelText = "Featured Episode",
  podcastName,
  duration,
  date,

}: PodcastCardProps) {
  return (
    <div className="rounded-lg border bg-card font-inter text-card-foreground border-none shadow-lg bg-gradient-to-br from-affc-offwhite to-white transition-all h-full flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6 pb-0 relative">
        {showLabel && (
          <div className="absolute top-3 right-3 bg-affc-pink text-white text-xs px-2 py-1 rounded">
            {labelText}
          </div>
        )}

        <div className="mb-4 mt-8">
          <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden">
            <Image
              fill
              alt={title}
              src={imageUrl}
              className="object-cove"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors">
                <MicrophoneIcon className="w-6 h-6 text-affc-pink" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-affc-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mic mr-2"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <span className="text-xs font-medium">{podcastName}</span>
          </div>
          <div className="flex items-center text-xs text-foreground/60 gap-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock mr-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {duration}
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar mr-1"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {date}
            </div>
          </div>
        </div>

        <h3 className="tracking-tight text-lg font-semibold line-clamp-2 font-icon">
          {title}
        </h3>
        <p className="text-xs text-foreground/70 mt-1">{subtitle}</p>

        {description && (
          <p className="text-sm text-foreground/80 mt-4">{description}</p>
        )}

      <div className="items-center p-6 pt-0 mt-2 ml-0 flex justify-between">
        <button className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-affc-blue text-white hover:bg-affc-blue/90 active:scale-[0.98] px-3 py-1.5 text-sm flex items-center justify-center">
        <PlayIcon className="mr-2 size-3"/>
          Listen Now
        </button>
        <button className="rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 text-affc-gray hover:bg-affc-blue/10 active:scale-[0.98] px-3 py-1.5 text-sm flex items-center justify-center">
        <ShareIcon className="size-5 mr-2"/>
          Share
          </button>

          </div>

      </div>
    </div>
  );
}
