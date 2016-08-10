/**
 * Created by HP-PC on 27-07-2016.
 */

//Creating check boxes that provide interactivity for the scatter plot

$(function () {
    var timer = '';
    var SpecTime = '';

    var PlayAction = true;
    var controller = 0;
    var speed = 800;
    var ClickBait = false;
    var GlobalID = '';
    var colorBasin = ['#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8','#a7e4ff','#ffbfda',
        '#def5fb','#ccc7ff','#fbc0d6','#faf7d8','#faf7d8','#bbd8fa','#bbd8fa','#bbd8fa','#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8'];2

    var colorscale = ['#ea9490','#f79a8d','#fec49b','#fed7a3','#feecb8','#ffffd7'];

    d3.csv('csv_files/RWS.csv',function (data) {

        //Ima define the 5 areas necessary for the graph

        var ScatterPlotLegend = d3.select('#PollutionChecks')
            .append('div')
            .style('margin-left','18px')
            .style('margin-bottom','20px')
            .style('font-size','15px')
            .text('Pollutant')
            .style('font-family','Lato Black');

        var ScatterPlotCheck = d3.select('#PollutionChecks')
            .append('form')
            .attr('role','form');

        var SpeedChange = d3.select('#PollutionChecks')
            .append('div')
            .style('margin-top','20px')
            .style('margin-left','15px')
            .attr('class','container')
            .append('div')
            .attr('class','row');

        var LeftTabSpeed = SpeedChange.append('div')
            .style('font-family','Lato Black')
            .text('Speed');

        var RightTabFunction = SpeedChange.append('div')
            .append('div')
            .style('margin-top','20px')
            .attr('class','btn-group')
            .attr('data-toggle','buttons');

        RightTabFunction.append('label')
            .text('1')
            .style('font-size','8px')
            .attr('id','s1')
            .attr('class','btn btn-primary')
            .append('input')
            .attr('type','radio')
            .attr('name','options')
            .attr('id','speed1')
            .attr('autocomplete','off')
            .on('click',function () {
                console.log('hello');
                d3.select('#s3').attr('class','btn btn-primary');
                d3.select('#s2').attr('class','btn btn-primary');
                d3.select('#s1').attr('class','btn btn-primary active');

                if (d3.select('#PlayButton').text()=='Pause') {
                    clearInterval(timer);
                    timer = setInterval(AnalysisThing,2400);
                    speed = 2400;
                }
            });

        //Append 5 subgraphs to the thing, which scale according to on click, how do I scale them?
        //Change the axis which they are dependant on
        //And this will show as a graph in the background (but it will have to be scaled according to the X axis)

        RightTabFunction.append('label')
            .text('2')
            .style('font-size','8px')
            .attr('id','s2')
            .attr('class','btn btn-primary ')
            .append('input')
            .attr('type','radio')
            .attr('name','options')
            .attr('id','speed2')
            .attr('autocomplete','off')
            .on('click',function () {
                d3.select('#s1').attr('class','btn btn-primary');
                d3.select('#s3').attr('class','btn btn-primary');
                d3.select('#s2').attr('class','btn btn-primary active');

                if (d3.select('#PlayButton').text()=='Pause') {
                    clearInterval(timer);
                    timer = setInterval(AnalysisThing, 1600);
                    speed = 1600;
                }
            });

        RightTabFunction.append('label')
            .text('3')
            .style('font-size','8px')
            .attr('id','s3')
            .attr('class','btn btn-primary active')
            .append('input')
            .attr('type','radio')
            .attr('name','options')
            .attr('id','speed3')
            .attr('autocomplete','off')
            .on('click',function () {
                d3.select('#s1').attr('class','btn btn-primary');
                d3.select('#s2').attr('class','btn btn-primary');
                d3.select('#s3').attr('class','btn btn-primary active');

                if (d3.select('#PlayButton').text()=='Pause') {
                    clearInterval(timer);
                    timer = setInterval(AnalysisThing, 800);
                    speed = 800;
                }
            });


        var Legends = d3.select('#PollutionChecks')
            .append('div')
            .style('margin-top','20px')
            .attr('class','container')
            .attr('id','LegendSim')
            .append('div')
            .attr('class','row');

        var Leftlegend = Legends.append('div')
            .attr('class','col-sm-6');

        var RightLegend = Legends.append('div')
            .attr('class','col-sm-6');

        Leftlegend.append('div')
            .style('font-family','Lato Black')
            .style('margin-bottom','20px')
            .text('Legend');

        Leftlegend.append('div')
            .style('background-color','#ff6961')
            .style('width','20px')
            .style('height','20px')
            .style('margin-bottom','10px')
            .style('border-radius','25px');

        Leftlegend.append('div')
            .style('background-color','#588ebb')
            .style('width','20px')
            .style('height','20px')
            .style('margin-bottom','10px')
            .style('border-radius','25px');

        Leftlegend.append('div')
            .style('background-color','#565c6d')
            .style('width','20px')
            .style('height','20px')
            .style('margin-bottom','10px')
            .style('border-radius','25px');

        RightLegend.append('div')
            .style('height','30px')
            .style('margin-top','40px')
            .text('Polluted');

        RightLegend.append('div')
            .style('height','30px')
            .style('margin-top','5px')
            .text('Clean');

        RightLegend.append('div')
            .style('height','30px')
            .style('margin-top','3px')
            .text('Inconclusive');

        var LegendGradient = d3.select('#PollutionChecks')
            .append('div')
            .style('margin-top','20px')
            .attr('class','container')
            .attr('id','LegendGradient')
            .append('div')
            .attr('class','row');

        var LeftGradient = Legends.append('div')
            .attr('class','col-sm-6');

        var RightGradient = Legends.append('div')
            .attr('class','col-sm-6');

        LeftGradient.append('div')
            .style('font-family','Lato Black')
            .text('Color Scale')
            .style('margin-top','20px')
            .style('margin-bottom','20px');

        LeftGradient.append('div')
            .style('background-color',colorscale[5])
            .style('width','30px')
            .style('height','30px');

        LeftGradient.append('div')
            .style('background-color',colorscale[4])
            .style('width','30px')
            .style('height','30px');

        LeftGradient.append('div')
            .style('background-color',colorscale[3])
            .style('width','30px')
            .style('height','30px');

        LeftGradient.append('div')
            .style('background-color',colorscale[2])
            .style('width','30px')
            .style('height','30px');

        LeftGradient.append('div')
            .style('background-color',colorscale[1])
            .style('width','30px')
            .style('height','30px');

        LeftGradient.append('div')
            .style('background-color',colorscale[0])
            .style('width','30px')
            .style('height','30px');

        RightGradient.append('div')
            .style('height','30px')
            .style('margin-top','95px')
            .text('I');

        RightGradient.append('div')
            .style('height','30px')
            .text('II');

        RightGradient.append('div')
            .style('height','30px')
            .text('III');

        RightGradient.append('div')
            .style('height','30px')
            .text('IV');

        RightGradient.append('div')
            .style('height','30px')
            .text('V');

        RightGradient.append('div')
            .style('height','30px')
            .text('$V');


        var DivScatterPlotCheckpH = ScatterPlotCheck.append('div')
            .attr('class','checkbox checkbox-info');

        DivScatterPlotCheckpH.append('input')
            .attr('type','radio')
            .attr('name','radioScatter')
            .property('checked',true)
            .on('click',function () {
                controller = 0;
                x.domain([5,10]).range([0,width]);
                xAxis.scale(x);
                d3.select('.x.axisSC').call(xAxis);
                d3.select('.labelX').text('pH');

                rect5.transition().duration(500).attr('width',800);
                rect4.transition().duration(500).attr('width',800);
                rect3.transition().duration(500).attr('width',800);
                rect2.transition().duration(500).attr('width',640).attr('fill',colorscale[5]);
                rect1.transition().duration(500).attr('width',160).attr('fill',colorscale[3]);
            })
            .attr('id','pHScatter');

        DivScatterPlotCheckpH.append('label')
            .attr('for','pHScatter')
            .text('pH');

        var DivScatterPlotCheckSol = ScatterPlotCheck.append('div')
            .attr('class','checkbox checkbox-info');

        DivScatterPlotCheckSol.append('input')
            .attr('type','radio')
            .attr('name','radioScatter')
            .on('click',function () {
                controller = 1;
                x.domain([0,18]).range([width,0]);
                xAxis.scale(x);
                d3.select('.x.axisSC').call(xAxis);
                d3.select('.labelX').text('Solubility');

                rect5.transition().duration(500).attr('width',705);
                rect4.transition().duration(500).attr('width',660);
                rect3.transition().duration(500).attr('width',580);
                rect2.transition().duration(500).attr('width',530).attr('fill',colorscale[4]);
                rect1.transition().duration(500).attr('width',470).attr('fill',colorscale[5]);

            })
            .attr('id','SolScatter');

        DivScatterPlotCheckSol.append('label')
            .attr('for','SolScatter')
            .text('Solubility');

        var DivScatterPlotCheckAmm = ScatterPlotCheck.append('div')
            .attr('class','checkbox checkbox-info');

        DivScatterPlotCheckAmm.append('input')
            .attr('type','radio')
            .attr('name','radioScatter')
            .on('click',function () {
                controller = 2;
                x.domain([0,15]).range([0,width]);
                xAxis.scale(x);
                d3.select('.x.axisSC').call(xAxis);
                d3.select('.labelX').text('Ammonium');

                rect5.transition().duration(500).attr('width',106);
                rect4.transition().duration(500).attr('width',78);
                rect3.transition().duration(500).attr('width',48);
                rect2.transition().duration(500).attr('width',23).attr('fill',colorscale[4]);
                rect1.transition().duration(500).attr('width',12).attr('fill',colorscale[5]);
            })
            .attr('id','AmmScatter');

        DivScatterPlotCheckAmm.append('label')
            .attr('for','AmmScatter')
            .text('Ammonium');

        var DivScatterPlotCheckPer = ScatterPlotCheck.append('div')
            .attr('class','checkbox checkbox-info');

        DivScatterPlotCheckPer.append('input')
            .attr('type','radio')
            .attr('name','radioScatter')
            .on('click',function () {
                controller = 3;
                x.domain([0,15]).range([0,width]);
                xAxis.scale(x);
                d3.select('.x.axisSC').call(xAxis);
                d3.select('.labelX').text('Permanganate');

                rect5.transition().duration(500).attr('width',106);
                rect4.transition().duration(500).attr('width',78);
                rect3.transition().duration(500).attr('width',48);
                rect2.transition().duration(500).attr('width',23).attr('fill',colorscale[4]);
                rect1.transition().duration(500).attr('width',12).attr('fill',colorscale[5]);
            })
            .attr('id','PerScatter');

        DivScatterPlotCheckPer.append('label')
            .attr('for','PerScatter')
            .text('Permanganate');

        var DivScatterPlotCheckTOC = ScatterPlotCheck.append('div')
            .attr('class','checkbox checkbox-info');

        DivScatterPlotCheckTOC.append('input')
            .attr('type','radio')
            .attr('name','radioScatter')
            .on('click',function () {
                controller = 4;
                x.domain([0,3]).range([0,width]);
                xAxis.scale(x);
                d3.select('.x.axisSC').call(xAxis);
                d3.select('.labelX').text('TOC');

                rect5.transition().duration(500).attr('width',530);
                rect4.transition().duration(500).attr('width',400);
                rect3.transition().duration(500).attr('width',260);
                rect2.transition().duration(500).attr('width',130).attr('fill',colorscale[4]);
                rect1.transition().duration(500).attr('width',50).attr('fill',colorscale[5]);
            })
            .attr('id','TOCScatter');

        DivScatterPlotCheckTOC.append('label')
            .attr('for','TOCScatter')
            .text('TOC');

        var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        }, width = 860 - margin.left - margin.right, height = 600 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain([5,10])
            .range([0,width]);

        var y = d3.scale.linear()
            .domain([0,60])
            .range([height,0]);


        var formatCurrency = d3.format(',');

        var div = d3.select('body')
            .append('div')
            .attr('id','schoolinfo')
            .style('opacity',0);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select("#MainScatter")
            .append("svg")
            .attr("class", "chart")
            .attr("viewBox", "0 0 860 600")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var rect6 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',800)
            .attr('height',550)
            .attr('fill',colorscale[0]);

        var rect5 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',800)
            .attr('height',550)
            .attr('fill',colorscale[1]);

        var rect4 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',800)
            .attr('height',550)
            .attr('fill',colorscale[2]);

        var rect3 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',800)
            .attr('height',550)
            .attr('fill',colorscale[3]);

        var rect2 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',640)
            .attr('height',550)
            .attr('fill',colorscale[5]);

        var rect1 = svg.append('rect')
            .attr('x',0)
            .attr('y',0)
            .attr('width',160)
            .attr('height',550)
            .attr('fill',colorscale[3]);

        var Slider = d3.select('#MainScatter')
            .append('input')
            .attr('id','slider')
            .attr('type','range')
            .attr('min',1)
            .attr('max',173)
            .attr('value',1)
            .attr('step',1);

        var SliderLabel = d3.select('#MainScatter')
            .append('label')
            .attr('id','LabelSlider')
            .style('font-size','20px')
            .attr('class','label label-success')
            .text("1st Dec, 16");

        var InteractiveButtons = d3.select('#MainScatter')
            .append('div')
            .style('margin-top','30px')
            .style('padding','20px')
            .style('background-color','#edeef3')
            .style('border-radius','5px')
            .attr('id','InteractiveButtonsScatterPlot');

        //x axis
        svg.append("g")
            .attr("class", "x axisSC")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("class", "labelX")
            .attr("x", width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("pH");

        //y axis
        svg.append("g")
            .attr("class", "y axisSC")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Rainfall");

        var Previous = null;
        var LineBasin = [];
        var itr = 0;

        svg.selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class','dot')
            .attr('r',5)
            .attr('id',function (d) {
                if (Previous) {
                    if (d.basing == Previous[2]) {

                        var line = svg.append('line')
                            .attr('x1',function () {
                                if (+Previous[0]) {
                                    return x(Previous[0])
                                } else {
                                    return x(7);
                                }
                            })
                            .attr('x2',function () {
                                if (+d['pH1']) {
                                    return x(+d['pH1'])
                                }
                            })
                            .attr('y1',function () {
                                if (+Previous[1]) {
                                    return y(+Previous[1])
                                }
                            })
                            .attr('y2',function () {
                                if (+d['rain1']) {
                                    return y(+d['rain1'])
                                }
                            })
                            .style('stroke-width','2px')
                            .style('stroke',function () {
                                return colorBasin[itr];
                            });

                        LineBasin.push(line);
                    } else {
                        itr++;
                    }


                }
                Previous = [d['pH1'],d['rain1'],d.basing];
                return ('Cir'+d.id);
            })
            .attr('cx',function (d) {
                if (+d['pH1']) {
                    return x(+d['pH1']);
                }
            })
            .attr('cy',function (d) {
                console.log(+d['rain1']);
                if (+d['rain1']>=0) {
                    //console.log('work');
                    return y(+d['rain1']);
                }
            })
            .on('mouseover',function (d) {
                if(PlayAction == true) {
                    if (ClickBait) {

                    } else {
                        d3.select(this).attr('r', 9);
                        d3.select('#ValueRainfall').text(d['rain'+counter]);
                        d3.select('#ValuePlace').text(d.place);
                        d3.select('#ValueProvince').text(d.province);
                        var BasinSplit = d.basin.split('-').join('');
                        d3.select('#ValueBasin').text(BasinSplit.charAt(0).toUpperCase()+BasinSplit.substr(1));
                        if (controller == 0)
                            d3.select('#ValuePollutant').text(d.ph);
                        else if (controller == 1)
                            d3.select('#ValuePollutant').text(d.sol);
                        else if (controller == 2)
                            d3.select('#ValuePollutant').text(d.amm);
                        else if (controller == 3)
                            d3.select('#ValuePollutant').text(d.per);
                        else if (controller == 4)
                            d3.select('#ValuePollutant').text(d.toc);
                    }
                } else {
                    return false;
                }
            })
            .on('mouseout',function () {
                if(PlayAction == true) {
                    if (ClickBait) {

                    } else {
                        d3.select(this).attr('r',5);
                        d3.select('#ValueRainfall').text('-');
                        d3.select('#ValuePollutant').text('-');
                        d3.select('#ValuePlace').text('-');
                        d3.select('#ValueProvince').text('-');
                        d3.select('#ValueBasin').text('-');
                    }

                } else {
                    return false;
                }
            })
            .on('click',function (d) {
                if (PlayAction == true) {
                    d3.selectAll('.dot').attr('r',5);
                    d3.select(this).attr('r',9);
                    GlobalID = d3.select(this).attr('id');
                    d3.select('#ViewRainfall').property('disabled',false);
                    d3.select('#ViewPollution').property('disabled',false);
                    ClickBait = true;
                    d3.select('#RegressionValue').text(d['points'+counter]);
                    d3.select('#LabelID').text(d.id);
                    console.log(d.Y);
                    if (+d['yvalue1'] == 1) {
                        d3.select('#Determine').text('Polluted').attr('class','label label-danger')
                    } else if(+d['yvalue1'] == 0) {
                        d3.select('#Determine').text('Clean').attr('class','label label-primary')
                    }
                } else {
                    return false;
                }
            })
            .style('fill',function (d) {
                if(d['yvalue1']=='1') {
                    return '#ff6961';
                } else if(d['yvalue1']=='0') {
                    return '#588ebb';
                } else {
                    return '#565c6d';
                }
            });

        var counter = 1;
        var BasinCount = 0;
        console.log(LineBasin);

        $('#slider').on('change',function () {
            counter = $('#slider').val();
            AnalysisThing();
        });
        function AnalysisThing() {
            var Checker = true;

            if (counter<174) {
                BasinCount = 0;
                Previous = null;
                Checker = true;
                svg.selectAll('.dot')
                    .data(data)
                    .transition()
                    .duration(600)
                    .attr('cx',function (d) {
                        if (Previous) {
                            if (d.basing == Previous[2]) {

                                 LineBasin[BasinCount]
                                    .transition()
                                    .duration(600)
                                    .attr('x1',function () {
                                        if (+Previous[0]>=0) {
                                            return x(Previous[0])
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .attr('x2',function () {
                                        switch (controller) {
                                            case 0:
                                                if (+d['pH'+counter]>=0) {
                                                    return +d['pH'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 1:
                                                if (+d['sol'+counter]>=0) {
                                                    return +d['sol'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 2:
                                                if(+d['ammon'+counter]>=0) {
                                                    return +d['ammon'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 3:
                                                if(+d['permanganate'+counter]>=0) {
                                                    return +d['permanganate'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 4:
                                                if(+d['toc'+counter]>=0) {
                                                    return +d['toc'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                        }
                                    })
                                    .attr('y1',function () {
                                        if (+Previous[1]>=0) {
                                            d3.select(this).style('opacity',0.7);
                                            return y(+Previous[1])
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .attr('y2',function () {
                                        if (+d['rain'+counter]>=0) {
                                            d3.select(this).style('opacity',0.7);
                                            return y(+d['rain'+counter])
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .style('stroke-width','2px');

                                if (Checker == false) {
                                    LineBasin[BasinCount].style('opacity',1);
                                } else {
                                    LineBasin[BasinCount].style('opacity',0);
                                }

                                BasinCount++;
                            }


                        }
                        Previous = [d['pH'+counter],d['rain'+counter],d.basing];
                        SpecTime = d['time'+counter];
                        if(controller==0) {
                            if(+d['pH'+counter]) {
                                Previous[0] = d['pH'+counter];
                                return x(+d['pH'+counter])
                            }
                        } else if(controller==1) {
                            if(+d['sol'+counter]) {
                                Previous[0] = d['sol'+counter];
                                return x(+d['sol'+counter])
                            }
                        } else if(controller==2) {
                            if(+d['ammon'+counter]) {
                                Previous[0] = d['ammon'+counter];
                                return x(+d['ammon'+counter]);
                            }
                        } else if(controller==3) {
                            if(+d['permanganate'+counter]) {
                                Previous[0] = d['permanganate'+counter];
                                return x(+d['permanganate'+counter]);
                            }
                        } else if(controller==4) {
                            if(+d['toc'+counter]) {
                                Previous[0] = d['toc'+counter];
                                return x(+d['toc'+counter]);
                            }
                        }
                    })
                    // .attr('r',function (d) {
                    //     var ID = GlobalID.substr(3);
                    //     if (ID == d.id) {
                    //         return 9;
                    //     } else {
                    //         return 5;
                    //     }
                    // })
                    .attr('cy',function (d) {
                        if(+d['rain'+counter]>=0) {
                            return y(+d['rain'+counter]);
                        }
                    })
                    .style('fill',function (d) {
                        if(d['yvalue'+counter]=='1') {
                            return '#ff6961';
                        } else if(d['yvalue'+counter]=='0') {
                            return '#588ebb';
                        } else {
                            return '#565c6d';
                        }
                    });

                $('#LabelSlider').text(moment(SpecTime).format('Do MMM YY'));
                $('#slider').val(counter);

                counter++;
            }
            else {
                counter = 1;
                Checker = true;
                svg.selectAll('.dot')
                    .data(data)
                    // .attr('r',function (d) {
                    //     var ID = GlobalID.substr(3);
                    //     if (ID == d.id) {
                    //         return 9;
                    //     } else {
                    //         return 5;
                    //     }
                    // })
                    .transition()
                    .duration(600)
                    .attr('cx',function (d) {
                        if (Previous) {
                            if (d.basing == Previous[2]) {

                                LineBasin[BasinCount]
                                    .transition()
                                    .duration(600)
                                    .attr('x1',function () {
                                        if (+Previous[0]) {
                                            return x(Previous[0])
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .attr('x2',function () {
                                        switch (controller) {
                                            case 0:
                                                if (+d['pH'+counter]) {
                                                    return +d['pH'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 1:
                                                if (+d['sol'+counter]) {
                                                    return +d['sol'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 2:
                                                if(+d['ammon'+counter]) {
                                                    return +d['ammon'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 3:
                                                if(+d['permanganate'+counter]) {
                                                    return +d['permanganate'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                            case 4:
                                                if(+d['toc'+counter]) {
                                                    return +d['toc'+counter];
                                                } else {
                                                    Checker = false;
                                                }
                                                break;
                                        }
                                    })
                                    .attr('y1',function () {
                                        if (+Previous[1]>=0) {
                                            return y(+Previous[1])
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .attr('y2',function () {
                                        if (+d['rain'+counter]>=0) {
                                            return y(+d['rain'+counter]);
                                        } else {
                                            Checker = false;
                                        }
                                    })
                                    .style('stroke-width','2px');

                                // if (Checker == false) {
                                //     LineBasin[BasinCount].style('opacity',1);
                                // } else {
                                //     LineBasin[BasinCount].style('opacity',0)
                                // }

                                BasinCount++;

                            }


                        }
                        Previous = [d['pH'+counter],d['rain'+counter],d.basing];
                        SpecTime = d['time'+counter];
                        if(controller==0) {
                            if(+d['pH'+counter]) {
                                Previous[0] = d['pH'+counter];
                                return x(+d['pH'+counter])
                            }
                        } else if(controller==1) {
                            if(+d['sol'+counter]) {
                                Previous[0] = d['sol'+counter];
                                return x(+d['sol'+counter])
                            }
                        } else if(controller==2) {
                            if(+d['ammon'+counter]) {
                                Previous[0] = d['ammon'+counter];
                                return x(+d['ammon'+counter]);
                            }
                        } else if(controller==3) {
                            if(+d['permanganate'+counter]) {
                                Previous[0] = d['permanganate'+counter];
                                return x(+d['permanganate'+counter]);
                            }
                        } else if(controller==4) {
                            if(+d['toc'+counter]) {
                                Previous[0] = d['toc'+counter];
                                return x(+d['toc'+counter]);
                            }
                        }
                    })
                    .attr('cy',function (d) {
                        if(+d['rain'+counter]) {
                            return y(+d['rain'+counter]);
                        }
                    })
                    .style('fill',function (d) {
                        if(d['yvalue'+counter]=='1') {
                            return '#ff6961';
                        } else if(d['yvalue'+counter]=='0') {
                            return '#588ebb';
                        } else {
                            return '#565c6d';
                        }
                    });

                $('#LabelSlider').text(moment(SpecTime).format('Do MMM YY'));
                $('#slider').val(counter);

                counter++;
            }
        }


        InteractiveButtons.append('button')
            .attr('type','button')
            .attr('id','PlayButton')
            .attr('class','btn btn-primary')
            .text('Play')
            .style('width','120px')
            .style('margin-left','25px')
            .on('click',function () {
                if (d3.select(this).text() == 'Pause') {
                    d3.select(this).text('Play');
                    PlayAction = true;
                    clearInterval(timer);
                } else {
                    d3.select(this).text('Pause');
                    PlayAction = false;
                    d3.select('#ViewRainfall').property('disabled',true);
                    d3.select('#ViewPollution').property('disabled',true);

                    d3.select('#ValueRainfall').text('-');
                    d3.select('#ValuePollutant').text('-');
                    d3.select('#ValuePlace').text('-');
                    d3.select('#ValueProvince').text('-');
                    d3.select('#ValueBasin').text('-');

                    timer = setInterval(AnalysisThing,speed);
                }
            });

        InteractiveButtons.append('button')
            .attr('type','button')
            .attr('class','btn btn-info')
            .attr('id','ViewPollution')
            .style('margin-left','60px')
            .property('disabled',true)
            .on('click',function () {

                var ID = d3.select('#LabelID').text();
                var incre = 0;
                var Index = 0;

                BasinArray.forEach(function (data) {
                    data.info.forEach(function (d) {
                        if(d[0]==ID) {
                            Index = incre;
                        }
                    });
                    incre++;
                });

                $('#AnalysisDataContainer').fadeOut(200).delay(100);
                $('#PollutionDataContainer').slideDown(400);

                var BubbleColor = ['#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8','#a7e4ff','#ffbfda',
                    '#def5fb','#ccc7ff','#fbc0d6','#faf7d8','#faf7d8','#bbd8fa','#bbd8fa','#bbd8fa','#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8'];

                d3.select('#SVGPH').remove();
                d3.select('#SVGSL').remove();
                d3.select('#SVGAM').remove();
                d3.select('#SVGPM').remove();
                d3.select('#SVGTC').remove();
                d3.select('#CBList').remove();
                d3.select('#HeaderCheckBox').remove();
                d3.selectAll('.infoPolMap').remove();
                d3.select('#BlankSpace').remove();

                d3.selectAll('.BasinPath')
                    .style('fill',function (d,i) {
                       return BubbleColor[i];
                    });

                d3.select('#Bu'+(Index+1)).select('circle').style('fill','#FF7C4C').style('opacity',1);

                DataSelector(Index,'B');

                //Find Basin that contains this ID, highlight that basin, highlight that particular basin that contains that line,
            })
            .text('View Pollution Data');

        InteractiveButtons.append('button')
            .attr('type','button')
            .attr('class','btn btn-info')
            .attr('id','ViewRainfall')
            .property('disabled',true)
            .style('margin-left','10px')
            .on('click',function () {

                var ID = d3.select('#LabelID').text();
                var Province = d3.select('#ValueProvince').text();

                $('#AnalysisDataContainer').fadeOut(200).delay(100);
                $('#RainfallDataContainer').slideDown(400);

                $('html,body').animate({
                        scrollTop: $("#"+Province).offset().top},
                    'slow');

                //Scroll to the particular province that contains this line and highlight it


            })
            .text('View Rainfall Data');

        var ToolTips = d3.select('#MainScatter')
            .append('div')
            .attr('class','container')
            .style('margin-top','20px')
            .style('margin-bottom','50px')
            .style('background-color','#c3c9ce')
            .style('border-radius','5px')
            .append('div')
            .attr('class','row')
            .attr('id','ToolTips');

        var TableLeft = ToolTips.append('div')
            .style('padding-top','20px')
            .attr('class','col-sm-3');

        TableLeft.append('div')
            .style('font-family','Lato Black')
            .style('height','40px')
            .text('Rainfall');

        TableLeft.append('div')
            .style('font-family','Lato Black')
            .style('height','40px')
            .text('Pollutant');

        TableLeft.append('div')
            .style('font-family','Lato Black')
            .style('height','40px')
            .text('Place');

        TableLeft.append('div')
            .style('font-family','Lato Black')
            .style('height','40px')
            .text('Province');

        TableLeft.append('div')
            .style('font-family','Lato Black')
            .style('font-family','Lato Black')
            .text('Basin');

        var ValueTable = ToolTips.append('div')
            .style('padding-top','20px')
            .attr('class','col-sm-3');

        ValueTable.append('div')
            .style('height','40px')
            .attr('id','ValueRainfall')
            .text('-');

        ValueTable.append('div')
            .style('height','40px')
            .attr('id','ValuePollutant')
            .text('-');

        ValueTable.append('div')
            .style('height','40px')
            .attr('id','ValuePlace')
            .text('-');

        ValueTable.append('div')
            .style('height','40px')
            .attr('id','ValueProvince')
            .text('-');

        ValueTable.append('div')
            .style('height','40px')
            .attr('id','ValueBasin')
            .text('-');

        var RightTab = ToolTips.append('div')
            .attr('class','col-sm-6')
            .style('border-radius','5px')
            .style('padding-top','20px')
            .style('height','100%')
            .style('background-color','#b5bbbf');

        var LabelsRegression = RightTab.append('h3')
            .style('height','60px')
            .style('width','100%');

        LabelsRegression.append('span')
            .attr('class','label label-default')
            .attr('id','LabelID')
            .style('margin-right','20px')
            .text('ID');

        LabelsRegression.append('span')
            .attr('class','label label-default')
            .attr('id','Determine')
            .text('Boolean');

        var RegressionSpecific = RightTab.append('div')
            .style('height','60px')
            .style('width','100%');

        RegressionSpecific.append('div')
            .style('display','inline-block')
            .style('width','50%')
            .style('font-family','Lato Black')
            .text('Regression Value');

        RegressionSpecific.append('h3').style('width','50%')
            .style('display','inline-block')
            .append('span')
            .style('width','40px')
            .attr('class','label label-default')
            .attr('id','RegressionValue')
            .text('-');

        var RegressionDetails = RightTab.append('div')
            .style('height','60px')
            .style('width','100%');

        RegressionDetails.append('div')
            .style('font-family','Lato')
            .text('Regression value ranges from 0-31, a value above 10 is considered to be polluted')
            .style('padding-bottom','20px')
    });




});


