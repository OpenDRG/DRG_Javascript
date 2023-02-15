import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCW_DRG} from '../DRG/MDCW_DRG.js';

export default function WB1_group(record){
    let adrg_zd=["T20.300","T20.300x002","T20.300x003","T20.300x004","T20.300x005","T20.300x006","T20.300x007","T20.300x008","T20.300x009","T20.300x010","T20.300x011","T20.300x012","T20.700","T20.700x002","T20.700x003","T20.700x004","T20.700x005","T20.700x006","T20.700x007","T20.700x008","T20.700x009","T20.700x010","T20.700x011","T20.700x012","T21.300","T21.300x011","T21.300x021","T21.300x031","T21.300x032","T21.300x033","T21.300x041","T21.300x042","T21.300x043","T21.300x051","T21.300x052","T21.300x053","T21.300x054","T21.300x055","T21.300x056","T21.300x057","T21.300x091","T21.700","T21.700x011","T21.700x021","T21.700x031","T21.700x032","T21.700x033","T21.700x041","T21.700x042","T21.700x043","T21.700x051","T21.700x052","T21.700x053","T21.700x054","T21.700x055","T21.700x056","T21.700x057","T21.700x091","T22.300x001","T22.300x002","T22.300x003","T22.300x004","T22.300x005","T22.300x006","T22.700x001","T22.700x002","T22.700x003","T22.700x004","T22.700x005","T22.700x006","T23.300","T23.300x002","T23.300x003","T23.300x004","T23.300x005","T23.300x006","T23.300x007","T23.700","T23.700x002","T23.700x003","T23.700x004","T23.700x005","T23.700x006","T23.700x007","T24.300x001","T24.300x002","T24.300x003","T24.300x004","T24.700x001","T24.700x002","T24.700x003","T24.700x004","T25.300","T25.300x002","T25.300x003","T25.700","T25.700x002","T25.700x003","T29.300x001","T29.700x001","T30.300","T30.700","T31.300","T31.400","T31.500","T31.600","T31.700","T31.800","T31.900","T32.300","T32.400","T32.500","T32.600","T32.700","T32.800","T32.900","T34.000","T34.100","T34.200","T34.300x001","T34.300x002","T34.300x003","T34.400","T34.500x002","T34.500x003","T34.600x002","T34.600x003","T34.700x002","T34.700x003","T34.800x002","T34.800x003","T34.900x002","T34.900x003","T35.100x001","T35.600x001","T35.700x008","T35.700x009"];
    let adrg_zd1=[];
    let adrg_ss=["18.9x00x007","85.8200","85.8300","85.8400","85.8500","86.6101","86.6200x002","86.6201","86.6202","86.6300x001","86.6301","86.6302","86.6303","86.6304","86.6501","86.6601","86.6701","86.6702","86.6901","86.6903","86.6904","86.6905","86.6906","86.7100x009","86.7101","86.7102","86.7103","86.7104","86.7105","86.7200x001","86.7300x003","86.7300x004","86.7301","86.7302","86.7303","86.7400x026","86.7400x031","86.7400x032","86.7400x033","86.7400x034","86.7400x035","86.7400x036","86.7400x037","86.7400x038","86.7400x039","86.7400x040","86.7400x041","86.7400x042","86.7401","86.7402","86.7403","86.7404","86.7500x001","86.7501","86.7502","86.7503","86.7504","86.9301","86.9302","86.9303","86.9305","86.9306"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合WB1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCW_DRG();
                
        if (drg.WB11_group(record)){
            return 'WB11';
        }        if (drg.WB13_group(record)){
            return 'WB13';
        }        if (drg.WB15_group(record)){
            return 'WB15';
        }
        return 'WB1';
    }else{
        return '';
    }
}
  