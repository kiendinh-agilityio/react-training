// Import radix ui
import { Box } from '@radix-ui/themes';

// Import common components
import { Text } from '@/components/common';

interface BreadcrumbProps {
  currentPage: string;
  label: string;
}

const Breadcrumb = ({ currentPage, label }: BreadcrumbProps) => (
  <Box className="flex items-center">
    <Text className="text-base text-xs" content={label} />
    <Box as="span" className="text-xs">
      / {currentPage}
    </Box>
  </Box>
);

export default Breadcrumb;
