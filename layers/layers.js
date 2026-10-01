ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9834454.234911, -6267534.133845, -4609786.393226, -2974714.628727]);
var wms_layers = [];


        var lyr_ArgenmapTopogrficoIGN_0 = new ol.layer.Tile({
            'title': 'Argenmap Topográfico · IGN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_topo@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });

        var lyr_ArgenmapHbridoIGN_1 = new ol.layer.Tile({
            'title': 'Argenmap Híbrido · IGN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_hibrido@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var lyr_EscurrimientorpidoQFMontemmao_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Escurrimiento rápido (QF) · Monte [mm año⁻¹]<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_0.png" /> 0<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_1.png" /> 1<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_2.png" /> 2–3<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_3.png" /> 4–11<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_4.png" /> 12–254<br />\
    <img src="styles/legend/EscurrimientorpidoQFMontemmao_2_5.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EscurrimientorpidoQFMontemmao_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7811892.308922, -5501280.984135, -7000272.909932, -2644020.914516]
        })
    });
var lyr_RecargahdricalocalLMontemmaorelativo_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Recarga hídrica local (L) · Monte [mm año⁻¹ · relativo]<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_0.png" /> 0<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_1.png" /> 1–134<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_2.png" /> 135–180<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_3.png" /> 181–212<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_4.png" /> 213–254<br />\
    <img src="styles/legend/RecargahdricalocalLMontemmaorelativo_3_5.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RecargahdricalocalLMontemmaorelativo_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7811892.308922, -5501280.984135, -7000272.909932, -2644020.914516]
        })
    });
var lyr_ndicedeflujobaseBFIMonteadimensional01_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Índice de flujo base (BFI) · Monte [adimensional 0–1]<br />\
    <img src="styles/legend/ndicedeflujobaseBFIMonteadimensional01_4_0.png" /> 0<br />\
    <img src="styles/legend/ndicedeflujobaseBFIMonteadimensional01_4_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndicedeflujobaseBFIMonteadimensional01_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7811892.308922, -5501280.984135, -7000272.909932, -2644020.914516]
        })
    });
var lyr_ContribucinalflujodebaseBMontemmaorelativo_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Contribución al flujo de base (B) · Monte [mm año⁻¹ · relativo]<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_0.png" /> 0<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_1.png" /> 1–134<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_2.png" /> 135–180<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_3.png" /> 181–212<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_4.png" /> 213–254<br />\
    <img src="styles/legend/ContribucinalflujodebaseBMontemmaorelativo_5_5.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ContribucinalflujodebaseBMontemmaorelativo_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7811892.308922, -5501280.984135, -7000272.909932, -2644020.914516]
        })
    });
var lyr_CarbonovulnerableMonteMgCha_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Carbono vulnerable · Monte [Mg C ha⁻¹]<br />\
    <img src="styles/legend/CarbonovulnerableMonteMgCha_6_0.png" /> 0<br />\
    <img src="styles/legend/CarbonovulnerableMonteMgCha_6_1.png" /> 14.6<br />\
    <img src="styles/legend/CarbonovulnerableMonteMgCha_6_2.png" /> 19.1<br />\
    <img src="styles/legend/CarbonovulnerableMonteMgCha_6_3.png" /> 26.61<br />\
    <img src="styles/legend/CarbonovulnerableMonteMgCha_6_4.png" /> 44.64<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CarbonovulnerableMonteMgCha_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7811892.308545, -5501280.984214, -7000272.909782, -2644020.914923]
        })
    });
var lyr_ErosinpotencialEspinalMghaao_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Erosión potencial · Espinal [Mg ha⁻¹ año⁻¹]<br />\
    <img src="styles/legend/ErosinpotencialEspinalMghaao_7_0.png" /> 0<br />\
    <img src="styles/legend/ErosinpotencialEspinalMghaao_7_1.png" /> 8<br />\
    <img src="styles/legend/ErosinpotencialEspinalMghaao_7_2.png" /> 13<br />\
    <img src="styles/legend/ErosinpotencialEspinalMghaao_7_3.png" /> 25<br />\
    <img src="styles/legend/ErosinpotencialEspinalMghaao_7_4.png" /> 51<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ErosinpotencialEspinalMghaao_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7440365.897315, -5024061.204614, -6402453.385436, -3331328.425169]
        })
    });
var lyr_ControldelaerosinEspinalMghaao_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Control de la erosión · Espinal [Mg ha⁻¹ año⁻¹]<br />\
    <img src="styles/legend/ControldelaerosinEspinalMghaao_8_0.png" /> 0<br />\
    <img src="styles/legend/ControldelaerosinEspinalMghaao_8_1.png" /> 7<br />\
    <img src="styles/legend/ControldelaerosinEspinalMghaao_8_2.png" /> 12<br />\
    <img src="styles/legend/ControldelaerosinEspinalMghaao_8_3.png" /> 24<br />\
    <img src="styles/legend/ControldelaerosinEspinalMghaao_8_4.png" /> 50<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ControldelaerosinEspinalMghaao_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7440365.897315, -5024061.204614, -6402453.385436, -3331328.425169]
        })
    });
var lyr_CarbonovulnerableEspinalMgCha_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Carbono vulnerable · Espinal [Mg C ha⁻¹]<br />\
    <img src="styles/legend/CarbonovulnerableEspinalMgCha_9_0.png" /> 0<br />\
    <img src="styles/legend/CarbonovulnerableEspinalMgCha_9_1.png" /> 24.03<br />\
    <img src="styles/legend/CarbonovulnerableEspinalMgCha_9_2.png" /> 31.78<br />\
    <img src="styles/legend/CarbonovulnerableEspinalMgCha_9_3.png" /> 39.3<br />\
    <img src="styles/legend/CarbonovulnerableEspinalMgCha_9_4.png" /> 62.21<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CarbonovulnerableEspinalMgCha_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7440365.897027, -5024061.204688, -6402453.385291, -3331328.425355]
        })
    });
