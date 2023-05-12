import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["35.0000","35.0100x002","35.0101","35.0200x003","35.0201","35.0300x002","35.0301","35.0400x001","35.0401","35.0501","35.0502","35.0600x001","35.0600x002","35.0601","35.0602","35.0603","35.0701","35.0800x001","35.0801","35.0802","35.0803","35.0900","35.1000","35.1100x002","35.1100x003","35.1100x004","35.1101","35.1200x001","35.1200x002","35.1200x003","35.1201","35.1202","35.1300x002","35.1300x004","35.1301","35.1400x001","35.1400x002","35.1400x003","35.1400x006","35.1401","35.1402","35.2000x001","35.2000x002","35.2000x003","35.2100x002","35.2100x003","35.2100x004","35.2101","35.2200x002","35.2201","35.2300x002","35.2301","35.2302","35.2400x002","35.2401","35.2402","35.2501","35.2601","35.2701","35.2702","35.2801","35.2802","35.3300x001","35.3300x002","35.3300x003","35.3400x005","35.3500x002","35.3500x003","35.3500x004","35.3500x005","35.3500x006","35.3500x007","35.3500x008","35.3500x009","35.3501","35.9400x003","35.9400x004","35.9500x001","35.9500x003","35.9500x004","35.9500x005","35.9500x006","35.9502","35.9601","35.9602","35.9603","35.9604","35.9700x001","35.9700x002","35.9700x003","35.9900x001","35.9900x002","37.3300x017","38.4503","38.4505","38.4506","38.4507"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FB2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FB21_group(record)){
            return 'FB21';
        }

        if (drg.FB23_group(record)){
            return 'FB23';
        }

        if (drg.FB25_group(record)){
            return 'FB25';
        }

        return 'FB2';
    }else{
        return '';
    }
}
  