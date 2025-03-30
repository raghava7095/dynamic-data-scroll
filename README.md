
# Data Visualization Dashboard

This is a comprehensive data visualization dashboard built with React and TypeScript. The dashboard displays various insights and trends from a dataset, with interactive charts and filtering capabilities.

## Features

- Interactive charts showing relationships between key variables (intensity, likelihood, relevance)
- Filtering options for all major variables (end year, topics, sector, region, PEST, source, country, city)
- Responsive design for all screen sizes
- Data tables for detailed information

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Visualization**: Recharts
- **UI Components**: shadcn-ui

## Installation and Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Data Structure

The application uses a JSON dataset with the following key variables:
- Intensity
- Likelihood
- Relevance
- Year
- Country
- Topics
- Region
- City
- Sector
- PEST (Political, Economic, Social, Technological)
- Source

## Project Structure

- `src/data/` - Contains the dataset
- `src/context/` - Contains the data context for state management
- `src/components/` - UI components including charts and filters
- `src/components/charts/` - Individual chart components
- `src/pages/` - Page components

## Dashboard Sections

1. **Overview** - Key metrics and statistics
2. **Charts** - Visual representations of the data
   - Intensity by Sector
   - Likelihood Distribution
   - Regional Distribution
   - Topic Distribution
   - Sector Comparison
3. **Data Table** - Detailed view of filtered data

## Filtering Capabilities

Users can filter the data by:
- End Year
- Topic
- Sector
- Region
- PEST
- Source
- Country
- City

All filters can be combined to drill down into specific subsets of the data.
