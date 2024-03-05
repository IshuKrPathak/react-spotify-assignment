import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationRangesProps {
  count: number;
  defaultPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  siblingCount: number;
}

const PaginationRanges: React.FC<PaginationRangesProps> = ({
  count,
  defaultPage,
  onChange,
  siblingCount,
}) => {
  return (
    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray-900' }}>
      <Pagination
        count={count}
        defaultPage={defaultPage}
        onChange={onChange}
        siblingCount={siblingCount}
        color="primary"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 255, 0.1)",
            },
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      />
    </Stack>
  );
}

export default PaginationRanges;
