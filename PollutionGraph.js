/**
 * Created by HP-PC on 19-07-2016.
 */

//Basin Array Pre-compiled array (#PythonRocks, #ChooseTheSnake, #JSisforWannabes)
var BasinArrayProcessed = [[78, 'Chaohu'], [105, 'Chaohu'], [62, 'Dianchi'], [124, 'Dianchi'], [209, 'Dianchi'], [210, 'Dianchi'], [197, 'Erhai'], [177, 'Fuxianhu'], [53, 'Haihe'], [54, 'Haihe'], [60, 'Haihe'], [66, 'Haihe'], [72, 'Haihe'], [73, 'Haihe'], [138, 'Haihe'], [190, 'Hainandaoneiheliu'], [192, 'Hainandaoneiheliu'], [202, 'Hainandaoneiheliu'], [19, 'Huaihe'], [20, 'Huaihe'], [32, 'Huaihe'], [55, 'Huaihe'], [58, 'Huaihe'], [59, 'Huaihe'], [106, 'Huaihe'], [109, 'Huaihe'], [115, 'Huaihe'], [120, 'Huaihe'], [122, 'Huaihe'], [134, 'Huaihe'], [147, 'Huaihe'], [149, 'Huaihe'], [150, 'Huaihe'], [151, 'Huaihe'], [152, 'Huaihe'], [153, 'Huaihe'], [154, 'Huaihe'], [155, 'Huaihe'], [156, 'Huaihe'], [157, 'Huaihe'], [159, 'Huaihe'], [161, 'Huaihe'], [162, 'Huaihe'], [164, 'Huaihe'], [166, 'Huaihe'], [12, 'Huanghe'], [81, 'Huanghe'], [83, 'Huanghe'], [84, 'Huanghe'], [85, 'Huanghe'], [108, 'Huanghe'], [113, 'Huanghe'], [121, 'Huanghe'], [141, 'Huanghe'], [178, 'Huanghe'], [179, 'Huanghe'], [181, 'Huanghe'], [168, 'Liangzihu'], [57, 'Liaohe'], [61, 'Liaohe'], [70, 'Liaohe'], [116, 'Liaohe'], [132, 'Liaohe'], [135, 'Liaohe'], [180, 'Liaohe'], [128, 'Minjiang'], [198, 'Neiluheliu'], [199, 'Neiluheliu'], [193, 'Poyanghu'], [203, 'Poyanghu'], [104, 'Qiantangjiang'], [14, 'Songhuajiang'], [67, 'Songhuajiang'], [68, 'Songhuajiang'], [69, 'Songhuajiang'], [133, 'Songhuajiang'], [136, 'Songhuajiang'], [143, 'Songhuajiang'], [144, 'Songhuajiang'], [182, 'Songhuajiang'], [183, 'Songhuajiang'], [185, 'Songhuajiang'], [186, 'Songhuajiang'], [187, 'Songhuajiang'], [188, 'Songhuajiang'], [189, 'Songhuajiang'], [191, 'Songhuajiang'], [195, 'Songhuajiang'], [196, 'Songhuajiang'], [201, 'Songhuajiang'], [204, 'Songhuajiang'], [205, 'Songhuajiang'], [207, 'Songhuajiang'], [208, 'Songhuajiang'], [211, 'Songhuajiang'], [212, 'Songhuajiang'], [213, 'Songhuajiang'], [215, 'Songhuajiang'], [8, 'Taihu'], [77, 'Taihu'], [97, 'Taihu'], [103, 'Taihu'], [111, 'Taihu'], [129, 'Taihu'], [139, 'Taihu'], [140, 'Xinanzhuhe'], [146, 'Xinanzhuhe'], [194, 'Xinanzhuhe'], [206, 'Xinanzhuhe'], [214, 'Xinanzhuhe'], [216, 'Xinanzhuhe'], [200, 'Xingkaihu'], [5, 'Changjiang'], [16, 'Changjiang'], [18, 'Changjiang'], [56, 'Changjiang'], [65, 'Changjiang'], [74, 'Changjiang'], [75, 'Changjiang'], [76, 'Changjiang'], [107, 'Changjiang'], [110, 'Changjiang'], [112, 'Changjiang'], [114, 'Changjiang'], [117, 'Changjiang'], [118, 'Changjiang'], [119, 'Changjiang'], [123, 'Changjiang'], [125, 'Changjiang'], [137, 'Changjiang'], [158, 'Changjiang'], [167, 'Changjiang'],[172, 'Changjiang'],  [173, 'Changjiang'], [175, 'Changjiang'],[176, 'Changjiang'], [184, 'Changjiang'], [63, 'Zhujiang'], [64, 'Zhujiang'], [79, 'Zhujiang'], [80, 'Zhujiang'], [126, 'Zhujiang'], [127, 'Zhujiang'], [131, 'Zhujiang'], [142, 'Zhujiang']];
var StationLocation = [[5, 'zhong-qing', 'hu-tuo'], [8, 'zhe-jiang', 'u-zhou-xin-tang-gang'], [12, 'he-nan', 'i-yuan-xiao-lang-di'], [14, 'hei-long-jiang', 'hao-yuan'], [16, 'hu-nan', 'ue-yang-cheng-ling-ji'], [18, 'jiang-su', 'an-jing-lin-shan'], [19, 'jiang-su', 'u-yi'], [20, 'jiang-su', 'ei-cang'], [32, 'an-hui', 'u-nan-wang-jia-ba'], [53, 'bei-jing', 'u-bei-kou'], [54, 'tian-jin', 'uo-he-qiao'], [55, 'he-nan', 'hou-kou-lu-yi-fu-qiao-zha'], [56, 'an-hui', 'n-qing-wan-he-kou'], [57, 'liao-ning', 'ie-ling-zhu-er-shan'], [5, 'an-hui', 'uai-nan-shi-tou-bu'], [59, 'an-hui', 'ie-shou-qi-du-kou'], [60, 'tian-jin', 'an-cha-kou'], [61, 'liao-ning', 'an-jin-xing-an'], [62, 'yun-nan', 'un-ming-xi-yuan-sui-dao'], [63, 'guang-dong', 'uang-zhou-chang-zhou'], [64, 'guang-dong', 'ing-yuan-qi-xing-gang'], [65, 'hu-bei', 'u-han-zong-guan'], [66, 'he-bei', 'hang-jia-kou-ba-hao-qiao'], [67, 'ji-lin', 'hang-chun-song-hua-jiang-cun'], [68, 'ji-lin', 'ai-cheng-bai-sha-tan'], [69, 'hei-long-jiang', 'ong-jiang'], [70, 'liao-ning', 'ing-kou-liao-he-gong-yuan'], [72, 'he-bei', 'hi-jia-zhuang-gang-nan-shui-ku'], [73, 'bei-jing', 'en-tou-gou-yan-he-cheng'], [74, 'si-chuan', 'an-zhi-hua-long-dong'], [75, 'hu-bei', 'i-chang-nan-jin-guan'], [76, 'jiang-xi', 'iu-jiang-he-xi-shui-chang'], [77, 'jiang-su', 'u-xi-sha-zhu'], [78, 'an-hui', 'hao-hu-yu-xi-kou'], [79, 'guang-xi', 'u-zhou-jie-shou'], [80, 'guang-xi', 'an-ning-lao-kou'], [81, 'gan-su', 'an-zhou-xin-cheng-qiao'], [83, 'nei-meng-gu', 'ao-tou-hua-jiang-ying-zi'], [84, 'shan-xi', 'un-cheng-he-jin-da-qiao'], [85, 'shan-dong', 'i-nan-bo-kou'], [97, 'zhe-jiang', 'ia-xing-wang-jiang-jing'], [103, 'jiang-su', 'u-zhou-xi-shan'], [104, 'zhe-jiang', 'ang-zhou-jiu-keng-kou'], [105, 'an-hui', 'e-fei-hu-bin'], [106, 'an-hui', 'uai-bei-xiao-wang-qiao'], [107, 'hu-nan', 'ue-yang-yue-yang-lou'], [108, 'shan-xi', 'in-zhou-wan-jia-zhai'], [109, 'an-hui', 'ang-bu-bang-bu-zha'], [110, 'hu-nan', 'hang-sha-xin-gang'], [111, 'jiang-su', 'i-xing-lan-shan-zui'], [112, 'jiang-su', 'ang-zhou-san-jiang-ying'], [113, 'ning-xia', 'hong-wei-xin-dun'], [114, 'jiang-xi', 'iu-jiang-ha-ma-shi'], [115, 'shan-dong', 'in-yi-qing-quan-si'], [116, 'liao-ning', 'u-shun-da-huo-fang-shui-ku'], [117, 'si-chuan', 'i-bin-liang-jiang-gou'], [118, 'si-chuan', 'u-zhou-tuo-jiang-er-qiao'], [119, 'si-chuan', 'e-shan-min-jiang-da-qiao'], [120, 'he-nan', 'hu-ma-dian-ban-tai'], [121, 'nei-meng-gu', 'u-hai-hai-bo-wan'], [122, 'he-nan', 'hou-kou-shen-qiu-zha'], [123, 'jiang-xi', 'an-chang-chu-cha'], [124, 'yun-nan', 'un-ming-guan-yin-shan'], [125, 'hu-bei', 'an-jiang-kou-hu-jia-ling'], [126, 'guang-xi', 'ui-gang-shi-zui'], [127, 'guang-xi', 'ing-xiang-ping-er-guan'], [128, 'fu-jian', 'u-zhou-bai-yan-tan'], [129, 'shang-hai', 'ing-pu-ji-shui-gang'], [131, 'guang-xi', 'ui-lin-yang-shuo'], [132, 'liao-ning', 'iao-yang-tang-he-shui-ku'], [133, 'hei-long-jiang', 'ei-he'], [134, 'shan-dong', 'ao-zhuang-tai-er-zhuang'], [135, 'liao-ning', 'an-dong-ya-lv-jiang-qiao'], [136, 'ji-lin', 'an-bian-quan-he'], [137, 'he-nan', 'an-yang-tao-cha'], [138, 'shan-dong', 'iao-cheng-cheng-gou-wan'], [139, 'zhe-jiang', 'ia-xing-xie-lu-gang'], [140, 'yun-nan', 'i-shuang-ban-na-gan-lan-ba'], [141, 'shan-xi', 'ei-nan-tong-guan-diao-qiao'], [142, 'guang-dong', 'hong-shan-heng-lan'], [143, 'nei-meng-gu', 'u-lun-bei-er-hei-shan-tou'], [144, 'hei-long-jiang', 'u-yuan-wu-su-zhen'], [146, 'yun-nan', 'ong-he-zhou-he-kou'], [147, 'shan-dong', 'in-yi-zhong-fang-qiao'], [149, 'an-hui', 'hu-zhou-xiao-liu-xiang'], [150, 'shan-dong', 'in-yi-lao-gou-qiao'], [151, 'an-hui', 'u-zhou-si-xian-gong-lu-qiao'], [152, 'jiang-su', 'i-hong-da-qu'], [153, 'jiang-su', 'u-zhou-xiao-hong-quan'], [154, 'he-nan', 'in-yang-huai-bin-shui-wen-zhan'], [155, 'an-hui', 'o-zhou-yan-ji'], [156, 'jiang-su', 'ian-yun-gang-da-xing-qiao'], [157, 'he-nan', 'ong-cheng-huang-kou'], [158, 'si-chuan', 'uang-yuan-qing-feng-xia'], [159, 'an-hui', 'u-zhou-yang-zhuang'], [161, 'an-hui', 'u-yang-zhang-da-qiao'], [162, 'he-nan', 'in-yang-jiang-ji-shui-wen-zhan'], [164, 'jiang-su', 'u-zhou-li-ji-qiao'], [166, 'an-hui', 'u-yang-xu-zhuang'], [167, 'gui-zhou', 'hi-shui-lian-yu-xi'], [168, 'hu-bei', 'zhou-qi-xing'], [172, 'hu-nan', 'ue-yang-lu-jiao'], [173, 'hu-nan', 'hang-de-po-tou'], [175, 'hu-nan', 'hang-de-sha-he-kou'], [176, 'hu-nan', 'i-yang-nan-zui'], [177, 'yun-nan', 'u-xi-gu-shan'], [178, 'ning-xia', 'hi-zui-shan-ma-huang-gou'], [179, 'gan-su', 'ian-shui-niu-bei'], [180, 'ji-lin', 'i-an-shang-huo-long'], [181, 'qing-hai', 'uang-shui-min-he-qiao'], [182, 'nei-meng-gu', 'u-lun-bei-er-cuo-gang'], [183, 'nei-meng-gu', 'u-lun-bei-er-da-tie-qiao'], [184, 'hu-nan', 'i-yang-wan-jia-zui'], [185, 'hei-long-jiang', 'u-ma'], [186, 'ji-lin', 'in-jiang-wei-sha-he'], [187, 'ji-lin', 'hang-bai-lv-jiang-cun'], [188, 'ji-lin', 'un-hua-xin-dian'], [189, 'ji-lin', 'i-lang-kou'], [190, 'hai-nan', 'hang-hua-jiang'], [191, 'hei-long-jiang', 'u-lin'], [192, 'hai-nan', 'ai-kou-tie-qiao-cun'], [193, 'jiang-xi', 'iu-jiang-du-chang'], [194, 'yun-nan', 'e-hong-ga-zhong-qiao'], [195, 'ji-lin', 'ong-yuan-song-lin'], [196, 'hei-long-jiang', 'ia-yin'], [197, 'yun-nan', 'a-li-xiao-guan-yi'], [198, 'xin-jiang', 'er-qi-si-nan-wan-shui-wen-zhan'], [199, 'xin-jiang', '3-tuan-yi-li-he-da-qiao'], [200, 'hei-long-jiang', 'i-xi-long-wang-miao'], [201, 'ji-lin', 'hang-chun-nan-lou'], [202, 'hai-nan', 'an-quan-he-dan-cun'], [203, 'jiang-xi', 'hang-rao-kang-shan'], [204, 'hei-long-jiang', 'ia-mu-si-jiang-xin-dao'], [205, 'hei-long-jiang', 'u-dan-jiang-kou-nei'], [206, 'guang-xi', 'ang-cheng-gang-dong-xing'], [207, 'hei-long-jiang', 'i-xi-zhi-yi-qiao'], [208, 'hei-long-jiang', 'i-xi-dang-bi-zhen'], [209, 'yun-nan', 'un-ming-dian-chi-nan-an'], [210, 'yun-nan', 'un-ming-luo-jia-ying'], [211, 'ji-lin', 'an-bian-nan-ping'], [212, 'nei-meng-gu', 'u-lun-bei-er-bei-er-hu'], [213, 'hei-long-jiang', 'o-he-bei-ji-cun'], [214, 'xi-cang', 'in-zhi-mi-rui'], [215, 'hei-long-jiang', 'u-yuan'], [216, 'guang-xi', 'hong-zuo-ba-jiao-dian-zha'], [217, 'yun-nan', 'ao-shan-hong-qi-qia'], [218, 'hei-long-jiang', 'a-er-bin-hu-lan-he-tie-lu-qia'], [219, 'yun-nan', 'a-li-er-hai-jin-he-zha']];

