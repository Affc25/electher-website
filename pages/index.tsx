import { AnalyticsSection, CafeSection, FeaturesSection, GallerySection, Header, JoinUsSection, MissionSection, NetworkSection, PavillonSection, ReportsSection, ResourcesSection, RoundTableSection, UpcomingEventsSection } from "@/components/secondary/Home";

export default function Home() {
  return (
    <div>
      <Header/>
      <AnalyticsSection/>
      <MissionSection/>
      <GallerySection/>
      <ResourcesSection/>
      <ReportsSection/>
      <CafeSection/>
      <PavillonSection/>
      <RoundTableSection/>
      <NetworkSection/>
      <UpcomingEventsSection/>
      <FeaturesSection/>
      <JoinUsSection/>
    </div>
  );
}
