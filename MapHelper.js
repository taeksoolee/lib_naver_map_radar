class MapHelper {
  map;
  markers;

  constructor(mapOptions) {
    const map = new naver.maps.Map('map', mapOptions);
    map.mapTypes.setSelectedTypeId(naver.maps.MapTypeId.SATELLITE); // NORMAL, TERRAIN, SATELLITE, HYBRID
    this.map = map;
    this.markers = [];
  }

  createMarker() {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: this.map
    });

    this.markers.push(marker);
  }

  createGreenMarker() {
    const greenMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: this.map,
      title: 'Green',
      icon: {
        content: [
          '<div class="marker-info-window">',
              '<div class="marker-info-content">',
                'hello world',
              '</div>',
          '</div>',
          '<div class="marker color-red">',
            '<i class="fas fa-map-marker-alt"></i>',
          '</div>',
        ].join(''),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58),
      },
      draggable: true
    });

    this.markers.push(greenMarker);
  }
}