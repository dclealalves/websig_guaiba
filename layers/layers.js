var wms_layers = [];


        var lyr_RelevosombreadoESRI_0 = new ol.layer.Tile({
            'title': 'Relevo sombreado [ESRI]',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_MosaicodeimagensorbitaisESRI_1 = new ol.layer.Tile({
            'title': 'Mosaico de imagens orbitais [ESRI]',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimitesterritoriaisdoRioGrandedoSulIBGE_2 = new ol.format.GeoJSON();
var features_LimitesterritoriaisdoRioGrandedoSulIBGE_2 = format_LimitesterritoriaisdoRioGrandedoSulIBGE_2.readFeatures(json_LimitesterritoriaisdoRioGrandedoSulIBGE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesterritoriaisdoRioGrandedoSulIBGE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesterritoriaisdoRioGrandedoSulIBGE_2.addFeatures(features_LimitesterritoriaisdoRioGrandedoSulIBGE_2);
var lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitesterritoriaisdoRioGrandedoSulIBGE_2, 
                style: style_LimitesterritoriaisdoRioGrandedoSulIBGE_2,
                interactive: true,
                title: '<img src="styles/legend/LimitesterritoriaisdoRioGrandedoSulIBGE_2.png" /> Limites territoriais do Rio Grande do Sul [IBGE]'
            });
var format_LagoseLagoasFEPAM_3 = new ol.format.GeoJSON();
var features_LagoseLagoasFEPAM_3 = format_LagoseLagoasFEPAM_3.readFeatures(json_LagoseLagoasFEPAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LagoseLagoasFEPAM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagoseLagoasFEPAM_3.addFeatures(features_LagoseLagoasFEPAM_3);
var lyr_LagoseLagoasFEPAM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LagoseLagoasFEPAM_3, 
                style: style_LagoseLagoasFEPAM_3,
                interactive: true,
                title: '<img src="styles/legend/LagoseLagoasFEPAM_3.png" /> Lagos e Lagoas [FEPAM]'
            });
var format_DelimitaomunicipalRSIBGE_4 = new ol.format.GeoJSON();
var features_DelimitaomunicipalRSIBGE_4 = format_DelimitaomunicipalRSIBGE_4.readFeatures(json_DelimitaomunicipalRSIBGE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaomunicipalRSIBGE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaomunicipalRSIBGE_4.addFeatures(features_DelimitaomunicipalRSIBGE_4);
var lyr_DelimitaomunicipalRSIBGE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelimitaomunicipalRSIBGE_4, 
                style: style_DelimitaomunicipalRSIBGE_4,
                interactive: true,
                title: '<img src="styles/legend/DelimitaomunicipalRSIBGE_4.png" /> Delimitação municipal RS [IBGE]'
            });
var format_reasmidasFEPAM_5 = new ol.format.GeoJSON();
var features_reasmidasFEPAM_5 = format_reasmidasFEPAM_5.readFeatures(json_reasmidasFEPAM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasFEPAM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasFEPAM_5.addFeatures(features_reasmidasFEPAM_5);
var lyr_reasmidasFEPAM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasmidasFEPAM_5, 
                style: style_reasmidasFEPAM_5,
                interactive: true,
                title: '<img src="styles/legend/reasmidasFEPAM_5.png" /> Áreas úmidas [FEPAM]'
            });
var format_reasurbanasRSFEPAM_6 = new ol.format.GeoJSON();
var features_reasurbanasRSFEPAM_6 = format_reasurbanasRSFEPAM_6.readFeatures(json_reasurbanasRSFEPAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasurbanasRSFEPAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasurbanasRSFEPAM_6.addFeatures(features_reasurbanasRSFEPAM_6);
var lyr_reasurbanasRSFEPAM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasurbanasRSFEPAM_6, 
                style: style_reasurbanasRSFEPAM_6,
                interactive: true,
                title: '<img src="styles/legend/reasurbanasRSFEPAM_6.png" /> Áreas urbanas RS [FEPAM]'
            });
var format_RegiohidrogrficadoGuabaFEPAM_7 = new ol.format.GeoJSON();
var features_RegiohidrogrficadoGuabaFEPAM_7 = format_RegiohidrogrficadoGuabaFEPAM_7.readFeatures(json_RegiohidrogrficadoGuabaFEPAM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegiohidrogrficadoGuabaFEPAM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegiohidrogrficadoGuabaFEPAM_7.addFeatures(features_RegiohidrogrficadoGuabaFEPAM_7);
var lyr_RegiohidrogrficadoGuabaFEPAM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegiohidrogrficadoGuabaFEPAM_7, 
                style: style_RegiohidrogrficadoGuabaFEPAM_7,
                interactive: true,
                title: '<img src="styles/legend/RegiohidrogrficadoGuabaFEPAM_7.png" /> Região hidrográfica do Guaíba [FEPAM]'
            });
