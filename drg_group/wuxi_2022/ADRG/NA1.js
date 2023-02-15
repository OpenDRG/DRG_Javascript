import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NA1_group(record){
    let adrg_zd=["C79.833","C79.800x206","C79.800x214","C57.301","D39.000x001","C57.900","C55.x00","C79.800x218","C51.900","D39.900x001","C57.800x005","D06.900","C58.x00x002","C57.000","C57.701","C79.800x222","C79.822","D07.100","C54.000","C79.800x215","D39.700x002","D07.200","C56.x00x003","C79.814","C51.800","C77.500x003","C56.x00","C54.001","C54.300","C45.100","C53.100","C79.823","D07.301","C51.001","C79.600","C57.300x001","D07.000","C79.813","C79.800x223","C51.200","D06.000","C57.101","C79.800x211","C57.702","C57.801","D39.100x003","C53.000","C79.800x219","C57.802","C57.400","C58.x00","C79.800x220","D06.100","C54.100","D39.700x001","C57.000x002","C57.800x004","C54.800","C79.800x216","C53.900","C57.803","C51.000","C51.100","C79.800x205","C53.801","D07.303","C79.800x213","D07.302","C53.800","C57.300","C58.x00x003","C46.700x001","C54.900","C79.812","C57.200","C57.700","C57.100","C54.200","C52.x00","D39.000x002","C79.800x202","C79.800x209"];
    let adrg_zd1=[];
    let adrg_ss=["67.4x00x002","68.4900x006","68.6100x001","68.6100x002","68.6101","68.6900x001","68.6900x001","68.6900x002","68.6901","68.6902","68.7100x001","68.7900x003","68.7901","68.8x01","71.5x00x001","71.5x00x003","71.5x00x004","54.4x00x006","54.4x00x007","54.4x04","54.4x16","68.4101","68.4102","68.4902","68.4903","68.5101","70.4x01","40.2900x023","40.2905","40.2907","40.2909","40.5000","40.5200","40.5300","40.5301","40.5400x001","40.5907","40.5908","40.5909","40.5910","40.5911","40.5912"];
    let adrg_ss1=["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","3","3","3","3","3","3","3"];
    let dept_list=[];
    
        let ss_matched=record.ssList.filter(x=>adrg_ss.includes(x)).map(x=>adrg_ss1[adrg_ss.indexOf(x)]);
  
    if (true && adrg_zd.includes(record.zdList[0]) && (ss_matched.includes("1") || (ss_matched.includes("2") && ss_matched.includes("3")))){
        putMessage('符合NA1入组条件，匹配规则：主诊断匹配、NA1特殊规则、多手术处理');
        let drg=new MDCN_DRG();
                
        if (drg.NA19_group(record)){
            return 'NA19';
        }
        return 'NA1';
    }else{
        return '';
    }
}
  