import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["01.0900x007","01.2001","01.2002","01.2200","01.2900","02.9300x001","02.9301","02.9302","02.9303","02.9304","03.9300x003","03.9300x004","03.9302","03.9400x001","03.9400x002","04.9200x001","04.9200x002","04.9200x003","04.9202","04.9203","04.9300x001","04.9301","39.8101","39.8102","39.8201","39.8202","39.8301","39.8302","39.8400","39.8500","39.8600","39.8700","39.8800","86.0501","86.0900x009","86.9401","86.9402","86.9500x001","86.9500x002","86.9501","86.9502","86.9600x001","86.9600x002","86.9600x003","86.9600x006","86.9601","86.9602","86.9701","86.9702","86.9800x001","86.9800x002","86.9801","86.9802","92.3001","92.3002"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合BD2入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BD29_group(record)){
            return 'BD29';
        }

        return 'BD2';
    }else{
        return '';
    }
}
  