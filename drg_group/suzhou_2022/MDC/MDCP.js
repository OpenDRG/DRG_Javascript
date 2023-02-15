import {putMessage,intersect,SS_VALID} from '../Base.js'
import PB1_group from '../ADRG/PB1.js';
import PC1_group from '../ADRG/PC1.js';
import PJ1_group from '../ADRG/PJ1.js';
import PK1_group from '../ADRG/PK1.js';
import PR1_group from '../ADRG/PR1.js';
import PS1_group from '../ADRG/PS1.js';
import PS2_group from '../ADRG/PS2.js';
import PS3_group from '../ADRG/PS3.js';
import PS4_group from '../ADRG/PS4.js';
import PU1_group from '../ADRG/PU1.js';
import PV1_group from '../ADRG/PV1.js';

export default function MDCP_group(record){
    let mdc_zd=["P28.401","A33.x00","P37.200","P81.902","P35.300","P14.800x002","P21.101","P81.800","P27.900","P61.000","P12.801","Q86.200","P28.800x201","Q87.300x901","E55.000x006","A04.100x002","P59.801","P39.402","P92.300","P35.000","A04.200x002","P78.300x002","P72.100","P92.001","P39.100x004","P78.300x001","P28.801","P08.200x002","P08.100x001","P07.101","P57.901","P78.100x001","P50.800","P76.000","P58.800x001","P28.102","P12.400","P04.101","P71.400","P74.403","P21.102","P36.200","P59.301","P78.800x005","Q27.000","P83.400","P27.000x001","P29.800x201","P23.000x001","P83.800x004","P38.x00x001","P52.100","P78.200x001","P78.804","P04.800","P52.400","P52.000","P92.400","P55.101","P15.600","P04.200","P78.800x009","P04.500","P36.301","P54.100","P07.001","P12.900","P04.400","P54.800x002","P13.301","P28.300","P26.900","P70.400x001","P96.100x002","P24.300","P91.500","P61.800","P07.300","P52.600x001","P27.801","P78.300x005","Q87.300x902","P52.802","P54.200","P81.901","P08.100x002","P92.100x001","P27.100","P54.300x001","P90.x00","P28.301","Q89.003","P52.500","P50.200","P36.800x004","P83.500","P83.302","P96.900x001","P25.300","P54.300x003","P76.900","P23.400","P71.800","P23.200","P24.102","A54.301+H13.1*","P15.803","P56.900","P74.201","P24.900","P74.801","P91.300","P23.600","Q86.000","P71.901","P22.801","P78.800x012","P80.000","P29.900","P21.900x002","P27.000","P29.301","P92.900","P78.801","P10.901","P27.802","P24.001","P80.800x001","P15.802","P07.100","P83.600","P39.102","P61.100","P91.700","P35.900x001","P94.200x001","Q89.400","P07.300x001","P13.100","P35.200","P28.500","P61.200","P96.804","P25.801","P29.800x901","P39.800x007","P96.000x002","P07.102","P55.800x002","P72.200x001","P54.802","P54.801","P72.000","L01.006","P29.300","P36.800x002","P78.000x004","P91.200","P83.500x003","P96.800x101","P24.200","A09.900x005","P07.300x011","P78.002","P80.900","P58.100","P50.100","P92.500","P36.900","P20.100","P08.000","P22.101","P25.200","P77.x01","P78.000x003","P12.300","P07.200","P58.000","P10.400","P81.001","P91.900x001","P05.001","P25.100","P14.900","P78.800x007","P25.000","P96.100x001","P50.000","P78.901","P28.800x202","P94.200x002","P71.902","P91.400","A04.000x001","Q89.000","P95.x00","P70.300","P96.400","P10.200","K10.200x009","P52.200x002","P35.100","P23.600x002","P70.801","P36.901","P05.900","P70.000","R95.900","P58.403","P74.202","P59.203","P83.301","P96.802","P51.000","P05.102","P78.805","P93.x01","P12.201","P14.100","P70.900","P59.100","P37.500","P24.901","P39.800x006","P57.900","P78.800x010","P55.001","P28.402","P96.800x904","P15.900","P35.401","P83.803","P54.300x002","P70.400x002","P29.200","P74.900","P78.800x006","P74.401","P36.800x003","P72.800","P29.401","P51.900","P11.101","P71.200","P76.100","P39.100x003","P24.002","P26.100","P28.303","P91.900","P83.500x002","P23.600x001","P51.801","P28.200","P96.300","P28.800x101","P61.900","Q86.100","P15.804","P20.900","P96.803","P04.600","P52.300","P29.800x902","P94.000","P58.401","P07.000","P28.900","P23.100","P35.400","P93.x00","P55.900","P61.601","P13.801","P74.301","P50.900","P94.900","P83.800x006","P13.000","P37.800x002","L00.x01","P14.000","P78.800x004","P36.500","P58.300","P39.800x008","P83.800x007","P91.600","P96.000x001","P07.200x021","P83.901","P78.807","P58.402","P28.800x901","P11.500x002","P15.800x004","P78.900","P74.501","P04.900","P15.201","P39.200","P54.800x003","P92.800x003","P58.900","P22.000x001","P83.100","P07.002","P96.500","P54.400","P39.401","P29.000","P53.x00x002","P53.x00x001","P50.400","P28.000","P37.901","P52.900","P59.202","A04.402","P39.000","P61.001","P83.801","P29.400","P71.300x001","P39.101","P61.401","P70.200","P92.000","P14.300","P83.200","P12.100","P94.800","P91.801","P93.x02","P04.102","P70.401","P58.200","P21.000","P15.801","P07.300x021","P07.200x011","P74.002","P94.100x001","P12.000x001","P74.100","P55.002","P39.300","P39.403","P10.000","P23.500","P55.102","P58.800","P04.300","P15.500","Q89.001","P11.900x001","P13.900","P23.800","P35.800x001","P83.800x005","P05.900x001","P28.400","P13.200","P78.800x008","P52.801","P13.400","P04.800x001","P91.000x002","P76.801","P15.400","P10.100","P23.600x003","P26.000","P92.200","P92.800x001","P20.000","P56.000","P22.900","P23.900","P35.000x001","P83.401","P22.000","P39.800x004","P61.300","P83.000","P59.000","P74.802","P37.800x001","P78.000x005","P36.800x005","P96.200","P10.800","P74.402","P54.900","P36.400","P15.300","P74.400","P36.101","A04.400x003","A04.301","P59.201","P11.500x003","P71.100x001","E84.101+P75*","P96.801","P71.100","P14.200","P96.301","R95.000","P58.500","P15.100","P54.600","P50.500","Q89.801","P91.100","P39.801","P70.100","P10.300","P78.001","P83.802","P78.803","P29.100","P11.000","P57.800","P61.500","P37.900","P14.800x001","P15.901","P22.100x003","P24.101","Q89.002","P13.800","P55.801","P52.200x001","P91.802","P78.300x004","P21.900","P26.800","P57.000","P50.300","P11.300","P78.300x003","P78.000x006","P78.802","P54.500","P74.001","P80.801","P91.800x001","P28.800x903","P38.x01","P36.000","P55.000x002","P05.200","P59.901","P35.900","P78.806","P71.000","P11.400","P23.300","P52.600x002","P76.200","P11.100","P29.802","P74.800x003","P81.000","P23.600x004","P15.000","P39.900","Q87.300x301","P04.001","P11.200","P13.300","P60.x00","P59.902","P28.302","P39.800x005","P20.901","P54.000","P74.302","P78.000x007","P24.800","P72.900","P37.400","P36.800x001","P36.902"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]) && record.age==0)){
        return '';
    }
    
    putMessage('符合MDCP入组条件，匹配规则：主诊断匹配、婴儿');
    let result;

    if (result=PB1_group(record)){
        return result;
    }

    if (result=PC1_group(record)){
        return result;
    }

    if (result=PJ1_group(record)){
        return result;
    }

    if (result=PK1_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合PQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'PQY';
    }

    if (result=PR1_group(record)){
        return result;
    }

    if (result=PS1_group(record)){
        return result;
    }

    if (result=PS2_group(record)){
        return result;
    }

    if (result=PS3_group(record)){
        return result;
    }

    if (result=PS4_group(record)){
        return result;
    }

    if (result=PU1_group(record)){
        return result;
    }

    if (result=PV1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}