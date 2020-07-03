export const turnsConfig = {
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
