import * as d3 from 'd3'

const data = [20, 12, 16, 25, 20];

export default class D3Chart {
    constructor(element){
      const svg = d3.select(element)
        .append("svg")   //defaults to 300 x 150
            .attr("width", 500)
            .attr("height", 500)

      const rects = svg.selectAll("rect")   // all rect on the screen
            .data(data)

      rects.enter()
        .append("rect")
            .attr("x", (d, i) => i * 100)
            .attr("y", 50)
            .attr("width", 50)
            .attr("height", d => d)
            .attr("fill", "grey")

        // data.forEach((d,i) => {
        //     svg.append("rect")
        //     .attr("x", i * 100)
        //     .attr("y", 50)
        //     .attr("width", 50)
        //     .attr("height", d)
        //     .attr("fill", "grey")
        // })

    }
}