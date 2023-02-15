import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.8000","07.8001","07.8100","07.8101","07.8201","07.8300","07.8300x002","07.8400","07.8401","31.2900x001","31.3x02","31.3x03","31.4501","31.5x00x003","31.5x00x012","31.5x00x013","31.5x00x014","31.5x01","31.5x02","31.5x03","31.5x04","31.7201","31.7300x001","31.7301","31.7400x001","31.7500x002","31.7500x004","31.7503","31.7900x005","31.7901","31.7902","31.7903","32.1x00x004","32.1x01","32.1x02","32.1x03","32.1x04","32.2700x001","33.3100x001","33.3400","33.3401","33.3402","33.3403","33.4100","33.4100x002","33.4200x001","33.4201","34.1x03","34.1x04","34.3x02","34.3x04","34.3x05","34.4x01","34.4x02","34.4x03","34.5902","34.5904","34.7400x001","34.7400x005","34.7400x007","34.7400x008","34.7400x009","34.7400x010","34.7400x011","34.7401","34.7402","34.7403","34.7900x001","34.7900x003","34.7900x004","34.8101","34.8102","34.8301","34.8302","34.8303","34.8400x003","34.9301","37.3101","37.3102","37.3103","38.4500x001","38.4500x002","38.4500x003","38.4500x010","38.4500x011","38.4500x013","38.4500x014","38.4503","38.4506","38.4510","38.6500x001","38.8500x001","38.8500x012","38.8500x013","38.8502","39.2300x003","39.5400x001","39.5900x002","39.5900x015","39.5900x031","39.7900x014","40.5000","40.5200","40.6301","40.6400","40.6401","40.6900x002","40.6900x004","53.8000x001","53.8001","53.8002","96.0501","96.0502","96.5601"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合EC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCE_DRG();
                
        if (drg.EC11_group(record)){
            return 'EC11';
        }        if (drg.EC15_group(record)){
            return 'EC15';
        }
        return 'EC1';
    }else{
        return '';
    }
}
  