import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KV1_group(record){
    let adrg_zd=["D81.300","D81.500","E16.803","E70.000","E70.000x002","E70.100x001","E70.100x004","E70.101","E70.102","E70.200","E70.201","E70.202","E70.203","E70.204","E70.205","E70.300","E70.300x003","E70.300x004","E70.300x005","E70.301","E70.800x001","E70.800x002","E70.800x003","E70.900","E71.000","E71.100x003","E71.100x004","E71.100x005","E71.101","E71.102","E71.103","E71.200","E72.001","E72.002","E72.003","E72.004","E72.005","E72.100x003","E72.100x004","E72.100x005","E72.100x006","E72.100x007","E72.101","E72.102","E72.200x002","E72.200x004","E72.200x007","E72.200x008","E72.201","E72.202","E72.203","E72.204","E72.205","E72.300x001","E72.300x002","E72.301","E72.302","E72.303","E72.304","E72.305","E72.306","E72.400","E72.400x001","E72.400x002","E72.401","E72.402","E72.500","E72.500x001","E72.500x002","E72.500x003","E72.500x004","E72.500x005","E72.800x001","E72.800x002","E72.800x004","E72.800x005","E72.900x002","E72.900x004","E72.900x006","E72.901","E72.902","E74.000","E74.000x006","E74.000x007","E74.000x008","E74.000x009","E74.000x010","E74.000x011","E74.000x012","E74.000x013","E74.000x016+I43.1*","E74.001","E74.002","E74.003","E74.004","E74.005","E74.006+K77.8*","E74.007+G73.6*","E74.009","E74.100","E74.100x002","E74.100x004","E74.101","E74.200","E74.200x002","E74.201","E74.300x001","E74.300x002","E74.300x003","E74.400","E74.400x005","E74.401","E74.402","E74.403","E74.800x006","E74.800x007","E74.801","E74.802","E74.803","E74.804","E74.900x002","E74.901","E75.500x001","E75.501","E75.502","E75.503","E75.504","E75.505","E75.600x001","E76.000","E76.100","E76.200x001","E76.200x002","E76.200x003","E76.200x004","E76.200x006","E76.200x007","E76.200x008","E76.200x009","E76.200x010","E76.200x011","E76.200x012","E76.201","E76.300","E76.800","E76.900x001","E77.000","E77.000x002","E77.000x003","E77.100x002","E77.100x003","E77.100x004","E77.100x005","E77.100x006","E77.801","E77.900","E78.000","E78.000x003","E78.000x004","E78.000x005","E78.000x006","E78.000x007","E78.001","E78.002","E78.003","E78.100","E78.100x002","E78.100x003","E78.100x004","E78.100x005","E78.100x007","E78.100x008","E78.200","E78.200x008","E78.200x012","E78.201","E78.202","E78.204","E78.205","E78.206","E78.207","E78.208","E78.209","E78.210","E78.300x001","E78.300x002","E78.300x003","E78.300x004","E78.401","E78.402","E78.500","E78.500x001","E78.600","E78.600x001","E78.600x003","E78.600x006","E78.600x007","E78.600x008","E78.600x009","E78.600x010","E78.600x011","E78.602","E78.800x002","E78.801","E78.900","E78.901","E79.001","E79.100","E79.800x001","E79.900","E80.000","E80.000x004","E80.002","E80.100","E80.100x002","E80.200x001","E80.200x004","E80.200x005","E80.201","E80.202","E80.203","E80.300x001","E80.301","E80.302","E83.000","E83.000x005","E83.000x006","E83.001","E83.002","E83.100","E83.200","E83.200x002","E83.300x010","E83.300x014","E83.300x021+M90.8*","E83.301","E83.302","E83.303","E83.304","E83.305","E83.306","E83.307+M90.8*","E83.308+M90.8*","E83.309","E83.403","E83.500x001","E83.500x007","E83.500x008","E83.500x009","E83.500x011","E83.900","E88.000x002","E88.000x003","E88.001","E88.100x001","E88.100x002","E88.100x004","E88.100x005","E88.100x006","E88.101","E88.203","E88.300","E88.800x004","E88.800x005","E88.800x007","E88.800x008","E88.800x009","E88.800x013","E88.801","E88.802","E88.803","E88.804","E88.806","E88.807","E88.900x010","E88.901","E88.903","H02.600","Q87.100x904","Q93.300","R74.800x009"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合KV1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCK_DRG();
                
        if (drg.KV11_group(record)){
            return 'KV11';
        }        if (drg.KV1B_group(record)){
            return 'KV1B';
        }
        return 'KV1';
    }else{
        return '';
    }
}
  