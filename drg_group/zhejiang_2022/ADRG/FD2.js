import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["35.3200x003","35.3201","35.3202","35.3400x003","35.3400x004","35.3501","35.3901","35.4100x001","35.4100x002","35.4101","35.4200x002","35.4200x005","35.4200x006","35.4200x007","35.4200x008","35.5000","35.5100x001","35.5100x002","35.5100x003","35.5101","35.5300x001","35.5300x003","35.5301","35.6000","35.6101","35.6102","35.6201","35.6300x002","35.7000","35.7100x002","35.7100x003","35.7100x004","35.7100x005","35.7100x007","35.7100x009","35.7200x001","35.8100x005","35.9500x001","36.0300x006","36.0301","36.0302","36.2x00","36.3100x001","36.3900x001","36.3901","36.9100","36.9900x002","36.9903","37.1100x004","37.1100x005","37.1101","37.1102","37.1103","37.1200x005","37.1200x008","37.1201","37.1202","37.1203","37.1204","37.3101","37.3102","37.3103","37.3202","37.3300x006","37.3300x008","37.3300x009","37.3300x020","37.3300x021","37.3300x024","37.3300x025","37.3301","37.3304","37.3305","37.3307","37.3502","37.3600x001","37.4900x001","37.4900x002","37.4900x005","37.4900x007","37.4900x014","37.4903","37.9100","37.9300x001","37.9901","38.3400x003","38.3500x002","38.4500x004","38.4500x015","38.6500x003","38.6500x004","38.8500x001","38.8500x012","38.8505","39.1x00x011","39.1x00x015","39.1x00x016","39.1x00x017","39.1x00x018","39.4900x010","39.5000x015","39.5200x005","39.5900x031"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FD29_group(record)){
            return 'FD29';
        }

        return 'FD2';
    }else{
        return '';
    }
}
  