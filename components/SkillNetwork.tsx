import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkgraph from 'highcharts/modules/networkgraph';
import { useTheme } from '../context/ThemeContext';

// Safe initialization of the networkgraph module
try {
    if (typeof networkgraph === 'function') {
        networkgraph(Highcharts);
    }
} catch (error) {
    console.error("Failed to initialize Networkgraph module:", error);
}

const SkillNetwork: React.FC = () => {
  const { theme } = useTheme();
  const [options, setOptions] = useState<Highcharts.Options>({});

  useEffect(() => {
    const isDark = theme === 'dark';

    // Colors compatible with both themes
    const colors = {
        ai: '#f97316',      // Orange
        geo: '#10b981',     // Emerald
        cloud: '#3b82f6',   // Blue
        viz: '#a855f7',     // Purple
        text: isDark ? '#ffffff' : '#171717',
        link: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
        halo: isDark ? '#000000' : '#ffffff'
    };

    const chartData = [
        // ROOT NODES
        { id: 'AI', marker: { radius: 25, fillColor: colors.ai }, color: colors.ai, name: 'AI & ML' },
        { id: 'GEO', marker: { radius: 20, fillColor: colors.geo }, color: colors.geo, name: 'Geospatial' },
        { id: 'CLOUD', marker: { radius: 20, fillColor: colors.cloud }, color: colors.cloud, name: 'Cloud Ops' },
        { id: 'VIZ', marker: { radius: 20, fillColor: colors.viz }, color: colors.viz, name: 'Viz' },

        // AI CHILDREN
        { from: 'AI', to: 'Computer Vision' },
        { from: 'AI', to: 'NLP & LLMs' },
        { from: 'AI', to: 'Multi-Agent' },
        { from: 'AI', to: 'PyTorch' },
        { from: 'AI', to: 'Video AI' },

        // GEO CHILDREN
        { from: 'GEO', to: 'Remote Sensing' },
        { from: 'GEO', to: 'Petroleum Eng' },
        { from: 'GEO', to: 'Reservoir Sim' },
        { from: 'GEO', to: 'GIS' },

        // CLOUD CHILDREN
        { from: 'CLOUD', to: 'Python' },
        { from: 'CLOUD', to: 'AWS / GCP' },
        { from: 'CLOUD', to: 'SQL & NoSQL' },
        { from: 'CLOUD', to: 'Docker' },

        // VIZ CHILDREN
        { from: 'VIZ', to: 'Observable HQ' },
        { from: 'VIZ', to: 'D3.js' },
        { from: 'VIZ', to: 'Storytelling' },
        { from: 'VIZ', to: 'Tableau' },

        // CROSS CONNECTIONS (The Mesh)
        { from: 'Python', to: 'AI' },         // Python connects Cloud -> AI
        { from: 'Python', to: 'GEO' },        // Python connects Cloud -> Geo
        { from: 'Video AI', to: 'VIZ' },      // Video connects AI -> Viz
        { from: 'Remote Sensing', to: 'AI' }, // RS connects Geo -> AI
    ];

    setOptions({
      chart: {
        type: 'networkgraph',
        backgroundColor: 'transparent',
        height: '100%',
        style: {
            fontFamily: 'Inter, sans-serif'
        }
      },
      title: {
        text: undefined
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        networkgraph: {
          keys: ['from', 'to'],
          layoutAlgorithm: {
            enableSimulation: true,
            friction: -0.9,
            integration: 'verlet',
            linkLength: 60
          },
          link: {
            color: colors.link,
            width: 1.5
          },
          dataLabels: {
            enabled: true,
            linkFormat: '',
            allowOverlap: false,
            style: {
                fontSize: '11px',
                color: colors.text,
                textOutline: `3px ${colors.halo}`,
                fontWeight: '600'
            }
          },
          marker: {
            lineWidth: 2,
            lineColor: isDark ? '#000' : '#fff' // Border around dots
          }
        }
      },
      credits: { enabled: false },
      series: [{
        data: chartData,
        type: 'networkgraph',
        name: 'Skills',
        nodes: chartData.filter(d => d.id).map(d => ({
            id: d.id,
            marker: d.marker,
            color: d.color,
            name: d.name,
            dataLabels: {
                style: { fontSize: '14px', fontWeight: 'bold', color: d.color } // Root nodes colored
            }
        }))
      }]
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

export default SkillNetwork;