//Write CSV as Array and compile into provinces;
var ControlVariable = false;
var ID = 0;
var ObjectList = [];
var OuterArray = {};
var InnerList = {};
var InnerArray = [];
var InnerObject = {};
var Orange = '#FF7C4C';
var MainList = [];
var BasinList = [];

function DataSelector(ID,BM) {
    var List = '';
    if (BM=='B') {
        List = BasinList[ID];
    } else {
        List = MainList[ID];
    }

    DrawCheckBox(List);

    DrawSupportingChart(List,'pH');
    DrawSupportingChart(List,'Solubility');

    DrawGraphpH(List);
    DrawGraphSol(List);

    DrawSupportingChart(List,'Ammonium');
    DrawSupportingChart(List,'Permanganate');

    DrawGraphAmm(List);
    DrawGraphPer(List);

    DrawSupportingChart(List,'Total Organic Carbon');

    DrawGraphTOC(List);

    DrawBlankSpace();

}

function DrawBlankSpace() {
    var BlankColumn = d3.select('#PollutionMap')
        .append('div')
        .attr('id','BlankSpace')
        .style('width','500px')
        .style('height','50px')
}
function DrawCheckBox(MainListItem) {

    var Header = d3.select('#CheckBoxPolMap')
        .append('div')
        .attr('id','HeaderCheckBox')
        .text('Province City List')
        .style('font-family','Lato Black')
        .style('margin-top',20+'px')
        .style('margin-bottom',20+'px');

    var CB = d3.select('#CheckBoxPolMap')
        .append('form')
        .attr('id','CBList')
        .attr('role','form');

    var ObjectTarget = MainListItem.SubList;
    for(var i=0;i<ObjectTarget.length;i++) {
        if(ObjectTarget[i].info!=null) {
            var InnerCheckBox = CB.append('div')
                .attr('class','checkbox checkbox-primary')
                .style('display','inline-block')
                .style('width',210+'px')
                .style('height',30+'px');

            InnerCheckBox.append('input')
                .attr('name','CBProvince')
                .attr('type','checkbox')
                .attr('class','PolMapCheckBoxes')
                .property('checked',i<6)
                .attr('id','PolMapCB'+ObjectTarget[i].id)
                .on('click',function () {
                    var ID = d3.select(this).attr('id').substr(8);
                    if (d3.select(this).property('checked')==true) {
                        d3.select('#pH'+ID).style('visibility','visible');
                        d3.select('#Sol'+ID).style('visibility','visible');
                        d3.select('#Amm'+ID).style('visibility','visible');
                        d3.select('#Per'+ID).style('visibility','visible');
                        d3.select('#TOC'+ID).style('visibility','visible');
                    } else {
                        d3.select('#pH'+ID).style('visibility','hidden');
                        d3.select('#Sol'+ID).style('visibility','hidden');
                        d3.select('#Amm'+ID).style('visibility','hidden');
                        d3.select('#Per'+ID).style('visibility','hidden');
                        d3.select('#TOC'+ID).style('visibility','hidden');
                    }
                });

            var text = ObjectTarget[i].city.split('-').join('');


            InnerCheckBox.append('label')
                .attr('for','#PolMapCB'+ObjectTarget[i].id)
                .attr('id','LabelPol'+ObjectTarget[i].id)
                .text(ObjectTarget[i].id+'  '+text.charAt(0).toUpperCase()+text.substr(1))
                .style('font-size',15+'px')
                .style('height',23+'px');
        }
    }
}

