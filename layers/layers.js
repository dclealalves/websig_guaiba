var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimitesterritoriaisdoRioGrandedoSul_1 = new ol.format.GeoJSON();
var features_LimitesterritoriaisdoRioGrandedoSul_1 = format_LimitesterritoriaisdoRioGrandedoSul_1.readFeatures(json_LimitesterritoriaisdoRioGrandedoSul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesterritoriaisdoRioGrandedoSul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesterritoriaisdoRioGrandedoSul_1.addFeatures(features_LimitesterritoriaisdoRioGrandedoSul_1);
var lyr_LimitesterritoriaisdoRioGrandedoSul_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitesterritoriaisdoRioGrandedoSul_1, 
                style: style_LimitesterritoriaisdoRioGrandedoSul_1,
                interactive: true,
                title: '<img src="styles/legend/LimitesterritoriaisdoRioGrandedoSul_1.png" /> Limites territoriais do Rio Grande do Sul'
            });
var format_LagoseLagoasFEPAM_2 = new ol.format.GeoJSON();
var features_LagoseLagoasFEPAM_2 = format_LagoseLagoasFEPAM_2.readFeatures(json_LagoseLagoasFEPAM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LagoseLagoasFEPAM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagoseLagoasFEPAM_2.addFeatures(features_LagoseLagoasFEPAM_2);
var lyr_LagoseLagoasFEPAM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LagoseLagoasFEPAM_2, 
                style: style_LagoseLagoasFEPAM_2,
                interactive: true,
                title: '<img src="styles/legend/LagoseLagoasFEPAM_2.png" /> Lagos e Lagoas [FEPAM]'
            });
var format_DelimitaomunicipaldoRSIBGE_3 = new ol.format.GeoJSON();
var features_DelimitaomunicipaldoRSIBGE_3 = format_DelimitaomunicipaldoRSIBGE_3.readFeatures(json_DelimitaomunicipaldoRSIBGE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaomunicipaldoRSIBGE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaomunicipaldoRSIBGE_3.addFeatures(features_DelimitaomunicipaldoRSIBGE_3);
var lyr_DelimitaomunicipaldoRSIBGE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelimitaomunicipaldoRSIBGE_3, 
                style: style_DelimitaomunicipaldoRSIBGE_3,
                interactive: true,
                title: '<img src="styles/legend/DelimitaomunicipaldoRSIBGE_3.png" /> Delimitação municipal do RS [IBGE]'
            });
var format_reasmidasFEPAM_4 = new ol.format.GeoJSON();
var features_reasmidasFEPAM_4 = format_reasmidasFEPAM_4.readFeatures(json_reasmidasFEPAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasmidasFEPAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasmidasFEPAM_4.addFeatures(features_reasmidasFEPAM_4);
var lyr_reasmidasFEPAM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasmidasFEPAM_4, 
                style: style_reasmidasFEPAM_4,
                interactive: true,
                title: '<img src="styles/legend/reasmidasFEPAM_4.png" /> Áreas úmidas [FEPAM]'
            });
var format_Areas_urbanas_RS_5 = new ol.format.GeoJSON();
var features_Areas_urbanas_RS_5 = format_Areas_urbanas_RS_5.readFeatures(json_Areas_urbanas_RS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_urbanas_RS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_urbanas_RS_5.addFeatures(features_Areas_urbanas_RS_5);
var lyr_Areas_urbanas_RS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_urbanas_RS_5, 
                style: style_Areas_urbanas_RS_5,
                interactive: true,
                title: '<img src="styles/legend/Areas_urbanas_RS_5.png" /> Areas_urbanas_RS'
            });
var format_RegiohidrogrficadoGuabaFEPAM_6 = new ol.format.GeoJSON();
var features_RegiohidrogrficadoGuabaFEPAM_6 = format_RegiohidrogrficadoGuabaFEPAM_6.readFeatures(json_RegiohidrogrficadoGuabaFEPAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegiohidrogrficadoGuabaFEPAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegiohidrogrficadoGuabaFEPAM_6.addFeatures(features_RegiohidrogrficadoGuabaFEPAM_6);
var lyr_RegiohidrogrficadoGuabaFEPAM_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegiohidrogrficadoGuabaFEPAM_6, 
                style: style_RegiohidrogrficadoGuabaFEPAM_6,
                interactive: true,
                title: '<img src="styles/legend/RegiohidrogrficadoGuabaFEPAM_6.png" /> Região hidrográfica do Guaíba [FEPAM]'
            });
