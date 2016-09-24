var AppFrame = React.createClass({
    componentDidMount: function () {
        $('#FrameSecondary').hide();
        $('#MainFrameData').hide();
        $('#FrameMain').hide();
    },
    render: function () {
        return (
            <div className="container" id="container">
                <LoadingScreen />
                <AppFrameMain />
                <AppFrameSecondary />
                <MainFrameData />
            </div>
        );
    }
});

var LoadingScreen = React.createClass({
    render: function () {
        return (
            <div className="row" id="LoadingScreen">
                <div className="col-sm-12" style={{height: '900px'}}>
                    <div style={{height: '400px'}}></div>
                    <img src="images/pie.gif" style={{
                    display: 'block',
                    margin: '0 auto',
                    width: '50px',
                    }}></img>
                </div>
            </div>
        )
    }
});

var AppFrameMain = React.createClass({
    render: function () {
        return (
                <div className="row" id="FrameMain">
                    <MapMainRelated />
                    <TabMain />
                </div>
        );
    }
});

var AppFrameSecondary = React.createClass({
    render: function () {
        return (
            <div className="row" id="FrameSecondary">
                <div className="col-xl-12">
                    <Data2015Switch />
                    <RainfallData />
                    <PollutionData />
                    <AnalysisData />
                </div>
            </div>
        );
    }
});

var PollutionData = React.createClass({
   render: function () {
       return (
           <div className="container" id="PollutionDataContainer">
               <div className="row">
                   <div id="PlaceGroup"></div>
                   <PolMapDetails />
                   <div id="PollutionMap"></div>
                   <div id="BasinRealTimeData" className="col-sm-12"></div>
               </div>
           </div>
       )
   }
});

var AnalysisData = React.createClass({
    render: function () {
        return (
            <div className="container" id="AnalysisDataContainer">
                <div className="row" id="ScatterPlotRelated">
                    <PollutionChecks />
                    <MainScatter />
                </div>
            </div>
        )
    }
});

var PollutionChecks = React.createClass({
    render: function () {
        return (
            <div className="col-sm-2" id="PollutionChecks"></div>
        )
    }
});

var MainScatter = React.createClass({
    render: function () {
        return (
            <div className="col-sm-10" id="MainScatter"></div>
        )
    }
});

var RainfallData = React.createClass({
    render: function () {
        return (
            <div className="container" id="RainfallDataContainer">
                <div className="row">
                    <CentralTabRain />
                </div>
            </div>
        );
    }
});

var CentralTabRain = React.createClass({
    render: function() {
        return (
            <div>
                <div id="MainHeatMap" style={{
                    width: '1100px',
                    height: '600px'
                }}></div>
                <ButtonConfig/>
            </div>
        )
    }
});

