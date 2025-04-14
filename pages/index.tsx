import { Header } from "@/components/secondary/Home";

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="px-28 flex flex-col items-center py-20">
        <div className="w-[768px] flex flex-col items-center">
          <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">Numbers in Perspective</h3>
          <h4 className="text-3xl md:text-4xl font-semibold mb-6">The African Female Founder Landscape</h4>
          <p className="text-lg font-inter text-center">Compelling statistics that underscore the urgency and value of AFFC's work across the continent.</p>
        </div>
      </section>
    </div>
  );
}
