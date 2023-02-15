import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["55.0400x005","55.0400x006","55.0400x007","55.0400x008","55.0400x009","55.0400x010","55.0401","55.0402","55.0403","55.0404","55.0405","56.0x03","56.0x04","56.0x06","56.0x07","56.0x08","57.0x00x002","57.0x00x007","57.0x00x008","57.0x00x009","57.0x00x010","57.0x00x011","57.0x00x012","57.0x00x013","57.0x05","57.0x06","57.0x07","57.0x08","59.9502","98.5101","98.5102","98.5103","98.5104"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LK1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LK11_group(record)){
            return 'LK11';
        }        if (drg.LK1B_group(record)){
            return 'LK1B';
        }
        return 'LK1';
    }else{
        return '';
    }
}
  