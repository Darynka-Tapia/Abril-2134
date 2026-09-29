import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { BarChart, type BarLabelProps, type BarProps } from '@mui/x-charts/BarChart';
import { useAnimate, useAnimateBar, useDrawingArea } from '@mui/x-charts/hooks';
import { PiecewiseColorLegend } from '@mui/x-charts/ChartsLegend';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import Box from '@mui/material/Box';
//import votesTurnout from '../dataset/votes.json';

export default function ShinyBarChartHorizontal() {
  const victories = [
  {
    "snailName": "Snail 1",
    "victories": 2
  },
  {
    "snailName": "Snail 2",
    "victories": 1
  },
  {
    "snailName": "Snail 3",
    "victories": 3
  },
  {
    "snailName": "Snail 4",
    "victories": 0
  },
  {
    "snailName": "Snail 5",
    "victories": 1
  },
  {
    "snailName": "Snail 6",
    "victories": 0
  },
]

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={300}
        dataset={victories}
        series={[
          {
            id: 'victories',
            dataKey: 'victories',
            stack: 'voter victories',
            valueFormatter: (value: number | null) => `${value}`,
            barLabel: (v) => `${v.value}%`,
          },
        ]}
        layout="horizontal"
        xAxis={[
          {
            id: 'color',
            min: 0,
            max: 6,
            valueFormatter: (value: number) => `${value}`,
            tickLabelStyle: {
              fill: '#ffffff',
            },
          },
        ]}
        yAxis={[
          {
            scaleType: 'band',
            dataKey: 'snailName',
            width: 140,
            tickLabelStyle: {
              fill: '#ffffff',
            },
          },
        ]}
        slots={{
          legend: PiecewiseColorLegend,
          barLabel: BarLabelAtBase,
          bar: BarShadedBackground,
        }}
        slotProps={{
          legend: {
            axisDirection: 'x',
            markType: 'square',
            labelPosition: 'inline-start',
            labelFormatter: ({ index }) => {
              if (index === 0) {
                return 'lowest victories';
              }
              if (index === 1) {
                return 'average';
              }
              return 'highest victories';
            },
          },
        }}
      />
    </Box>
  );
}

export function BarShadedBackground(props: BarProps) {
  const {
    ownerState,
    ...other
  } = props;
  const theme = useTheme();

  const animatedProps = useAnimateBar(props);
  const { width } = useDrawingArea();
  return (
    <React.Fragment>
      <rect
        {...other}
        opacity={theme.palette.mode === 'light' ? 0.05 : 0.1}
        x={other.x}
        width={width}
      />
      <rect
        {...other}
        filter={ownerState.isHighlighted ? 'brightness(120%)' : undefined}
        opacity={ownerState.isFaded ? 0.3 : 1}
        data-highlighted={ownerState.isHighlighted || undefined}
        data-faded={ownerState.isFaded || undefined}
        {...animatedProps}
      />
    </React.Fragment>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme).palette.common.white,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'start',
  dominantBaseline: 'central',
  pointerEvents: 'none',
  fontWeight: 600,
}));

function BarLabelAtBase(props: BarLabelProps) {
  const {
    xOrigin,
    y,
    height,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: xOrigin + 8, y: y + height / 2 },
    {
      initialProps: { x: xOrigin, y: y + height / 2 },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element: SVGTextElement, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return <Text {...otherProps} {...animatedProps} />;
}