var format_RedededrenagemFEPAM_7 = new ol.format.GeoJSON();
var features_RedededrenagemFEPAM_7 = format_RedededrenagemFEPAM_7.readFeatures(json_RedededrenagemFEPAM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedededrenagemFEPAM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedededrenagemFEPAM_7.addFeatures(features_RedededrenagemFEPAM_7);
var lyr_RedededrenagemFEPAM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedededrenagemFEPAM_7, 
                style: style_RedededrenagemFEPAM_7,
                interactive: true,
                title: '<img src="styles/legend/RedededrenagemFEPAM_7.png" /> Rede de drenagem [FEPAM]'
            });
var format_readeestudoLagoGuaba_8 = new ol.format.GeoJSON();
var features_readeestudoLagoGuaba_8 = format_readeestudoLagoGuaba_8.readFeatures(json_readeestudoLagoGuaba_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeestudoLagoGuaba_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeestudoLagoGuaba_8.addFeatures(features_readeestudoLagoGuaba_8);
var lyr_readeestudoLagoGuaba_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeestudoLagoGuaba_8, 
                style: style_readeestudoLagoGuaba_8,
                interactive: true,
                title: '<img src="styles/legend/readeestudoLagoGuaba_8.png" /> Área de estudo: Lago Guaíba'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_LimitesterritoriaisdoRioGrandedoSul_1.setVisible(true);lyr_LagoseLagoasFEPAM_2.setVisible(true);lyr_DelimitaomunicipaldoRSIBGE_3.setVisible(true);lyr_reasmidasFEPAM_4.setVisible(true);lyr_Areas_urbanas_RS_5.setVisible(true);lyr_RegiohidrogrficadoGuabaFEPAM_6.setVisible(true);lyr_RedededrenagemFEPAM_7.setVisible(true);lyr_readeestudoLagoGuaba_8.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_LimitesterritoriaisdoRioGrandedoSul_1,lyr_LagoseLagoasFEPAM_2,lyr_DelimitaomunicipaldoRSIBGE_3,lyr_reasmidasFEPAM_4,lyr_Areas_urbanas_RS_5,lyr_RegiohidrogrficadoGuabaFEPAM_6,lyr_RedededrenagemFEPAM_7,lyr_readeestudoLagoGuaba_8];
