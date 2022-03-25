/* ============================================================
 * Dashboard
 * Generates widgets in the dashboard
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    $(document).ready(function() {

        // Widget 17
        // Initialize Skycons
        var icons = new Skycons(),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
        for (i = list.length; i--;) {
            var weatherType = list[i],
                elements = document.getElementsByClassName(weatherType);
            for (var e = elements.length; e--;) {
                icons.set(elements[e], weatherType);
            }
        }

        icons.play();


        // Widget 14
//
//        (function() {
//            var container = '.widget-14-chart';
//
//            var seriesData = [
//                [],
//                [],
//                []
//            ];
//            var random = new Rickshaw.Fixtures.RandomData(50);
//            for (var i = 0; i < 50; i++) {
//                random.addData(seriesData);
//            }
//            var graph = new Rickshaw.Graph({
//                element: document.querySelector(container),
//                renderer: 'area',
//                padding: {
//                    top: 0.5,
//                    bottom: 1
//                },
//                series: [{
//                    data: seriesData[0],
//                    color: $.Pages.getColor('success-light', .5),
//                    name: 'DB Server'
//                }, {
//                    data: seriesData[1],
//                    color: $.Pages.getColor('master-light'),
//                    name: 'Web Server'
//                }]
//            });
//
//
//            var y_axis = new Rickshaw.Graph.Axis.Y({
//                graph: graph,
//                orientation: 'right',
//                tickFormat: function(y) {
//                    return y / 10;
//                },
//                element: document.querySelector('.widget-14-chart_y_axis'),
//            });
//
//            var legend = new Rickshaw.Graph.Legend({
//                graph: graph,
//                element: document.querySelector('.widget-14-chart-legend')
//
//            });
//
//            var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
//                graph: graph,
//                legend: legend
//            });
//
//
//            var hoverDetail = new Rickshaw.Graph.HoverDetail({
//                graph: graph
//            });
//            setInterval(function() {
//                random.removeData(seriesData);
//                random.addData(seriesData);
//                graph.update();
//            }, 1000);
//
//            d3.selectAll('.widget-14-chart_y_axis .tick.major line').attr('x2', '7');
//            d3.selectAll('.widget-14-chart_y_axis .tick.major text').attr('x', '12');
//            $(window).resize(function() {
//                graph.configure({
//                    width: $(container).width()
//                });
//
//                graph.render()
//            });
//
//            $(container).data('chart', graph);
//
//        })();


        //Get from JSON data and build
//
        d3.json('assets/js/min_sales_chart.json', function(data) {

            // Widget-15
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#27cebc'])
                    .useInteractiveGuideline(true)
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: 10,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)

                d3.select('.widget-16-chart svg')
                    .datum(data.siteVisits)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                nv.utils.windowResize(function() {
                    setTimeout(function() {
                        $('.widget-16-chart .nvd3 circle.nv-point').attr("r", "4");
                    }, 500);
                });

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-16-chart .nvd3 circle.nv-point').attr("r", "4");
                }, 500);
            });

            // Widget-7
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#fff'])
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: 20,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)
                    .interactive(false);

                d3.select('.widget-7-chart svg')
                    .datum(data.premarket)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-7-chart .nvd3 circle.nv-point:nth-child(4)').attr("r", "5");
                }, 500);
            });


            // Widget-8
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                    .x(function(d) {
                        return d[0]
                    })
                    .y(function(d) {
                        return d[1]
                    })
                    .color(['#000'])
                    .margin({
                        top: 10,
                        right: -10,
                        bottom: -13,
                        left: -10
                    })
                    .showXAxis(false)
                    .showYAxis(false)
                    .showLegend(false)
                    .interactive(false);

                d3.select('.widget-8-chart svg')
                    .datum(data.siteVisits)
                    .call(chart);

              

                nv.utils.windowResize(chart.update);

                nv.utils.windowResize(function() {
                    setTimeout(function() {
                        $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                            'stroke-width': '2px',
                            ' stroke-opacity': 0.4
                        });
                    }, 500);
                });

                return chart;
            }, function() {
                setTimeout(function() {
                    $('.widget-8-chart .nvd3 circle.nv-point').attr("r", "3").css({
                        'stroke-width': '2px',
                        ' stroke-opacity': 0.4
                    });
                }, 500);
            });
        });


        // Widget 13
        $('.widget-13-map').mapplic({
            source: 'assets/json/countries.json',
            height: 455,
            sidebar: true,
            minimap: false,
            mapfill:true,
            locations: true,
            deeplinking: true,
            fullscreen: false,
            developer: false,
            maxscale: 3,
            animate: true,
            smarttip: true,
            hovertip:true
        });
        
	$.fn.datepicker.dates['pt-BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje",
		monthsTitle: "Meses",
		clear: "Limpar",
		format: "dd/mm/yyyy"
	};
        
        $("#datepicker").datepicker( {
            format: "mm-yyyy",
            viewMode: "months", 
            minViewMode: "months",
            autoClose: true,
            language: 'pt-BR'
        });
        
        $('#datepicker-range').datepicker({
            format: "dd/mm/yyyy",
            language: 'pt-BR'
        });
        
        setTimeout(function(){
            
            escondeAPEs();

            $("a[href='#ame3-1']").on('click',function(){
                info_ape(1);
            });
            $("a[href='#ame3-4']").on('click',function(){
                info_ape(4);
            });
            $("a[href='#ame3-5']").on('click',function(){
                info_ape(5);
            });
            
            $("a[href='#ame1-2']").on('click',function(){
                info_ape(2);
            });
            
            $("a[href='#ame1-3']").on('click',function(){
                info_ape(3);
            });
            
            $("a[href='#ame1-6']").on('click',function(){
                info_ape(6);
            });
            
            
            $("a[href='#ame1']").on('click',function(){
                activaTab('tab1');
                clickAME1();
            });
            
            $("a[href='#ame1']").on('mouseover',function(){
                $(".nome-ponto").html('AME 1');
            });
            $("a[href='#ame2']").on('mouseover',function(){
                $(".nome-ponto").html('AME 2');
            });
            $("a[href='#ame3']").on('mouseover',function(){
                $(".nome-ponto").html('AME 3');
            });
            
            $("a[href='#ame3-1']").on('mouseover',function(){
                $(".nome-ponto").html('Ipiranga');
            });
            $("a[href='#ame3-4']").on('mouseover',function(){
                $(".nome-ponto").html('Petrobras');
            });
            $("a[href='#ame3-5']").on('mouseover',function(){
                $(".nome-ponto").html('Cosan');
            });
            $("a[href='#ame1-2']").on('mouseover',function(){
                $(".nome-ponto").html('Unidos');
            });
            $("a[href='#ame1-3']").on('mouseover',function(){
                $(".nome-ponto").html('Snowland');
            });
            $("a[href='#ame1-6']").on('mouseover',function(){
                $(".nome-ponto").html('Naturovos');
            });
            
            
            $("a[href='#ame1'], a[href='#ame2'], a[href='#ame3'], a[href='#ame3-1'], a[href='#ame3-4'], a[href='#ame3-5'], a[href='#ame1-2'], a[href='#ame1-3'], a[href='#ame1-6']").on('mouseout',function(){
                $(".nome-ponto").html(nome_ponto);
            });
            
            $("a[href='#tab1']").on('click',function(){
                clickAME1();
            });
            
            $("a[href='#ame2']").on('click',function(){
                activaTab('tab2');
                clickAME2();
            });
            
            $("a[href='#tab2']").on('click',function(){
                clickAME2();
            });
            
            $("a[href='#ame3']").on('click',function(){
                activaTab('tab3');
                clickAME3();
            });
            
            $("a[href='#tab3']").on('click',function(){
                clickAME3();
            });
            
            
        }, 1000);
        
        var clickAME1 = function (){
            escondeAPEs();
            nome_ponto = 'AME 1';
            $(".nome-ponto").html(nome_ponto);
            $("a[href='#ame1-2']").show();
            $("a[href='#ame1-3']").show();
            $("a[href='#ame1-6']").show();
            $("#info1").html("NÃO");
            $("#info2").html("90 %");
            $("#info2-bar").css("width","90%");
            $("#info3").html("10.000");
            $("#info4").html("8 ~ 8,5");
            $("#info5").html("79");
            $("#info6").html("SIM");
            $("#btn-detalhes").show();
        };
        
        var clickAME2 = function (){
            escondeAPEs();
            nome_ponto = 'AME 2';
            $(".nome-ponto").html(nome_ponto);
            $("#info1").html("SIM");
            $("#info2").html("100 %");
            $("#info2-bar").css("width","100%");
            $("#info3").html("8.000");
            $("#info4").html("8 ~ 8,5");
            $("#info5").html("40");
            $("#info6").html("SIM");
            $("#btn-detalhes").show();
        };
        
        var clickAME3 = function (){
            escondeAPEs();
            nome_ponto = 'AME 3';
            $(".nome-ponto").html(nome_ponto);
            $("a[href='#ame3-1']").show();
            $("a[href='#ame3-4']").show();
            $("a[href='#ame3-5']").show();
            $("#info1").html("SIM");
            $("#info2").html("60 %");
            $("#info2-bar").css("width","60%");
            $("#info3").html("15.000");
            $("#info4").html("8 ~ 8,5");
            $("#info5").html("85");
            $("#info6").html("NÃO");
            $("#btn-detalhes").show();
        };
        
        var escondeAPEs = function(){
            $("a[href='#ame1-2']").hide();
            $("a[href='#ame1-3']").hide();
            $("a[href='#ame1-6']").hide();
            $("a[href='#ame3-1']").hide();
            $("a[href='#ame3-4']").hide();
            $("a[href='#ame3-5']").hide();
        }
        
        function activaTab(tab){
            $('.nav a[href="#' + tab + '"]').tab('show');
        };

        // Disable scroll to zoom
//        setTimeout(function() {
//            location.hash = "#usa";
//            $('.mapplic-layer').unbind('mousewheel DOMMouseScroll');
//        }, 1000);
//
//
        $('.widget-13 a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            var target = $(e.target).text().trim();
            var hash;
            console.log(target);
            if (target == 'AME 1') {
                hash = '#ame1';
            } else if (target == 'AME 2') {
                hash = '#ame2';
            } else if (target == 'AME 3') {
                hash = '#ame3';
            }
            window.location.hash = hash;
        });

        // tiles
        $(".widget-3 .metro").liveTile();
        $(".widget-7 .metro").liveTile();


        //NVD3 Charts
        d3.json('assets/js/charts.json', function(data) {

            // line chart
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1]
                        })
                        .color([
                            $.Pages.getColor('success'),
                            $.Pages.getColor('danger'),
                            $.Pages.getColor('primary'),
                            $.Pages.getColor('complete'),

                        ])
                        .showLegend(false)
                        .margin({
                            left: 30,
                            bottom: 35
                        })
                        .useInteractiveGuideline(true);

                    chart.xAxis
                        .tickFormat(function(d) {
                            return d3.time.format('%a')(new Date(d))
                        });

                    chart.yAxis.tickFormat(d3.format('d'));

                    d3.select('.nvd3-line svg')
                        .datum(data.nvd3.line)
                        .transition().duration(500)
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    $('.nvd3-line').data('chart', chart);

                    return chart;
                });
            })();


            // line chart2
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .interpolate("basis")
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1] / 100
                        })
                        .color([
                            $.Pages.getColor('success')
                        ])
                        .useInteractiveGuideline(true)

                    .margin({
                            top: 150,
                            right: -10,
                            bottom: -10,
                            left: -10
                        })
                        .showXAxis(false)
                        .showYAxis(false)
                        .showLegend(false);


                    d3.select('.widget-2-chart svg')
                        .datum(data.nvd3.interpolated)
                        .transition().duration(500)
                        .call(chart);


                    nv.utils.windowResize(chart.update);

                    $('.widget-2-chart').data('chart', chart);

                    return chart;
                }, function() {

                });
            })();

            // line chart2
            (function() {
                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1] / 100
                        })
                        .color([
                            $.Pages.getColor('success')
                        ])
                        .forceY([0, 2])
                        .useInteractiveGuideline(true)

                    .margin({
                            top: 60,
                            right: -10,
                            bottom: -10,
                            left: -10
                        })
                        .showLegend(false);


                    d3.select('.widget-4-chart svg')
                        .datum(data.nvd3.productRevenue)
                        .transition().duration(500)
                        .call(chart);


                    nv.utils.windowResize(function() {

                        chart.update();

                    });

                    $('.widget-4-chart').data('chart', chart);

                    return chart;
                }, function() {

                });
            })();

            // Widget 15

            (function() {
                var container = '.widget-15-chart';

                var seriesData = [
                    [],
                    []
                ];
                var random = new Rickshaw.Fixtures.RandomData(40);
                for (var i = 0; i < 40; i++) {
                    random.addData(seriesData);
                }

                var graph = new Rickshaw.Graph({
                    renderer: 'bar',
                    element: document.querySelector(container),
                    height: 200,
                    padding: {
                        top: 0.5
                    },
                    series: [{
                        data: seriesData[0],
                        color: $.Pages.getColor('complete-light'),
                        name: "New users"
                    }, {
                        data: seriesData[1],
                        color: $.Pages.getColor('master-lighter'),
                        name: "Returning users"

                    }]

                });

                var hoverDetail = new Rickshaw.Graph.HoverDetail({
                    graph: graph,
                    formatter: function(series, x, y) {
                        var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
                        var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                        var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                        return content;
                    }
                });

                graph.render();

                $(window).resize(function() {
                    graph.configure({
                        width: $(container).width(),
                        height: 200
                    });

                    graph.render()
                });

                $(container).data('chart', graph);

            })();


            // widget 15-2
            (function() {
                var container = '.widget-15-chart2';

                var seriesData = [
                    [],
                    []
                ];
                var random = new Rickshaw.Fixtures.RandomData(40);
                for (var i = 0; i < 40; i++) {
                    random.addData(seriesData);
                }

                var graph = new Rickshaw.Graph({
                    renderer: 'bar',
                    element: document.querySelector(container),
                    padding: {
                        top: 0.5
                    },
                    series: [{
                        data: seriesData[0],
                        color: $.Pages.getColor('complete-light'),
                        name: "New users"
                    }, {
                        data: seriesData[1],
                        color: $.Pages.getColor('master-lighter'),
                        name: "Returning users"

                    }]

                });

                var hoverDetail = new Rickshaw.Graph.HoverDetail({
                    graph: graph,
                    formatter: function(series, x, y) {
                        var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
                        var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                        var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                        return content;
                    }
                });

                graph.render();

                $(window).resize(function() {
                    graph.configure({
                        width: $(container).width(),
                        height: 200
                    });

                    graph.render()
                });

                $(container).data('chart', graph);

            })();


            // widget 5
            (function() {
                var container = '.widget-5-chart';

                var seriesData = [
                    [],
                    []
                ];
                var random = new Rickshaw.Fixtures.RandomData(7);
                for (var i = 0; i < 7; i++) {
                    random.addData(seriesData);
                }

                var graph = new Rickshaw.Graph({
                    element: document.querySelector(container),
                    renderer: 'bar',
                    series: [{
                        data: [{
                            x: 0,
                            y: 10
                        }, {
                            x: 1,
                            y: 8
                        }, {
                            x: 2,
                            y: 5
                        }, {
                            x: 3,
                            y: 9
                        }, {
                            x: 4,
                            y: 5
                        }, {
                            x: 5,
                            y: 8
                        }, {
                            x: 6,
                            y: 10
                        }],
                        color: $.Pages.getColor('danger')
                    }, {
                        data: [{
                            x: 0,
                            y: 0
                        }, {
                            x: 1,
                            y: 2
                        }, {
                            x: 2,
                            y: 5
                        }, {
                            x: 3,
                            y: 1
                        }, {
                            x: 4,
                            y: 5
                        }, {
                            x: 5,
                            y: 2
                        }, {
                            x: 6,
                            y: 0
                        }],
                        color: $.Pages.getColor('master-light')
                    }]

                });


                var MonthBarsRenderer = Rickshaw.Class.create(Rickshaw.Graph.Renderer.Bar, {
                    barWidth: function(series) {

                        return 7;
                    }
                });


                graph.setRenderer(MonthBarsRenderer);


                graph.render();


                $(window).resize(function() {
                    graph.configure({
                        width: $(container).width(),
                        height: $(container).height()
                    });

                    graph.render()
                });

                $(container).data('chart', graph);

            })();

        });


        // Init portlets

        var bars = $('.widget-loader-bar');
        var circles = $('.widget-loader-circle');
        var circlesLg = $('.widget-loader-circle-lg');
        var circlesLgMaster = $('.widget-loader-circle-lg-master');



        bars.each(function() {
            var elem = $(this);
            elem.portlet({
                progress: 'bar',
                onRefresh: function() {
                    setTimeout(function() {
                        elem.portlet({
                            refresh: false
                        });
                    }.bind(this), 2000);
                }
            });
        });


        circles.each(function() {
            var elem = $(this);
            elem.portlet({
                progress: 'circle',
                onRefresh: function() {
                    setTimeout(function() {
                        elem.portlet({
                            refresh: false
                        });
                    }.bind(this), 2000);
                }
            });
        });

        circlesLg.each(function() {
            var elem = $(this);
            elem.portlet({
                progress: 'circle-lg',
                progressColor: 'white',
                overlayColor: '0,0,0',
                overlayOpacity: 0.6,
                onRefresh: function() {
                    setTimeout(function() {
                        elem.portlet({
                            refresh: false
                        });
                    }.bind(this), 2000);
                }
            });
        });


        circlesLgMaster.each(function() {
            var elem = $(this);
            elem.portlet({
                progress: 'circle-lg',
                progressColor: 'master',
                overlayOpacity: 0.6,
                onRefresh: function() {
                    setTimeout(function() {
                        elem.portlet({
                            refresh: false
                        });
                    }.bind(this), 2000);
                }
            });
        });

    });

})(window.jQuery);

nome_ponto = '';

function info_ape(n){
    switch (n) {
        case 1:
            nome_ponto = 'Ipiranga';
            break;
        case 2:
            nome_ponto = 'Unidos';
            break;
        case 3:
            nome_ponto = 'Snowland';
            break;
        case 4:
            nome_ponto = 'Petrobras';
            break;
        case 5:
            nome_ponto = 'Cosan';
            break;
        case 6:
            nome_ponto = 'Naturovos';
            break;
            
        default:
            break;
    }
    
    $(".nome-ponto").html(nome_ponto);
    
    if(n/2 == 0){
        var info1 = "SIM";
    }
    if(n/2 == 1){
        var info1 = "NÃO";
    }
    
    var info2 = 8 * n;
    
    var info5 = 3 * n;
    
    var info3 = 687 * n;
    
    $("#info1").html(info1);
    $("#info2").html(info2+" %");
    $("#info2-bar").css("width", info2+"%");
    $("#info3").html(info3);
    $("#info4").html('8 ~ 8,5');
    $("#info5").html(info5);
    $("#info6").html(info1);
}

function vai_para(id){
    $('html,body').stop().animate({scrollTop: $("."+id).offset().top -80  }, 1000);
}