import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GZ1_group(record){
    let adrg_zd=["A18.300x009+K93.0*","A18.300x013+K93.0*","A18.300x014+K93.0*","A18.300x015+K93.0*","A18.300x016","A18.302+K93.0*","A18.303+K93.0*","A18.304+K93.0*","A18.305+K93.0*","A18.306+K93.0*","A18.307+K93.0*","A18.308","A18.309","A18.310","A18.311+K93.0*","A18.312+K93.0*","A18.313+K93.0*","A18.314+K67.3*","A18.315+K93.0*","A18.316+K93.0*","A18.812+K93.8*","A52.710+K67.2*","A54.807+K67.1*","A74.801+K67.0*","B37.800x091","B46.200x001+K93.8*","B66.501","B77.000x001+K93.8*","B77.001+K93.8*","B82.000","B82.900","B82.901","B87.800x002+K93.8*","D12.000","D12.000x002","D12.001","D12.100","D12.200","D12.300","D12.301","D12.302","D12.400","D12.500","D12.600","D12.601","D12.602","D12.603","D12.700","D12.800","D12.900x001","D12.901","D13.000","D13.100","D13.101","D13.200","D13.301","D13.302","D13.303","D13.304","D13.900","D13.900x003","D13.902","D17.500","D17.500x001","D17.500x003","D17.500x004","D17.500x005","D17.500x007","D17.500x008","D17.500x009","D17.700x017","D17.700x022","D17.700x027","D17.701","D17.702","D18.000x040","D18.000x041","D18.000x042","D18.000x043","D18.000x045","D18.000x046","D18.000x801","D18.000x825","D18.000x838","D18.000x859","D18.012","D18.100x001","D18.106","D19.100","D20.000","D20.100","D20.101","D20.102","D36.700x014","D36.700x018","D36.700x019","D36.707","D36.708","D36.901","D37.100x001","D37.100x002","D37.100x003","D37.101","D37.102","D37.103","D37.200x001","D37.200x002","D37.200x003","D37.200x004","D37.201","D37.202","D37.203","D37.204","D37.205","D37.206","D37.207","D37.300x001","D37.301","D37.400x001","D37.400x002","D37.401","D37.402","D37.403","D37.404","D37.405","D37.406","D37.407","D37.408","D37.409","D37.410","D37.411","D37.500x001","D37.500x002","D37.501","D37.502","D37.503","D37.606","D37.607","D37.700x001","D37.700x002","D37.700x007","D37.701","D37.702","D37.707","D37.708","D37.709","D37.710","D37.900x001","D37.901","D48.117","D48.121","D48.129","D48.300x001","D48.301","D48.400x002","D48.400x003","D48.401","D48.402","D48.403","D48.700x004","D48.700x005","D48.713","D48.714","E10.400x330+G99.0*","E10.400x340+G99.0*","E10.400x350+G99.0*","E10.400x370+G99.0*","E11.400x330+G99.0*","E11.400x340+G99.0*","E11.400x350+G99.0*","E11.406+G99.0*","E14.400x330+G99.0*","E14.400x340+G99.0*","E14.400x350+G99.0*","E14.400x370+G99.0*","E16.400","E16.400x003","E16.401","E16.402","E73.000","E73.100","E73.800","E73.900","E85.417+K93.8*","I72.800x063","I72.800x131","I72.800x132","I72.800x142","I72.801","I72.802","I72.807","I72.815","I72.816","I74.800x011","I77.400","I78.802","I85.900x001","I85.901","I86.400","I86.400x001","I86.400x002","I86.400x004","I86.800x022","I88.000x003","I88.001","I88.105","I89.005","I89.006","I89.800x006","I89.800x019","I89.801","I89.803","J11.800x002","K21.900x003","K21.901","K21.902","K21.903","K22.000x001","K22.000x002","K22.204","K22.209","K22.300","K22.301","K22.400","K22.400x003","K22.401","K22.500","K22.600x001","K22.601","K22.700x001","K22.800x003","K22.800x011","K22.801","K22.802","K22.803","K22.805","K22.806","K22.807","K22.808","K22.809","K22.811","K22.812","K22.813","K22.814","K22.815","K22.900x001","K30.x00","K30.x00x001","K31.000","K31.300","K31.400","K31.600x004","K31.600x005","K31.601","K31.602","K31.603","K31.604","K31.605","K31.606","K31.607","K31.608","K31.609","K31.701","K31.702","K31.703","K31.800x801","K31.800x802","K31.800x806","K31.801","K31.802","K31.803","K31.804","K31.805","K31.806","K31.807","K31.809","K31.810","K31.811","K31.812","K31.813","K31.814","K31.815","K31.816","K31.818","K31.819","K31.820","K31.821","K31.901","K31.902","K31.903","K31.904","K31.905","K35.200","K35.201","K35.300","K35.301","K35.800x001","K36.x00x003","K36.x00x004","K36.x01","K36.x02","K37.x00","K37.x00x002","K38.000","K38.000x002","K38.100","K38.200","K38.300","K38.800x001","K38.800x003","K38.800x004","K38.801","K38.802","K38.900","K40.200x001","K40.201","K40.202","K40.203","K40.204","K40.300","K40.900x001","K40.900x002","K40.900x003","K40.900x004","K40.900x005","K40.900x006","K40.901","K40.902","K40.903","K40.904","K40.905","K40.906","K40.907","K41.200x001","K41.301","K41.900x001","K42.900","K42.901","K42.902","K43.500","K43.900","K43.900x001","K43.902","K44.900x001","K44.901","K45.801","K45.802","K45.805","K45.806","K45.807","K45.808","K46.900","K46.900x002","K46.900x003","K46.900x004","K46.900x012","K46.901","K46.902","K46.903","K46.905","K51.400","K52.919","K55.000","K55.000x005","K55.000x010","K55.000x011","K55.000x015","K55.001","K55.002","K55.003","K55.004","K55.005","K55.006","K55.007","K55.008","K55.009","K55.010","K55.011","K55.012","K55.013","K55.100","K55.100x001","K55.100x005","K55.100x006","K55.100x008","K55.101","K55.102","K55.103","K55.104","K55.105","K55.106","K55.200","K55.200x013","K55.201","K55.202","K55.300","K55.300x001","K55.800x004","K55.801","K55.900","K55.901","K55.902","K57.101","K57.400","K57.401","K57.500","K57.800","K57.800x001","K57.801","K57.900","K57.900x001","K59.000","K59.002","K59.003","K59.100","K59.101","K59.200","K59.200x002","K59.200x003","K59.301","K59.302","K59.303","K59.400","K59.400x002","K59.401","K59.800x002","K59.800x005","K59.801","K59.900x001","K59.900x002","K60.000","K60.100","K60.200","K60.300","K60.301","K60.302","K60.303","K60.400","K60.400x003","K60.401","K60.402","K60.403","K60.500","K61.000","K61.001","K61.002","K61.100","K61.101","K61.200","K61.300","K61.400","K62.000","K62.001","K62.100","K62.100x002","K62.200","K62.200x001","K62.201","K62.202","K62.300","K62.300x003","K62.301","K62.400x002","K62.400x003","K62.400x004","K62.401","K62.500x001","K62.501","K62.600x002","K62.601","K62.602","K62.700","K62.800x001","K62.800x005","K62.800x009","K62.800x010","K62.800x012","K62.800x017","K62.800x021","K62.801","K62.802","K62.803","K62.804","K62.805","K62.806","K62.807","K62.808","K62.809","K62.810","K62.811","K62.812","K62.813","K62.814","K62.815","K62.816","K62.817","K62.818","K62.819","K62.820","K62.821","K62.822","K62.901","K62.902","K62.903","K63.000","K63.001","K63.100x001","K63.101","K63.102","K63.107","K63.108","K63.200","K63.200x003","K63.200x008","K63.201","K63.202","K63.203","K63.204","K63.205","K63.206","K63.207","K63.208","K63.209","K63.210","K63.211","K63.212","K63.213","K63.214","K63.215","K63.216","K63.301","K63.308","K63.400","K63.401","K63.402","K63.403","K63.500","K63.500x002","K63.500x084","K63.501","K63.502","K63.503","K63.504","K63.801","K63.802","K63.803","K63.804","K63.805","K63.806","K63.807","K63.809","K63.810","K63.812","K63.813","K63.814","K63.815","K63.816","K63.817","K63.818","K63.819","K63.900x001","K63.900x002","K63.900x003","K63.900x005","K63.901","K63.902","K64.000","K64.100","K64.200","K64.300","K64.400","K64.401","K64.402","K64.500","K64.501","K64.801","K64.802","K64.803","K64.804","K64.805","K64.806","K64.807","K64.808","K64.809","K64.810","K64.811","K64.900","K64.901","K65.000","K65.000x014","K65.001","K65.002","K65.003","K65.004","K65.005","K65.006","K65.008","K65.009","K65.010","K65.011","K65.012","K65.013","K65.014","K65.015","K65.016","K65.017","K65.800x001","K65.800x002","K65.801","K65.802","K65.803","K65.804","K65.805","K65.806","K65.807","K65.900","K65.901","K65.902","K65.903","K65.904","K65.905","K65.906","K66.000","K66.000x007","K66.001","K66.002","K66.003","K66.004","K66.005","K66.006","K66.007","K66.008","K66.100","K66.101","K66.102","K66.103","K66.200","K66.201","K66.800","K66.800x008","K66.800x009","K66.801","K66.802","K66.803","K66.805","K66.806","K66.807","K66.808","K66.809","K66.810","K66.811","K66.812","K66.901","K90.000","K90.000x001","K90.001","K90.002","K90.100x001","K90.100x002","K90.100x003","K90.200","K90.200x001","K90.300x001","K90.400","K90.400x003","K90.401","K90.402","K90.403","K90.404","K90.405","K90.406","K90.801","K90.802+M14.8*","K90.900x002","K90.901","K91.000","K91.100","K91.100x001","K91.101","K91.102","K91.103","K91.200x002","K91.201","K91.202","K91.301","K91.302","K91.303","K91.305","K91.401","K91.402","K91.405","K91.406","K91.800x007","K91.800x116","K91.800x117","K91.800x206","K91.800x412","K91.800x601","K91.800x602","K91.800x702","K91.801","K91.802","K91.803","K91.804","K91.805","K91.808","K91.810","K91.811","K91.813","K91.814","K91.815","K91.816","K91.817","K91.818","K91.820","K91.821","K91.824","K91.828","K91.829","K91.830","K91.832","K91.833","K91.834","K91.835","K91.836","K91.837","K91.900","K92.901","M32.112+K93.8*","M32.115+K67.8*","M34.800x006+K23.8*","Q27.810","Q39.000x001","Q39.100","Q39.100x011","Q39.100x021","Q39.200x011","Q39.300","Q39.400","Q39.501","Q39.600","Q39.601","Q39.602","Q39.800x201","Q39.800x903","Q39.800x904","Q39.800x905","Q39.801","Q39.802","Q39.803","Q39.900","Q40.000","Q40.002","Q40.003","Q40.100","Q40.200x004","Q40.200x005","Q40.200x010","Q40.201","Q40.202","Q40.203","Q40.204","Q40.205","Q40.206","Q40.207","Q40.208","Q40.209","Q40.300","Q40.800","Q40.900","Q41.001","Q41.002","Q41.003","Q41.101","Q41.102","Q41.103","Q41.104","Q41.201","Q41.202","Q41.203","Q41.800","Q41.901","Q41.902","Q41.903","Q42.000x101","Q42.000x201","Q42.000x301","Q42.000x401","Q42.000x501","Q42.001","Q42.002","Q42.101","Q42.102","Q42.200x901","Q42.200x902","Q42.200x903","Q42.200x904","Q42.200x905","Q42.201","Q42.202","Q42.301","Q42.302","Q42.800x002","Q42.800x003","Q42.801","Q42.802","Q42.803","Q42.901","Q42.902","Q42.903","Q43.000","Q43.001","Q43.002","Q43.003","Q43.004","Q43.100","Q43.101","Q43.102","Q43.103","Q43.104","Q43.105","Q43.106","Q43.200","Q43.200x002","Q43.200x003","Q43.201","Q43.300x201","Q43.300x901","Q43.301","Q43.401","Q43.402","Q43.403","Q43.404","Q43.500","Q43.601","Q43.602","Q43.700","Q43.800x006","Q43.800x008","Q43.800x009","Q43.800x012","Q43.800x014","Q43.800x015","Q43.800x017","Q43.800x018","Q43.800x019","Q43.801","Q43.802","Q43.803","Q43.804","Q43.805","Q43.806","Q43.807","Q43.808","Q43.809","Q43.810","Q43.811","Q43.812","Q43.900","Q43.901","Q44.500x008","Q45.300x102","Q45.300x103","Q45.300x104","Q45.300x105","Q45.801","Q45.900","Q51.702","Q79.200","Q79.201","Q79.300","Q79.301","Q79.400","Q79.500","Q79.501","Q85.900x002","Q85.900x036","Q85.902","Q85.906","Q85.913","Q89.300","Q89.300x001","Q89.301","Q89.302","R10.102","R10.103","R12.x00","R12.x00x002","R14.x00x001","R14.x00x002","R14.x00x003","R14.x00x006","R14.x00x007","R15.x00","R19.000x005","R19.100","R19.100x001","R19.100x002","R19.200","R19.200x002","R19.300","R19.400","R19.500x002","R19.500x003","R19.500x004","R19.600","R19.800x001","R58.x01","R85.000","R85.100","R85.200","R85.300","R85.400","R85.500","R85.600","R85.700","R85.800","R93.300x001","R93.300x003","R93.300x004","R93.303","R93.500x001","S11.202","S30.102","S36.300","S36.301","S36.310","S36.400","S36.400x091","S36.400x093","S36.400x095","S36.401","S36.402","S36.403","S36.404","S36.405","S36.411","S36.412","S36.413","S36.414","S36.500","S36.500x011","S36.500x021","S36.500x031","S36.500x041","S36.500x091","S36.500x092","S36.500x093","S36.501","S36.511","S36.600","S36.600x003","S36.601","S36.611","S36.700","S36.701","S36.800x022","S36.801","S36.802","S36.803","S36.810","S36.811","S36.812","S36.813","S36.814","S36.900","S36.901","S36.910","S39.905","S39.909","T18.100","T18.200","T18.300","T18.300x003","T18.301","T18.400","T18.500x004","T18.501","T18.502","T18.801","T18.900","T28.100","T28.200x001","T28.200x002","T28.600","T28.700x002","T28.701","T28.702","T80.200x001","T98.300x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合GZ1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCG_DRG();
                
        if (drg.GZ11_group(record)){
            return 'GZ11';
        }        if (drg.GZ13_group(record)){
            return 'GZ13';
        }        if (drg.GZ15_group(record)){
            return 'GZ15';
        }
        return 'GZ1';
    }else{
        return '';
    }
}
  