var ButtonConfig = React.createClass({
    render: function() {
        return (
            <div className="container" style={{marginTop: '20px'}}>
                <div className="col-sm-4" id="LegendRainfalls">
                    <div className="SecoMap" id="SecoMap">
                <div id="TextHeatmap"></div>
                <div id="HeatMapColorRange" style={{
                    display: 'inline-block',
                    height: '30px',
                    marginTop: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#ffffd9',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'

                    }}></div>
                    <div style={{
                        backgroundColor: '#edf8b1',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#c7e9b4',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#7fcdbb',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#41b6c4',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#1d91c0',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#225ea8',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#253494',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#081d58',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                </div>
                <div id="RangeLabels" style={{
                    fontSize: '10px',
                    fontFamily: 'Typo Grotesk Black'
                }}>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>0</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>50</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>100</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>150</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>200</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>250</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>300</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>350</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>400+</div>
                </div>
            </div>
                </div>
                <div className="col-sm-4" id="ButtonsRainfall">
                </div>
                <div className="col-sm-4" id="LabelsRainfall">
                    <table className="table table-inverse">
                        <thead>
                            <tr>
                                <th>Province</th>
                                <th>Prefecture</th>
                                <th>County</th>
                                <th>Rainfall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" id="ProvinceLabelRain">-</th>
                                <th id="DistrictLabelRain">-</th>
                                <th id="CityLabelRain">-</th>
                                <th id="RainLabelValue">-</th>
                            </tr>                        
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
})

var Data2015Switch = React.createClass({
    render: function () {
        return (
            <div id="Data2015Switch" className="container">
                <div id="Data2015SR">
                    <div className="row">
                        <div className="col-xl-6">
                            <SecoSettings />
                        </div>
                        <div className="col-xl-6">
                            <SwitchScreenSecond />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});


var MainFrameData = React.createClass({
    render: function () {
        return (
            <div className="row" id="MainFrameData">
                <div className="col-xl-12" id="MainFrameExtended">
                    <ListOptions />
                    <div id="SeparatorTable" className="col-xl-12"></div>
                    <DataList />
                </div>
            </div>
        )
    }
});

var ListOptions = React.createClass({
    HandleClick: function() {
        $('#MainFrameData').hide('slide',{direction: 'left'},200);
        $('#FrameMain').delay(200).show('slide',{direction: 'right'},200);
    },
    render: function () {
        return (
            <div id="ListOptionsContainer">
                <div className="col-xl-8" id="ListOptions">
                    <div id="ButtonContainerCSV">
                    </div>
                </div>
                <div className="col-xl-4" id="SwitchScreenRight">
                    <button type="button" className="btn btn-primary" id="Sc1Right" onClick={this.HandleClick}>
                        <img src="images/arrow_right.png" style={{
                            width: '30px'
                        }} />
                    </button>
                </div>
            </div>
        )
    }
});

var DataList = React.createClass({
    render: function () {
        return (
            <div id="DataList">
                <table className="table table-striped" id="TableDataHead">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Basin</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>pH</th>
                            <th>pH Index</th>
                            <th>Solubility</th>
                            <th>S. Index</th>
                            <th>Ammonia</th>
                            <th>A. Index</th>
                            <th>Permanganate</th>
                            <th>P. Index</th>
                            <th>TOC</th>
                            <th>TOC Index</th>
                        </tr>
                    </thead>
                    <tbody id="TableDataList">

                    </tbody>
                </table>
            </div>
        )
    }
});

var PolMapDetails = React.createClass({
    getInitialState: function () {
        return {
            name: 'Province'
        }
    },
    HandleClick: function () {
        if(this.state.name == 'Basin') {
            $('#ProvinceMap').attr('display','none');
            $('#BasinMap').attr('display',null);
            this.setState({name: 'Province'})
        } else {
            $('#ProvinceMap').attr('display',null);
            $('#BasinMap').attr('display','none');
            this.setState({name: 'Basin'})
        }
    },
    render: function () {
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary" style={{
                            marginBottom: '20px'
                        }} onClick = {this.HandleClick}>
                            {this.state.name}
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <label className="label label-success" style = {{
                            fontSize: '12px',
                            padding: '12px',
                            marginBottom: '15px'
                        }}>Data: December 2015</label>
                    </div>
                    <div className="col-sm-2">
                        <label className="label label-secondary" id='BasinIdentityLabel' style={{
                            fontSize: '12px',
                            padding: '12px',
                            marginBottom: '15px',
                            backgroundColor: '#0E1A24'
                        }}>-</label>
                    </div>
                </div>
                <div className="row" id="PolMapDetails">
                    <ColorScalePol />
                    <ScalePolInfo />
                    <div className="col-sm-5" id="CheckBoxPolMap"></div>
                </div>
            </div>
        );
    }
});

var ColorScalePol = React.createClass({
    render: function () {
        var ColorRange = ['#FFFFC1', '#FEE191', '#FEC170', '#FDA463', '#F3624D', '#DF5952'];
        var ValueRange = ['I','II','III','IV','V','$V'];
        var rows = [];
        for (var i=0;i<6;i++) {
            rows.push(<div className="colorBlockPol" style={{
                backgroundColor: ColorRange[i],
                width: '25px',
                height: '25px',
                display: 'block',
                fontFamily: 'Typo Grotesk black',
                fontSize: '9px',
                textAlign: 'center',
                lineHeight: '25px'
            }}>
                {ValueRange[i]}
            </div>
            )
        }
        return (
            <div className="col-sm-1" id="ColorScalePol">
                <div id="ColorScalePolHeader" style={{
                    fontFamily: 'Lato Black'
                }}>
                    Color Scale
                </div>
                 {rows}
            </div>
        )
    }
});

var ScalePolInfo = React.createClass({
    render: function () {
        var rows = [];
        var ScaleValues = [
            ['I','6-9','≥7.5','≤0.15','≤2','≤0.15'],
            ['II','-','≥6','≤0.5','≤4','≤0.5'],
            ['III','-','≥5','≤1.0','≤6','≤1.0'],
            ['IV','-','≥3','≤1.5','≤10','≤1.5'],
            ['V','-','≥2','≤2.0','≤15','≤2.0'],
            ['$V','>9 and <6','<2','>2.0','>15','>2']
        ];
        var internalRow = [];
        for (var i=0;i<6;i++) {
            internalRow = [];
            for (var j=0;j<6;j++) {
                internalRow.push(
                  <td>{ScaleValues[i][j]}</td>
                );
            }
            rows.push(
                <tr>
                    <th scope="row">{i+1}</th>
                    {internalRow}
                </tr>
            );
        }
        return (
            <div className="col-sm-6" id="ScalePolInfo">
                <div id="ScalePolInfoHead" style={{
                    fontFamily: 'Lato Black',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    Index Information
                </div>
                <table className="table table-inverse table-sm" style={{
                    borderRadius: '5px'
                }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Index</th>
                            <th>pH</th>
                            <th>Solubility</th>
                            <th>Ammonium</th>
                            <th>Permanganate</th>
                            <th>TOC</th>
                        </tr>
                    </thead>
                    <thead>
                        {rows}
                    </thead>
                </table>
            </div>
        );
    }
});

var LeftTab = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3" id="LeftTab">
                <div id="LeftTabAux">
                    <SecoMap />
                    <GraphSettings />
                </div>
            </div>
        );
    }
});

var RightTab = React.createClass({
    render: function () {
        return (
            <div className="col-sm-8" id="RightTab">
                <div className="Info1" id="Heatmap" >
                </div>
            </div>
        );
    }
});

var AuxHeader = React.createClass({
    render: function () {
        return (
            <div className="col-sm-1" >
                <div id="AuxHeader"></div>
            </div>
        )
    }
});

var MapMainRelated = React.createClass({
    render: function () {
        return (
            <div className="col-sm-9">
                <AppMapMain />
                <BasinMagnets />
                <AppRealTime />
            </div>
        );
    }
});

var TabMain = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3">
                <AppSettingsMain />
                <SwitchScreen />
                <SwitchScreenLeft />
            </div>
        );
    }
});
var AppMapMain = React.createClass({
    render: function () {
        return (
            <div className="MapMain" id="MapMain" style={{
                height: 600+'px'
            }}>
            </div>
        );
    }
});

