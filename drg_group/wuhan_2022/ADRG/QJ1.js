import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["16.9200","16.9300x003","18.2101","18.2900x009","18.2902","18.2903","18.2904","18.2905","18.3901","20.5100x002","21.3101","21.3102","21.3103","21.3104","21.3105","21.3106","21.3107","21.3108","21.3109","21.3201","21.4x00","26.2901","26.2902","26.2903","26.2904","26.2906","26.3000","26.3100x008","26.3100x009","26.3101","26.3102","26.3103","26.3104","26.3105","26.3201","26.3202","26.3203","27.4200","27.4301","27.4302","27.4900x007","27.4902","27.4903","27.4905","27.4906","27.4907","27.4908","27.4909","27.4910","27.9900x005","27.9901","27.9902","28.9200x002","28.9201","28.9202","29.3900x001","29.3900x007","29.3900x017","29.3902","32.3001","32.3902","34.4x01","34.4x03","34.5901","40.2900x030","40.2900x031","40.5900x021","41.9900x003","45.4200x003","54.3x01","54.3x02","54.3x03","54.3x04","54.3x05","54.3x06","54.3x07","54.4x00x012","54.4x00x021","54.4x00x035","54.4x01","54.4x02","54.4x07","54.4x11","54.4x12","54.4x13","54.4x14","54.4x15","54.4x16","54.9900x011","54.9904","66.5102","67.3903","67.3904","68.2906","68.2907","68.2912","68.2917","68.2918","68.3104","70.3200x002","70.3201","71.3x00x001","71.3x00x011","71.3x01","71.3x04","85.2100x003","85.2100x019"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合QJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCQ_DRG();
                
        if (drg.QJ19_group(record)){
            return 'QJ19';
        }
        return 'QJ1';
    }else{
        return '';
    }
}
  