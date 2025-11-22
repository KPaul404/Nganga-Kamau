
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import sunburst from 'highcharts/modules/sunburst';
import { useTheme } from '../context/ThemeContext';

// Safe initialization of the sunburst module
try {
    if (typeof sunburst === 'function') {
        sunburst(Highcharts);
    }
} catch (error) {
    console.error("Failed to initialize Sunburst module:", error);
}

const SunburstChart: React.FC = () => {
  const { theme } = useTheme();
  const [options, setOptions] = useState<Highcharts.Options>({});

  // Root name set to empty string to remove "My Expertise" from center
  const data = [
    {"id": "root", "name": ""}, 
    {"id": "ai", "name": "AI & ML", "parent": "root", "color": "#f97316"}, 
    {"name": "Computer Vision", "parent": "ai", "value": 10}, 
    {"name": "Multi-Agent", "parent": "ai", "value": 8}, 
    {"name": "NLP & LLMs", "parent": "ai", "value": 9}, 
    {"name": "Video Understanding", "parent": "ai", "value": 9}, 
    {"name": "PyTorch", "parent": "ai", "value": 8}, 
    {"id": "geo", "name": "Geospatial", "parent": "root", "color": "#22c55e"}, 
    {"name": "Remote Sensing", "parent": "geo", "value": 10}, 
    {"name": "Reservoir Sim", "parent": "geo", "value": 6}, 
    {"name": "GIS Mapping", "parent": "geo", "value": 8}, 
    {"id": "dev", "name": "Cloud & Data", "parent": "root", "color": "#3b82f6"}, 
    {"name": "Python", "parent": "dev", "value": 10}, 
    {"name": "SQL & NoSQL", "parent": "dev", "value": 7}, 
    {"name": "AWS / GCP", "parent": "dev", "value": 6}, 
    {"name": "Docker", "parent": "dev", "value": 5}, 
    {"id": "viz", "name": "Visualization", "parent": "root", "color": "#a855f7"}, 
    {"name": "Observable", "parent": "viz", "value": 9}, 
    {"name": "D3.js", "parent": "viz", "value": 7}, 
    {"name": "Tableau", "parent": "viz", "value": 6}, 
    {"name": "Storytelling", "parent": "viz", "value": 9}
  ];

  useEffect(() => {
    const labelColor = theme === 'dark' ? "#ffffff" : "#000000";

    setOptions({
      chart: {
        height: '100%',
        backgroundColor: 'transparent',
        style: {
            fontFamily: 'Inter, sans-serif'
        }
      },
      accessibility: {
        enabled: false
      },
      breadcrumbs: {
        style: {
            color: labelColor
        },
        itemStyle: {
            color: labelColor,
            fontWeight: 'normal',
            textDecoration: 'none'
        },
        activeItemStyle: {
            color: labelColor,
            fontWeight: 'bold',
            textDecoration: 'none'
        },
        separator: {
            style: {
                color: labelColor
            }
        },
        buttonTheme: {
            fill: 'transparent',
            style: {
                color: labelColor
            },
            states: {
                hover: {
                    fill: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    style: {
                        color: labelColor
                    }
                },
                select: {
                    fill: 'transparent',
                    style: {
                        color: labelColor
                    }
                }
            }
        }
      },
      series: [{
        name: 'Skills',
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: "pointer",
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 12
            },
            rotationMode: 'circular',
            style: { 
                textOutline: "none", 
                color: labelColor,
                fontWeight: 'normal',
                fontSize: '10px',
                width: '50px'
            },
            color: labelColor,
            distance: 5
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 50
                },
                style: {
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: labelColor,
                    textOutline: 'none'
                },
                color: labelColor
            }
        }, {
            level: 2,
            colorByPoint: true
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }]
      }],
      title: { 
          text: ''
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b>'
      },
      credits: { enabled: false }
    });
  }, [theme]);

  return (
    <div className="w-full h-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default SunburstChart;