var format_ArgentinaIGN_10 = new ol.format.GeoJSON();
var features_ArgentinaIGN_10 = format_ArgentinaIGN_10.readFeatures(json_ArgentinaIGN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArgentinaIGN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArgentinaIGN_10.addFeatures(features_ArgentinaIGN_10);
var lyr_ArgentinaIGN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArgentinaIGN_10, 
                style: style_ArgentinaIGN_10,
                popuplayertitle: 'Argentina · IGN',
                interactive: true,
                title: '<img src="styles/legend/ArgentinaIGN_10.png" /> Argentina · IGN'
            });
var format_ProvinciasIGN_11 = new ol.format.GeoJSON();
var features_ProvinciasIGN_11 = format_ProvinciasIGN_11.readFeatures(json_ProvinciasIGN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciasIGN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciasIGN_11.addFeatures(features_ProvinciasIGN_11);
var lyr_ProvinciasIGN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciasIGN_11, 
                style: style_ProvinciasIGN_11,
                popuplayertitle: 'Provincias · IGN',
                interactive: true,
                title: '<img src="styles/legend/ProvinciasIGN_11.png" /> Provincias · IGN'
            });
var format_EcorregionesEspinalyMonte_12 = new ol.format.GeoJSON();
var features_EcorregionesEspinalyMonte_12 = format_EcorregionesEspinalyMonte_12.readFeatures(json_EcorregionesEspinalyMonte_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcorregionesEspinalyMonte_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcorregionesEspinalyMonte_12.addFeatures(features_EcorregionesEspinalyMonte_12);
var lyr_EcorregionesEspinalyMonte_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcorregionesEspinalyMonte_12, 
                style: style_EcorregionesEspinalyMonte_12,
                popuplayertitle: 'Ecorregiones · Espinal y Monte',
                interactive: true,
                title: '<img src="styles/legend/EcorregionesEspinalyMonte_12.png" /> Ecorregiones · Espinal y Monte'
            });
var group_Lmites = new ol.layer.Group({
                                layers: [lyr_ArgentinaIGN_10,lyr_ProvinciasIGN_11,lyr_EcorregionesEspinalyMonte_12,],
                                fold: 'close',
                                title: 'Límites'});
var group_Espinal = new ol.layer.Group({
                                layers: [lyr_ErosinpotencialEspinalMghaao_7,lyr_ControldelaerosinEspinalMghaao_8,lyr_CarbonovulnerableEspinalMgCha_9,],
                                fold: 'open',
                                title: 'Espinal'});
var group_Monte = new ol.layer.Group({
                                layers: [lyr_EscurrimientorpidoQFMontemmao_2,lyr_RecargahdricalocalLMontemmaorelativo_3,lyr_ndicedeflujobaseBFIMonteadimensional01_4,lyr_ContribucinalflujodebaseBMontemmaorelativo_5,lyr_CarbonovulnerableMonteMgCha_6,],
                                fold: 'open',
                                title: 'Monte'});
var group_Mapabase = new ol.layer.Group({
                                layers: [lyr_ArgenmapTopogrficoIGN_0,lyr_ArgenmapHbridoIGN_1,],
                                fold: 'close',
                                title: 'Mapa base'});

lyr_ArgenmapTopogrficoIGN_0.setVisible(true);lyr_ArgenmapHbridoIGN_1.setVisible(false);lyr_EscurrimientorpidoQFMontemmao_2.setVisible(false);lyr_RecargahdricalocalLMontemmaorelativo_3.setVisible(false);lyr_ndicedeflujobaseBFIMonteadimensional01_4.setVisible(false);lyr_ContribucinalflujodebaseBMontemmaorelativo_5.setVisible(false);lyr_CarbonovulnerableMonteMgCha_6.setVisible(true);lyr_ErosinpotencialEspinalMghaao_7.setVisible(false);lyr_ControldelaerosinEspinalMghaao_8.setVisible(false);lyr_CarbonovulnerableEspinalMgCha_9.setVisible(true);lyr_ArgentinaIGN_10.setVisible(true);lyr_ProvinciasIGN_11.setVisible(true);lyr_EcorregionesEspinalyMonte_12.setVisible(true);
var layersList = [group_Mapabase,group_Monte,group_Espinal,group_Lmites];
lyr_ArgentinaIGN_10.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fdc': 'fdc', 'sag': 'sag', });
lyr_ProvinciasIGN_11.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_EcorregionesEspinalyMonte_12.set('fieldAliases', {'fid': 'fid', 'ecorregion': 'ecorregion', 'hectareas': 'hectareas', });
lyr_ArgentinaIGN_10.set('fieldImages', {'fid': '', 'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fdc': '', 'sag': '', });
lyr_ProvinciasIGN_11.set('fieldImages', {'fid': '', 'gid': '', 'entidad': '', 'fna': '', 'gna': '', 'nam': '', 'in1': '', 'fdc': '', 'sag': '', });
lyr_EcorregionesEspinalyMonte_12.set('fieldImages', {'fid': '', 'ecorregion': '', 'hectareas': '', });
lyr_ArgentinaIGN_10.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_ProvinciasIGN_11.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_EcorregionesEspinalyMonte_12.set('fieldLabels', {'fid': 'no label', 'ecorregion': 'no label', 'hectareas': 'no label', });
lyr_EcorregionesEspinalyMonte_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});