import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DV1_group(record){
    let adrg_zd=["B87.300","B87.300x002+J99.8*","B87.400x001+H94.8*","D10.000","D10.000x002","D10.000x003","D10.000x004","D10.000x005","D10.100","D10.101","D10.200","D10.200x002","D10.300x005","D10.300x007","D10.301","D10.302","D10.303","D10.305","D10.306","D10.307","D10.308","D10.309","D10.400","D10.401","D10.402","D10.500x001","D10.500x002","D10.501","D10.502","D10.503","D10.504","D10.600","D10.601","D10.602","D10.603","D10.700","D10.701","D10.900","D11.000","D11.701","D11.702","D11.900","D11.900x001","D14.000x005","D14.000x006","D14.000x007","D14.000x009","D14.000x010","D14.001","D14.002","D14.003","D14.004","D14.005","D14.006","D14.007","D14.008","D14.100","D14.100x002","D14.101","D14.102","D14.103","D16.400x013","D16.400x018","D16.400x019","D16.400x025","D16.401","D16.402","D16.403","D16.404","D16.405","D16.406","D16.407","D16.409","D16.410","D16.411","D16.500","D16.500x002","D17.000x003","D17.001","D17.002","D17.700x003","D17.700x006","D17.700x007","D17.700x020","D17.700x021","D17.700x032","D18.000x021","D18.000x501","D18.000x503","D18.000x504","D18.000x505","D18.000x506","D18.000x507","D18.000x508","D18.000x510","D18.000x511","D18.000x807","D18.000x808","D18.000x809","D18.000x823","D18.000x844","D18.000x845","D18.000x858","D18.001","D18.003","D18.004","D18.100x004","D18.100x007","D18.100x010","D18.100x011","D18.100x013","D18.100x021","D18.100x027","D18.101","D18.102","D21.000x002","D21.000x007","D21.000x008","D21.001","D21.002","D21.004","D21.005","D21.006","D21.007","D22.000","D22.200x002","D22.201","D22.301","D22.302","D22.400x002","D22.401","D23.000","D23.200x002","D23.200x003","D23.200x008","D23.201","D23.300x003","D23.300x004","D23.301","D23.303","D36.700x004","D36.700x005","D36.700x006","D36.700x007","D36.700x028","D36.701","D36.702","D36.703","D37.001","E85.400x005","E85.400x006","E85.401","E85.402","E85.409","H61.100x007","H61.104","H61.801","H61.802","H61.804","H61.806","H61.901","H83.900x001","H93.900x001","H93.901","J32.900x008","J32.900x009","J32.900x010","J32.900x011","J33.000","J33.000x002","J33.001","J33.002","J33.003","J33.800x002","J33.801","J33.802","J33.803","J33.804","J33.805","J33.900","J34.000x010","J34.100x008","J34.101","J34.102","J34.103","J34.104","J34.105","J34.106","J34.107","J34.108","J34.800x011","J34.800x012","J34.800x013","J34.800x014","J34.800x033","J34.800x034","J34.810","J35.100","J35.200","J35.300","J35.800x008","J35.800x009","J35.803","J35.805","J35.807","J35.809","J35.901","J38.101","J38.102","J38.200","J38.200x001","J38.200x002","J38.300x011","J38.300x015","J38.308","J38.310","J38.311","J38.312","J38.313","J38.700x001","J38.700x007","J38.700x027","J38.703","J38.705","J38.706","J38.708","J38.709","J38.710","J38.711","J38.712","J38.715","J38.717","J38.718","J38.721","J39.200x004","J39.200x016","J39.200x020","J39.203","J39.204","J39.206","J39.207","J39.217","J39.219","J39.225","K06.100","K06.100x001","K06.100x002","K06.100x003","K06.800x009","K06.801","K06.802","K06.803","K06.807","K06.809","K06.901","K09.000","K09.000x005","K09.000x007","K09.001","K09.002","K09.003","K09.004","K09.005","K09.100x001","K09.100x003","K09.100x004","K09.100x006","K09.102","K09.103","K09.200","K09.201","K09.202","K09.203","K09.204","K09.205","K09.800x005","K09.800x006","K09.801","K09.802","K09.803","K09.804","K09.805","K09.806","K09.807","K09.808","K09.809","K09.900x001","K10.100","K10.100x001","K10.100x003","K10.101","K10.102","K10.103","K10.800x005","K10.800x006","K10.800x008","K10.800x010","K10.800x011","K10.800x012","K10.801","K10.802","K10.805","K10.809","K10.901","K11.100x002","K11.100x004","K11.101","K11.102","K11.207","K11.208","K11.600","K11.600x005","K11.600x008","K11.601","K11.602","K11.603","K11.604","K11.605","K11.606","K11.804","K11.901","K11.902","K11.903","K12.105","K12.110","K12.116","K12.117","K13.006","K13.007","K13.009","K13.012","K13.200x004","K13.200x005","K13.200x006","K13.200x007","K13.200x008","K13.200x009","K13.200x010","K13.200x011","K13.201","K13.202","K13.203","K13.204","K13.205","K13.206","K13.207","K13.208","K13.209","K13.210","K13.300","K13.400","K13.400x001","K13.400x002","K13.400x004","K13.401","K13.402","K13.403","K13.500","K13.600","K13.600x001","K13.601","K13.602","K13.603","K13.700x001","K13.700x010","K13.700x019","K13.700x026","K13.702","K13.707","K13.710","K13.711","K14.800x012","K14.801","K14.805","K14.901","M85.000x081","M85.000x083","Q85.905","R59.900","R59.901"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合DV1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DV11_group(record)){
            return 'DV11';
        }

        if (drg.DV13_group(record)){
            return 'DV13';
        }

        if (drg.DV15_group(record)){
            return 'DV15';
        }

        return 'DV1';
    }else{
        return '';
    }
}
  