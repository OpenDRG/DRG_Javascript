import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QS1_group(record){
    let adrg_zd=["D48.906+D63.0*","D50.000","D50.001","D50.100","D50.101","D50.102","D50.800x001","D50.801","D50.900","D50.901","D51.000","D51.001","D51.002","D51.003+G32.0*","D51.100","D51.101","D51.102","D51.200","D51.200x001","D51.300","D51.301","D51.302+G32.0*","D51.800","D51.900","D52.000x001","D52.000x003","D52.001","D52.100","D52.800","D52.900x001","D53.000","D53.001","D53.002","D53.100","D53.200","D53.801","D53.802","D53.803","D53.804","D53.900","D53.901","D59.301","D59.500","D74.000","D74.000x002","D74.000x003","D74.000x004","D74.800x001","D74.800x003","D74.801","D74.900","E83.101","R71.x00","R71.x00x004","R71.x00x005"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合QS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCQ_DRG();
        
        if (drg.QS19_group(record)){
            return 'QS19';
        }

        return 'QS1';
    }else{
        return '';
    }
}
  