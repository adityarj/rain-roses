/**
 * Created by HP-PC on 08-07-2016.
 */
var counter = 1;
var ramp = d3.scale.quantize()
    .domain([0,450])
    .range(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]);
var Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function StartHeatmapInit() {
var data = d3.csv('csv_files/rainfall_data_2015_monthly.csv', function (data) {

        var main = d3.select('#Heatmap').append('div');
        var Prefec = '';
        var subLayer='';
        var Provin = '';

        var tooltip =  main
            .append('div')
            .style('position','absolute')
            .style('z-index','20')
            .style('visibility','hidden')
            .style('background-color','black')
            .style('color','white')
            .style('padding',10+'px')
            .style('font-family','dosis')
            .style('opacity',0.75)
            .style('border-radius',5+'px');

        var ProvinceCheckList = d3.select('#AuxHeader')
            .append('form')
            .style('height','auto')
            .attr('role','form');

        data.forEach(function (d, i) {

            if (d.Province != Provin) {

                var ProvinShort = d.Province.split('-').join('');
                var ProvinceFormatted = ProvinShort.charAt(0).toUpperCase()+ProvinShort.substr(1);

                var RowContainer = main.append('div')
                    .attr('class','row')
                    .attr('id',ProvinceFormatted)
                    .style('width',100+'%')
                    .style('padding',10+'px');

                subLayer = RowContainer.append('div')
                    .attr('class','col-sm-10');

                TextLayer = RowContainer.append('div')
                    .attr('class','col-sm-2')
                    .text(d.Province.toUpperCase())
                    .style('font-family','Typo Grotesk Black');

                OuterDivCheckBox = ProvinceCheckList.append('div')
                    .attr('class','checkbox checkbox-primary')
                    .style('display','block')
                    .style('width',90+'%')
                    .style('height',19+'px');

                OuterDivCheckBox.append('input')
                    .attr('name','RadioProvince')
                    .attr('type','checkbox')
                    .property('checked',true)
                    .attr('id','Pro'+i)
                    .on('click',function () {
                    if (d3.select(this).property('checked')==false) {
                        d3.select('#'+ProvinceFormatted)
                            .style('display','none');
                    } else {
                        d3.select('#'+ProvinceFormatted)
                            .style('display','block');
                    }
                     });

                OuterDivCheckBox.append('label')
                    .attr('for','#Pro'+i)
                    .text(d.Province.toUpperCase())
                    .style('font-size',7+'px')
                    .style('height',23+'px');


            }
            if (d.Prefecture != Prefec) {
                 OuterLayer = subLayer.append('div')
                    .attr('id',d.Prefecture)
                    .style('border-radius',5+'px')
                    .style('margin-right',10+'px');

                 TextLayer.append('div')
                    .style('display','block')
                    .style('font-size',10+'px')
                    .style('font-family','Lato')
                    .style('height',10+'px')
                    .text(d.Prefecture.toUpperCase())
                    .on('click',function () {
                        $('#'+d.Prefecture).effect('highlight',{color: '#ffc04c'},2000);
                    });
            }
            if (d.Month == 1) {
                 ObservationDiv = OuterLayer.append('div')
                    .attr('id','s'+String(i))
                    .attr('class','drag')
                    .style('width', 5 + 'px')
                    .style('position','relative')
                    .style('height', 5 + 'px')
                    .style('background-color', function () {
                        return ramp(d.Amt);
                    })
                    .style('border-radius', 5 + 'px')
                    .style('margin', 2 + 'px')
                    .on('mouseover',function () {

                        var Info = d3.select(this).select('div').text().split('/');

                        if (tooltip.style('visibility')=='visible') {
                            return tooltip.style('visibility','hidden');
                        } else {
                            return tooltip.html(function () {
                                return (
                                    '<strong>Province: </strong>'+Info[0].toUpperCase()+'<br>'+
                                    '<strong>Prefecture: </strong>'+Info[1].toUpperCase()+'<br>'+
                                    '<strong>County: </strong>'+Info[2].toUpperCase()+'<br>'+
                                    '<strong>Rainfall: </strong>'+Info[3].toUpperCase()+' mm'+'<br>'
                                );
                            }).style('visibility','visible');
                        }
                    })
                    .on('mousemove',function () {
                        return tooltip.style('top',(event.pageY - 100)+'px')
                            .style('left',(event.pageX-700)+'px');
                    })
                    .on('mouseout',function () {
                        return tooltip.style('visibility','hidden');
                    });
                ObservationDiv.append('div')
                    .style('font-family','Lato Black')
                    .style('font-size','10px')
                    .style('margin','10px')
                    .text(d.Province+'/'+d.Prefecture+'/'+d.County+'/'+d.Amt)
                    .style('display','none');

            }
            Prefec = d.Prefecture;
            Provin = d.Province;
        });

    $('#TextHeatmap').text('January');


    var sel = d3.select('#Heatmap');

    var timer = '';

    d3.select('#SecoMap').append('button')
        .attr('type','button')
        .attr('class','btn btn-secondary')
        .style('margin-top','10px')
        .style('font-family','FontAwesome')
        .style('font-size','18px')
        .style('margin-right','5px')
        .text('\uf060')
        .on('click',function() {
            changeVar(true);
        })

    d3.select('#SecoMap').append('button')
        .attr('type','button')
        .attr('class','btn btn-primary')
        .text('Play')
        .style('margin-top','10px')
        .on('click',function () {
            if (d3.select(this).text()=='Pause') {
                clearInterval(timer);
                d3.select(this).text('Play');
            } else {
                changeVar();
                timer = setInterval(changeVar,900);
                d3.select(this).text('Pause');
            }
        });

    var button = d3.select('#SecoMap').append('button')
        .attr('type','button')
        .attr('class','btn btn-secondary')
        .style('margin-top','10px')
        .style('font-family','FontAwesome')
        .style('font-size','18px')
        .style('margin-left','5px')
        .text('\uf061')
        .on('click',function () {
            changeVar();
        });
});




    function changeVar(val = false) {
        if (val) {
            counter-=1;
            if (counter == 0) {
                counter = 12;
            }
                var NewData = d3.csv('csv_files/rainfall_data_2015_monthly.csv',function (data) {
                data.forEach(function (d,i) {
                    if(d.Month == counter) {
                        d3.select('#s'+String(i - (counter - 1)))
                            .transition()
                            .duration(500)
                            .style('background-color',function () {
                                return ramp(d.Amt);
                            })
                            .select('div')
                            .text(d.Province+'/'+d.Prefecture+'/'+d.County+'/'+d.Amt);
                    }
                });
                $('#TextHeatmap').text(Months[counter-1]);
                });
                //counter++;
        } else {
            if (counter<12) {
            var NewData = d3.csv('csv_files/rainfall_data_2015_monthly.csv',function (data) {
                data.forEach(function (d,i) {
                    if(d.Month == counter) {
                        d3.select('#s'+String(i - (counter - 1)))
                            .transition()
                            .duration(500)
                            .style('background-color',function () {
                                return ramp(d.Amt);
                            })
                            .select('div')
                            .text(d.Province+'/'+d.Prefecture+'/'+d.County+'/'+d.Amt);
                    }
                });
                $('#TextHeatmap').text(Months[counter-1]);
            });
            counter++;
        } else {
            counter = 0;
            var Data = d3.csv('csv_files/rainfall_data_2015_monthly.csv',function (data) {
                data.forEach(function (d,i) {
                    if(d.Month == counter) {
                        d3.select('#s'+String(i - (counter - 1)))
                            .transition()
                            .duration(500)
                            .style('background-color',function () {
                                return ramp(d.Amt);
                            })
                            .select('div')
                            .text(d.Province+'/'+d.Prefecture+'/'+d.County+'/'+d.Amt);
                    }
                });
                $('#TextHeatmap').text(Months[counter-1]);
            });
            counter++;
        }
        }
        
        
    }
}
