{const a=document.styleSheets[0];a.insertRule(`
    .half-circle {
      width: 900px;
      height: 450px;
      top: -450px;
      left: -450px;
      border-bottom: 3px solid rgba(255,0,0,.3);
      border-top-left-radius: 600px;
      border-top-right-radius: 600px;
      position: relative;
      overflow: hidden;
      transform-origin: 450px 450px;
      transform: rotate(310deg);
    }
  `),a.insertRule(`
    .half-circle .sector {
      position: absolute;
      transform-origin: 100% 100%;
      width: 2000px;
      height: 2000px;
      left: 50%;
      top: 100%;
      
      margin-top: -2000px;
      margin-left: -2000px;
      overflow: hidden;
    }    
  `),a.insertRule(`
    .half-circle .sector.active {
      border: 3px solid rgba(255,0,0,.3);
      background-color: rgba(255,0,0,.3);
    }    
  `),a.insertRule(".half-circle .sector-0 { transform: rotate(calc(180deg / 12 * 0)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-1 { transform: rotate(calc(180deg / 12 * 1)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-2 { transform: rotate(calc(180deg / 12 * 2)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-3 { transform: rotate(calc(180deg / 12 * 3)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-4 { transform: rotate(calc(180deg / 12 * 4)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-5 { transform: rotate(calc(180deg / 12 * 5)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-6 { transform: rotate(calc(180deg / 12 * 6)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-7 { transform: rotate(calc(180deg / 12 * 7)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-8 { transform: rotate(calc(180deg / 12 * 8)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-9 { transform: rotate(calc(180deg / 12 * 9)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-10 { transform: rotate(calc(180deg / 12 * 10)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(".half-circle .sector-11 { transform: rotate(calc(180deg / 12 * 11)) skew(calc(90deg - (180deg / 12))); }"),a.insertRule(`
    .sector.sector-line { 
      background: linear-gradient( 
        45deg, rgba(5, 162, 185, 0.8) 0%, rgba(0, 0, 0, 0.02) 90%, rgba(0, 0, 0, 0) 100% );
      animation: rotatesectorline 5s infinite;
    }
  `),a.insertRule(`
    @keyframes rotatesectorline {
      0% {
        transform: rotate(calc(180deg / 6 * 0)) skew(calc(90deg - (180deg / 6)));
      }
      50% {
        transform: rotate(calc(180deg / 6 * 5)) skew(calc(90deg - (180deg / 6)));
      }
      100% {
        transform: rotate(calc(180deg / 6 * 0)) skew(calc(90deg - (180deg / 6)));
      }
    }
  `)}const radarHtml=`
  <div class="half-circle">
    <div class="sector sector-0"></div>
    <div class="sector sector-1"></div>
    <div class="sector sector-2"></div>
    <div class="sector sector-3"></div>
    <div class="sector sector-4"></div>
    <div class="sector sector-5"></div>
    <div class="sector sector-6"></div>
    <div class="sector sector-7"></div>
    <div class="sector sector-8"></div>
    <div class="sector sector-9"></div>
    <div class="sector sector-10"></div>
    <div class="sector sector-11"></div>
    <div class="sector sector-line"></div>
  </div>
`;function generateRadarMarker(e,r){return new naver.maps.Marker({position:new naver.maps.LatLng(r.latitude,r.longtitude),map:e,icon:{content:radarHtml},title:"radar-marker"})}function addDangerSectorRange(e){const r=$(".sector-"+e);r.classList.add("active")}function removeDangerSectorRange(e){const r=$(".sector-"+e);r.classList.remove("active")}function setZoomAndCenter(e,r,t=14){e.setZoom(t),e.setPosition(new naver.maps.LatLng(r.latitude,r.longtitude))}