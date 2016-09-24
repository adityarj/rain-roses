function InitRainChart() {
    var ramp = d3.scale.quantize()
            .domain([0,450])
            .range(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]);
    var counter = 1;
    var squares = null;
    var RainfallTimer = null;
    var Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var ProvinceListRain = ['All','Shanghai', 'Yunnan', 'Neimenggu', 'Beijing', 'Jilin', 'Sichuan', 'Tianjin', 'Ningxia', 'Anhui', 'Shandong', 'Shanxi', 'Guangdong', 'Guangxi', 'Xinjiang', 'Jiangsu', 'Jiangxi', 'Hebei', 'Henan', 'Zhejiang', 'Hainan', 'Hubei', 'Hunan', 'Gansu', 'Fujian', 'Xicang', 'Guizhou', 'Liaoning', 'Zhongqing', 'Qinghai', 'Heilongjiang'];

    $(function() {

    var MyMapRain= L.map('MainHeatMap',{minZoom: 4}).setView([30.25, 120.166667], 9);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Lines',
            id: 'adityarj.0mbl5ab1',
            accessToken: 'pk.eyJ1IjoiYWRpdHlhcmoiLCJhIjoiY2l0ZndhMTlnMDBndDJzdG8yanJ0bXhhayJ9.l1QxIq8hKG8EJxBcnMmKjg'
    }).addTo(MyMapRain);

    var svg = d3.select(MyMapRain.getPanes().overlayPane).append('svg')
                            .attr('id','rainfallOverlay');

    var g = svg.append('g').attr('class','leaflet-zoom-hide');


    d3.json('csv_files/rainfall.geo.json',function(collection) {

         var transform = d3.geo.transform({
            point: projectPoint
        });
        var d3path = d3.geo.path().projection(transform);

        MyMapRain.invalidateSize();

        var stations = g.selectAll('.points')
                        .data(collection.features)
                        .enter()
                        .append("g", '.points')
                        .attr('class',function(d,i) {
                            return 'All '+d.properties.Province;
                        })
                        .style('cursor','default')
                        .attr('id',function(d,i) {
                            return 'z'+i;
                        })
                        .on('mouseover',function(d,i) {
                            d3.select('#ProvinceLabelRain').text(d.properties.Province);
                            d3.select('#DistrictLabelRain').text(d.properties.Prefecture);
                            d3.select('#CityLabelRain').text(d.properties.County);
                            d3.select('#RainLabelValue').text(d.properties['m'+counter]);
                        })
                        .on('mouseout',function(d,i) {
                            d3.select('#ProvinceLabelRain').text('-');
                            d3.select('#DistrictLabelRain').text('-');
                            d3.select('#CityLabelRain').text('-');
                            d3.select('#RainLabelValue').text('-');
                        });


        squares = stations.append('rect')
                .attr('width','5px')
                .attr('height','5px')
                .attr('fill',function(d,i) {
                    return ramp(d.properties.m4);
                });

        d3.select('#z2505').remove();

        MyMapRain.on('viewreset',reset);
        reset();

        $('#TextHeatmap').text('January');


        function reset() {
            var bounds = d3path.bounds(collection),
                                    topLeft = bounds[0],
                                    bottomRight = bounds[1];

            stations.attr('transform',function (d) {
                var x = applyLatLngToLayer(d);
                var y = applyLatLngToLayer(d);
                if (x && y) {
                    return "translate("+
                        applyLatLngToLayer(d).x+","+
                        applyLatLngToLayer(d).y+")";
                }
                
            });

            svg.attr('width',bottomRight[0]-topLeft[0]+120)
                    .attr('height',bottomRight[1] - topLeft[1]+ 120)
                    .style('left',topLeft[0] - 50+'px')
                    .style('top',topLeft[1] - 50+'px');

            g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
        }

        
    });

    d3.select('#ButtonsRainfall').append('button')
        .attr('type','button')
        .attr('class','btn btn-secondary')
        .style('font-family','FontAwesome')
        .style('font-size','18px')
        .style('margin-right','5px')
        .text('\uf060')
        .on('click',function() {
            changeColor(true);
        })

    d3.select('#ButtonsRainfall').append('button')
        .attr('type','button')
        .attr('class','btn btn-primary')
        .text('Pause')
        .on('click',function () {
            if (d3.select(this).text()=='Pause') {
                clearInterval(RainfallTimer);
                d3.select(this).text('Play');
            } else {
                changeColor();
                timer = setInterval(changeColor,1000);
                d3.select(this).text('Pause');
            }
        });

    var button = d3.select('#ButtonsRainfall').append('button')
        .attr('type','button')
        .attr('class','btn btn-secondary')
        .style('font-family','FontAwesome')
        .style('font-size','18px')
        .style('margin-left','5px')
        .text('\uf061')
        .on('click',function () {
            changeColor();
        });

    d3.select('#ButtonsRainfall').append('div').style('margin-top','20px').append('select')
                .attr('class','selectpicker')
                .attr('data-live-search','true')
                .selectAll('.optionList')
                .data(ProvinceListRain)
                .enter()
                .append('option','.optionList')
                .text(function(d,i) {
                    return d;
                });

    $('.selectpicker').selectpicker({
        style: 'btn-secondary',
        size: 4
    });

    $('.selectpicker').change(function() {
        var Province = $(this).val();
        d3.selectAll('.All').style('opacity',0.3);
        d3.selectAll('.'+Province).style('opacity',1);
    })


    RainfallTimer = setInterval(changeColor,1000);

    //Generate points related to D3 overlay
    function projectPoint(x,y) {
        if (x) {
            var point = MyMapRain.latLngToLayerPoint(new L.LatLng(y,x));
            this.stream.point(point.x,point.y);
        }
        
    }

    //Generate points related to D3 overlay
    function applyLatLngToLayer(d) {
        if (d.geometry.coordinates[1]) {
            var y = d.geometry.coordinates[1];
            var x = d.geometry.coordinates[0];
            return MyMapRain.latLngToLayerPoint(new L.LatLng(y,x));
        }
        
    }

    function changeColor(val = false) {
        if (val == true) {
            counter-=1;
            if (counter == 0) {
                counter = 12;
            }
            squares.attr('fill',function(d,i) {
                return ramp(d.properties['m'+counter]);
            });

            $('#TextHeatmap').text(Months[counter-1]);
        } else {
            if (counter <=12) {

            } else {
                counter = 1;
            }
            squares.transition().duration(500).attr('fill',function(d,i) {
                return ramp(d.properties['m'+counter]);
            });
            counter++;

            $('#TextHeatmap').text(Months[counter-1]);
        }

    }


    });
}