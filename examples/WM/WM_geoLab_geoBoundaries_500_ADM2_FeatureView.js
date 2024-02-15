var fvLayer = ui.Map.FeatureViewLayer('WM/geoLab/geoBoundaries/500/ADM2_FeatureView');

var visParams = {
  color: '00909F',
  fillColor: 'b5ffb4',
  opacity: 1,
  width: 1,
  pointSize: 1
};

fvLayer.setVisParams(visParams);
fvLayer.setName('Country Boundaries');

Map.setCenter(-100.0, 38.5, 4);
Map.add(fvLayer);
