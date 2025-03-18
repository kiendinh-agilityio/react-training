import { memo } from 'react';

// Import radix UI
import { Text as TextBase, TextProps } from '@radix-ui/themes';

// Import types
import { TextSize } from '@/types';

type TextBaseProps = {
  children: React.ReactNode;
  size?: TextSize;
} & TextProps;

const Text = memo(
  ({
    children,
    size = TextSize.Small,
    as = 'p',
    weight = 'regular',
    className = '',
  }: TextBaseProps) => {
    return (
      <TextBase as={as} weight={weight} className={`${size} ${className}`}>
        {children}
      </TextBase>
    );
  },
);

export default Text;
