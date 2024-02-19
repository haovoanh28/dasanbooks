import { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { OutlinedInput, Stack, useTheme } from '@mui/material';
import _ from 'lodash';

interface OrgSearchProps {
  onChange: (keyword: string) => void;
  value: string;
}

const OrgSearch = ({ onChange, value }: OrgSearchProps) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (value) {
      if (!_.isEqual(searchValue, value)) {
        setSearchValue(value);
      }
    } else {
      setSearchValue('');
    }
  }, [value]);

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onChange(e.target.value.trim());
    }
  };

  return (
    <OutlinedInput
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${theme.palette.divider}`
        }
      }}
      fullWidth
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Search"
      startAdornment={
        <Stack alignItems={'center'}>
          <SearchOutlined style={{ color: theme.palette.grey[500], fontSize: '16px' }} />
        </Stack>
      }
    />
  );
};

export default OrgSearch;
