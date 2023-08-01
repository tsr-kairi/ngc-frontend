/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  createStyles,
  Table,
  Group,
  Text,
  TextInput,
  Drawer,
  Pagination,
  Loader,
  ActionIcon,
} from '@mantine/core';
import { IconSearch, IconFilter, IconPlus } from '@tabler/icons-react';

// Style for the Entire Page
export const listViewLayoutStyle = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  actionButton: {
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#04334c',
    '&:hover': {
      backgroundColor: theme.fn.darken('#04334c', 0.05),
    },
  },

  tableUpperLayerHeader: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0 !important',
    gap: '30px',
  },

  paginationContainer: {
    width: '100%',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchField: {
    flex: 1,
  },
  text: {
    color: theme.colors.brand[6],
  },
  filterIcon: {
    color: theme.colors.brand[6],
  },
  table: {
    boxShadow: '1px 1px 12px rgba(152, 195, 255, 0.09)',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    borderRadius: '10px',
    // margin: '5px',
    height: '566px',
  },
}));

// Entire Interface propsType
interface IListViewLayoutProps {
  title?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  // Normal Drawer propsType
  DrawerTitle?: string;
  DrawerChildren?: React.ReactNode;
  DrawerModalOpen?: boolean;
  DrawerSize?: string | number;
  // Create Drawer propsType
  CreateDrawerTitle?: string;
  CreateDrawerChildren?: React.ReactNode;
  CreateDrawerModalOpen?: boolean;
  CreateDrawerSize?: string | number;
  // Edit Drawer propsType
  EditDrawerTitle?: string;
  EditDrawerChildren?: React.ReactNode;
  EditDrawerModalOpen?: boolean;
  EditDrawerSize?: string | number;
  hidePlusButton?: boolean;
  isError: boolean;
  isLoading: boolean;
  onFilterClick?: () => void;
  onSearchChange?: (searchTerm: string) => void;
  onClick?: () => void;
  // pagination  propsType
  onPageChange?: (pageNumber: number) => void;
  // page?: number;
  // initialPage?: number;
  totalRecords?: number;
}

// eslint-disable-next-line react/function-component-definition
export const ListViewLayout: React.FC<IListViewLayoutProps> = (props) => {
  const { classes } = listViewLayoutStyle();

  // functional component props
  const {
    title,
    leading,
    trailing,
    children,
    // Normal Drawer props
    DrawerTitle,
    DrawerChildren,
    DrawerSize,
    DrawerModalOpen = false,
    // Create Drawer props
    CreateDrawerTitle,
    CreateDrawerChildren,
    CreateDrawerSize,
    CreateDrawerModalOpen = false,
    // Edit Drawer props
    EditDrawerTitle,
    EditDrawerChildren,
    EditDrawerSize,
    EditDrawerModalOpen = false,
    hidePlusButton,
    isError,
    isLoading,
    onFilterClick,
    onSearchChange,
    onClick,

    // pagination props
    totalRecords,

    onPageChange,
    // page,
    // initialPage,
  } = props;

  // state prop dealing management
  const [DrawerOpen, setDrawerOpen] = useState(DrawerModalOpen);
  const [CreateDrawerOpen, setCreateDrawerOpen] = useState(
    CreateDrawerModalOpen
  );
  const [EditDrawerOpen, setEditDrawerOpen] = useState(EditDrawerModalOpen);

  // useEffect dealing management
  useEffect(() => {
    setDrawerOpen(DrawerModalOpen);
  }, [DrawerModalOpen]);

  useEffect(() => {
    setCreateDrawerOpen(CreateDrawerModalOpen);
  }, [CreateDrawerModalOpen]);

  useEffect(() => {
    setEditDrawerOpen(EditDrawerModalOpen);
  }, [EditDrawerModalOpen]);

  // Error/Loading dealing management
  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (isLoading) {
    return <Loader variant="dots" />;
  }

  // Returning the entire of Table here
  return (
    <>
      <div className={classes.tableUpperLayerHeader}>
        <Group spacing="sm">
          <Group spacing="sm">
            <Text size="xl" weight="600" className={classes.text}>
              {title}
            </Text>
            {onFilterClick && (
              <IconFilter
                className={classes.filterIcon}
                onClick={onFilterClick}
                style={{ cursor: 'pointer' }}
              />
            )}
            {leading}
          </Group>

          {/* Returning the Add New - Button here */}
          {!hidePlusButton && (
            <ActionIcon
              variant="light"
              radius="xl"
              color="blue"
              className={classes.actionButton}
              onClick={() => {
                if (onClick) {
                  onClick();
                } else {
                  setDrawerOpen(true);
                }
              }}
            >
              <IconPlus size={30} />
            </ActionIcon>
          )}

          {/* Returning the Filter input here */}
          {onSearchChange && (
            <TextInput
              placeholder="Search by any field"
              icon={<IconSearch size={14} stroke={1.5} />}
              onChange={({ target }) => {
                if (onSearchChange) {
                  onSearchChange(target.value);
                }
              }}
              radius="xl"
              className={classes.searchField}
            />
          )}
        </Group>
        {trailing}
      </div>

      {/* Returning the  here isLoading */}
      {isLoading && <Loader variant="dots" />}

      {/* Returning the Scroll Area of Table */}
      {!isLoading && (
        <>
          <Table
            horizontalSpacing="md"
            verticalSpacing="xs"
            className={classes.table}
          >
            {children}
          </Table>

          {/* Pagination for the every table */}
          <div className={classes.paginationContainer}>
            <Text color="grey">
              Showing 1 to 10 of {totalRecords || '00'} entries
            </Text>
            <Pagination
              total={10}
              withEdges
              size="sm"
              onChange={onPageChange}
              // page={page}
              // initialPage={initialPage}
            />
          </div>

          {/* Normal Drawer */}
          <Drawer
            opened={DrawerOpen}
            onClose={() => setDrawerOpen(false)}
            title={DrawerTitle}
            padding="xl"
            size={DrawerSize || 'xl'}
            position="right"
          >
            {DrawerChildren}
          </Drawer>
          {/* Create Drawer */}
          <Drawer
            opened={CreateDrawerOpen}
            onClose={() => setCreateDrawerOpen(false)}
            title={CreateDrawerTitle}
            padding="xl"
            size={CreateDrawerSize || 'xl'}
            position="right"
          >
            {CreateDrawerChildren}
          </Drawer>
          {/* Edit Drawer */}
          <Drawer
            opened={EditDrawerOpen}
            onClose={() => setEditDrawerOpen(false)}
            title={EditDrawerTitle}
            padding="xl"
            size={EditDrawerSize || 'xl'}
            position="right"
          >
            {EditDrawerChildren}
          </Drawer>
        </>
      )}
    </>
  );
}; // End of ListViewLayout
