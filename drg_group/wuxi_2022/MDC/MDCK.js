import {putMessage,intersect,SS_VALID} from '../Base.js'
import KB1_group from '../ADRG/KB1.js';
import KC1_group from '../ADRG/KC1.js';
import KD1_group from '../ADRG/KD1.js';
import KD2_group from '../ADRG/KD2.js';
import KE1_group from '../ADRG/KE1.js';
import KJ1_group from '../ADRG/KJ1.js';
import KR1_group from '../ADRG/KR1.js';
import KS1_group from '../ADRG/KS1.js';
import KT1_group from '../ADRG/KT1.js';
import KU1_group from '../ADRG/KU1.js';
import KV1_group from '../ADRG/KV1.js';
import KZ1_group from '../ADRG/KZ1.js';

export default function MDCK_group(record){
    let mdc_zd=["D35.900","E23.700x001","E54.x00","D18.000x810","E21.002","E46.x00x005","E21.004","E34.100","E78.205","E74.804","E76.200x004","E78.300x002","E88.001","E72.200x002","E78.100x005","E27.800x010","E66.900","E89.300x003","D44.001","E07.800x007","E74.901","D34.x00x003","E14.700x032","E24.902","E27.400x005","E41.x01","E68.x00","E42.x00","E72.205","E14.600x930","E23.300x001","E64.100","E87.400","E14.700x025","E58.x00","D09.303","E23.615","E11.900","E15.x00x001","E14.700x021","E74.802","E88.903","E11.400x311+G99.0*","E05.000","E05.400","E72.200x008","E78.300x003","C74.100","E25.802","E74.003","E72.303","E27.800x012","E88.300","E88.101","E00.000x002","E06.502","E16.800x004","E10.700x032","E12.500","E65.x05","E79.001","E87.200x002","E01.201","E23.302","E16.102","E04.103","E06.300x005","D44.200x001","E11.700x031","E16.200","E10.103","E11.505","E03.201","E61.000","E65.x00x010","E70.203","E14.500x042","E03.400","E04.101","E06.001","E23.607","E34.500x001","E65.x08","E10.100x051","E51.900","E05.800x005","E10.900","E10.003","E10.800","E05.003","E07.804","D35.800","E71.302","E10.100x031","E65.x02","E80.301","E14.000x001","E01.800x002","E10.600x911","E14.500x046","E12.900","E16.100x002","E26.803","E16.800x104","E65.x00x002","E74.000x009","E25.004","E05.900x001","E30.801","E78.200x008","E83.900","E14.600x051","E11.103","E07.800x011","E61.300","E07.806","E71.305","E04.102","E34.300x002","E14.500x047","E75.504","E88.800x005","R73.002","E05.203","E10.900x003","E24.200","E77.801","E74.200x002","E75.505","E05.202","E24.901","E23.301","E11.003","E76.200x009","E14.000x005","E34.300x003","D44.201","E72.900x006","E72.902","E74.000x013","E27.000x001","E86.x00x004","E72.100x005","E23.612","E74.100x004","E78.100x003","E06.200","E71.100x004","E67.000","E71.300x005","E13.101","C75.000","E74.900x002","D09.302","D35.200x011","E14.600x920","E88.807","E26.100","E00.100x002","E06.301","E16.106","E85.300x003","E27.401","E63.900","E61.800","E13.102","E56.900","E70.300x004","E27.808","E75.600x001","E13.905","E24.000","E16.100x010","E53.901","E23.007","E13.000","E10.503","E52.x00x003","E07.901","E34.301","E23.001","E03.100x004","E72.800x004","E80.700","E07.000","E89.301","E10.500x051","Q89.201","E76.200x001","E10.100x012","E06.300x001","E83.500x011","E72.304","E72.900x004","E87.700","E74.001","E74.801","E77.100x004","E30.103","E23.000x015","E16.110","C74.900","E74.300x001","E11.500x044","E72.500x004","E16.802","E21.000x007","E27.200x003","E87.600x002","E74.000x007","R73.003","E01.000x003","E88.100x004","E72.300x002","E10.100x061","E14.500x021+I79.2*","E05.500","E06.000x003","E89.800x003","E23.200","E23.600x016","E83.501","E88.800x007","E07.800x003","E14.100x051","Q87.807","E30.002","E11.500x049","E70.100x004","E84.900","Q87.100x904","E87.204","E88.800x013","E78.600x007","E70.800x001","E26.000x003","E77.000x002","D44.800x002","E34.805","E27.803","E05.201","E13.903","E14.800","E25.002","D44.100x001","E16.109","E61.700","E61.100","E14.500x041","E77.000x003","E83.301","E44.000","E83.403","E15.x00x002","E74.402","E22.002","E03.000x002","E20.000","E21.402","E74.100x002","E11.700x011","E70.000","E74.803","Q89.200x204","Q89.207","E16.100x005","E56.100","E78.206","E16.100x001","E23.600x010","E06.100x004","E11.500x043","E00.100","E23.201","E03.900x006","E27.500x003","E72.900x002","E87.201","E27.001","E74.000x016+I43.1*","E01.100x003","E31.800","E10.102","E83.401","E72.401","E76.100","R94.801","E53.900","E01.100x002","E27.100x003","E11.700x025","E10.000x002","E78.601","E27.000x003","S37.803","E23.600x011","E72.901","E23.010","D09.304","D44.801","E71.309","E83.100","E25.003","E75.503","E21.006","E24.300","E06.100x002","D35.100x002","E78.600x008","E70.201","E89.100","E23.600x005","E05.301","E13.901","E83.002","E65.x07","E67.200","E23.204","E14.700","E74.201","D18.000x839","E21.100x001","R82.400","E11.600x043","E10.101","E11.700x033","E75.500x001","E10.000","D17.700x029","E89.101","N25.801","E66.901","E23.004","E16.800x003","E76.200x008","E85.406","E11.500x051","E72.005","E27.800x021","E71.304","E04.001","E16.800x901","E74.200","E23.000x005","E06.100x003","E78.200x012","E23.006","E04.904","E87.205","E05.905","E70.800x003","E23.618","E83.500x009","E23.617","E04.100x005","E10.700x031","E23.619","E26.800x002","E78.201","E34.300x006","D35.200x009","E76.900x001","E71.310","E10.001","E24.801","E83.306","E16.800x006","E16.800x105","E53.802","E70.100x001","E72.202","E27.000x002","E27.801","E05.200","E78.800x002","E87.001","E88.202","E16.801","E43.x00","C75.900","E88.800x009","E46.x00x003","D34.x01","E03.000","E06.500x004","E74.403","C79.825","E02.x00","E78.003","C75.800","E72.002","E83.000x006","E83.504","D09.301","R94.600","E22.000x002","E71.100x003","E10.500x043","E51.900x001","E34.804","E21.500","E72.100x004","E74.000","E64.000","D09.300","E88.802","E16.104","E53.000","E16.100x006","E87.102","E78.000x004","E13.904","E74.005","E21.201","E03.802","E76.000","Q87.800x911","E78.300x001","E10.600x043","E74.000x011","E10.500x021+I79.2*","E03.000x004","E11.800","E16.000x001","E53.804","E46.x00x002","E60.x00","E72.201","E74.800x006","E04.200x001","E11.600x911","E25.902","Q85.900x006","D44.800","E34.302","E66.000","E16.112","E07.803","E41.x00","E77.100x005","E56.000","E06.300","E14.000","E46.x00x004","E70.102","R64.x00","E23.600x008","E65.x13","E78.100x004","E88.000x003","E34.800x006","E07.802","E10.500x046","E25.001","E72.004","E71.307","E14.600x042","E72.301","E14.500x051","E00.900x004","E78.801","E34.500","E78.000x003","E72.204","E20.802","E87.302","E13.902","E78.100x007","E23.005","Q89.200x012","E25.903","E88.800x004","E16.900x002","E26.900","E65.x11","E78.100","E78.600x011","E80.300x001","E21.300x002","E70.900","E78.002","E11.101","E24.201","E65.x00x011","E88.804","R82.401","E12.700","E11.000x006","D34.x00","E23.701","E01.100","E10.501+I79.2*","E30.101","E78.602","E85.400x014","R29.000","E84.801","E00.901","E16.100x004","E10.901","E72.500x003","E05.200x004","E27.805","E72.305","E23.610","E14.700x031","E78.600x006","E83.800","E27.000x011","E72.306","E89.002","E14.600x911","E83.500x008","E10.900x004","E10.100","R73.000","C74.000","E27.300","E23.200x003","E89.200x001","E23.202","E43.x00x002","E04.901","E78.000x007","E10.500x049","E78.900","E87.203","E78.207","E14.500x011+I79.2*","E14.500x044","E22.100","E72.400x001","D35.000","E16.800x007","E06.900","E04.100","E03.100x001","E16.800x103","E23.100","E87.801","E65.x09","E06.400x002","E88.900x010","E05.100","E04.000","E11.002","E11.700x032","E34.500x002","E53.800x013","E76.300","E04.200","E72.203","E89.000","E74.101","E65.x04","E72.102","C73.x00x003","E06.400","E22.200","E22.001","E24.100","E71.300x011","E11.100x051","E07.000x002","D35.200","E11.600x042","E88.800x008","E24.000x001","E74.000x012","E23.200x005","E23.605","Q89.100","E76.200x006","E31.901","E23.614","E27.800x005","E61.400","E27.810","E34.304","D35.200x010","E71.000","E11.001","E74.800x007","E14.500x050","E71.200","E78.100x002","E34.803","E14.100x012","E78.209","E06.500x001","E88.000x002","E74.400","D44.101","E83.503","E07.801","E67.800","E11.504","Q90.000","E11.700x021","E16.901","E88.801","E03.202","E07.805","E27.500","E75.501","E74.000x010","E74.100","E05.400x001","E34.400","E83.309","E06.500x002","E66.900x001","E78.500","E05.001","E24.001","E70.204","E89.102","E65.x03","E13.800","E31.100","E78.600x010","E16.105","E72.500x002","E03.300","E72.302","E64.800","Q89.101","E71.101","E12.600","E86.x00x001","E16.803","E01.801","E23.600x001","E23.000x008","E10.500x047","E70.300","D44.000x001","E10.700","E11.600x051","E23.600x014","E89.201","E16.300x002","E66.100","E87.202","Q89.200x203","E04.900x006","E44.100","E76.800","E85.200x001","E74.002","E23.000x011","C75.100","E04.200x003","D35.001","E27.806","E01.200","E07.100x002","E14.000x002","E10.700x025","E66.201","E11.500x047","E70.000x002","R79.801","E24.200x001","E72.100x003","E30.000x003","E31.000","E26.000","E40.x00","E86.x00x003","E23.606","E11.500x046","E71.100x005","E00.900x005","E21.300","E03.100","E80.302","E23.608","E87.501","E10.500x045","R74.800x009","E72.800x001","E11.000","E23.613","E87.500","E05.805","E70.800x002","E14.000x006","E00.100x003","E11.503","E10.500x048","E72.500x001","E11.102","E05.300","E10.000x001","E10.600x051","E74.401","E04.201","D44.300x001","E83.302","R73.900x001","E30.102","C73.x00","E23.003","E88.806","C79.800x839","E88.803","E00.200x002","E14.700x024","E27.400x006","C79.805","E89.800x002","E61.600","E16.301","E87.303","D35.100","E31.900","E27.404","E72.101","E89.302","E13.907","E24.800x001","E78.204","E78.600x001","E10.700x024","E13.900x006","E14.600x043","E53.100x001","E70.205","E71.103","E76.200x007","E27.405","E10.600x042","E83.200","E34.501","E21.001","E61.900","E67.300","E78.402","E89.303","R63.801","E89.601","E10.000x005","E78.600x003","E14.500x045","E23.002","E70.101","E88.203","E83.304","E55.900","E07.800x001","D81.500","E72.400x002","E23.604","E23.616","E13.600","E34.200","E89.801","E07.001","E72.003","Q89.206","E72.800x005","E83.303","E25.901","E23.000","E25.005","E72.500x005","E74.400x005","E11.000x001","E14.500x043","E79.800x001","E03.100x002","E76.200x002","E55.002","E83.500x001","E16.800x011","E31.001","E87.802","E26.802","E14.700x011","E10.000x006","E65.x00x013","E14.100","E30.100x002","E21.400x003","E45.x00x003","E21.401","E72.300x001","E78.901","E06.002","E10.500x044","E06.501","E27.809","E76.201","E83.305","E10.504","E01.000","E06.303","E14.100x031","E14.600x910","E06.100x001","E64.200","E52.x00","E07.800x009","E72.200x007","E06.300x004","E05.804","E05.806","E23.611","E63.000","E78.200","E04.902","E27.407","E74.000x008","E11.500x048","E53.800x011","E21.005","E01.200x001","E24.400","E27.406","E72.001","E30.000","E74.300x002","E21.003","E78.001","E15.x00x004","E16.101","E06.000","E83.300x007","R81.x00x001","E11.000x005","E66.801","E74.000x006","E11.600x920","E61.500","E13.906","E85.800","E10.002","E27.901","E50.900","E07.000x001","E14.500x049","D44.301","E87.600","E12.800","E21.400x001","E22.900","E25.000x007","E76.200x012","E76.200x003","E71.102","E78.600x009","E16.300x001","E25.801","E26.001","E78.500x001","D81.300","E78.202","E78.210","E23.000x007","E78.208","E10.700x021","E03.001","E31.002","E43.x00x001","E83.300x010","E07.800x004","E22.000x005","E03.200x003","E00.200","E12.000","E16.100x013","E27.804","D35.601","E00.900","E87.301","E70.300x005","D35.200x008","E05.800x001","E23.601","E03.901","E72.200x004","D35.200x004","E52.x00x002","E03.801","E78.300x004","E88.901","E05.302","E46.x01","E64.900","E16.800x002","E85.901","E20.801","E07.100x003","E70.202","E34.303","E34.903","E56.800x001","E24.202","E14.000x003","D44.900x001","E21.000","E78.000","E87.101","E65.x12","E88.100x002","E65.x01","E88.100x001","E16.103","E77.000","E77.100x003","E10.600x910","E27.802","E89.001","E04.903","E63.800","E78.000x006","E11.600x930","E87.600x004","E06.100","E11.500x045","E78.401","E83.000","E22.000x001","E50.100x001+H13.8*","E16.300","E77.100x002","E04.104","E34.305","E88.100x006","E34.801","E23.603","E03.900","E70.200","E72.400","E23.000x014","E27.807","E27.200","E79.900","E24.900","E23.008","E34.900x003","D44.802","E72.100x007","E87.701","E88.100x005","E22.801","E16.800x021","D35.200x007","E21.301","E83.300x014","E74.300x003","E77.100x006","E87.600x003","E06.304","E83.000x005","E25.000x008","E05.802","Q89.203","E14.000x004","C48.000x002","E16.800x001","E20.900","E05.801","E13.700","E72.500","E45.x00","E27.501","E59.x01","E70.300x003","E26.801","E76.200x011","E10.600x920","E78.100x008","E83.500x007","E27.403","E27.402","E10.505","E53.800x010","E78.600","E89.300x002","E23.009","E30.001","E87.803","E20.901","E23.602","E83.502","E16.804","E51.800","E65.x10","R94.700","E53.800x012","E01.000x002","E30.100","Q89.205","E83.200x002","E00.000","E66.200","E11.700x024","E22.802","E72.402","E76.200x010","E70.301","E83.300x021+M90.8*","E04.801","E13.900x003","E34.000","R73.001","E53.100","D34.x00x005","E23.203","E75.502","C79.700","E04.900x001","E79.100","E11.600x910","E71.308","E59.x00","E03.101","E10.600x930","E14.500x048","E67.100","E72.800x002","E87.800x004","E78.000x005","E72.100x006","E85.300x002","E86.x01","E23.600x015","E74.009","D35.700","E74.004","E87.206","E63.100","D44.901","E14.900x001","E07.100","E20.100","E27.101","E00.900x002","E12.100","E71.300","E77.900","E34.500x005","E61.200","E83.402","E34.802"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCK入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=KB1_group(record)){
        return result;
    }

    if (result=KC1_group(record)){
        return result;
    }

    if (result=KD1_group(record)){
        return result;
    }

    if (result=KD2_group(record)){
        return result;
    }

    if (result=KE1_group(record)){
        return result;
    }

    if (result=KJ1_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合KQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'KQY';
    }

    if (result=KR1_group(record)){
        return result;
    }

    if (result=KS1_group(record)){
        return result;
    }

    if (result=KT1_group(record)){
        return result;
    }

    if (result=KU1_group(record)){
        return result;
    }

    if (result=KV1_group(record)){
        return result;
    }

    if (result=KZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}