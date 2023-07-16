import {putMessage,intersect,SS_VALID} from '../Base.js';
import WB1_group from '../ADRG/WB1.js';
import WC1_group from '../ADRG/WC1.js';
import WJ1_group from '../ADRG/WJ1.js';
import WR1_group from '../ADRG/WR1.js';
import WZ1_group from '../ADRG/WZ1.js';

export default function MDCW_group(record){
    let mdc_zd=["T20.000","T20.000x002","T20.000x003","T20.000x004","T20.000x006","T20.000x007","T20.000x008","T20.002","T20.003","T20.200","T20.200x002","T20.200x003","T20.200x004","T20.200x006","T20.200x007","T20.200x008","T20.200x009","T20.201","T20.400","T20.400x002","T20.400x003","T20.400x004","T20.400x005","T20.400x006","T20.400x007","T20.400x008","T20.400x009","T20.401","T21.000","T21.000x011","T21.000x021","T21.000x031","T21.000x032","T21.000x033","T21.000x041","T21.000x042","T21.000x043","T21.000x051","T21.000x052","T21.000x053","T21.000x054","T21.000x055","T21.000x056","T21.000x057","T21.000x091","T21.100","T21.100x011","T21.100x021","T21.100x031","T21.100x032","T21.100x033","T21.100x041","T21.100x042","T21.100x043","T21.100x051","T21.100x052","T21.100x053","T21.100x054","T21.100x055","T21.100x056","T21.100x057","T21.100x091","T21.200","T21.200x011","T21.200x021","T21.200x031","T21.200x032","T21.200x033","T21.200x041","T21.200x042","T21.200x043","T21.200x051","T21.200x052","T21.200x053","T21.200x054","T21.200x055","T21.200x056","T21.200x057","T21.200x091","T21.300","T21.300x011","T21.300x021","T21.300x031","T21.300x032","T21.300x033","T21.300x041","T21.300x042","T21.300x043","T21.300x051","T21.300x052","T21.300x053","T21.300x054","T21.300x055","T21.300x056","T21.300x057","T21.300x091","T21.400","T21.400x011","T21.400x021","T21.400x031","T21.400x032","T21.400x033","T21.400x041","T21.400x042","T21.400x043","T21.400x051","T21.400x052","T21.400x053","T21.400x054","T21.400x055","T21.400x056","T21.400x057","T21.400x091","T21.500","T21.500x011","T21.500x021","T21.500x031","T21.500x032","T21.500x033","T21.500x041","T21.500x042","T21.500x043","T21.500x051","T21.500x052","T21.500x053","T21.500x054","T21.500x055","T21.500x056","T21.500x057","T21.500x091","T21.600","T21.600x011","T21.600x021","T21.600x031","T21.600x032","T21.600x033","T21.600x041","T21.600x042","T21.600x043","T21.600x051","T21.600x052","T21.600x053","T21.600x054","T21.600x055","T21.600x056","T21.600x057","T21.600x091","T21.700","T21.700x011","T21.700x021","T21.700x031","T21.700x032","T21.700x033","T21.700x041","T21.700x042","T21.700x043","T21.700x051","T21.700x052","T21.700x053","T21.700x054","T21.700x055","T21.700x056","T21.700x057","T21.700x091","T22.000x001","T22.000x002","T22.000x003","T22.000x004","T22.000x005","T22.000x006","T22.100x001","T22.100x002","T22.100x003","T22.100x004","T22.100x005","T22.100x006","T22.200x001","T22.200x002","T22.200x003","T22.200x004","T22.200x005","T22.200x006","T22.300x001","T22.300x002","T22.300x003","T22.300x004","T22.300x005","T22.300x006","T22.400x001","T22.400x002","T22.400x003","T22.400x004","T22.400x005","T22.400x006","T22.500x001","T22.500x002","T22.500x003","T22.500x004","T22.500x005","T22.500x006","T22.600x001","T22.600x002","T22.600x003","T22.600x004","T22.600x005","T22.600x006","T22.700x001","T22.700x002","T22.700x003","T22.700x004","T22.700x005","T22.700x006","T23.000x001","T23.000x002","T23.000x003","T23.000x004","T23.000x005","T23.000x006","T23.000x007","T23.100","T23.100x002","T23.100x003","T23.100x004","T23.100x005","T23.100x006","T23.100x007","T23.200","T23.200x002","T23.200x003","T23.200x004","T23.200x005","T23.200x006","T23.200x007","T23.300","T23.300x002","T23.300x003","T23.300x004","T23.300x005","T23.300x006","T23.300x007","T23.400","T23.400x002","T23.400x003","T23.400x004","T23.400x005","T23.400x006","T23.400x007","T23.500","T23.500x002","T23.500x003","T23.500x004","T23.500x005","T23.500x006","T23.500x007","T23.600","T23.600x002","T23.600x003","T23.600x004","T23.600x005","T23.600x006","T23.600x007","T23.700","T23.700x002","T23.700x003","T23.700x004","T23.700x005","T23.700x006","T23.700x007","T24.000x001","T24.000x002","T24.000x003","T24.000x004","T24.100x001","T24.100x002","T24.100x003","T24.100x004","T24.200x001","T24.200x002","T24.200x003","T24.200x004","T24.300x001","T24.300x002","T24.300x003","T24.300x004","T24.400x001","T24.400x002","T24.400x003","T24.400x004","T24.500x001","T24.500x002","T24.500x003","T24.500x004","T24.600x001","T24.600x002","T24.600x003","T24.600x004","T24.700x001","T24.700x002","T24.700x003","T24.700x004","T25.000","T25.000x002","T25.000x003","T25.100","T25.100x002","T25.100x003","T25.200","T25.200x002","T25.200x003","T25.300","T25.300x002","T25.300x003","T25.400","T25.400x002","T25.400x003","T25.500","T25.500x002","T25.500x003","T25.600","T25.600x002","T25.600x003","T25.700","T25.700x002","T25.700x003","T28.401","T28.901","T29.000","T29.100x001","T29.200x001","T29.300x001","T29.400","T29.500x001","T29.600x001","T29.700x001","T30.000","T30.100","T30.200","T30.300","T30.400","T30.500","T30.600","T30.700","T31.000","T31.100","T31.200","T31.300","T31.400","T31.500","T31.600","T31.700","T31.800","T31.900","T32.000","T32.100","T32.200","T32.300","T32.400","T32.500","T32.600","T32.700","T32.800","T32.900","T35.200"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCW入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=WB1_group(record)){
        return result;
    }

    if (result=WC1_group(record)){
        return result;
    }

    if (result=WJ1_group(record)){
        return result;
    }

    if (false && record.ssList  && intersect(SS_VALID,record.ssList)){
        putMessage('符合WQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'WQY';
    }

    if (result=WR1_group(record)){
        return result;
    }

    if (result=WZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCW的ADRG入组条件');
}