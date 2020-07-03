export const configurations = {
    caption: {
      text: "Stock Turns"
    },
    subcaption: {
      text: "Stainless, Nickel, Low Alloy"
    },
    yaxis: [
       {
        plot: [
        "Stainless",
        "Nickel",
        "Low Alloy",
        {
          value: "Stainless Target",
          type: "line"
        },
        {
          value: "Nickel Target",
          type: "line"
        },
        {
          value: "Low Alloy Target",
          type: "line"
        }
      ],
        plottype: "column",
        title: "Turns Achieved",
       },
    ]
  };

export const schema = [
    {
    "name": "Date",
    "type": "date",
    "format": "%y-%b"
    },
    {
    "name": "Stainless",
    "type": "number"
    },
    {
    "name": "Nickel",
    "type": 'number'
    },
    {
    "name": "Low Alloy",
    "type": "number"
    },
    {
    "name": "Stainless Target",
    "type": "number"
    },
    {
    "name": "Nickel Target",
    "type": "number"
    },
    {
    "name": "Low Alloy Target",
    "type": "number"
    },
];

export const data = [];