lyr_LimitesterritoriaisdoRioGrandedoSul_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RSLIMITELL': 'RSLIMITELL', 'RSLIMITE_1': 'RSLIMITE_1', 'HA': 'HA', });
lyr_LagoseLagoasFEPAM_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RDPOL2_': 'RDPOL2_', 'RDPOL2_ID': 'RDPOL2_ID', 'NOME': 'NOME', 'TRRE_ID': 'TRRE_ID', });
lyr_DelimitaomunicipaldoRSIBGE_3.set('fieldAliases', {'MSLINK': 'MSLINK', 'MAPID': 'MAPID', 'AREA_1': 'AREA_1', 'PERIMETRO_': 'PERIMETRO_', 'NOME': 'NOME', 'SEDE': 'SEDE', 'LATITUDESE': 'LATITUDESE', 'LONGITUDES': 'LONGITUDES', 'AREA_TOT_G': 'AREA_TOT_G', 'Cod_ibge': 'Cod_ibge', 'Label_N': 'Label_N', });
lyr_reasmidasFEPAM_4.set('fieldAliases', {'Hectares': 'Hectares', 'NOME': 'NOME', });
lyr_Areas_urbanas_RS_5.set('fieldAliases', {'Hectares': 'Hectares', 'NOME': 'NOME', });
lyr_RegiohidrogrficadoGuabaFEPAM_6.set('fieldAliases', {'NOME_BACIA': 'NOME_BACIA', 'CODIGO_BAC': 'CODIGO_BAC', 'REGIAO': 'REGIAO', 'SIGLAS': 'SIGLAS', 'UPNxBH': 'UPNxBH', 'Ocup_máx': 'Ocup_máx', 'area_maci': 'area_maci', 'distancia': 'distancia', 'Hectares': 'Hectares', 'Area_max': 'Area_max', 'Area_max_Z': 'Area_max_Z', });
lyr_RedededrenagemFEPAM_7.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RH5256_': 'RH5256_', 'RH5256_ID': 'RH5256_ID', 'N_CARTA': 'N_CARTA', 'TREC_ID': 'TREC_ID', });
lyr_readeestudoLagoGuaba_8.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RDPOL2_': 'RDPOL2_', 'RDPOL2_ID': 'RDPOL2_ID', 'NOME': 'NOME', 'TRRE_ID': 'TRRE_ID', });
lyr_LimitesterritoriaisdoRioGrandedoSul_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RSLIMITELL': 'TextEdit', 'RSLIMITE_1': 'TextEdit', 'HA': 'TextEdit', });
lyr_LagoseLagoasFEPAM_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RDPOL2_': 'TextEdit', 'RDPOL2_ID': 'TextEdit', 'NOME': 'TextEdit', 'TRRE_ID': 'Range', });
lyr_DelimitaomunicipaldoRSIBGE_3.set('fieldImages', {'MSLINK': 'TextEdit', 'MAPID': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETRO_': 'TextEdit', 'NOME': 'TextEdit', 'SEDE': 'Range', 'LATITUDESE': 'TextEdit', 'LONGITUDES': 'TextEdit', 'AREA_TOT_G': 'TextEdit', 'Cod_ibge': 'TextEdit', 'Label_N': 'TextEdit', });
lyr_reasmidasFEPAM_4.set('fieldImages', {'Hectares': 'TextEdit', 'NOME': 'TextEdit', });
lyr_Areas_urbanas_RS_5.set('fieldImages', {'Hectares': 'TextEdit', 'NOME': 'TextEdit', });
lyr_RegiohidrogrficadoGuabaFEPAM_6.set('fieldImages', {'NOME_BACIA': 'TextEdit', 'CODIGO_BAC': 'TextEdit', 'REGIAO': 'TextEdit', 'SIGLAS': 'TextEdit', 'UPNxBH': 'TextEdit', 'Ocup_máx': 'TextEdit', 'area_maci': 'TextEdit', 'distancia': 'TextEdit', 'Hectares': 'TextEdit', 'Area_max': 'TextEdit', 'Area_max_Z': 'TextEdit', });
lyr_RedededrenagemFEPAM_7.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'RH5256_': 'TextEdit', 'RH5256_ID': 'TextEdit', 'N_CARTA': 'TextEdit', 'TREC_ID': 'TextEdit', });
lyr_readeestudoLagoGuaba_8.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RDPOL2_': 'TextEdit', 'RDPOL2_ID': 'TextEdit', 'NOME': 'TextEdit', 'TRRE_ID': 'TextEdit', });
lyr_LimitesterritoriaisdoRioGrandedoSul_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RSLIMITELL': 'no label', 'RSLIMITE_1': 'no label', 'HA': 'no label', });
lyr_LagoseLagoasFEPAM_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RDPOL2_': 'no label', 'RDPOL2_ID': 'no label', 'NOME': 'no label', 'TRRE_ID': 'no label', });
lyr_DelimitaomunicipaldoRSIBGE_3.set('fieldLabels', {'MSLINK': 'no label', 'MAPID': 'no label', 'AREA_1': 'no label', 'PERIMETRO_': 'no label', 'NOME': 'no label', 'SEDE': 'no label', 'LATITUDESE': 'no label', 'LONGITUDES': 'no label', 'AREA_TOT_G': 'no label', 'Cod_ibge': 'no label', 'Label_N': 'no label', });
lyr_reasmidasFEPAM_4.set('fieldLabels', {'Hectares': 'no label', 'NOME': 'no label', });
lyr_Areas_urbanas_RS_5.set('fieldLabels', {'Hectares': 'no label', 'NOME': 'no label', });
lyr_RegiohidrogrficadoGuabaFEPAM_6.set('fieldLabels', {'NOME_BACIA': 'no label', 'CODIGO_BAC': 'no label', 'REGIAO': 'no label', 'SIGLAS': 'no label', 'UPNxBH': 'no label', 'Ocup_máx': 'no label', 'area_maci': 'no label', 'distancia': 'no label', 'Hectares': 'no label', 'Area_max': 'no label', 'Area_max_Z': 'no label', });
lyr_RedededrenagemFEPAM_7.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'RH5256_': 'no label', 'RH5256_ID': 'no label', 'N_CARTA': 'no label', 'TREC_ID': 'no label', });
lyr_readeestudoLagoGuaba_8.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RDPOL2_': 'no label', 'RDPOL2_ID': 'no label', 'NOME': 'no label', 'TRRE_ID': 'no label', });
lyr_readeestudoLagoGuaba_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});