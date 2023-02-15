import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LA1_group(record){
    let adrg_zd=["C48.001","C64.x00x001","C64.x00x003","C64.x00x004","C65.x00","C65.x01","C65.x02","C66.x00","C66.x00x002","C66.x00x003","C67.000","C67.100","C67.200","C67.300","C67.400","C67.500","C67.501","C67.600","C67.700","C67.800","C67.900","C67.900x002","C68.000","C68.100","C68.800","C68.801","C68.802","C68.803","C68.804","C68.805","C68.900","C76.301","C79.000x001","C79.001","C79.100x002","C79.101","C79.102","C79.103","D09.101","D09.104","D41.000x001","D41.100x001","D41.200x001","D41.201","D41.300x001","D41.400x001","D41.900x001"];
    let adrg_zd1=[];
    let adrg_ss=["39.2401","39.2600x004","39.2605","39.5500","40.2900x023","40.2905","40.2907","40.2909","40.5300","40.5301","40.5400x001","40.5900x016","40.5900x017","40.5908","40.5909","40.5910","40.5911","40.5912","55.0101","55.0109","55.3903","55.4x00","55.4x01","55.4x02","55.4x03","55.4x04","55.4x05","55.5100","55.5101","55.5102","55.5103","55.5104","55.5105","55.5106","55.5200","55.5201","55.5300x001","55.5400","55.5401","55.8600x006","55.8602","55.8603","55.8605","55.8606","56.4101","56.4200","56.4201","56.8900x001","57.5900x001","57.5900x002","57.5901","57.5903","57.6x00","57.6x01","57.6x02","57.6x03","57.6x04","57.6x05","57.6x06","57.7100","57.7101","57.7102","57.7103","57.7900x001","57.7901","57.8700x005","57.8700x006","57.8700x007","57.8700x008","57.8700x009","57.8701","57.8702","57.8703","57.8704","57.8706","57.9103"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LA1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LA11_group(record)){
            return 'LA11';
        }        if (drg.LA1B_group(record)){
            return 'LA1B';
        }
        return 'LA1';
    }else{
        return '';
    }
}
  