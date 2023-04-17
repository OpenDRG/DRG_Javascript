import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.2100","07.2102","07.2200","07.2201","07.2900x001","07.2900x003","07.2901","07.2902","07.3x00","07.3x01","07.4101","07.4102","07.4103","07.4200","07.4300","07.4400","07.4501","07.4900x002","38.0702","38.2100","38.3700","38.3701","38.4600x001","38.6700x003","38.6700x005","38.6701","38.6702","38.6704","38.7x01","38.7x02","38.7x03","38.7x04","38.8607","38.8700x001","38.9300x702","39.2600x006","39.2600x007","39.3100x007","39.4900x004","39.5002","39.5005","39.5900x027","39.7900x020","39.7900x039","39.7900x809","39.9016","39.9300","39.9800x001","39.9801","40.1100x003","40.2400","40.2900x002","40.2900x017","40.2900x018","40.2906","40.2908","40.3x00x001","40.3x00x002","40.5200","40.5300","40.5400x001","40.5400x002","40.5400x003","40.5908","40.5909","40.5910","40.5912","40.9x00x003","40.9x00x004","40.9x00x006","40.9x00x007","40.9x00x008","40.9x00x009","40.9x00x010","40.9x00x011","40.9x00x012","40.9x00x013","40.9x00x014","40.9x00x015","40.9x00x016","40.9x09","52.8400","52.8500","54.0x00x002","54.0x00x004","54.0x00x006","54.0x00x010","54.0x00x013","54.0x00x018","54.0x00x021","54.0x00x022","54.0x00x023","54.0x00x024","54.0x00x025","54.0x01","54.0x02","54.0x03","54.1100","54.1101","54.1201","54.1202","54.1900x001","54.1900x005","54.1900x010","54.1900x011","54.1901","54.1902","54.1903","54.1904","54.1907","54.1909","54.2100","54.3x00x004","54.3x00x010","54.3x00x011","54.3x00x027","54.3x01","54.3x02","54.3x03","54.3x05","54.4x00x012","54.4x00x021","54.4x00x035","54.4x00x039","54.4x00x042","54.4x00x048","54.4x00x050","54.4x01","54.4x02","54.4x03","54.4x04","54.4x05","54.4x07","54.4x08","54.4x09","54.4x10","54.4x11","54.4x12","54.4x13","54.4x14","54.4x15","54.5100","54.5100x005","54.5100x009","54.5101","54.5102","54.5103","54.5900x007","54.5901","54.5902","54.5903","54.5904","54.5905","54.5906","54.6101","54.6301","54.6400","54.6401","54.7100","54.7200x001","54.7300x001","54.7400x001","54.7400x002","54.7400x003","54.7400x004","54.7400x005","54.7400x006","54.7404","54.7500x002","54.7501","54.9100x009","54.9201","54.9300x001","54.9500","54.9500x004","54.9501","54.9502","54.9900x010","54.9900x011","54.9900x017","54.9904","55.9300x001","55.9400","55.9500","55.9601","56.5101","57.1101","57.1200","57.1700x001","57.1701","57.1800x001","57.1901","57.1902","57.1903","57.1904","57.1905","57.2100","57.2200","57.3400x002","57.5100","57.5100x001","57.5100x003","57.5101","57.5102","57.5900x001","57.5901","57.5902","57.5903","57.5904","57.5905","57.5906","57.8100","57.8200","57.8301","57.8302","57.8303","57.8304","57.8305","57.8400x004","57.8400x005","57.8401","57.8402","57.8403","57.8404","57.8405","57.8801","57.8900x001","57.8900x003","57.8900x004","57.8901","57.8902","57.8903","57.8904","57.8905","57.9300x001","57.9600","57.9700","57.9800","57.9900x001","57.9900x002","59.1100x001","59.1200","59.1901","59.1902","59.2102","59.7101","59.7200","59.7902","59.8x01","59.8x02","59.9300","59.9400","59.9900x002","59.9901","59.9902","64.0x00","75.6101","75.6102","86.2200x011","86.2800x012","97.6101","97.6102","97.6201","97.6202","97.6203","97.6901","97.6902","98.1800x001","98.1900x001"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
        
        if (drg.LJ11_group(record)){
            return 'LJ11';
        }

        if (drg.LJ13_group(record)){
            return 'LJ13';
        }

        if (drg.LJ15_group(record)){
            return 'LJ15';
        }

        return 'LJ1';
    }else{
        return '';
    }
}
  