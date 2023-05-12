import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BU1_group(record){
    let adrg_zd=["C47.000x001","C47.000x002","C47.000x003","C47.100x001","C47.100x004","C47.100x005","C47.100x006","C47.100x007","C47.100x008","C47.100x009","C47.101","C47.102","C47.200x001","C47.200x004","C47.200x005","C47.200x006","C47.200x007","C47.200x008","C47.201","C47.202","C47.300","C47.300x002","C47.300x003","C47.300x004","C47.300x005","C47.400","C47.400x002","C47.500","C47.500x001","C47.500x002","C47.500x004","C47.500x005","C47.500x006","C47.500x007","C47.500x008","C47.500x009","C47.500x010","C47.500x012","C47.500x013","C47.500x014","C47.501","C47.600","C47.600x002","C47.600x003","C47.800","C47.900","C70.000","C70.000x002","C70.100x001","C70.100x003","C70.900","C70.901","C71.000","C71.000x001","C71.000x004","C71.000x006","C71.000x007","C71.001","C71.002","C71.003","C71.100","C71.200","C71.300","C71.400","C71.500","C71.500x003","C71.500x004","C71.501","C71.600","C71.601","C71.602","C71.700","C71.701","C71.702","C71.703","C71.704","C71.705","C71.800","C71.800x006","C71.800x007","C71.800x008","C71.801","C71.802","C71.803","C71.804","C71.805","C71.806","C71.807","C71.808","C71.809","C71.900","C71.900x001","C71.900x002","C71.900x005","C71.900x006","C71.900x007","C71.900x008","C71.901","C71.902","C71.903","C72.000","C72.000x006","C72.001","C72.002","C72.003","C72.004","C72.100","C72.200","C72.201","C72.300","C72.400","C72.500","C72.501","C72.502","C72.503","C72.504","C72.505","C72.506","C72.507","C72.508","C72.509","C72.510","C72.800","C72.800x001","C72.800x002","C72.800x003","C72.900","C72.900x004","C72.900x005","C72.900x006","C72.901","C75.200","C75.300","C79.300","C79.300x002","C79.300x006","C79.300x011","C79.300x012","C79.300x013","C79.300x016","C79.300x017","C79.300x018","C79.300x019","C79.300x020","C79.300x021","C79.300x023","C79.300x024","C79.300x025","C79.300x026","C79.300x027","C79.300x028","C79.300x029","C79.300x031","C79.300x032","C79.300x033","C79.300x034","C79.301","C79.302","C79.303","C79.304","C79.305","C79.306","C79.307","C79.308","C79.309","C79.310","C79.311","C79.400x012","C79.400x013","C79.400x018","C79.400x019","C79.400x020","C79.400x021","C79.400x022","C79.401","C79.402","C79.403","C79.404","C79.828","C80.000x002+G13.1*","C80.000x003+G13.1*","C80.004+G73.1*","D17.700x001","D17.700x004","D17.700x008","D17.700x009","D17.700x010","D17.700x011","D17.700x012","D17.700x013","D17.700x025","D17.700x026","D17.700x030","D18.100x008","D32.000","D32.000x002","D32.000x004","D32.000x008","D32.000x011","D32.000x014","D32.000x019","D32.000x020","D32.000x021","D32.000x024","D32.000x026","D32.000x028","D32.000x030","D32.000x031","D32.000x032","D32.000x036","D32.000x038","D32.000x039","D32.001","D32.002","D32.003","D32.004","D32.005","D32.006","D32.007","D32.008","D32.009","D32.010","D32.011","D32.012","D32.013","D32.014","D32.015","D32.016","D32.017","D32.018","D32.019","D32.020","D32.021","D32.022","D32.023","D32.100","D32.100x001","D32.101","D32.102","D32.103","D32.104","D32.105","D32.106","D32.900","D32.900x001","D32.900x002","D32.900x003","D33.000","D33.000x003","D33.000x004","D33.000x005","D33.001","D33.002","D33.003","D33.004","D33.005","D33.006","D33.007","D33.008","D33.009","D33.010","D33.011","D33.012","D33.100","D33.100x005","D33.101","D33.102","D33.103","D33.104","D33.105","D33.200","D33.200x001","D33.200x003","D33.201","D33.202","D33.300","D33.300x003","D33.300x005","D33.301","D33.302","D33.303","D33.304","D33.305","D33.306","D33.307","D33.308","D33.309","D33.310","D33.311","D33.312","D33.400","D33.401","D33.402","D33.403","D33.404","D33.405","D33.406","D33.700x001","D33.700x002","D33.700x003","D33.900","D33.900x001","D33.900x002","D33.900x003","D33.901","D33.902","D35.201","D35.300","D35.400","D35.500","D36.100x002","D36.100x005","D36.100x006","D36.100x007","D36.100x008","D36.100x009","D36.100x010","D36.100x011","D36.100x012","D36.100x014","D36.100x015","D36.100x016","D36.100x017","D36.100x023","D36.100x024","D36.100x025","D36.100x026","D36.100x027","D36.100x028","D36.100x029","D36.100x030","D36.100x032","D36.100x033","D36.100x036","D36.100x037","D36.100x039","D36.100x041","D36.100x042","D36.100x043","D36.100x044","D36.100x045","D36.100x047","D36.100x048","D36.100x050","D36.100x052","D36.100x053","D36.100x054","D36.100x056","D36.100x057","D36.100x058","D36.101","D36.102","D36.103","D36.104","D36.106","D36.107","D36.108","D36.109","D36.110","D36.111","D36.112","D36.113","D36.114","D36.115","D36.116","D42.000x001","D42.000x002","D42.001","D42.002","D42.003","D42.100x001","D42.100x002","D42.101","D42.900x001","D42.900x002","D42.901","D43.000x001","D43.000x002","D43.000x003","D43.000x004","D43.000x005","D43.000x006","D43.001","D43.002","D43.003","D43.004","D43.005","D43.006","D43.007","D43.008","D43.009","D43.010","D43.011","D43.012","D43.013","D43.100x001","D43.100x002","D43.100x003","D43.100x004","D43.101","D43.102","D43.103","D43.104","D43.105","D43.106","D43.107","D43.200x001","D43.200x002","D43.200x003","D43.200x004","D43.200x005","D43.201","D43.202","D43.300x001","D43.300x002","D43.300x003","D43.300x004","D43.300x005","D43.300x006","D43.300x007","D43.300x008","D43.300x009","D43.300x010","D43.300x011","D43.300x012","D43.300x013","D43.301","D43.400x001","D43.400x002","D43.401","D43.402","D43.403","D43.700","D43.900x001","D43.900x002","D43.900x003","D43.900x004","D43.901","D43.902","D43.903","D44.400x001","D44.401","D44.500x001","D44.500x003","D44.501","D48.100x023","D48.200x001","D48.200x011","D48.200x012","D48.200x013","D48.200x014","D48.200x015","D48.200x016","D48.200x017","D48.200x018","D48.200x019","D48.200x020","D48.200x022","D48.200x023","D48.200x024","D48.200x025","D48.200x026","D48.200x027","D48.200x028","D48.200x029","D48.200x030","D48.200x031","D48.200x032","D48.200x033","D48.200x034","D48.200x035","D48.200x036","D48.200x037","D48.200x038","D48.200x039","D48.200x040","D48.200x041","D48.200x042","D48.200x043","D48.200x044","D48.200x045","D48.200x046","D48.200x047","D48.200x048","D48.200x049","D48.200x051","D48.200x052","D48.200x053","D48.201","D48.202","D48.203","D48.204","D48.205","D48.206","D48.207","D48.208","D48.209","D48.210","D48.211","D48.212","D48.213","D48.214","D48.215","D48.216","D48.217","D48.218","D48.700x026","D48.700x027","D48.900x004+G94.1*","D48.900x010+G05.8*","D48.905+G13.1*","D48.907+G13.0*","Q85.900x041","Q85.900x042","Q85.900x043","R90.000","R90.806"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合BU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BU1A_group(record)){
            return 'BU1A';
        }

        if (drg.BU15_group(record)){
            return 'BU15';
        }

        return 'BU1';
    }else{
        return '';
    }
}
  