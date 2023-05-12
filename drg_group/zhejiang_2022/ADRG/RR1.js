import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RR1_group(record){
    let adrg_zd=["C91.000","C91.000x006","C91.000x007","C91.000x012","C91.000x013","C91.000x014","C91.000x015","C91.000x017","C91.001","C91.002","C91.003","C91.004","C91.005","C91.006","C91.007","C91.008","C91.100x012","C91.400x013","C91.500x011","C92.000","C92.000x003","C92.000x006","C92.000x011","C92.000x012","C92.000x013","C92.000x014","C92.000x015","C92.000x016","C92.000x017","C92.000x018","C92.001","C92.002","C92.003","C92.004","C92.005","C92.006","C92.007","C92.008","C92.009","C92.100x002","C92.100x012","C92.100x017","C92.201","C92.400x011","C92.401","C92.402","C92.403","C92.500x011","C92.501","C92.502","C92.600","C92.601","C92.800","C93.000x011","C93.000x016","C93.001","C93.002","C93.003","C93.100x012","C94.000x001","C94.000x011","C94.001","C94.004","C94.200","C94.200x011","C94.201","C94.202","C94.300x011","C94.400","C94.400x001","C94.702","C95.000","C95.000x002","C95.000x003","C95.000x015","C95.000x016","C95.000x017","C95.000x101","C95.000x102","C95.000x115","C95.000x116","C95.000x117","C95.000x118","C95.004","C95.005","C95.006","C95.100x012","D45.x00"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合RR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RR11_group(record)){
            return 'RR11';
        }

        if (drg.RR13_group(record)){
            return 'RR13';
        }

        if (drg.RR15_group(record)){
            return 'RR15';
        }

        return 'RR1';
    }else{
        return '';
    }
}
  