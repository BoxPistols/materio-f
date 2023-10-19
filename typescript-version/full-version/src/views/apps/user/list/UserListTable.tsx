'use client'

// React Imports
import { useEffect, useRef, useState, useMemo } from 'react'
import type { HTMLProps } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import TableFilters from './TableFilters'
import AddUserDrawer from './AddUserDrawer'

// Styles Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/libs/reactTables.module.css'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type UsersTypeWithAction = UsersType & {
  action?: string
}

type UserRoleType = {
  [key: string]: { icon: string; color: string }
}

type UserStatusType = {
  [key: string]: ThemeColor
}

const Icon = styled('i')({})

const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, indeterminate])

  return <input type='checkbox' ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

const userRoleObj: UserRoleType = {
  admin: { icon: 'ri-vip-crown-line', color: 'error' },
  author: { icon: 'ri-computer-line', color: 'warning' },
  editor: { icon: 'ri-edit-box-line', color: 'info' },
  maintainer: { icon: 'ri-pie-chart-2-line', color: 'success' },
  subscriber: { icon: 'ri-user-3-line', color: 'primary' }
}

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const UserListTable = ({ tableData }: { tableData?: UsersType[] }) => {
  // States
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[tableData])
  const [globalFilter, setGlobalFilter] = useState('')

  const columnHelper = createColumnHelper<UsersTypeWithAction>()

  const columns = useMemo<ColumnDef<UsersTypeWithAction, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            className={styles.selectColumn}
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            className={styles.selectColumn}
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('fullName', {
        header: () => <span>User</span>,
        cell: ({ row }) => (
          <div className={classnames('flex items-center', styles.userColumn)}>
            <Avatar src={row.original.avatar} />
            <div className='flex flex-col'>
              <Typography>{row.original.fullName}</Typography>
              <Typography>{row.original.username}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('email', {
        header: () => <span>Email</span>,
        cell: ({ row }) => <Typography className={styles.emailColumn}>{row.original.email}</Typography>
      }),
      columnHelper.accessor('role', {
        header: () => <span>Role</span>,
        cell: ({ row }) => (
          <div className='flex items-center'>
            <Icon
              className={userRoleObj[row.original.role].icon}
              sx={{ color: `var(--mui-palette-${userRoleObj[row.original.role].color}-main)` }}
            />
            <Typography className={classnames('capitalize', styles.roleColumn)}>{row.original.role}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('currentPlan', {
        header: () => <span>Plan</span>,
        cell: ({ row }) => (
          <Typography className={classnames('capitalize', styles.planColumn)}>{row.original.currentPlan}</Typography>
        )
      }),
      columnHelper.accessor('status', {
        header: () => <span>Status</span>,
        cell: ({ row }) => (
          <div className={classnames('flex items-center gap-3', styles.statusColumn)}>
            <Chip
              className='capitalize'
              label={row.original.status}
              color={userStatusObj[row.original.status]}
              size='small'
            />
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: () => <div>Actions</div>,
        cell: () => (
          <div className='flex items-center'>
            <i className='ri-delete-bin-7-line text-[22px]' />
            <i className='ri-edit-box-line text-[22px]' />
            <Link href='/apps/user/view/overview/' className='flex'>
              <i className='ri-eye-line text-[22px]' />
            </Link>
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data as UsersType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <>
      <Card>
        <CardHeader title='Filters' />
        <TableFilters setData={setData} tableData={tableData} />
        <Divider />
        <div className='flex items-center justify-between'>
          <Button color='secondary' variant='outlined' startIcon={<i className='ri-upload-2-line text-xl' />}>
            Export
          </Button>
          <div className='flex items-center gap-4'>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder='Search User'
            />
            <Button variant='contained' onClick={() => setAddUserOpen(!addUserOpen)}>
              Add New User
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className={tableStyles.tr}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className={tableStyles.th}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className={classnames({
                              'flex items-center': header.column.getIsSorted(),
                              'cursor-pointer select-none': header.column.getCanSort()
                            })}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <i className='ri-arrow-up-s-line text-xl' />,
                              desc: <i className='ri-arrow-down-s-line text-xl' />
                            }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames(tableStyles.tr, { selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <div className='flex items-center gap-3'>
          <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
            {'<<'}
          </button>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            {'<'}
          </button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {'>'}
          </button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
            {'>>'}
          </button>
          <div className='flex items-center gap-1'>
            <div>Page</div>
            <strong>{`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}</strong>
          </div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Card>
      <AddUserDrawer open={addUserOpen} handleClose={() => setAddUserOpen(!addUserOpen)} />
    </>
  )
}

export default UserListTable
