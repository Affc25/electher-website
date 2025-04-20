import { AnalyticsSection, CafeSection, GallerySection, Header, MissionSection, PavillonSection, ReportsSection, ResourcesSection } from "@/components/secondary/Home";

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
    </div>
  );
}
