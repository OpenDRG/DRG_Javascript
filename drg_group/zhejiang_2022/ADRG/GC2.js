import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["45.0200x001","45.0201","45.0202","45.0203","45.0204","45.0300x002","45.0300x003","45.0301","45.0302","45.0303","45.1101","45.1200x001","45.1500","45.2101","45.2200x001","45.2600","45.3300x006","45.3300x009","45.3301","45.3302","45.3303","45.3304","45.4100x001","45.4100x002","45.4100x003","45.4100x007","45.4101","45.4102","45.4103","45.4104","45.4105","45.4107","45.4108","45.4300x002","45.4300x003","45.4300x007","45.4900x001","45.4900x003","45.4901","46.0100x001","46.0102","46.0300x001","46.0300x003","46.0300x004","46.0301","46.0302","46.1000x007","46.1100","46.1300","46.1301","46.1400","46.2100","46.2300x001","46.2400","46.3900x002","46.3900x006","46.3900x007","46.3901","46.3902","46.3903","46.3904","46.3905","46.4000","46.4101","46.4102","46.4103","46.4200","46.4201","46.4202","46.4300x004","46.4300x005","46.4301","46.4302","46.4303","46.5100x002","46.5100x004","46.5100x006","46.5101","46.5102","46.5200x006","46.5200x010","46.5200x011","46.5201","46.5202","46.5203","46.5204","46.6200x003","46.6200x004","46.6201","46.6301","46.6302","46.6401","46.6402","46.6403","46.7300x005","46.7301","46.7302","46.7303","46.7400x004","46.7401","46.7402","46.7403","46.7404","46.7405","46.7500x004","46.7501","46.7502","46.7503","46.7504","46.7505","46.7506","46.7601","46.7602","46.7603","46.7604","46.7901","46.7903","46.7904","46.8101","46.8102","46.8201","46.8202","46.9100","46.9200x001","46.9201","46.9300x001","46.9301","46.9401","52.6x00x003","57.8301","57.8302","75.6201","75.6202"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GC2入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GC21_group(record)){
            return 'GC21';
        }

        if (drg.GC23_group(record)){
            return 'GC23';
        }

        if (drg.GC25_group(record)){
            return 'GC25';
        }

        return 'GC2';
    }else{
        return '';
    }
}
  