$(function() {

    var marker = [], infowindow = [], map;

    function addMarker(location,name,contentstr){
        marker[name] = new google.maps.Marker({
            position: location,
            map: map,
            icon: '../img/marker.png'
        });
        marker[name].setMap(map);

        infowindow[name] = new google.maps.InfoWindow({
            content:contentstr
        });

        google.maps.event.addListener(marker[name], 'click', function() {
            infowindow[name].open(map,marker[name]);
        });
    }

    function initialize() {

        var lat = $('#map-canvas').attr("data-lat");
        var lng = $('#map-canvas').attr("data-lng");

        var myLatlng = new google.maps.LatLng(lat,lng);

        var setZoom = parseInt($('#map-canvas').attr("data-zoom"));

        var styles = [
            {
                "featureType":
                    "water",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "landscape",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "road.highway",
                "elementType":
                    "geometry.fill",
                "stylers":
                    [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "road.highway",
                "elementType":
                    "geometry.stroke",
                "stylers":
                    [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "road.arterial",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "road.local",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "poi",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "poi.park",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
            }
            ,
            {
                "elementType":
                    "labels.text.stroke",
                "stylers":
                    [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
            }
            ,
            {
                "elementType":
                    "labels.text.fill",
                "stylers":
                    [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
            }
            ,
            {
                "elementType":
                    "labels.icon",
                "stylers":
                    [
                        {
                            "visibility": "off"
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "transit",
                "elementType":
                    "geometry",
                "stylers":
                    [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "administrative",
                "elementType":
                    "geometry.fill",
                "stylers":
                    [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
            }
            ,
            {
                "featureType":
                    "administrative",
                "elementType":
                    "geometry.stroke",
                "stylers":
                    [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
            }
        ];

        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

        var mapOptions = {
            scrollwheel: false,
            zoom: setZoom,

            panControl: false,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },

            center: myLatlng,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }

        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');


        $('.addresses-block a').each(function(){
            var mark_lat = $(this).attr('data-lat');
            var mark_lng = $(this).attr('data-lng');
            var this_index = $('.addresses-block a').index(this);
            var mark_name = 'template_marker_'+this_index;
            var mark_locat = new google.maps.LatLng(mark_lat, mark_lng);
            var mark_str = $(this).attr('data-string');
            addMarker(mark_locat,mark_name,mark_str);
        });

    }

    $(window).on('load', function(){
        setTimeout(function(){initialize();}, 500);
    });

});