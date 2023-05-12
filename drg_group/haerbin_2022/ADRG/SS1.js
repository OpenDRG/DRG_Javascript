import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCS_DRG} from '../DRG/MDCS_DRG.js';

export default function SS1_group(record){
    let adrg_zd=["T79.300x001","T81.400x001","T81.400x002","T81.400x004","T81.400x005","T81.400x006","T81.401","T81.402","T81.403","T81.404","T81.405","T81.406","T82.700x001","T82.700x002","T82.700x003","T82.700x004","T82.700x005","T82.700x007","T82.700x008","T82.700x009","T82.700x010","T82.700x011","T82.701","T84.701","T85.700x103","T85.700x104","T85.700x808","T85.700x809","T85.701","T85.702","T85.703","T85.706","T85.708","T85.709","T85.710","T85.711","T85.712","T86.807","T98.200x012","T98.200x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合SS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCS_DRG();
        
        if (drg.SS1A_group(record)){
            return 'SS1A';
        }

        if (drg.SS15_group(record)){
            return 'SS15';
        }

        return 'SS1';
    }else{
        return '';
    }
}
  