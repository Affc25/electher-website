interface PartnerLogoGridProps {
  logos: string[];
}

const PartnerLogoGrid: React.FC<PartnerLogoGridProps> = ({ logos }) => {
  return (
    <div className="flex justify-between  rounded-sm shadow-sm w-full p-4">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Partner Logo"
          className="h-12 opacity-80 hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
  );
};

export default PartnerLogoGrid;