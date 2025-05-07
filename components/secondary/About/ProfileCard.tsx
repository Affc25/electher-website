// components/ProfileCard.tsx
import Image from 'next/image';
import React from 'react';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  title,
  description,
}) => {
  return (
    <div className="bg-white font-inter p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="size-24 relative">
          <Image
            fill
            alt={name}
            src={imageSrc}
            className="rounded-full object-cover"
          />
        </div>
      
        <div>
          <h3 className="text-xl font-semibold text-affc-gray font-playfair-display">{name}</h3>
          <p className="text-affc-blue font-medium mb-2">{title}</p>
          <p className="text-foreground/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
