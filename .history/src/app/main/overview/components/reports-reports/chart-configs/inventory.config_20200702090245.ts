export const configurations = {
    caption: {
      text: "Material"
    },
    subcaption: {
      text: "Material Totals"
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
        title: "",
       },
    ]
  };


export const data = [{
    "label": "INC",
    "value": "810000",
    "link": "newchart-xml-inc"
  }, {
    "label": "EUR",
    "value": "620000",
    "link": "newchart-xml-eur"
  },
  {
    "label": "CAN",
    "value": "350000",
    "link": "newchart-xml-can"
  },
  {
    "label": "MSA",
    "value": "300000",
    "link": "newchart-xml-msa"
  },
  {
    "label": "DUB",
    "value": "450000",
    "link": "newchart-xml-dub"
  },
  {
    "label": "SIN",
    "value": "150000",
    "link": "newchart-xml-sin"
  }

];

export const linkedData = [{
    "id": "newchart-xml-apple",
    "linkedchart": {
      "chart": {
        "caption": "Apple Juice - Quarterly Sales",
        "subcaption": "Last year",
        "numberprefix": "$",
        "theme": "candy",
        "rotateValues": "0",
        "plottooltext": "$label, $dataValue,  $percentValue"
      },
      "data": [{
        "label": "Q1",
        "value": "157000"
      }, {
        "label": "Q2",
        "value": "172000"
      }, {
        "label": "Q3",
        "value": "206000"
      }, {
        "label": "Q4",
        "value": "275000"
      }]
    }
  }, {
    "id": "cranberry",
    "linkedchart": {
      "chart": {
        "caption": "Cranberry Juice - Quarterly Sales",
        "subcaption": "Last year",
        "numberprefix": "$",
        "theme": "fusion",
        "plottooltext": "$label, $dataValue,  $percentValue"
      },
      "data": [{
        "label": "Q1",
        "value": "102000"
      }, {
        "label": "Q2",
        "value": "142000"
      }, {
        "label": "Q3",
        "value": "187000"
      }, {
        "label": "Q4",
        "value": "189000"
      }]
    }
  }, {
    "id": "grapes",
    "linkedchart": {
      "chart": {
        "caption": "Grapes Juice - Quarterly Sales",
        "subcaption": "Last year",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0",
        "plottooltext": "$label, $dataValue,  $percentValue"
      },
      "data": [{
        "label": "Q1",
        "value": "45000"
      }, {
        "label": "Q2",
        "value": "72000"
      }, {
        "label": "Q3",
        "value": "95000"
      }, {
        "label": "Q4",
        "value": "108000"
      }]
    }
  }];