//Draw Supporting Chart that displays additional information and links views
function DrawSupportingChart(MainListItem,ItemName) {
    var ContainerDiv = d3.select('#PollutionMap')
        .append('div')
        .attr('class','infoPolMap')
        .style('height',40+'px')
        .style('width',500+'px')
        .style('display',function () {
            if (ItemName=='Total Organic Carbon') {
                return 'block';
            } else {
                return 'inline-block';
            }
        });

    var Nest = ContainerDiv.append('div')
        .attr('class','container')
        .style('margin-top',8+'px')
        .append('div')
        .attr('class','row');

    Nest.append('div')
        .attr('class','col-sm-5')
        .style('font-size',18+'px')
        .text(ItemName);

    var InnerNest= Nest.append('div')
        .attr('class','col-sm-7');

    InnerNest.append('div')
        .attr('id',ItemName.substring(0,3)+'infoBoxVal')
        .style('font-size',13+'px')
        .style('margin-right',20+'px')
        .style('display','inline-block')
        .text();

    InnerNest.append('div')
        .attr('id',ItemName.substring(0,3)+'infoBoxDate')
        .style('font-size',13+'px')
        .style('display','inline-block')
        .attr()

}
//Draw graph depicting pH
function DrawGraphpH(TargetList) {

    var width = 550,
        height = 275,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        };

    var xScale = d3.time.scale().range([margins.left, width - margins.right]);
    var yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([5, 10]);

    var color = ['#DF5952','#F3624D','#FDA463','#FEC170','#FEE191','#FFFFC1'];

    var Area0PH = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(10);
        });

    var Area1PH = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(9);
        });

    var Area2PH = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(6);
        });


    var ValueLine = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.pH);
        })
        .defined(function (d) {
            return d.pH != -1;
        })
        .interpolate('cardinal');

    var LineList = [];
    var ObjectTarget = TargetList.SubList;

    ObjectTarget.forEach(function (data) {
        if (data.info != null) {
            xScale.domain(d3.extent(data.info, function (d) {
                return d.date;
            }));
        }
    });

    var xAxis = d3.svg.axis()
        .ticks(d3.time.days,3)
        .tickSubdivide(true)
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    var zoom = d3.behavior.zoom()
        .x(xScale)
        .scaleExtent([1, 10])
        .on("zoom", zoomed);


    var PolMap = d3.select('#PollutionMap')
        .append('svg')
        .call(zoom)
        .attr('id', 'SVGPH')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover',function () {
            if (ControlVariable) {
                focus.style('display',null);
            }
        })
        .on('mouseout',function () {
            focus.style('display','none');
        })
        .on('mousemove',function () {
            if (ControlVariable) {
                var index = ObjectTarget.findIndex(x => x.id==ControlVariable);
                var x0 = xScale.invert(d3.mouse(this)[0]);
                var bisectDate = d3.bisector(function (d) {
                    return d.date;
                }).left;

                i = bisectDate(ObjectTarget[index].info, x0, 1);
                var d0 = ObjectTarget[index].info[i - 1],
                    d1 = ObjectTarget[index].info[i];

                var d = x0 - d0.date > d1.date - x0 ? d1: d0;

                var momentInstance = moment(d.date).format('Do MMM YY, HH:mm');

                d3.select('#pHinfoBoxVal').text(d.pH);
                d3.select('#pHinfoBoxDate').text(momentInstance);

                focus.select('circle.y')
                    .attr('transform','translate('+xScale(d.date)+','
                        +yScale(d.pH)+')');
            }
        });

    zoom.x(xScale);

    PolMap.append('g')
        .attr('class', 'xaxisPH')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis);

    PolMap.append('g')
        .attr('class', 'yaxisPH')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis);

    PolMap.append('clipPath')
        .attr('id','clipPH')
        .append("rect")
        .attr('transform','translate(51,15)')
        .attr("width", width - margins.left - 20)
        .attr("height", height - margins.right - 15);


    function zoomed() {
        PolMap.select('.xaxisPH').call(xAxis);
        PolMap.select('.yaxisPH').call(yAxis);
        PolMap.selectAll('path.linePH').attr('d', function (d,i) {
            if(d.info!=null) {
                return ValueLine(d.info);
            }
        });
        //Color coding for the respective area
        PolMap.select('path.area0PH').attr('d',Area0PH);
        PolMap.select('path.area1PH').attr('d',Area1PH);
        PolMap.select('path.area2PH').attr('d',Area2PH);
    }

    //Appending each path for color code
    for (var j=0;j<ObjectTarget.length;j++) {
        if (ObjectTarget[j].info!=null) {

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area0PH')
                .attr('clip-path','url(#clipPH')
                .datum(ObjectTarget[j].info)
                .attr('d',Area0PH);

            PolMap.append('path')
                .attr('fill',color[5])
                .attr('class','area1PH')
                .attr('clip-path','url(#clipPH')
                .datum(ObjectTarget[j].info)
                .attr('d',Area1PH);

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area2PH')
                .attr('clip-path','url(#clipPH')
                .datum(ObjectTarget[j].info)
                .attr('d',Area2PH);

            if (j<2) {
            } else {
                break;
            }
        }

    }

    var LineEach = PolMap.selectAll('.linePH')
        .data(ObjectTarget)
        .enter()
        .append('path')
        .attr('class', 'linePH')
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .attr('id', function (d) {
            return 'pH'+d.id;
        })
        .attr('clip-path', 'url(#clipPH)')
        .style('stroke','#363F43')
        .attr('d', function (d, i) {
            if (d.info!=null) {
                return ValueLine(d.info);
            }
        })
        .on('click', function () {

            var ID = d3.select(this).attr('id').substr(2);
            var OtherGraphs = $('.linePH').not(this);


            var RestofPerGraphs = $('.linePer').not('#Per'+ID);
            var RestofAmmGraphs = $('.lineAmm').not('#Amm'+ID);
            var RestofSolGraphs = $('.lineSol').not('#Sol'+ID);
            var RestofTOCGraphs = $('.lineTOC').not('#TOC'+ID);

            if (d3.select(this).style('stroke-width') != 4 + 'px') {

                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                d3.select(this).style('stroke-width', 4 + 'px');
                d3.selectAll(OtherGraphs).style('opacity', 0.4);

                //This is to assign a tooltip
                ControlVariable = ID;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','bold');

                //Find ID of present line and highlight all other lines of the same
                d3.select('#Amm'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofAmmGraphs).style('opacity',0.4);

                d3.select('#Per'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofPerGraphs).style('opacity',0.4);

                d3.select('#Sol'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofSolGraphs).style('opacity',0.4);

                d3.select('#TOC'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofTOCGraphs).style('opacity',0.4);

            } else {
                //Find ID of present line and highlight all other lines of the same
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                //This to assign a tooltip
                ControlVariable = false;

                //Unhighlight Label
                $('#LabelPol'+ID).css('font-weight','normal');


                //Clear the text boxes
                d3.select('#pHinfoBoxVal').text('');
                d3.select('#pHinfoBoxDate').text('');
                d3.select('#SolinfoBoxVal').text('');
                d3.select('#SolinfoBoxDate').text('');
                d3.select('#AmminfoBoxVal').text('');
                d3.select('#AmminfoBoxDate').text('');
                d3.select('#PerinfoBoxVal').text('');
                d3.select('#PerinfoBoxDate').text('');
                d3.select('#TotinfoBoxVal').text('');
                d3.select('#TotinfoBoxDate').text('');
            }
        });

    var focus = PolMap.append('g')
        .style('display','none');

    focus.append('circle')
        .attr('class','y')
        .style('fill','black')
        .style('stroke','#222B2F')
        .attr('r',4);

}

