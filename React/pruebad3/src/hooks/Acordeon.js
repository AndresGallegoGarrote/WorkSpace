
import React, {Fragment, useState}from 'react'
import "../styles/Acordeon.css"
import { useD3 } from './useD3'
import * as d3 from 'd3';
import { svg } from 'd3';



const Acordeon = () => {
  
  
  let datosAcordeon = [
     {
    titulo: 'Cloud',
    contenido: "primer contenido"},
    {
      titulo: 'Data',
      contenido: "Lorem ipsum dolor sit amet."
    },
    {titulo: 'Ai',
    contenido: "LO que toque"
    },
    {titulo:'Digital',
    contenido: "etcetera"
    }];
 
    const { titulo, contenido } = datosAcordeon;
    
  
  const titulos = document.getElementsByClassName("titulos")
  // const listas = document.querySelectorAll('li')
  
  
  let [isActiveCloud, setIsActiveCloud] = useState(false)
  let [isActiveData, setIsActiveData] = useState(false)
  let [isActiveAi, setIsActiveAi] = useState(false)
  let [isActiveDigital, setIsActiveDigital] = useState(false)


  const data = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
    {year: 1991, efficiency: 28.4, sales: 8185000},
    {year: 1992, efficiency: 27.9, sales: 8213000},
    {year: 1993, efficiency: 28.4, sales: 8518000},
    {year: 1994, efficiency: 28.3, sales: 8991000},
    {year: 1995, efficiency: 28.6, sales: 8620000},
    {year: 1996, efficiency: 28.5, sales: 8479000},
    {year: 1997, efficiency: 28.7, sales: 8217000},
    {year: 1998, efficiency: 28.8, sales: 8085000},
    {year: 1999, efficiency: 28.3, sales: 8638000},
    {year: 2000, efficiency: 28.5, sales: 8778000},
    {year: 2001, efficiency: 28.8, sales: 8352000},
    {year: 2002, efficiency: 29, sales: 8042000},
    {year: 2003, efficiency: 29.5, sales: 7556000},
    {year: 2004, efficiency: 29.5, sales: 7483000},
    {year: 2005, efficiency: 30.3, sales: 7660000},
    {year: 2006, efficiency: 30.1, sales: 7762000},
    {year: 2007, efficiency: 31.2, sales: 7562000},
    {year: 2008, efficiency: 31.5, sales: 6769000},
    {year: 2009, efficiency: 32.9, sales: 5402000},
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
  ]
  

  function BarChart({ data }) {
    const ref = useD3(
      (svg) => {
        const height = 500;
        const width = 500;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.year))
          .rangeRound([40, 850]) // 40, 470
          .padding(0.1);
  
        const y1 = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.sales)])
          .rangeRound([470, 20]); //470, 20
  
        const xAxis = (g) =>
          g.attr("transform", `translate(0,${height - margin.bottom})`).call(
            d3
              .axisBottom(x)
              .tickValues(
                d3
                  .ticks(...d3.extent(x.domain()), width / 40)
                  .filter((v) => x(v) !== undefined)
              )
              .tickSizeOuter(0)
          );
  
        const y1Axis = (g) =>
          g
            .attr("transform", `translate(${margin.left},0)`)
            .style("color", "steelblue")
            .call(d3.axisLeft(y1).ticks(null, "s"))
            .call((g) => g.select(".domain").remove())
            .call((g) =>
              g
                .append("text")
                .attr("x", -margin.left)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(data.y1)
            );
  
        svg.select(".x-axis").call(xAxis);
        svg.select(".y-axis").call(y1Axis);
  
        svg
          .select(".plot-area")
          .attr("fill", "steelblue")
          .selectAll(".bar")
          .data(data)
          .join("rect")
          .attr("class", "bar")
          .attr("x", (d) => x(d.year))
          .attr("width", x.bandwidth())
          .attr("y", (d) => y1(d.sales))
          .attr("height", (d) => y1(0) - y1(d.sales));
      },
      [data.length]
    );
  
    return (
      <svg
        ref={ref}
        style={{
          // visibility: "hidden",
          height: 500,
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    );
    
  }
 
  
 
  // let [grafico,setGrafico] = useState(false)
//  let mostrarGrafico = document.getElementById('grafico')
//  let verGrafico = document.getElementById('grafico')
  
 verGrafico.addEventListener('click', mostrar = () =>{
   document.querySelector('svg').style.visibility="hidden"
   console.log(svg.style.visibility)
 })
  

  return ( 
        <Fragment>
          
          <div className="acordeon" >
            
            
              <div className="acordeontitulo tituloCloud" onClick={() => {setIsActiveCloud(!isActiveCloud)}}>
                  <p className="titulos">{datosAcordeon[0].titulo}{isActiveCloud ? '-' : '+'}</p>
                    {isActiveCloud && <div id="contenidoAcordeonCloud">
                      <button id="grafico" onClick = {mostrar}><li>{datosAcordeon[0].contenido}</li></button></div>}
                      

              </div>
          
               <div className="acordeontitulo tituloData" onClick={() => setIsActiveData(!isActiveData)}>
                  <p className="titulos">{datosAcordeon[1].titulo}{isActiveData ? '-' : '+'}</p>
                    {isActiveData && <div className="contenidoAcordeonData">{datosAcordeon[1].contenido}</div>}
              </div>
               <div className="acordeontitulo tituloAi" onClick={() => setIsActiveAi(!isActiveAi)}>
                   <p className="titulos">{datosAcordeon[2].titulo}{isActiveAi ? '-' : '+'}</p>
                     {isActiveAi && <div className="contenidoAcordeonAi">{datosAcordeon[2].contenido}</div>}
               </div>
               <div className="acordeontitulo tituloDigital" onClick={() => setIsActiveDigital(!isActiveDigital)}>
                   <p className="titulos">{datosAcordeon[3].titulo}{isActiveDigital ? '-' : '+'}</p>
                     {isActiveDigital && <div className="contenidoAcordeonDigital">{datosAcordeon[3].contenido}</div>}
               </div>   
            </div> 
           
            
            
            
            
        </Fragment>
     );

}
 
export default Acordeon;