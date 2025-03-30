
import React from 'react';
import { useData } from '@/context/DataContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Filter, RefreshCw } from 'lucide-react';

const FilterPanel: React.FC = () => {
  const { filters, uniqueValues, setFilter, clearFilters } = useData();

  return (
    <Card className="p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter size={18} />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearFilters}
          className="flex items-center gap-1"
        >
          <RefreshCw size={14} />
          <span>Reset</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* End Year Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">End Year</label>
          <Select value={filters.endYear} onValueChange={(value) => setFilter('endYear', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select end year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Years</SelectItem>
                {uniqueValues.endYears.map((year) => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Topic Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Topic</label>
          <Select value={filters.topic} onValueChange={(value) => setFilter('topic', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Topics</SelectItem>
                {uniqueValues.topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Sector Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Sector</label>
          <Select value={filters.sector} onValueChange={(value) => setFilter('sector', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Sectors</SelectItem>
                {uniqueValues.sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Region Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Region</label>
          <Select value={filters.region} onValueChange={(value) => setFilter('region', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Regions</SelectItem>
                {uniqueValues.regions.map((region) => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* PEST Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">PEST</label>
          <Select value={filters.pestle} onValueChange={(value) => setFilter('pestle', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select PEST" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All PEST</SelectItem>
                {uniqueValues.pestles.map((pestle) => (
                  <SelectItem key={pestle} value={pestle}>{pestle}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Source Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Source</label>
          <Select value={filters.source} onValueChange={(value) => setFilter('source', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Sources</SelectItem>
                {uniqueValues.sources.map((source) => (
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Country Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">Country</label>
          <Select value={filters.country} onValueChange={(value) => setFilter('country', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Countries</SelectItem>
                {uniqueValues.countries.map((country) => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* City Filter */}
        <div>
          <label className="text-sm font-medium mb-1 block">City</label>
          <Select value={filters.city} onValueChange={(value) => setFilter('city', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="">All Cities</SelectItem>
                {uniqueValues.cities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;
