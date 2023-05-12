import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LU1_group(record){
    let adrg_zd=["A02.205+N16.0*","A06.800x001","A18.100x022+N37.8*","A18.100x025+N29.1*","A18.101","A18.103+N29.1*","A18.104+N29.1*","A18.105+N29.1*","A18.106+N29.1*","A18.108+N33.0*","A36.800x005+N33.8*","A43.802","A52.700x012+N08.0*","A52.709+N08.0*","A54.001","A54.002","A54.100x002","A56.000x003","A56.001","A56.200","A59.000","A59.001+N37.0*","A60.002","B26.800x008+N08.0*","B26.805+N08.0*","B37.400x001+N37.0*","B37.401+N37.0*","B49.x18","B58.801+N16.0*","B65.000x001","B65.001","B65.002+N22.0*","B83.800x008","N10.x01","N10.x02","N11.000x001","N11.100","N11.801","N11.802","N11.900x001","N11.900x003","N12.x02","N13.600","N13.600x001","N13.600x002","N13.600x004","N13.601","N13.602","N13.603","N13.604","N13.605","N15.101","N15.102","N15.801","N15.900x002","N15.900x003","N15.900x004","N15.901","N28.801","N28.834","N28.836","N28.838","N28.839","N30.000","N30.201","N30.300","N30.801","N30.901","N34.000","N34.000x005","N34.001","N34.002","N34.100","N34.101","N34.102","N34.201","N34.202","N34.203","N34.204","N34.205","N34.300","N39.000","N39.001","T83.500x003","T83.501"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合LU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCL_DRG();
        
        if (drg.LU11_group(record)){
            return 'LU11';
        }

        if (drg.LU13_group(record)){
            return 'LU13';
        }

        if (drg.LU15_group(record)){
            return 'LU15';
        }

        return 'LU1';
    }else{
        return '';
    }
}
  