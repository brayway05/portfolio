// components/DataTable.tsx
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';

export type DataRow = {
  id: string;
  launch: string;
  version: string;
  height_km: number;
  latitude: number;
  longitude: number;
  velocity_kms: number;
};

interface DataTableProps {
  data: DataRow[];
  columns: ColumnDef<DataRow>[];
}

export function DataTable({ data, columns }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-64 w-full overflow-auto">
      <table className="w-full border text-left text-xs">
        <thead className="sticky z-10 bg-gray-100 text-black">
          {table
            .getHeaderGroups()
            .map((headerGroup: { id: React.Key | null | undefined; headers: any[] }) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header: {
                    id: React.Key | null | undefined;
                    column: { columnDef: { header: any } };
                    getContext: () => any;
                  }) => (
                    <th key={header.id} className="border-b p-3">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  )
                )}
              </tr>
            ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.map((row: { id: React.Key | null | undefined; getVisibleCells: () => any[] }) => (
              <tr key={row.id} className="border-b">
                {row
                  .getVisibleCells()
                  .map(
                    (cell: {
                      id: React.Key | null | undefined;
                      column: { columnDef: { cell: any } };
                      getContext: () => any;
                    }) => (
                      <td key={cell.id} className="p-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    )
                  )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
