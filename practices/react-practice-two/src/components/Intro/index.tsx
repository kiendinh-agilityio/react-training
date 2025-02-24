// import components
import { Heading, Paragraph } from '@/components/common';

// import types
import { TextSize } from '@/types';

interface IntroProps {
  title: string;
  description?: string;
}

const Intro = ({ title, description }: IntroProps) => (
  <div className="flex flex-col text-center gap-[34px]">
    <Heading size={TextSize.Large}>{title}</Heading>
    {description && <Paragraph className="text-primary" text={description} />}
  </div>
);

export default Intro;
