import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HS2_group(record){
    let adrg_zd=["A52.705+K77.0*","B65.202+K77.0*","B65.904+I98.2*","B65.906+I98.3*","B65.906+I98.3*","K70.000","K70.001","K70.100","K70.201","K70.300","K70.301+I98.2*","K70.302+I98.3*","K70.303+I98.2*","K70.304+I98.2*","K70.305+I98.3*","K70.306+I98.3*","K70.900","K70.901","K71.700","K71.701","K71.702","K71.902+I98.2*","K71.903+I98.3*","K72.900x003+G94.3*","K74.000","K74.100","K74.200","K74.300","K74.300x005+I98.2*","K74.300x006+I98.3*","K74.300x007+I98.2*","K74.300x008+I98.3*","K74.301+I98.2*","K74.302+I98.3*","K74.400","K74.500","K74.600","K74.600x002","K74.600x002","K74.600x003","K74.600x003","K74.600x003","K74.600x003","K74.600x003","K74.600x010","K74.600x021","K74.600x025","K74.600x027","K74.600x029","K74.600x030","K74.600x031","K74.600x034","K74.600x036","K74.600x041","K74.600x042","K74.601","K74.601","K74.601","K74.602","K74.603","K74.604","K74.605","K74.606","K74.607","K74.608","K74.610","K74.611","K74.612","K74.613","K74.614","K74.615+I98.3*","K74.616+I98.2*","K74.617+I98.3*","K74.618+I98.3*","K74.619+I98.2*","K74.620+I98.2*","K76.101","K76.700","K76.700x003","K76.805","K92.801","Q44.703"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合HS2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
                
        if (drg.HS21_group(record)){
            return 'HS21';
        }        if (drg.HS25_group(record)){
            return 'HS25';
        }
        return 'HS2';
    }else{
        return '';
    }
}
  