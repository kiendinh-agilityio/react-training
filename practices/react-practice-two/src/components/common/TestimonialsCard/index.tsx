// Import components
import { Profile, Paragraph } from '@/components/common';

// Import StarRating
import StarRating from './StarRating';

interface TestimonialsCardProps {
  id: number;
  rating: number;
  description: string;
  profile: {
    fullName: string;
    position: string;
    avatarUrl?: string;
  };
  isActive: boolean;
}

const TestimonialsCard = ({ rating, description, profile, isActive }: TestimonialsCardProps) => (
  <div
    className={`flex flex-col justify-between w-[360px] h-[366px] px-7 py-[52px] transition-shadow border border-[#d8d8d8] text-primary ${
      isActive ? 'shadow-custom-active border-light' : 'shadow-none'
    }`}
  >
    <StarRating rating={rating} />
    <Paragraph text={description} />
    <Profile
      fullName={profile.fullName}
      position={profile.position}
      avatarUrl={profile.avatarUrl}
    />
  </div>
);

export default TestimonialsCard;
