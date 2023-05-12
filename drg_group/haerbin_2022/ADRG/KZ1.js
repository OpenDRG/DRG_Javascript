import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KZ1_group(record){
    let adrg_zd=["D35.700","D44.800","E10.500x021+I79.2*","E10.500x043","E10.500x044","E10.500x045","E10.500x046","E10.500x047","E10.500x048","E10.500x049","E10.500x051","E10.501+I79.2*","E10.503","E10.504","E10.505","E10.600x910","E10.600x911","E10.600x920","E10.600x930","E10.700x031","E10.700x032","E11.400x311+G99.0*","E11.500x043","E11.500x044","E11.500x045","E11.500x046","E11.500x047","E11.500x048","E11.500x049","E11.500x051","E11.503","E11.504","E11.505","E11.600x910","E11.600x911","E11.600x920","E11.600x930","E11.700x031","E11.700x032","E12.500","E14.500x011+I79.2*","E14.500x021+I79.2*","E14.500x041","E14.500x042","E14.500x043","E14.500x044","E14.500x045","E14.500x046","E14.500x047","E14.500x048","E14.500x049","E14.500x050","E14.500x051","E14.600x910","E14.600x911","E14.600x920","E14.600x930","E14.700x031","E14.700x032","E52.x00","E52.x00x002","E65.x00x002","E65.x00x010","E65.x00x011","E65.x00x013","E65.x01","E65.x02","E65.x03","E65.x04","E65.x05","E65.x07","E65.x08","E65.x09","E65.x10","E65.x11","E65.x12","E65.x13","E66.000","E66.100","E66.200","E66.201","E66.801","E66.900","E66.900x001","E66.901","E67.000","E67.100","E67.200","E67.300","E71.300","E71.300x005","E71.300x011","E71.302","E71.304","E71.305","E71.307","E71.308","E71.309","E71.310","E83.300x007","E83.401","E83.402","E83.501","E83.502","E83.503","E83.504","E84.900","E85.200x001","E85.300x002","E85.300x003","E85.400x014","E85.406","E85.800","E85.901","E86.x00x001","E86.x00x003","E86.x00x004","E86.x01","E87.001","E87.101","E87.102","E87.200x002","E87.201","E87.202","E87.203","E87.204","E87.205","E87.206","E87.301","E87.302","E87.303","E87.400","E87.500","E87.501","E87.600","E87.600x002","E87.600x003","E87.600x004","E87.700","E87.701","E87.800x004","E87.801","E87.802","E87.803","E88.203","E89.102","E89.800x003","R29.000","R79.801","R82.400","R82.401","R94.700"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合KZ1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KZ11_group(record)){
            return 'KZ11';
        }

        if (drg.KZ1B_group(record)){
            return 'KZ1B';
        }

        return 'KZ1';
    }else{
        return '';
    }
}
  