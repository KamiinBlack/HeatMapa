function initPoints() {
    window.data.forEach((point)=>{
        var marker = new google.maps.Marker({
            position: point,
            map: window.map
        })
    });
}

function initHeatmap() {
    window.heatmap = new HeatmapOverlay(map, {
        "radius": 2,
        "maxOpacity": 1,
        "scaleRadius": true,
        "useLocalExtrema": false,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'mark'
    })
}