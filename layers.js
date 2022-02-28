var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dpartement_1 = new ol.format.GeoJSON();
var features_Dpartement_1 = format_Dpartement_1.readFeatures(json_Dpartement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_1.addFeatures(features_Dpartement_1);
var lyr_Dpartement_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartement_1, 
                style: style_Dpartement_1,
                interactive: true,
                title: '<img src="styles/legend/Dpartement_1.png" /> Département'
            });
var format_VSAV_2 = new ol.format.GeoJSON();
var features_VSAV_2 = format_VSAV_2.readFeatures(json_VSAV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VSAV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VSAV_2.addFeatures(features_VSAV_2);
var lyr_VSAV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VSAV_2, 
                style: style_VSAV_2,
                interactive: true,
    title: 'VSAV<br />\
    <img src="styles/legend/VSAV_2_0.png" /> VSAV<br />'
        });
var format_FPTSR_3 = new ol.format.GeoJSON();
var features_FPTSR_3 = format_FPTSR_3.readFeatures(json_FPTSR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPTSR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPTSR_3.addFeatures(features_FPTSR_3);
var lyr_FPTSR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPTSR_3, 
                style: style_FPTSR_3,
                interactive: true,
    title: 'FPTSR<br />\
    <img src="styles/legend/FPTSR_3_0.png" /> FPTSR<br />'
        });
var format_Affectation_vehicules_sites_etiquette_4 = new ol.format.GeoJSON();
var features_Affectation_vehicules_sites_etiquette_4 = format_Affectation_vehicules_sites_etiquette_4.readFeatures(json_Affectation_vehicules_sites_etiquette_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Affectation_vehicules_sites_etiquette_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Affectation_vehicules_sites_etiquette_4.addFeatures(features_Affectation_vehicules_sites_etiquette_4);
var lyr_Affectation_vehicules_sites_etiquette_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Affectation_vehicules_sites_etiquette_4, 
                style: style_Affectation_vehicules_sites_etiquette_4,
                interactive: true,
                title: '<img src="styles/legend/Affectation_vehicules_sites_etiquette_4.png" /> Affectation_vehicules_sites_etiquette'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Dpartement_1.setVisible(true);lyr_VSAV_2.setVisible(true);lyr_FPTSR_3.setVisible(true);lyr_Affectation_vehicules_sites_etiquette_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Dpartement_1,lyr_VSAV_2,lyr_FPTSR_3,lyr_Affectation_vehicules_sites_etiquette_4];
lyr_Dpartement_1.set('fieldAliases', {'FID': 'FID', });
lyr_VSAV_2.set('fieldAliases', {'Site': 'Site', 'Genre': 'Genre', 'Nb': 'Nb', });
lyr_FPTSR_3.set('fieldAliases', {'Site': 'Site', 'Genre': 'Genre', 'Nb': 'Nb', });
lyr_Affectation_vehicules_sites_etiquette_4.set('fieldAliases', {'Site': 'Site', 'X': 'X', 'y': 'y', 'Vehicules_affectes': 'Vehicules_affectes', });
lyr_Dpartement_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_VSAV_2.set('fieldImages', {'Site': 'TextEdit', 'Genre': 'TextEdit', 'Nb': 'TextEdit', });
lyr_FPTSR_3.set('fieldImages', {'Site': 'TextEdit', 'Genre': 'TextEdit', 'Nb': 'TextEdit', });
lyr_Affectation_vehicules_sites_etiquette_4.set('fieldImages', {'Site': 'TextEdit', 'X': 'Range', 'y': 'Range', 'Vehicules_affectes': 'TextEdit', });
lyr_Dpartement_1.set('fieldLabels', {'FID': 'no label', });
lyr_VSAV_2.set('fieldLabels', {'Site': 'no label', 'Genre': 'header label', 'Nb': 'header label', });
lyr_FPTSR_3.set('fieldLabels', {'Site': 'no label', 'Genre': 'header label', 'Nb': 'header label', });
lyr_Affectation_vehicules_sites_etiquette_4.set('fieldLabels', {'Site': 'header label', 'X': 'no label', 'y': 'no label', 'Vehicules_affectes': 'header label', });
lyr_Affectation_vehicules_sites_etiquette_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});