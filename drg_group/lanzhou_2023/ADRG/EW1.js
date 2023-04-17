import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EW1_group(record){
    let adrg_zd=["D18.011","I89.800x002","I89.800x007","I89.800x016","I89.800x017","I89.807","I97.800x018","J10.100x005","J11.100x005","J43.902","J90.x00","J90.x00x002","J90.x00x003","J90.x00x004","J90.x00x005","J90.x01","J90.x02","J92.000","J92.900x002","J92.901","J93.003","J93.100x001","J93.100x002","J93.800x001","J93.900","J94.101","J94.200","J94.201","J94.800x003","J94.800x004","J94.800x010","J94.801","J94.802","J94.804","J94.805","J94.806","J94.807","J94.900x001","J94.901","J95.801","J95.804","J98.201","Q34.000","Q85.900x015","R09.100","R09.100x002","R09.101"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合EW1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
        
        if (drg.EW15_group(record)){
            return 'EW15';
        }

        if (drg.EW13_group(record)){
            return 'EW13';
        }

        if (drg.EW11_group(record)){
            return 'EW11';
        }

        return 'EW1';
    }else{
        return '';
    }
}
  