var BasinMagnets = React.createClass({
    render: function() {
        return (
            <div id="BasinMagnets">

            </div>
        )
    }
});

var AppRealTime = React.createClass({
    render: function () {
        return (
            <div className="RealTime" id="RealTime">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <InfoTable />
                        </div>
                        <div className="col-sm-4">
                            <AdditionalData />
                            <QuantityInfo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var QuantityInfo = React.createClass({
    render: function () {
        return (
            <div id="QuantityInfo">
                pH is dimensionless and ranges from 1-14. All other quantities are in mg/L
            </div>
        )
    }
});

var InfoTable = React.createClass({
    render: function () {
        return (
            <table className="table table-hover" id="InfoTable">
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Pollutant Name
                    </th>
                    <th>
                        Pollution level
                    </th>
                    <th>
                        Pollution Index
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr id="pHRow" className="">
                    <th scope="row">1</th>
                    <td>pH</td>
                    <td id="pHLevel">-</td>
                    <td id="pHIndex">-</td>
                </tr>
                <tr id="SolRow">
                    <th scope="row" className="">2</th>
                    <td>Solubility</td>
                    <td id="SolLevel">-</td>
                    <td id="SolIndex">-</td>
                </tr>
                <tr id="AmmRow" className="">
                    <th scope="row">3</th>
                    <td>Ammonia</td>
                    <td id="AmmLevel">-</td>
                    <td id="AmmIndex">-</td>
                </tr>
                <tr id="PermRow" className="">
                    <th scope="row">4</th>
                    <td>Permanganate</td>
                    <td id="PermLevel">-</td>
                    <td id="">-</td>
                </tr>
                <tr id="TOCRow" className="">
                    <th scope="row">5</th>
                    <td>Total Organic Carbon</td>
                    <td id="TOCLevel">-</td>
                    <td id="TOCIndex">-</td>
                </tr>
                </tbody>
            </table>
        )
    }
});

var AdditionalData = React.createClass({
    render: function () {
        return (
            <div className="AdditionalData">
                <h3>
                    <span className="label label-default" id="IDRealTime" style={{
                        marginRight: '10px'
                    }}>ID</span>
                    <span className="label label-default" id="LabelRealTime">No Info</span>
                </h3>
                <table className="table table-inverse" id="AdditionalDataTable">

                    <tr>
                        <td>Place</td>
                        <td id="placeName">-</td>
                    </tr>
                    <tr>
                        <td>Detail</td>
                        <td id="placeDetail">-</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td id="TimeVal">-</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td id="DateVal">-</td>
                    </tr>

                </table>
            </div>
        )
    }
});

var AppSettingsMain = React.createClass({
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className = "SettingsMain" id="SettingsMain">
            </div>
        );
    }
});

var SwitchScreen =  React.createClass({
    componentDidMount: function () {

        //Reference Graph for Map
        var widthData = 300;
        var heightData = 400;
        var color = d3.scale.ordinal()
            .range(["#FF9F5C", "#DB564C", "#AA3990", "#722C82", "#504BD9"]);
        var arc;
        var svg = d3.select("#SwitchScreen").append("svg")
            .attr("width", widthData)
            .attr("height", heightData);
        var BarChart = svg.append('g');

        BarChart.append('rect')
            .attr('x',20)
            .attr('y',40)
            .attr('width',130)
            .attr('height',25)
            .attr('fill','#ffffb2');

        BarChart.append('rect')
            .attr('x',150)
            .attr('y',40)
            .attr('width',120)
            .attr('height',25)
            .attr('fill','#f03b20');

        var RoseChartCanvas = svg.append("g")
            .attr("transform", "translate(" + widthData / 2 + "," + 450 / 2 + ")");

        var value = ['pH','Solubility', 'Ammonium', 'Permanganate', 'TOC'];
        var startAngle = 0;
        for (var i = 0; i < 5; i++) {
            arc = d3.svg.arc()
                .innerRadius(5)
                .outerRadius(5 + (80 * 140) / 100)
                .startAngle(startAngle)
                .endAngle((2 * Math.PI) * (i + 1) / 5);
            startAngle = (2 * Math.PI) * (i + 1) / 5;
            RoseChartCanvas.append("path")
                .attr("class", "arc")
                .attr('id','#arc'+i)
                .attr("d", arc)
                .text('hello')
                .style("fill", function(d) {
                    return color(i);
                });
            RoseChartCanvas.append('svg:text')
                .attr('transform',function () {
                    return 'translate('+arc.centroid()+')';
                })
                .attr('text-anchor','middle')
                .text(function () {
                    return value[i];
                })
                .style('font-family','Lato Black')
                .style('font-size',11+'px')
                .attr('fill','#2a2a2a');

        }
        var TextBoundary = svg.append('g');

        TextBoundary.append('svg:text')
            .attr('x',25)
            .attr('y',30)
            .style('font-family','Lato Black')
            .style('font-size',11+'px')
            .text('Point Scale');

        TextBoundary.append('svg:text')
            .attr('x',28)
            .attr('y',55)
            .attr('xlink:href','#arc0')
            .style('font-family','Lato Black')
            .style('font-size',11+'px')
            .text('No Pollution');

        TextBoundary.append('svg:text')
            .attr('x',185)
            .attr('y',55)
            .style('font-family','Lato Black')
            .style('font-size',11+'px')
            .attr('fill','white')
            .text('Highly Polluted ');

        TextBoundary.append('svg:text')
            .attr('x',25)
            .attr('y',95)
            .style('font-family','Lato Black')
            .style('font-size',11+'px')
            .text('Rose Chart Color');
    },
    render: function () {
        return (
            <div className="SwitchScreen" id="SwitchScreen">
               
            </div>
        );
    }
});

var DroppableCounter = null;

var SwitchScreenLeft = React.createClass({
    handleClick: function (Handlers) {
        if(Handlers[1]=='#MainFrameData') {
            $(Handlers[0]).hide('slide', {direction: 'right'}, 200);
            $(Handlers[1]).delay(200).show('slide', {direction: 'left'}, 200);
        } else {
            $(Handlers[0]).hide('slide', {direction: 'left'}, 200);
            $(Handlers[1]).delay(200).show('slide', {direction: 'right'}, 200);
        }
        if (DroppableCounter==null) {

            //Initialize Drag and Drop containers
            $('.drag').draggable({
                scroll: true,
                start: function () {
                    console.log($(this));
                    $(this).css({

                    })
                },
                drag: function (event, ui) {
                    ui.helper.css({
                        width: '20px',
                        height: '20px',
                        display: 'inline-block'
                    });
                    ui.helper.children('div').css({display: 'none'});
                },
                revert: function (event,ui) {
                    $(this).data('uiDraggable').originalPosition = {
                        top: 0,
                        left: 0
                    };
                    return !event;
                }
            });
            $('#Droppable').droppable({
                drop: function (event,ui) {

                    console.log($(this).position());
                    $(ui.draggable).css({
                        width: '80px',
                        height: '80px',
                        overflow: 'hidden'
                    });
                    $(ui.draggable.children('div')).css({
                        display: 'block',
                        position: 'absolute'
                    });
                }
            });
            DroppableCounter = true;
        }
    },
    render: function () {
        return (
            <div>
                <div className="SwitchScreenLeft" id="SwitchScreenLeft">
                    <button type="button" className="btn btn-primary" style={{
                             marginRight: '5px'
                    }} id="Sc2Left" onClick={this.handleClick.bind(this,['#FrameMain','#MainFrameData'])}>
                        <img src="images/arrow_left.png" style={{
                                width: '30px'
                            }} />
                    </button>
                    <button type="button" className="btn btn-primary"  style={{
                            marginLeft: '5px'
                    }} id="Sc2Right" onClick={this.handleClick.bind(this,['#FrameMain','#FrameSecondary'])}>
                        <img src="images/arrow_right.png" style={{
                                width: '30px'
                            }} />
                    </button>
                </div>
                <div>
                    <div style={{
                        height: '30px'
                    }}>
                        <div style={{
                            marginRight: '5px',
                            height: '30px',
                            display: 'inline-block',
                            fontSize: '10px'
                        }}>
                            List View
                        </div>
                        <div style={{
                            marginLeft: '32px',
                            height: '30px',
                            display: 'inline-block',
                            fontSize: '10px',
                            width: 'auto'
                        }}>
                            Analysis and Data
                        </div>
                    </div>
                </div>
                <div style={{fontFamily: 'Helvetica',fontSize: '30px',fontWeight: '500'}}>
                    Rain 'N' Roses
                </div>
            </div>
        )
    }
});

var SecoMap = React.createClass({
    render: function () {
        return (
            <div className="SecoMap" id="SecoMap">
                <div id="TextHeatmap"></div>
                <div id="HeatMapColorRange" style={{
                    display: 'inline-block',
                    height: '30px',
                    marginTop: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#ffffd9',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'

                    }}></div>
                    <div style={{
                        backgroundColor: '#edf8b1',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#c7e9b4',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#7fcdbb',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#41b6c4',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#1d91c0',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#225ea8',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#253494',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                    <div style={{
                        backgroundColor: '#081d58',
                        height: '30px',
                        width: '30px',
                        display: 'inline-block'
                    }}></div>
                </div>
                <div id="RangeLabels" style={{
                    fontSize: '10px',
                    fontFamily: 'Typo Grotesk Black'
                }}>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>0</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>50</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>100</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>150</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>200</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>250</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>300</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>350</div>
                    <div style={{
                        height: '30px',
                        width: '30px',
                        display: 'inline-block',
                        textAlign: 'left'
                    }}>400+</div>
                </div>
            </div>
        );
    }
});

var GraphSettings = React.createClass({
    handleScroll: function() {
        $('body, html').animate({ scrollTop: 0 }, 800);
    },
    render: function () {
        return (
            <div className="GraphSettings" id="GraphSettings">
                <div id="Droppable">
                    <div id="DropText" style={{
                        margin: '10px'
                    }}>Drag & drop Squares to compare</div>
                </div>
                <div id="ScrollUpButton">
                    <button className="btn btn-secondary" onClick={this.handleScroll}>Top</button>
                </div>
            </div>
        )
    }
});

var SecoSettings = React.createClass({
    clickFunction: function (changeScope) {
            $(changeScope[1]).fadeOut(200);
            $(changeScope[2]).fadeOut(200).delay(100);
            $(changeScope[0]).slideDown(400);
    },
    componentDidMount:function () {
        $('#PollutionDataContainer').hide();
        $('#AnalysisDataContainer').hide();
    },
    render: function () {
        return (
            <div className="container" id="SecoSettings">
                <div className="row">
                        <button type="button" className="btn btn-primary SecoSetBut" onClick={this.clickFunction.bind(this,['#RainfallDataContainer','#PollutionDataContainer','#AnalysisDataContainer'])}>
                            Rainfall
                        </button>
                        <button type="button"  className="btn btn-primary SecoSetBut" onClick={this.clickFunction.bind(this,['#PollutionDataContainer','#RainfallDataContainer','#AnalysisDataContainer'])}>
                            Water Pollution
                        </button>
                        <button type="button" className="btn btn-primary SecoSetBut" onClick={this.clickFunction.bind(this,['#AnalysisDataContainer','#RainfallDataContainer','#PollutionDataContainer'])}>
                            Analysis
                        </button>
                </div>

            </div>
        );
    }
});

var SwitchScreenSecond = React.createClass({
    HandleClick: function () {
        $('#FrameSecondary').hide('slide',{direction: 'right'},200);
        $('#FrameMain').delay(200).show('slide',{direction: 'left'},200);
    },
    render: function () {
        return (
            <div>
            <div className="SwitchScreenS" id="SwitchScreenS">
                <button type="button" className="btn btn-primary" style={{
                         marginRight: '5px'
                }} id="Sc3Left" onClick={this.HandleClick}>
                    <img src="images/arrow_left.png" style={{
                            width: '30px',
                            fontSize: '10px'
                        }} />
                </button>
            </div>
                <div style={{
                height: '20px',
                textAlign: 'right'
                }}>
                    <div style={{
                            height: '20px',
                            fontSize: '10px'
                    }}>
                    Real Time Data
                </div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <AppFrame />,
    document.getElementById('content')
);

