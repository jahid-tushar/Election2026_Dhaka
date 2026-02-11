var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Districts_1 = new ol.format.GeoJSON();
var features_Districts_1 = format_Districts_1.readFeatures(json_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_1.addFeatures(features_Districts_1);
var lyr_Districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districts_1, 
                style: style_Districts_1,
                popuplayertitle: 'Districts',
                interactive: true,
    title: 'Districts<br />\
    <img src="styles/legend/Districts_1_0.png" /> Brahamanbaria<br />\
    <img src="styles/legend/Districts_1_1.png" /> Chandpur<br />\
    <img src="styles/legend/Districts_1_2.png" /> Comilla<br />\
    <img src="styles/legend/Districts_1_3.png" /> Dhaka<br />\
    <img src="styles/legend/Districts_1_4.png" /> Faridpur<br />\
    <img src="styles/legend/Districts_1_5.png" /> Gazipur<br />\
    <img src="styles/legend/Districts_1_6.png" /> Madaripur<br />\
    <img src="styles/legend/Districts_1_7.png" /> Manikganj<br />\
    <img src="styles/legend/Districts_1_8.png" /> Munshiganj<br />\
    <img src="styles/legend/Districts_1_9.png" /> Narayanganj<br />\
    <img src="styles/legend/Districts_1_10.png" /> Narsingdi<br />\
    <img src="styles/legend/Districts_1_11.png" /> Tangail<br />\
    <img src="styles/legend/Districts_1_12.png" /> <br />' });
var format_DhakaCityBoundary_2 = new ol.format.GeoJSON();
var features_DhakaCityBoundary_2 = format_DhakaCityBoundary_2.readFeatures(json_DhakaCityBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DhakaCityBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DhakaCityBoundary_2.addFeatures(features_DhakaCityBoundary_2);
var lyr_DhakaCityBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DhakaCityBoundary_2, 
                style: style_DhakaCityBoundary_2,
                popuplayertitle: 'Dhaka City Boundary',
                interactive: false,
                title: '<img src="styles/legend/DhakaCityBoundary_2.png" /> Dhaka City Boundary'
            });
var format_Constituency_3 = new ol.format.GeoJSON();
var features_Constituency_3 = format_Constituency_3.readFeatures(json_Constituency_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constituency_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constituency_3.addFeatures(features_Constituency_3);
var lyr_Constituency_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constituency_3, 
                style: style_Constituency_3,
                popuplayertitle: 'Constituency',
                interactive: true,
                title: '<img src="styles/legend/Constituency_3.png" /> Constituency'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Districts_1.setVisible(true);lyr_DhakaCityBoundary_2.setVisible(true);lyr_Constituency_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Districts_1,lyr_DhakaCityBoundary_2,lyr_Constituency_3];
lyr_Districts_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM4_EN': 'ADM4_EN', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_DhakaCityBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'N_S': 'N_S', 'Zone': 'Zone', 'Ward_No': 'Ward_No', 'POP_FB': 'POP_FB', 'CAS_12JUN': 'CAS_12JUN', 'CAS_11JUN': 'CAS_11JUN', 'CAS_10JUN': 'CAS_10JUN', 'CAS_09JUN': 'CAS_09JUN', 'CAS_08JUN': 'CAS_08JUN', 'CAS_07JUN': 'CAS_07JUN', 'CAS_06JUN': 'CAS_06JUN', 'CAS_05JUN': 'CAS_05JUN', 'CAS_04JUN': 'CAS_04JUN', 'CAS_03JUN': 'CAS_03JUN', 'CAS_02JUN': 'CAS_02JUN', 'CAS_01JUN': 'CAS_01JUN', 'CAS_31MAY': 'CAS_31MAY', 'CAS_30MAY': 'CAS_30MAY', 'TOT_CAS_12': 'TOT_CAS_12', 'CAS_100K': 'CAS_100K', });
lyr_Constituency_3.set('fieldAliases', {'Constituen': 'Constituen', 'Area_Cover': 'Area_Cover', 'Lat': 'Lat', 'Long': 'Long', 'Key_Candid': 'Key_Candid', 'Source': 'Source', 'Label': 'Label', });
lyr_Districts_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM4_EN': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_DhakaCityBoundary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_1': 'TextEdit', 'N_S': 'TextEdit', 'Zone': 'TextEdit', 'Ward_No': 'TextEdit', 'POP_FB': 'TextEdit', 'CAS_12JUN': 'TextEdit', 'CAS_11JUN': 'TextEdit', 'CAS_10JUN': 'TextEdit', 'CAS_09JUN': 'TextEdit', 'CAS_08JUN': 'TextEdit', 'CAS_07JUN': 'TextEdit', 'CAS_06JUN': 'TextEdit', 'CAS_05JUN': 'TextEdit', 'CAS_04JUN': 'TextEdit', 'CAS_03JUN': 'TextEdit', 'CAS_02JUN': 'TextEdit', 'CAS_01JUN': 'TextEdit', 'CAS_31MAY': 'TextEdit', 'CAS_30MAY': 'TextEdit', 'TOT_CAS_12': 'TextEdit', 'CAS_100K': 'TextEdit', });
lyr_Constituency_3.set('fieldImages', {'Constituen': 'TextEdit', 'Area_Cover': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Key_Candid': 'TextEdit', 'Source': 'TextEdit', 'Label': 'TextEdit', });
lyr_Districts_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM4_EN': 'inline label - always visible', 'ADM4_PCODE': 'no label', 'ADM4_REF': 'no label', 'ADM4ALT1EN': 'no label', 'ADM4ALT2EN': 'no label', 'ADM3_EN': 'inline label - always visible', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'inline label - always visible', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_DhakaCityBoundary_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_1': 'inline label - always visible', 'N_S': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'POP_FB': 'inline label - always visible', 'CAS_12JUN': 'inline label - always visible', 'CAS_11JUN': 'inline label - always visible', 'CAS_10JUN': 'inline label - always visible', 'CAS_09JUN': 'inline label - always visible', 'CAS_08JUN': 'inline label - always visible', 'CAS_07JUN': 'inline label - always visible', 'CAS_06JUN': 'inline label - always visible', 'CAS_05JUN': 'inline label - always visible', 'CAS_04JUN': 'inline label - always visible', 'CAS_03JUN': 'inline label - always visible', 'CAS_02JUN': 'inline label - always visible', 'CAS_01JUN': 'inline label - always visible', 'CAS_31MAY': 'inline label - always visible', 'CAS_30MAY': 'inline label - always visible', 'TOT_CAS_12': 'inline label - always visible', 'CAS_100K': 'inline label - always visible', });
lyr_Constituency_3.set('fieldLabels', {'Constituen': 'inline label - always visible', 'Area_Cover': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Long': 'inline label - always visible', 'Key_Candid': 'inline label - always visible', 'Source': 'inline label - always visible', 'Label': 'no label', });
lyr_Constituency_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});