//Draw Graph Displaying Solubility
function DrawGraphSol(TargetList) {

    var width = 550,
        height = 275,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        };

    var xScale = d3.time.scale().range([margins.left, width - margins.right]);
    var yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([0, 19]);

    var color = ['#DF5952','#F3624D','#FDA463','#FEC170','#FEE191','#FFFFC1'];

    var Area0Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(30);
        });

    var Area1Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(7.5);
        });

    var Area2Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(6);
        });

    var Area3Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(5);
        });

    var Area4Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(3);
        });

    var Area5Sol = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(2);
        });

    var ValueLine = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.sol);
        })
        .defined(function (d) {
            return d.sol != -1;
        })
        .interpolate('cardinal');

    var LineList = [];
    var ObjectTarget = TargetList.SubList;

    ObjectTarget.forEach(function (data) {
        if (data.info != null) {
            xScale.domain(d3.extent(data.info, function (d) {
                return d.date;
            }));
        }
    });

    var xAxis = d3.svg.axis()
        .ticks(d3.time.days,3)
        .tickSubdivide(true)
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    var zoom = d3.behavior.zoom()
        .x(xScale)
        .scaleExtent([1, 10])
        .on("zoom", zoomed);

    var PolMap = d3.select('#PollutionMap')
        .append('svg')
        .call(zoom)
        .attr('id', 'SVGSL')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover',function () {
            if(ControlVariable) {
                focus.style('display',null);
            }
        })
        .on('mousemove',function () {
            if (ControlVariable) {
                var index = ObjectTarget.findIndex(x => x.id==ControlVariable);
                var x0 = xScale.invert(d3.mouse(this)[0]);
                var bisectDate = d3.bisector(function (d) {
                    return d.date;
                }).left;

                i = bisectDate(ObjectTarget[index].info, x0, 1);
                var d0 = ObjectTarget[index].info[i - 1],
                    d1 = ObjectTarget[index].info[i];

                var d = x0 - d0.date > d1.date - x0 ? d1: d0;

                var momentInstance = moment(d.date).format('Do MMM YY, HH:mm');

                if(d.sol>10 && d.sol<100) {
                    d3.select('#SolinfoBoxVal').style('color','#fcfc64');
                } else {
                    d3.select('#SolinfoBoxVal').style('color','black');
                }

                d3.select('#SolinfoBoxVal').text(d.sol);
                d3.select('#SolinfoBoxDate').text(momentInstance);

                focus.select('circle.y')
                    .attr('transform','translate('+xScale(d.date)+','
                        +yScale(d.sol)+')');

            }
        })
        .on('mouseout',function () {
            focus.style('display','none');
        });


    zoomed();

    PolMap.append('g')
        .attr('class', 'xaxisSol')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis);

    PolMap.append('g')
        .attr('class', 'yaxisSol')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis);

    PolMap.append('clipPath')
        .attr('id', 'clipSol')
        .append("rect")
        .attr('transform','translate(51,15)')
        .attr("width", width - margins.left - 20)
        .attr("height", height - margins.right - 15);

    function zoomed() {
        PolMap.select('.xaxisSol').call(xAxis);
        PolMap.select('.yaxisSol').call(yAxis);
        PolMap.selectAll('path.lineSol').attr('d', function (d,i) {
            if(d.info!=null) {
                return ValueLine(d.info);
            }
        });
        //Color coding for the respective area
        PolMap.select('path.area0Sol').attr('d',Area0Sol);
        PolMap.select('path.area1Sol').attr('d',Area1Sol);
        PolMap.select('path.area2Sol').attr('d',Area2Sol);
        PolMap.select('path.area3Sol').attr('d',Area3Sol);
        PolMap.select('path.area4Sol').attr('d',Area4Sol);
        PolMap.select('path.area5Sol').attr('d',Area5Sol);
    }

    //Appending each path for color code
    for (var j=0;j<ObjectTarget.length;j++) {
        if (ObjectTarget[j].info!=null) {

            PolMap.append('path')
                .attr('fill',color[5])
                .attr('class','area0Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area0Sol);

            PolMap.append('path')
                .attr('fill',color[4])
                .attr('class','area1Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area1Sol);

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area2Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area2Sol);

            PolMap.append('path')
                .attr('fill',color[2])
                .attr('class','area3Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area3Sol);

            PolMap.append('path')
                .attr('fill',color[1])
                .attr('class','area4Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area4Sol);

            PolMap.append('path')
                .attr('fill',color[0])
                .attr('class','area5Sol')
                .attr('clip-path','url(#clipSol')
                .datum(ObjectTarget[j].info)
                .attr('d',Area5Sol);

            if (j<2) {
            } else {
                break;
            }

        }

    }

    var LineEach = PolMap.selectAll('.lineSol')
        .data(ObjectTarget)
        .enter()
        .append('path')
        .attr('class', 'lineSol')
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .attr('id', function (d) {
            return 'Sol'+d.id;
        })
        .style('stroke','#363F43')
        .attr('clip-path', 'url(#clipSol)')
        .attr('d', function (d, i) {
            if (d.info!=null) {
                return ValueLine(d.info);
            }
        })
        .on('click', function () {

            var ID = d3.select(this).attr('id').substr(3);
            var OtherGraphs = $('.lineSol').not(this);

            var RestofPerGraphs = $('.linePer').not('#Per'+ID);
            var RestofAmmGraphs = $('.lineAmm').not('#Amm'+ID);
            var RestofSolGraphs = $('.linePH').not('#pH'+ID);
            var RestofTOCGraphs = $('.lineTOC').not('#TOC'+ID);

            if (d3.select(this).style('stroke-width') != 4 + 'px') {

                //Reset all the graphs
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                d3.select(this).style('stroke-width', 4 + 'px');
                d3.selectAll(OtherGraphs).style('opacity', 0.4);

                ControlVariable = ID;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','bold');

                //Find ID of present line and highlight all other lines of the same
                d3.select('#Amm'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofAmmGraphs).style('opacity',0.4);

                d3.select('#Per'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofPerGraphs).style('opacity',0.4);

                d3.select('#pH'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofSolGraphs).style('opacity',0.4);

                d3.select('#TOC'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofTOCGraphs).style('opacity',0.4);

            } else {
                //Find ID of present line and highlight all other lines of the same
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                ControlVariable = false;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','normal');

                //Clear the text boxes
                d3.select('#pHinfoBoxVal').text('');
                d3.select('#pHinfoBoxDate').text('');
                d3.select('#SolinfoBoxVal').text('');
                d3.select('#SolinfoBoxDate').text('');
                d3.select('#AmminfoBoxVal').text('');
                d3.select('#AmminfoBoxDate').text('');
                d3.select('#PerinfoBoxVal').text('');
                d3.select('#PerinfoBoxDate').text('');
                d3.select('#TotinfoBoxVal').text('');
                d3.select('#TotinfoBoxDate').text('');
            }
        });

    var focus = PolMap.append('g')
        .style('display','none');

    focus.append('circle')
        .attr('class','y')
        .style('fill','black')
        .style('stroke','#222B2F')
        .attr('r',4);


    LineList.push(LineEach);
}

//Draw Graph for Ammonium
function DrawGraphAmm(TargetList) {

    var width = 550,
        height = 275,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        };

    var xScale = d3.time.scale().range([margins.left, width - margins.right]);
    var yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([0.01, 3]);

    var color = ['#DF5952','#F3624D','#FDA463','#FEC170','#FEE191','#FFFFC1'];

    var Area0Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(5);
        });

    var Area1Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(2.0);
        });

    var Area2Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.5);
        });

    var Area3Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.0);
        });

    var Area4Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(0.5);
        });

    var Area5Amm = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(0.15);
        });



    var ValueLine = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.amm);
        })
        .defined(function (d) {
            return d.amm != -1;
        })
        .interpolate('cardinal');

    var LineList = [];
    var ObjectTarget = TargetList.SubList;

    ObjectTarget.forEach(function (data) {
        if (data.info != null) {
            xScale.domain(d3.extent(data.info, function (d) {
                return d.date;
            }));
        }
    });

    var xAxis = d3.svg.axis()
        .ticks(d3.time.days,3)
        .tickSubdivide(true)
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    var zoom = d3.behavior.zoom()
        .x(xScale)
        .scaleExtent([1, 10])
        .on("zoom", zoomed);

    var PolMap = d3.select('#PollutionMap')
        .append('svg')
        .call(zoom)
        .attr('id', 'SVGAM')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover',function () {
            if(ControlVariable) {
                focus.style('display',null);
            }
        })
        .on('mousemove',function () {
            if (ControlVariable) {
                var index = ObjectTarget.findIndex(x => x.id==ControlVariable);
                var x0 = xScale.invert(d3.mouse(this)[0]);
                var bisectDate = d3.bisector(function (d) {
                    return d.date;
                }).left;

                i = bisectDate(ObjectTarget[index].info, x0, 1);
                var d0 = ObjectTarget[index].info[i - 1],
                    d1 = ObjectTarget[index].info[i];

                var d = x0 - d0.date > d1.date - x0 ? d1: d0;

                var momentInstance = moment(d.date).format('Do MMM YY, HH:mm');

                if(d.amm>3 && d.amm<100) {
                    d3.select('#AmminfoBoxVal').style('color','#ff3b00');
                    d3.select('#AmminfoBoxDate').style('color','#ff3b00');
                } else {
                    d3.select('#AmminfoBoxVal').style('color','black');
                    d3.select('#AmminfoBoxDate').style('color','black');
                }

                d3.select('#AmminfoBoxVal').text(d.amm);
                d3.select('#AmminfoBoxDate').text(momentInstance);

                focus.select('circle.y')
                    .attr('transform','translate('+xScale(d.date)+','
                        +yScale(d.amm)+')');
            }
        })
        .on('mouseout',function () {
            focus.style('display','none');
        });

    zoomed();

    PolMap.append('g')
        .attr('class', 'xaxisAmm')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis);

    PolMap.append('g')
        .attr('class', 'yaxisAmm')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis);

    PolMap.append('clipPath')
        .attr('id', 'clipAmm')
        .append("rect")
        .attr('transform','translate(51,15)')
        .attr("width", width - margins.left - 20)
        .attr("height", height - margins.right - 15);

    function zoomed() {
        PolMap.select('.xaxisAmm').call(xAxis);
        PolMap.select('.yaxisAmm').call(yAxis);
        PolMap.selectAll('path.lineAmm').attr('d', function (d,i) {
            if(d.info!=null) {
                return ValueLine(d.info);
            }
        });
        //Color coding for the respective area
        PolMap.select('path.area0Amm').attr('d',Area0Amm);
        PolMap.select('path.area1Amm').attr('d',Area1Amm);
        PolMap.select('path.area2Amm').attr('d',Area2Amm);
        PolMap.select('path.area3Amm').attr('d',Area3Amm);
        PolMap.select('path.area4Amm').attr('d',Area4Amm);
        PolMap.select('path.area5Amm').attr('d',Area5Amm);
    }

    //Appending each path for color code
    for (var j=0;j<ObjectTarget.length;j++) {
        if (ObjectTarget[j].info!=null) {

            PolMap.append('path')
                .attr('fill',color[0])
                .attr('class','area0Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area0Amm);

            PolMap.append('path')
                .attr('fill',color[1])
                .attr('class','area1Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area1Amm);

            PolMap.append('path')
                .attr('fill',color[2])
                .attr('class','area2Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area2Amm);

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area3Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area3Amm);

            PolMap.append('path')
                .attr('fill',color[4])
                .attr('class','area4Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area4Amm);

            PolMap.append('path')
                .attr('fill',color[5])
                .attr('class','area5Amm')
                .attr('clip-path','url(#clipAmm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area5Amm);

            if (j<2) {
            } else {
                break;
            }

        }

    }

    var LineEach = PolMap.selectAll('.lineAmm')
        .data(ObjectTarget)
        .enter()
        .append('path')
        .attr('class', 'lineAmm')
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .attr('id', function (d) {
            return 'Amm'+d.id;
        })
        .attr('clip-path', 'url(#clipAmm)')
        .style('stroke','#363F43')
        .attr('d', function (d, i) {
            if (d.info!=null) {
                return ValueLine(d.info);
            }
        })
        .on('click', function () {


            var ID = d3.select(this).attr('id').substr(3);
            var OtherGraphs = $('.lineAmm').not(this);

            var RestofPerGraphs = $('.linePer').not('#Per'+ID);
            var RestofAmmGraphs = $('.linePH').not('#pH'+ID);
            var RestofSolGraphs = $('.lineSol').not('#Sol'+ID);
            var RestofTOCGraphs = $('.lineTOC').not('#TOC'+ID);

            if (d3.select(this).style('stroke-width') != 4 + 'px') {

                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                d3.select(this).style('stroke-width', 4 + 'px');
                d3.selectAll(OtherGraphs).style('opacity', 0.4);

                ControlVariable = ID;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','bold');

                //Find ID of present line and highlight all other lines of the same
                d3.select('#pH'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofAmmGraphs).style('opacity',0.4);

                d3.select('#Per'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofPerGraphs).style('opacity',0.4);

                d3.select('#Sol'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofSolGraphs).style('opacity',0.4);

                d3.select('#TOC'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofTOCGraphs).style('opacity',0.4);

            } else {
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                ControlVariable = false;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','normal');

                //Clear the text boxes
                d3.select('#pHinfoBoxVal').text('');
                d3.select('#pHinfoBoxDate').text('');
                d3.select('#SolinfoBoxVal').text('');
                d3.select('#SolinfoBoxDate').text('');
                d3.select('#AmminfoBoxVal').text('');
                d3.select('#AmminfoBoxDate').text('');
                d3.select('#PerinfoBoxVal').text('');
                d3.select('#PerinfoBoxDate').text('');
                d3.select('#TotinfoBoxVal').text('');
                d3.select('#TotinfoBoxDate').text('');
            }
        });

    LineList.push(LineEach);

    var focus = PolMap.append('g')
        .style('display','none');

    focus.append('circle')
        .attr('class','y')
        .style('fill','black')
        .style('stroke','#222B2F')
        .attr('r',4);
}

//Draw graph for permanganate
function DrawGraphPer(TargetList) {

    var width = 550,
        height = 275,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        };

    var xScale = d3.time.scale().range([margins.left, width - margins.right]);
    var yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([0.01, 20]);

    var color = ['#DF5952','#F3624D','#FDA463','#FEC170','#FEE191','#FFFFC1'];

    var Area0Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(25);
        });

    var Area1Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(15);
        });

    var Area2Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(10);
        });

    var Area3Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(6);
        });

    var Area4Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(4);
        });

    var Area5Per = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(2);
        });


    var ValueLine = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.perm);
        })
        .defined(function (d) {
            return (d.perm != -1 && d.perm!='9999');
        })
        .interpolate('cardinal');

    var LineList = [];
    var ObjectTarget = TargetList.SubList;

    ObjectTarget.forEach(function (data) {
        if (data.info != null) {
            xScale.domain(d3.extent(data.info, function (d) {
                return d.date;
            }));
        }
    });

    var xAxis = d3.svg.axis()
        .ticks(d3.time.days,3)
        .tickSubdivide(true)
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    var zoom = d3.behavior.zoom()
        .x(xScale)
        .scaleExtent([1, 10])
        .on("zoom", zoomed);

    var PolMap = d3.select('#PollutionMap')
        .append('svg')
        .call(zoom)
        .attr('id', 'SVGPM')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover',function () {
            if(ControlVariable) {
                focus.style('display',null);
            }
        })
        .on('mousemove',function () {
            if (ControlVariable) {
                var index = ObjectTarget.findIndex(x => x.id==ControlVariable);
                var x0 = xScale.invert(d3.mouse(this)[0]);
                var bisectDate = d3.bisector(function (d) {
                    return d.date;
                }).left;

                i = bisectDate(ObjectTarget[index].info, x0, 1);
                var d0 = ObjectTarget[index].info[i - 1],
                    d1 = ObjectTarget[index].info[i];

                var d = x0 - d0.date > d1.date - x0 ? d1: d0;

                var momentInstance = moment(d.date).format('Do MMM YY, HH:mm');

                if(d.perm>20 && d.perm<100) {
                    d3.select('#PerinfoBoxVal').style('color','#ff3b00');
                    d3.select('#PerinfoBoxDate').style('color','#ff3b00');
                } else {
                    d3.select('#PerinfoBoxVal').style('color','black');
                    d3.select('#PerinfoBoxDate').style('color','black');
                }

                d3.select('#PerinfoBoxVal').text(d.perm);
                d3.select('#PerinfoBoxDate').text(momentInstance);

                focus.select('circle.y')
                    .attr('transform','translate('+xScale(d.date)+','
                        +yScale(d.perm)+')');
            }
        })
        .on('mouseout',function () {
            focus.style('display','none');
        });

    zoomed();

    PolMap.append('g')
        .attr('class', 'xaxisPerm')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis);

    PolMap.append('g')
        .attr('class', 'yaxisPerm')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis);

    PolMap.append('clipPath')
        .attr('id', 'clipPerm')
        .append("rect")
        .attr('transform','translate(51,15)')
        .attr("width", width - margins.left - 20)
        .attr("height", height - margins.right - 15);

    function zoomed() {
        PolMap.select('.xaxisPerm').call(xAxis);
        PolMap.select('.yaxisPerm').call(yAxis);
        PolMap.selectAll('path.linePer').attr('d', function (d,i) {
            if(d.info!=null) {
                return ValueLine(d.info);
            }
        });
        //Color coding for the respective area
        PolMap.select('path.area0Perm').attr('d',Area0Per);
        PolMap.select('path.area1Perm').attr('d',Area1Per);
        PolMap.select('path.area2Perm').attr('d',Area2Per);
        PolMap.select('path.area3Perm').attr('d',Area3Per);
        PolMap.select('path.area4Perm').attr('d',Area4Per);
        PolMap.select('path.area5Perm').attr('d',Area5Per);
    }

    //Appending each path for color code
    for (var j=0;j<ObjectTarget.length;j++) {
        if (ObjectTarget[j].info!=null) {

            PolMap.append('path')
                .attr('fill',color[0])
                .attr('class','area0Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area0Per);

            PolMap.append('path')
                .attr('fill',color[1])
                .attr('class','area1Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area1Per);

            PolMap.append('path')
                .attr('fill',color[2])
                .attr('class','area2Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area2Per);

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area3Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area3Per);

            PolMap.append('path')
                .attr('fill',color[4])
                .attr('class','area4Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area4Per);

            PolMap.append('path')
                .attr('fill',color[5])
                .attr('class','area5Perm')
                .attr('clip-path','url(#clipPerm')
                .datum(ObjectTarget[j].info)
                .attr('d',Area5Per);

            if (j<2) {
            } else {
                break;
            }
        }

    }

    var LineEach = PolMap.selectAll('.linePer')
        .data(ObjectTarget)
        .enter()
        .append('path')
        .attr('class', 'linePer')
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .attr('id', function (d) {
            return 'Per'+d.id;
        })
        .attr('clip-path', 'url(#clipPerm)')
        .style('stroke','#363F43')
        .attr('d', function (d, i) {
            if (d.info!=null) {
                return ValueLine(d.info);
            }
        })
        .on('click', function () {

            var ID = d3.select(this).attr('id').substr(3);
            var OtherGraphs = $('.linePer').not(this);

            var RestofPerGraphs = $('.linePH').not('#pH'+ID);
            var RestofAmmGraphs = $('.lineAmm').not('#Amm'+ID);
            var RestofSolGraphs = $('.lineSol').not('#Sol'+ID);
            var RestofTOCGraphs = $('.lineTOC').not('#TOC'+ID);

            if (d3.select(this).style('stroke-width') != 4 + 'px') {

                //Reset all the graphs
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                d3.select(this).style('stroke-width', 4 + 'px');
                d3.selectAll(OtherGraphs).style('opacity', 0.4);

                ControlVariable = ID;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','bold');

                //Find ID of present line and highlight all other lines of the same
                d3.select('#Amm'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofAmmGraphs).style('opacity',0.4);

                d3.select('#pH'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofPerGraphs).style('opacity',0.4);

                d3.select('#Sol'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofSolGraphs).style('opacity',0.4);

                d3.select('#TOC'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofTOCGraphs).style('opacity',0.4);

            } else {
                //Find ID of present line and highlight all other lines of the same
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linePH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                ControlVariable = false;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','normal');

                //Clear the text boxes
                d3.select('#pHinfoBoxVal').text('');
                d3.select('#pHinfoBoxDate').text('');
                d3.select('#SolinfoBoxVal').text('');
                d3.select('#SolinfoBoxDate').text('');
                d3.select('#AmminfoBoxVal').text('');
                d3.select('#AmminfoBoxDate').text('');
                d3.select('#PerinfoBoxVal').text('');
                d3.select('#PerinfoBoxDate').text('');
                d3.select('#TotinfoBoxVal').text('');
                d3.select('#TotinfoBoxDate').text('');
            }
        });

    LineList.push(LineEach);

    var focus = PolMap.append('g')
        .style('display','none');

    focus.append('circle')
        .attr('class','y')
        .style('fill','black')
        .style('stroke','#222B2F')
        .attr('r',4);
}


//Draw graph for TOC
function DrawGraphTOC(TargetList) {

    var width = 550,
        height = 275,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 50
        };

    var xScale = d3.time.scale().range([margins.left, width - margins.right]);
    var yScale = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([0.01, 3.01]);


    //Area Related Color coding for each graph
    var color = ['#DF5952','#F3624D','#FDA463','#FEC170','#FEE191','#FFFFC1'];

    var Area0TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(15);
        });

    var Area1TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(2);
        });

    var Area2TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.6);
        });

    var Area3TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.4);
        });

    var Area4TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.2);
        });

    var Area5TOC = d3.svg.area()
        .x(function (d) {
            return xScale(d.date);
        })
        .y0(height)
        .y1(function (d) {
            return yScale(1.0);
        });

    var ValueLine = d3.svg.line()
        .x(function (d) {
            return xScale(d.date);
        })
        .y(function (d) {
            return yScale(d.toc);
        })
        .defined(function (d) {
            return d.toc != -1;
        })
        .interpolate('cardinal');

    var LineList = [];
    var ObjectTarget = TargetList.SubList;

    ObjectTarget.forEach(function (data) {
        if (data.info != null) {
            xScale.domain(d3.extent(data.info, function (d) {
                return d.date;
            }));
        }
    });

    var xAxis = d3.svg.axis()
        .ticks(d3.time.days,3)
        .tickSubdivide(true)
        .scale(xScale);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

    var zoom = d3.behavior.zoom()
        .x(xScale)
        .scaleExtent([1, 10])
        .on("zoom", zoomed);

    var PolMap = d3.select('#PollutionMap')
        .append('svg')
        .call(zoom)
        .attr('id', 'SVGTC')
        .attr('width', width)
        .attr('width', width)
        .attr('height', height)
        .on('mouseover',function () {
            if(ControlVariable) {
                focus.style('display',null);
            }
        })
        .on('mousemove',function () {
            if (ControlVariable) {
                var index = ObjectTarget.findIndex(x => x.id==ControlVariable);
                var x0 = xScale.invert(d3.mouse(this)[0]);
                var bisectDate = d3.bisector(function (d) {
                    return d.date;
                }).left;

                i = bisectDate(ObjectTarget[index].info, x0, 1);
                var d0 = ObjectTarget[index].info[i - 1],
                    d1 = ObjectTarget[index].info[i];

                var d = x0 - d0.date > d1.date - x0 ? d1: d0;

                var momentInstance = moment(d.date).format('Do MMM YY, HH:mm');

                if(d.toc>3 && d.toc<100) {
                    d3.select('#TotinfoBoxVal').style('color','#ff3b00');
                    d3.select('#TotinfoBoxDate').style('color','#ff3b00');
                } else {
                    d3.select('#TotinfoBoxVal').style('color','black');
                    d3.select('#TotinfoBoxDate').style('color','black');
                }

                d3.select('#TotinfoBoxVal').text(d.toc);
                d3.select('#TotinfoBoxDate').text(momentInstance);

                focus.select('circle.y')
                    .attr('transform','translate('+xScale(d.date)+','
                        +yScale(d.toc)+')');
            }
        })
        .on('mouseout',function () {
            focus.style('display','none');
        });

    zoomed();

    PolMap.append('g')
        .attr('class', 'xaxisTOC')
        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
        .call(xAxis);

    PolMap.append('g')
        .attr('class', 'yaxisTOC')
        .attr('transform', 'translate(' + (margins.left) + ',0)')
        .call(yAxis);


    PolMap.append('clipPath')
        .attr('id', 'clipTOC')
        .append("rect")
        .attr('transform','translate(51,15)')
        .attr("width", width - margins.left - 20)
        .attr("height", height - margins.right - 15);

    function zoomed() {
        PolMap.select('.xaxisTOC').call(xAxis);
        PolMap.select('.yaxisTOC').call(yAxis);
        PolMap.selectAll('path.lineTOC').attr('d', function (d,i) {
            if(d.info!=null) {
                return ValueLine(d.info);
            }
        });

        //Color coding for the respective area
        PolMap.select('path.area0TOC').attr('d',Area0TOC);
        PolMap.select('path.area1TOC').attr('d',Area1TOC);
        PolMap.select('path.area2TOC').attr('d',Area2TOC);
        PolMap.select('path.area3TOC').attr('d',Area3TOC);
        PolMap.select('path.area4TOC').attr('d',Area4TOC);
        PolMap.select('path.area5TOC').attr('d',Area5TOC);
    }

    // PolMap.selectAll('.area')
    //     .data(ObjectTarget)
    //     .enter()
    //     .append('path')
    //     .attr('class','area')
    //     .attr('clip-path','url(#clipTOC)')
    //     .attr('d',function (d) {
    //         if(d.info!=null) {
    //             return Area(d.info);
    //         }
    //     })
    //     .attr('fill','#FF7C4C');


    //Appending each path for color code
    for (var j=0;j<ObjectTarget.length;j++) {
        if (ObjectTarget[j].info!=null) {

            PolMap.append('path')
                .attr('fill',color[0])
                .attr('class','area0TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area0TOC);

            PolMap.append('path')
                .attr('fill',color[1])
                .attr('class','area1TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area1TOC);

            PolMap.append('path')
                .attr('fill',color[2])
                .attr('class','area2TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area2TOC);

            PolMap.append('path')
                .attr('fill',color[3])
                .attr('class','area3TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area3TOC);

            PolMap.append('path')
                .attr('fill',color[4])
                .attr('class','area4TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area4TOC);

            PolMap.append('path')
                .attr('fill',color[5])
                .attr('class','area5TOC')
                .attr('clip-path','url(#clipTOC')
                .datum(ObjectTarget[j].info)
                .attr('d',Area5TOC);

            if (j<2) {
            } else {
                break;
            }

        }

    }

    var LineEach = PolMap.selectAll('.lineTOC')
        .data(ObjectTarget)
        .enter()
        .append('path')
        .attr('class', 'lineTOC')
        .style('visibility',function (d,i) {
            if (i<6) {
                return 'visible';
            }
            return 'hidden';
        })
        .attr('id', function (d) {
            return 'TOC'+d.id;
        })
        .attr('clip-path', 'url(#clipTOC)')
        .style('stroke','#363F43')
        .attr('d', function (d, i) {
            if (d.info!=null) {
                return ValueLine(d.info);
            }
        })
        .on('click', function () {

            var ID = d3.select(this).attr('id').substr(3);
            var OtherGraphs = $('.lineTOC').not(this);

            var RestofPerGraphs = $('.linePer').not('#Per'+ID);
            var RestofAmmGraphs = $('.lineAmm').not('#Amm'+ID);
            var RestofSolGraphs = $('.lineSol').not('#Sol'+ID);
            var RestofTOCGraphs = $('.linePH').not('#pH'+ID);

            if (d3.select(this).style('stroke-width') != 4 + 'px') {

                //Reset all the graphs
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linepH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                d3.select(this).style('stroke-width', 4 + 'px');
                d3.selectAll(OtherGraphs).style('opacity', 0.4);

                ControlVariable = ID;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','bold');

                //Find ID of present line and highlight all other lines of the same
                d3.select('#Amm'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofAmmGraphs).style('opacity',0.4);

                d3.select('#Per'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofPerGraphs).style('opacity',0.4);

                d3.select('#Sol'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofSolGraphs).style('opacity',0.4);

                d3.select('#pH'+ID).style('stroke-width',4+'px');
                d3.selectAll(RestofTOCGraphs).style('opacity',0.4);

            } else {
                //Find ID of present line and highlight all other lines of the same
                d3.selectAll('.linePer').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineAmm').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.linepH').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineSol').style('stroke-width',2+'px').style('opacity',1);
                d3.selectAll('.lineTOC').style('stroke-width',2+'px').style('opacity',1);

                ControlVariable = false;

                //HighlightLabel for the respective point
                $('#LabelPol'+ID).css('font-weight','normal');

                //Clear the text boxes
                d3.select('#pHinfoBoxVal').text('');
                d3.select('#pHinfoBoxDate').text('');
                d3.select('#SolinfoBoxVal').text('');
                d3.select('#SolinfoBoxDate').text('');
                d3.select('#AmminfoBoxVal').text('');
                d3.select('#AmminfoBoxDate').text('');
                d3.select('#PerinfoBoxVal').text('');
                d3.select('#PerinfoBoxDate').text('');
                d3.select('#TotinfoBoxVal').text('');
                d3.select('#TotinfoBoxDate').text('');
            }
        });

    LineList.push(LineEach);

    var focus = PolMap.append('g')
        .style('display','none');

    focus.append('circle')
        .attr('class','y')
        .style('fill','black')
        .style('stroke','#222B2F')
        .attr('r',4);
}

//Don't panic! It's just a time parser
var parseDate = d3.time.format('%d-%m-%Y %H:%M').parse;
var mainData = d3.csv('csv_files/PolData.csv', function (data) {
    ID = 5;
    data.forEach(function (d) {
        if (+d.ID != ID) {
            OuterArray = {
                id: ID,
                InnerList: InnerArray
            };
            ObjectList.push(OuterArray);
            ID = +d.ID;
            InnerArray = [];
            InnerObject = {
                pH: +d.PH,
                sol: +d.Solubility,
                amm: +d.Ammonium,
                perm: +d.Permanganate,
                toc: +d.TOC,
                date: parseDate(d.Date)
            };
            InnerArray.push(InnerObject);
        } else {
            InnerObject = {
                pH: +d.PH,
                sol: +d.Solubility,
                amm: +d.Ammonium,
                perm: +d.Permanganate,
                toc: +d.TOC,
                date: parseDate(d.Date)
            };
            InnerArray.push(InnerObject);
        }
    });

    var ProvinceArray = [];
    var LocIDArray = [];
    StationLocation.forEach(function (d) {
        if (LocIDArray.indexOf(+d[0]) != -1) {

        } else {
            var Province = d[1];
            StationLocation.forEach(function (de) {
                if (Province == de[1]) {
                    LocIDArray.push(+de[0]);
                    for (var i = 0; i < ObjectList.length; i++) {
                        if (ObjectList[i].id == +de[0]) {
                            var indexPro = ObjectList[i].InnerList;
                        }
                    }
                    var SingleLocation = {
                        info: indexPro,
                        id: +de[0],
                        city: de[2]
                    };
                    ProvinceArray.push(SingleLocation);
                }
            });
            var ProvinceData = {
                province: Province,
                SubList: ProvinceArray
            };
            MainList.push(ProvinceData);
            ProvinceArray = [];
        }
    });

    var Basin = '';
    var BasinListMain = [];
    var BasinComponent = '';
    var ArrayComponent = [];
    var cityName = '';

    BasinArrayProcessed.forEach(function (d) {
        if (d[1]!=Basin) {
            if (Basin!='') {
                var SingleBasin = {
                    basin: Basin,
                    SubList: BasinList
                };
                BasinListMain.push(SingleBasin);
            }

            BasinList = [];
            Basin = d[1];
            for(var l=0;l<StationLocation.length;l++) {
                if(StationLocation[l][0]==d[0]) {
                    cityName = StationLocation[l][2];
                }
            }
            for (var i=0; i<ObjectList.length;i++) {
                if (ObjectList[i].id==d[0]) {
                    ArrayComponent = ObjectList[i].InnerList;
                }
            }
            BasinComponent = {
                id: d[0],
                city: cityName,
                info: ArrayComponent
            };
            BasinList.push(BasinComponent);
        } else {
            for (i =0;i<ObjectList.length;i++) {
                if (ObjectList[i].id== d[0]) {
                    ArrayComponent = ObjectList[i].InnerList;
                }
            }
            for(var j=0;j<StationLocation.length;j++) {
                if(StationLocation[j][0]==d[0]) {
                    cityName = StationLocation[j][2];
                }
            }
            BasinComponent = {
                id: d[0],
                city: cityName,
                info: ArrayComponent
            };
            BasinList.push(BasinComponent);
        }
    });

    var SingleBasin  = {
        basin: Basin,
        SubList: BasinList
    };
    BasinListMain.push(SingleBasin);

    BasinList = BasinListMain;

    var root = {
        name: 'Interactions',
        children: []
    };

    BasinList.forEach(function (d) {
        var item = {
            name: d.basin,
            value: +d.SubList.length
        };
        root.children.push(item);
    });

    var BubbleColor = ['#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8','#a7e4ff','#ffbfda',
        '#def5fb','#ccc7ff','#fbc0d6','#faf7d8','#faf7d8','#bbd8fa','#bbd8fa','#bbd8fa','#bbd8fa','#e1c3ff','#fad6fa','#ffead7','#ffeacb','#fce0c8'];

    var bubble = d3.layout.pack().sort(null).size([1100,500]).padding(1.5);

    var BubbleSVG = d3.select('#PlaceGroup')
        .append('svg')
        .attr('width',1100)
        .attr('height',500)
        .attr('id','BasinMap')
        .attr('class','bubble');

    var node = BubbleSVG.selectAll('.node')
        .data(bubble.nodes(root))
        .enter()
        .append('g')
        .attr('class','node')
        .attr('id',function (d,i) {
            return 'Bu'+i;
        })
        .attr('transform',function (d) {
            return "translate("+d.x+','+d.y+')';
        });

    var PastBubble = null;
    var PastColor = null;

    node.append('circle')
        .attr('r',function (d) {
            return d.r
        })
        .style('stroke','#202020')
        .attr('class','BasinPath')
        .style('stroke-width','2px')
        .style('fill',function (d,i) {
            return BubbleColor[i];
        })
        .style('opacity',function (d,i) {
            if (i==0) {
                return 0;
            }
            return 0.9;
        })
        .on('mouseover',function () {
            if (d3.select(this).style('opacity')>0.9) {

            } else {
                d3.select(this).style('fill','#72bcd4');
            }
        })
        .on('mouseout',function (d,i) {
            if (d3.select(this).style('opacity')>0.9) {

            } else {
                d3.select(this).style('fill', BubbleColor[i]);
            }
        })
        .on('click',function (d,i) {
            d3.select('#SVGPH').remove();
            d3.select('#SVGSL').remove();
            d3.select('#SVGAM').remove();
            d3.select('#SVGPM').remove();
            d3.select('#SVGTC').remove();
            d3.select('#CBList').remove();
            d3.select('#HeaderCheckBox').remove();
            d3.selectAll('.infoPolMap').remove();
            d3.select('#BlankSpace').remove();
            d3.select('#BasinRealTimeDataContainer').remove();

            if(d3.select(this).style('opacity') == 1) {

                d3.select(this).style('fill',BubbleColor[i]);
                d3.select(this).style('opacity',0.9);

            } else {

                if (PastBubble) {
                    PastBubble.style('fill',PastColor).style('opacity',0.9);
                }
                PastBubble = d3.select(this);
                PastColor = BubbleColor[i];
                PastBubble.style('fill','#FF7C4C')
                    .style('opacity',1);

                DataSelector(i-1,'B');

            }
        });

    node.append('text')
        .attr('dy','.3em')
        .style('text-anchor','middle')
        .style('font-family','Typo Grotesk Black')
        .style('font-size',function (d) {
            if (d.value<4) {
                return '4';
            } else {
                return '9';
            }
        })
        .text(function (d,i) {
            if (i!=0)
                return d.name;
        });

    d3.select('#Bu0').remove();

    var width = 1100, height = 500;
    var svg = d3.select("#PlaceGroup")
        .append("svg")
        .attr('id','ProvinceMap')
        .attr('display','none')
        .attr('x',200)
        .attr("width", width)
        .attr("height", height);

    //创建投影(projection)
    var projection = d3.geo.mercator().translate([width / 2, height / 2]).center([105, 38]).scale(550);

    //创建path
    var path = d3.geo.path().projection(projection);

    var OrangeCounter = false;



    //解析json
    d3.json("china.geo.json", function (json) {
        //创建显示tooltip用的矩形
        svg.append("rect")
            .attr("id", "tooltip1")
            .attr("x", 50)
            .attr("y", 50)
            .attr("width", 140)
            .attr("height", 130)
            .attr("fill", "none")
            .style('visibility', 'hidden');

        //创建显示tooltip文本
        svg.append("text")
            .attr("id", "tooltip2")
            .attr("x", 840)
            .attr("y", 400)
            .attr("text-anchor", "middle")
            .attr("font-family", "Typo Grotesk Black")
            .attr('color','white')
            .attr("font-size", "20px")
            .attr("font-weight", "bold")
            .attr("fill", "white")
            .style('visibility', 'hidden');

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr('class','ProvincePath')
            .attr("d", path)
            .on('mouseover', function (data) {
                if (d3.select(this).attr('fill') == '#FF7C4C') {

                } else {
                    d3.select(this).attr('fill', '#a1c4ed');
                }

                if (d3.select('#tooltip2').style('visibility') == 'hidden') {
                    d3.select('#tooltip1').style('visibility', 'visible');
                    d3.select('#tooltip2').style('visibility', 'visible')
                        .text(function () {
                            var ProText = data.id.split('_').join('');
                            return ProText.toUpperCase();
                        })
                } else {

                }

            })
            .on('mouseout', function (data) {
                if (d3.select(this).attr('fill') == '#FF7C4C') {

                } else {
                    d3.select(this).attr('fill', 'rgba(128,124,139,0.61)');
                }
                if (OrangeCounter == true) {

                } else {
                    d3.select("#tooltip1").style('visibility', 'hidden');
                    d3.select("#tooltip2").style('visibility', 'hidden');
                }
            })
            .on('click', function (data) {
                //Remove each and every SVG to pave the way for the next generation
                d3.select('#SVGPH').remove();
                d3.select('#SVGSL').remove();
                d3.select('#SVGAM').remove();
                d3.select('#SVGPM').remove();
                d3.select('#SVGTC').remove();
                d3.select('#CBList').remove();
                d3.select('#HeaderCheckBox').remove();
                d3.selectAll('.infoPolMap').remove();
                d3.select('#BlankSpace').remove();

                if (d3.select(this).attr('fill') != '#FF7C4C') {
                    d3.selectAll('.ProvincePath').attr('fill','rgba(128,124,139,0.61)');
                    d3.select(this).attr('fill', '#FF7C4C');
                    OrangeCounter = true;
                    DataSelector(data.num,'M');
                } else {
                    d3.select(this).attr('fill', 'rgba(128,124,139,0.61)');

                    OrangeCounter = false;
                }

            })
            .attr('fill', 'rgba(128,124,139,0.61)')
            .attr('stroke', 'rgba(255,255,255,1)')
            .attr('stroke-width', 1);
    });

    //Create checkboxes related to each graph
});
//Below is to convert object to a readable format for D3 to make a graph
