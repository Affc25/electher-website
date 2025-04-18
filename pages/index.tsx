import { AnalyticsSection, GallerySection, Header, MissionSection, ReportsSection, ResourcesSection } from "@/components/secondary/Home";

export default function Home() {
  return (
    <div>
      <Header/>
      <AnalyticsSection/>
      <MissionSection/>
      <GallerySection/>
      <ResourcesSection/>
      <ReportsSection/>
    </div>
  );
}
