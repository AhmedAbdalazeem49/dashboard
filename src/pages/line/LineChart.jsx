import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Header from "../../components/Header";
const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const data = [
    {
      id: "japan",
      color: "hsl(107, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 186,
        },
        {
          x: "helicopter",
          y: 247,
        },
        {
          x: "boat",
          y: 59,
        },
        {
          x: "train",
          y: 93,
        },
        {
          x: "subway",
          y: 113,
        },
        {
          x: "bus",
          y: 29,
        },
        {
          x: "car",
          y: 59,
        },
        {
          x: "moto",
          y: 237,
        },
        {
          x: "bicycle",
          y: 250,
        },
        {
          x: "horse",
          y: 242,
        },
        {
          x: "skateboard",
          y: 251,
        },
        {
          x: "others",
          y: 119,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(212, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 94,
        },
        {
          x: "helicopter",
          y: 102,
        },
        {
          x: "boat",
          y: 45,
        },
        {
          x: "train",
          y: 163,
        },
        {
          x: "subway",
          y: 223,
        },
        {
          x: "bus",
          y: 182,
        },
        {
          x: "car",
          y: 127,
        },
        {
          x: "moto",
          y: 166,
        },
        {
          x: "bicycle",
          y: 91,
        },
        {
          x: "horse",
          y: 233,
        },
        {
          x: "skateboard",
          y: 177,
        },
        {
          x: "others",
          y: 217,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(147, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 274,
        },
        {
          x: "helicopter",
          y: 249,
        },
        {
          x: "boat",
          y: 191,
        },
        {
          x: "train",
          y: 233,
        },
        {
          x: "subway",
          y: 266,
        },
        {
          x: "bus",
          y: 58,
        },
        {
          x: "car",
          y: 145,
        },
        {
          x: "moto",
          y: 114,
        },
        {
          x: "bicycle",
          y: 199,
        },
        {
          x: "horse",
          y: 136,
        },
        {
          x: "skateboard",
          y: 285,
        },
        {
          x: "others",
          y: 97,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(291, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 293,
        },
        {
          x: "helicopter",
          y: 162,
        },
        {
          x: "boat",
          y: 158,
        },
        {
          x: "train",
          y: 22,
        },
        {
          x: "subway",
          y: 194,
        },
        {
          x: "bus",
          y: 235,
        },
        {
          x: "car",
          y: 212,
        },
        {
          x: "moto",
          y: 37,
        },
        {
          x: "bicycle",
          y: 106,
        },
        {
          x: "horse",
          y: 209,
        },
        {
          x: "skateboard",
          y: 115,
        },
        {
          x: "others",
          y: 121,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(316, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 194,
        },
        {
          x: "helicopter",
          y: 99,
        },
        {
          x: "boat",
          y: 94,
        },
        {
          x: "train",
          y: 127,
        },
        {
          x: "subway",
          y: 50,
        },
        {
          x: "bus",
          y: 61,
        },
        {
          x: "car",
          y: 264,
        },
        {
          x: "moto",
          y: 185,
        },
        {
          x: "bicycle",
          y: 164,
        },
        {
          x: "horse",
          y: 287,
        },
        {
          x: "skateboard",
          y: 69,
        },
        {
          x: "others",
          y: 111,
        },
      ],
    },
  ];
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      {isDashboard ? null : (
        <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      )}
      <ResponsiveLine
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -44,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
