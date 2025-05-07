import Image from "next/image";

interface PartnerLogoGridProps {
  logos: string[];
}

const PartnerLogoGrid: React.FC<PartnerLogoGridProps> = ({ logos }) => {
  return (
    <div className="flex justify-between  rounded-sm shadow-sm w-full p-4">
      {logos.map((logo, index) => (
        <div key={index} className="relative h-12">
          <Image
            fill
            src={logo}
            alt="Partner Logo"
            className="opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogoGrid;