
import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DataTable: React.FC = () => {
  const { filteredData } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Topic</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-center">Intensity</TableHead>
              <TableHead className="text-center">Likelihood</TableHead>
              <TableHead className="text-center">Relevance</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.topic}</TableCell>
                  <TableCell>{item.sector}</TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell className="text-center">{item.intensity}</TableCell>
                  <TableCell className="text-center">{item.likelihood}</TableCell>
                  <TableCell className="text-center">{item.relevance}</TableCell>
                  <TableCell>{item.end_year || 'N/A'}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.source}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-4 text-muted-foreground">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {filteredData.length > 0 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </Button>
            <div className="text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
