
import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import './Table.module.scss'

const GitHubContributionChart = ({ contributionData }) => {
    const startDate = startOfMonth(new Date("2023-07-01"));
    const endDate = endOfMonth(new Date("2024-06-01"));
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const renderChart = () => {
    return daysInMonth.map(day => {
      const matchingContributions = contributionData.filter(contrib => isSameDay(new Date(contrib.date), day));
      const totalContributions = matchingContributions.reduce((total, contrib) => total + contrib.count, 0);
      const cellClass = totalContributions > 0 ? 'touch' : 'dont-touch' ;
      

      return (
        <div key={day.toISOString()} className={`table ${cellClass}`}>
          {day.getDate() }
        </div>
      );
    });
  };

  return (
    
    <div className="contribution-chart">
      {renderChart()}
    </div>
  );
};

export default GitHubContributionChart;