var format_RedededrenagemFEPAM_8 = new ol.format.GeoJSON();
var features_RedededrenagemFEPAM_8 = format_RedededrenagemFEPAM_8.readFeatures(json_RedededrenagemFEPAM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedededrenagemFEPAM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedededrenagemFEPAM_8.addFeatures(features_RedededrenagemFEPAM_8);
var lyr_RedededrenagemFEPAM_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedededrenagemFEPAM_8, 
                style: style_RedededrenagemFEPAM_8,
                interactive: true,
                title: '<img src="styles/legend/RedededrenagemFEPAM_8.png" /> Rede de drenagem [FEPAM]'
            });
var lyr_TotaldeslidosemsuspensomgLmaro2019_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Total de sólidos em suspensão mg/L [março/2019]",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TotaldeslidosemsuspensomgLmaro2019_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5713943.485367, -3553206.956539, -5679452.466848, -3504036.345048]
                            })
                        });
var lyr_VolumedeefluentesdomsticosgLmaro2019_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Volume de efluentes domésticos g/L [março/2019]",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VolumedeefluentesdomsticosgLmaro2019_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5713943.485367, -3553206.956539, -5679452.466848, -3504036.345048]
                            })
                        });

lyr_RelevosombreadoESRI_0.setVisible(true);lyr_MosaicodeimagensorbitaisESRI_1.setVisible(false);lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2.setVisible(true);lyr_LagoseLagoasFEPAM_3.setVisible(true);lyr_DelimitaomunicipalRSIBGE_4.setVisible(true);lyr_reasmidasFEPAM_5.setVisible(true);lyr_reasurbanasRSFEPAM_6.setVisible(true);lyr_RegiohidrogrficadoGuabaFEPAM_7.setVisible(false);lyr_RedededrenagemFEPAM_8.setVisible(true);lyr_TotaldeslidosemsuspensomgLmaro2019_9.setVisible(false);lyr_VolumedeefluentesdomsticosgLmaro2019_10.setVisible(false);
var layersList = [lyr_RelevosombreadoESRI_0,lyr_MosaicodeimagensorbitaisESRI_1,lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2,lyr_LagoseLagoasFEPAM_3,lyr_DelimitaomunicipalRSIBGE_4,lyr_reasmidasFEPAM_5,lyr_reasurbanasRSFEPAM_6,lyr_RegiohidrogrficadoGuabaFEPAM_7,lyr_RedededrenagemFEPAM_8,lyr_TotaldeslidosemsuspensomgLmaro2019_9,lyr_VolumedeefluentesdomsticosgLmaro2019_10];
lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RSLIMITELL': 'RSLIMITELL', 'RSLIMITE_1': 'RSLIMITE_1', 'HA': 'HA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LagoseLagoasFEPAM_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RDPOL2_': 'RDPOL2_', 'RDPOL2_ID': 'RDPOL2_ID', 'NOME': 'NOME', 'TRRE_ID': 'TRRE_ID', });
lyr_DelimitaomunicipalRSIBGE_4.set('fieldAliases', {'MSLINK': 'MSLINK', 'MAPID': 'MAPID', 'AREA_1': 'AREA_1', 'PERIMETRO_': 'PERIMETRO_', 'NOME': 'NOME', 'SEDE': 'SEDE', 'LATITUDESE': 'LATITUDESE', 'LONGITUDES': 'LONGITUDES', 'AREA_TOT_G': 'AREA_TOT_G', 'Cod_ibge': 'Cod_ibge', 'Label_N': 'Label_N', });
lyr_reasmidasFEPAM_5.set('fieldAliases', {'Hectares': 'Hectares', 'NOME': 'NOME', });
lyr_reasurbanasRSFEPAM_6.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Nome': 'Nome', 'Cod_IBGE': 'Cod_IBGE', });
lyr_RegiohidrogrficadoGuabaFEPAM_7.set('fieldAliases', {'NOME_BACIA': 'NOME_BACIA', 'CODIGO_BAC': 'CODIGO_BAC', 'REGIAO': 'REGIAO', 'SIGLAS': 'SIGLAS', 'UPNxBH': 'UPNxBH', 'Ocup_máx': 'Ocup_máx', 'area_maci': 'area_maci', 'distancia': 'distancia', 'Hectares': 'Hectares', 'Area_max': 'Area_max', 'Area_max_Z': 'Area_max_Z', });
lyr_RedededrenagemFEPAM_8.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RH5256_': 'RH5256_', 'RH5256_ID': 'RH5256_ID', 'N_CARTA': 'N_CARTA', 'TREC_ID': 'TREC_ID', });
lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RSLIMITELL': 'TextEdit', 'RSLIMITE_1': 'TextEdit', 'HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LagoseLagoasFEPAM_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RDPOL2_': 'TextEdit', 'RDPOL2_ID': 'TextEdit', 'NOME': 'TextEdit', 'TRRE_ID': 'Range', });
lyr_DelimitaomunicipalRSIBGE_4.set('fieldImages', {'MSLINK': 'TextEdit', 'MAPID': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETRO_': 'TextEdit', 'NOME': 'TextEdit', 'SEDE': 'Range', 'LATITUDESE': 'TextEdit', 'LONGITUDES': 'TextEdit', 'AREA_TOT_G': 'TextEdit', 'Cod_ibge': 'TextEdit', 'Label_N': 'TextEdit', });
lyr_reasmidasFEPAM_5.set('fieldImages', {'Hectares': 'TextEdit', 'NOME': 'TextEdit', });
lyr_reasurbanasRSFEPAM_6.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Nome': 'TextEdit', 'Cod_IBGE': 'TextEdit', });
lyr_RegiohidrogrficadoGuabaFEPAM_7.set('fieldImages', {'NOME_BACIA': 'TextEdit', 'CODIGO_BAC': 'TextEdit', 'REGIAO': 'TextEdit', 'SIGLAS': 'TextEdit', 'UPNxBH': 'TextEdit', 'Ocup_máx': 'TextEdit', 'area_maci': 'TextEdit', 'distancia': 'TextEdit', 'Hectares': 'TextEdit', 'Area_max': 'TextEdit', 'Area_max_Z': 'TextEdit', });
lyr_RedededrenagemFEPAM_8.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'RH5256_': 'TextEdit', 'RH5256_ID': 'TextEdit', 'N_CARTA': 'TextEdit', 'TREC_ID': 'TextEdit', });
lyr_LimitesterritoriaisdoRioGrandedoSulIBGE_2.set('fieldLabels', {'OBJECTID': 'inline label', 'AREA': 'inline label', 'PERIMETER': 'inline label', 'RSLIMITELL': 'inline label', 'RSLIMITE_1': 'inline label', 'HA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_LagoseLagoasFEPAM_3.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'RDPOL2_': 'inline label', 'RDPOL2_ID': 'inline label', 'NOME': 'inline label', 'TRRE_ID': 'inline label', });
lyr_DelimitaomunicipalRSIBGE_4.set('fieldLabels', {'MSLINK': 'inline label', 'MAPID': 'inline label', 'AREA_1': 'inline label', 'PERIMETRO_': 'inline label', 'NOME': 'inline label', 'SEDE': 'inline label', 'LATITUDESE': 'inline label', 'LONGITUDES': 'inline label', 'AREA_TOT_G': 'inline label', 'Cod_ibge': 'inline label', 'Label_N': 'inline label', });
lyr_reasmidasFEPAM_5.set('fieldLabels', {'Hectares': 'inline label', 'NOME': 'inline label', });
lyr_reasurbanasRSFEPAM_6.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'Nome': 'inline label', 'Cod_IBGE': 'inline label', });
lyr_RegiohidrogrficadoGuabaFEPAM_7.set('fieldLabels', {'NOME_BACIA': 'inline label', 'CODIGO_BAC': 'inline label', 'REGIAO': 'inline label', 'SIGLAS': 'inline label', 'UPNxBH': 'inline label', 'Ocup_máx': 'inline label', 'area_maci': 'inline label', 'distancia': 'inline label', 'Hectares': 'inline label', 'Area_max': 'inline label', 'Area_max_Z': 'inline label', });
lyr_RedededrenagemFEPAM_8.set('fieldLabels', {'FNODE_': 'inline label', 'TNODE_': 'inline label', 'LPOLY_': 'inline label', 'RPOLY_': 'inline label', 'LENGTH': 'inline label', 'RH5256_': 'inline label', 'RH5256_ID': 'inline label', 'N_CARTA': 'inline label', 'TREC_ID': 'inline label', });
lyr_RedededrenagemFEPAM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});