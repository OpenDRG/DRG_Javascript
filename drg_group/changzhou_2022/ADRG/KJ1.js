import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["06.1101","06.1301","06.1302","06.1303","07.1600","07.8000","07.8001","07.8100","07.8100x009","07.8101","07.8201","07.8300","07.8300x002","07.8400","07.8401","07.9100","07.9200x001","07.9300","07.9400","07.9500","07.9800","07.9901","08.2000x006","08.2001","08.3800","12.7200","14.6x00x001","34.2501","34.2502","34.2600","34.3x01","34.3x02","34.3x03","34.3x04","34.3x05","34.4x01","34.4x02","34.4x03","38.0200x002","38.0201","38.0800x003","38.1200x003","38.1201","38.1202","38.2100","38.3000","38.3800","38.4300x001","38.4300x002","38.4301","38.4302","38.4303","38.7x01","38.7x02","38.7x03","38.7x04","39.3100","39.5004","39.5005","39.5011","39.7900x009","39.7900x809","39.9004","39.9009","39.9100","39.9100x003","39.9300","39.9800x001","39.9801","40.0x00x002","40.1100x003","40.2300","40.2400","40.2900x002","40.2900x017","40.2900x018","40.2901","40.2906","40.2908","40.3x00x001","40.3x00x002","40.3x00x003","40.5901","43.7x00x001","43.7x01","43.7x02","43.7x03","44.9201","45.6201","45.6202","45.6203","45.6204","45.6205","45.6206","45.6207","45.6208","45.7500","45.7500x001","45.7501","45.9300x012","45.9300x013","45.9300x014","45.9300x015","45.9301","45.9302","45.9303","45.9304","45.9305","45.9306","45.9307","45.9310","45.9400x004","45.9400x009","45.9400x012","45.9400x016","45.9401","45.9402","45.9403","45.9404","45.9405","45.9406","45.9407","45.9408","45.9502","45.9503","47.1900x001","52.2201","52.2202","52.5100x001","52.5101","52.5102","52.5103","52.5104","52.5201","52.5202","52.5203","52.5204","52.5205","52.5206","52.5300","52.5301","52.5901","52.5902","52.5903","52.5904","52.5905","52.5906","54.0x00x002","54.0x00x004","54.0x00x006","54.0x00x010","54.0x00x013","54.0x00x018","54.0x00x021","54.0x00x022","54.0x00x023","54.0x00x024","54.0x00x025","54.0x01","54.0x02","54.0x03","54.1100","54.1101","54.1201","54.1202","54.1900x001","54.1900x005","54.1900x010","54.1900x011","54.1901","54.1902","54.1903","54.1904","54.1907","54.1909","54.3x00x004","54.3x00x010","54.3x00x011","54.3x00x027","54.3x01","54.3x02","54.3x03","54.3x04","54.3x05","54.3x06","54.3x07","54.4x00x005","54.4x00x006","54.4x00x007","54.4x00x012","54.4x00x021","54.4x00x035","54.4x00x039","54.4x00x042","54.4x00x048","54.4x00x050","54.4x01","54.4x02","54.4x03","54.4x04","54.4x05","54.4x06","54.4x07","54.4x08","54.4x09","54.4x10","54.4x11","54.4x12","54.4x13","54.4x14","54.4x15","54.4x16","54.5100","54.5100x005","54.5100x009","54.5101","54.5102","54.5103","54.5900x007","54.5901","54.5902","54.5903","54.5904","54.5905","54.5906","54.6101","54.6301","54.6400","54.6401","54.7100","54.7200x001","54.7300x001","54.7400x001","54.7400x002","54.7400x003","54.7400x004","54.7400x005","54.7400x006","54.7404","54.7500x002","54.7501","85.1200x001","85.2100x003","85.2100x019","85.2100x020","85.2101"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合KJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KJ11_group(record)){
            return 'KJ11';
        }

        if (drg.KJ13_group(record)){
            return 'KJ13';
        }

        if (drg.KJ15_group(record)){
            return 'KJ15';
        }

        return 'KJ1';
    }else{
        return '';
    }
}
  