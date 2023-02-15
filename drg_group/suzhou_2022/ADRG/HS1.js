import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HS1_group(record){
    let adrg_zd=["B15.000","B15.001","B15.002","B15.003","B16.000","B16.000x001","B16.001","B16.200","B16.201","B16.202","B16.203","B16.204","B17.102","B17.103","B17.200x005","B17.204","B17.205","B17.800x001","B17.900x005","B17.900x006","B18.800x004","B18.803","B18.805","B19.000","B19.001","B19.002","B25.101+K77.0*","K70.400x002","K70.401","K70.402","K70.403","K71.100","K71.100x003","K71.100x005","K71.100x006","K71.100x007","K71.100x008","K71.101","K71.102","K71.103","K71.104","K72.000x004","K72.000x005","K72.000x013","K72.001","K72.002","K72.003","K72.005","K72.100","K72.900x001","K73.901","K76.700x001","T86.401"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合HS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
                
        if (drg.HS1A_group(record)){
            return 'HS1A';
        }        if (drg.HS15_group(record)){
            return 'HS15';
        }
        return 'HS1';
    }else{
        return '';
    }
}
  