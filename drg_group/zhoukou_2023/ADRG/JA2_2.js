import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';


export default function JA2_2_group(record){
    let adrg_zd=["C44.501","C44.502","C50.000x001","C50.001","C50.100","C50.200","C50.300","C50.400","C50.500","C50.600","C50.800","C50.800x005","C50.801","C50.802","C50.803","C50.804","C50.900","C50.900x005","C50.901","C50.902","C79.200x007","C79.806","D03.501","D04.501","D05.000","D05.100","D05.900"];
    let adrg_zd1=[];
    let adrg_ss=["85.2100x003","85.2100x019","85.2200","85.2300x001","85.3300x001","85.3400x002","85.3500x001","85.3600x001","85.4100x001","85.4200x001","85.4200x003"];
    let adrg_ss1=["40.2100","40.2200","40.2300","40.2900x002","40.2901","40.2910","40.3x00x001","40.3x00x002","40.3x00x003","40.3x00x005","40.4100","40.4200","40.5000","40.5100","40.5101","40.5901","40.5914"];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && intersect(record.ssList,adrg_ss) && intersect(record.ssList,adrg_ss1)){
        putMessage('符合JA2_2入组条件，匹配规则：主诊断匹配、双手术匹配');
        
        let drg=new MDCJ_DRG();
        
        if (drg.JA29_group(record)){
            return 'JA29';
        }

        return '';
    }else{
        return '';
    }
}
  