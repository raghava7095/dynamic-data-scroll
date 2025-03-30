
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import data from '../data/jsondata.json';

export interface DataItem {
  end_year: number | null;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: number;
  impact: string;
  added: string;
  published: string;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
  city: string;
}

interface DataContextType {
  data: DataItem[];
  filteredData: DataItem[];
  filters: {
    endYear: string;
    topic: string;
    sector: string;
    region: string;
    pestle: string;
    source: string;
    country: string;
    city: string;
  };
  uniqueValues: {
    endYears: string[];
    topics: string[];
    sectors: string[];
    regions: string[];
    pestles: string[];
    sources: string[];
    countries: string[];
    cities: string[];
  };
  setFilter: (filterName: string, value: string) => void;
  clearFilters: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allData] = useState<DataItem[]>(data);
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);
  const [filters, setFilters] = useState({
    endYear: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    country: '',
    city: '',
  });

  // Extract unique values for filter dropdowns
  const uniqueValues = {
    endYears: [...new Set(allData.filter(item => item.end_year !== null).map(item => item.end_year?.toString() || ''))].sort(),
    topics: [...new Set(allData.map(item => item.topic))].sort(),
    sectors: [...new Set(allData.map(item => item.sector))].sort(),
    regions: [...new Set(allData.map(item => item.region))].sort(),
    pestles: [...new Set(allData.map(item => item.pestle))].sort(),
    sources: [...new Set(allData.map(item => item.source))].sort(),
    countries: [...new Set(allData.map(item => item.country))].sort(),
    cities: [...new Set(allData.map(item => item.city))].sort(),
  };

  // Filter data based on selected filters
  useEffect(() => {
    let result = allData;

    if (filters.endYear && filters.endYear !== 'all') {
      result = result.filter(item => item.end_year?.toString() === filters.endYear);
    }
    if (filters.topic && filters.topic !== 'all') {
      result = result.filter(item => item.topic === filters.topic);
    }
    if (filters.sector && filters.sector !== 'all') {
      result = result.filter(item => item.sector === filters.sector);
    }
    if (filters.region && filters.region !== 'all') {
      result = result.filter(item => item.region === filters.region);
    }
    if (filters.pestle && filters.pestle !== 'all') {
      result = result.filter(item => item.pestle === filters.pestle);
    }
    if (filters.source && filters.source !== 'all') {
      result = result.filter(item => item.source === filters.source);
    }
    if (filters.country && filters.country !== 'all') {
      result = result.filter(item => item.country === filters.country);
    }
    if (filters.city && filters.city !== 'all') {
      result = result.filter(item => item.city === filters.city);
    }

    setFilteredData(result);
  }, [filters, allData]);

  const setFilter = (filterName: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      endYear: '',
      topic: '',
      sector: '',
      region: '',
      pestle: '',
      source: '',
      country: '',
      city: '',
    });
  };

  return (
    <DataContext.Provider
      value={{
        data: allData,
        filteredData,
        filters,
        uniqueValues,
        setFilter,
        clearFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
