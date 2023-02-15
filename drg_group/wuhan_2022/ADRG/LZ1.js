import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LZ1_group(record){
    let adrg_zd=["A18.107+N29.1*","A23.903+N16.0*","A36.804+N16.0*","B65.905+N08.0*","B78.902+N08.0*","B87.800x001","B90.102+N29.1*","C90.004+N16.1*","C90.005+N08.1*","C95.900x007+N16.1*","C95.900x017+N16.1*","D17.700x016","D18.000x806","D18.000x811","D18.000x819","D36.700x025","D41.700","E11.400x381+N33.8*","E12.400x002+N33.8*","E14.400x381+N33.8*","E72.006+N29.8*","E83.100x008+N16.3*","E85.403","I12.902","I70.100x002","I70.101","I70.102","I72.200x001","I72.200x003","I72.201","I77.010","I77.301","I82.300x001","I82.301","I82.302","I86.201","I86.811","N13.300x005","N13.701","N14.400","N18.503+G63.8*","N18.504+H32.8*","N25.001","N25.004","N25.805","N27.000","N27.100","N27.900","N28.001","N28.002","N28.003","N28.004","N28.005","N28.100","N28.101","N28.102","N28.802","N28.803","N28.804","N28.805","N28.806","N28.807","N28.808","N28.809","N28.810","N28.811","N28.812","N28.813","N28.814","N28.815","N28.816","N28.818","N28.819","N28.820","N28.821","N28.822","N28.823","N28.824","N28.825","N28.826","N28.827","N28.828","N28.829","N28.830","N28.831","N28.832","N28.833","N28.835","N28.837","N28.900x010","N28.902","N30.100","N30.400","N30.800x004","N30.802","N30.803","N30.804","N30.805","N30.806","N30.807","N30.808","N30.809","N30.810","N30.900","N30.902","N31.000x001","N31.100x001","N31.200x001","N31.200x002","N31.200x003","N31.200x006","N31.200x007","N31.201","N31.201","N31.202","N31.203","N31.800","N31.901","N32.100","N32.101","N32.102","N32.103","N32.104","N32.200","N32.201","N32.202","N32.203","N32.204","N32.300","N32.301","N32.400","N32.800x003","N32.800x008","N32.800x009","N32.800x012","N32.800x014","N32.800x019","N32.801","N32.802","N32.803","N32.804","N32.805","N32.806","N32.807","N32.808","N32.809","N32.810","N32.811","N32.812","N32.813","N32.814","N32.815","N32.900x002","N32.901","N34.200x003","N34.200x004","N34.200x006","N36.000","N36.000x007","N36.001","N36.002","N36.003","N36.004","N36.005","N36.100","N36.200","N36.201","N36.300","N36.301","N36.302","N36.802","N36.803","N36.804","N36.805","N36.806","N36.807","N36.808","N36.809","N36.901","N39.800","N39.800x001","N39.900","N41.300","N99.500","N99.800x006","N99.800x011","N99.803","N99.808","Q27.305","Q42.200x201","Q51.701","Q52.901","Q54.000","Q54.001","Q54.100","Q54.200","Q54.300","Q54.400","Q54.800","Q54.900","Q54.901","Q60.000","Q60.100","Q60.200","Q60.300","Q60.400","Q60.400x001","Q60.500","Q60.501","Q60.600","Q61.000","Q61.100","Q61.300","Q61.800","Q61.801","Q61.900","Q61.901","Q62.200","Q62.201","Q62.202","Q62.300x101","Q62.300x301","Q62.300x901","Q62.301","Q62.400","Q62.400x001","Q62.400x002","Q62.500","Q62.600","Q62.601","Q62.602","Q62.700","Q62.700x001","Q62.700x101","Q62.700x201","Q62.800","Q63.001","Q63.002","Q63.101","Q63.103","Q63.200","Q63.301","Q63.302","Q63.800x101","Q63.800x902","Q63.801","Q64.000","Q64.100","Q64.100x091","Q64.200","Q64.200x001","Q64.200x021","Q64.301","Q64.302","Q64.303","Q64.304","Q64.400x301","Q64.400x902","Q64.401","Q64.402","Q64.403","Q64.501","Q64.502","Q64.600","Q64.700x201","Q64.700x601","Q64.700x701","Q64.700x801","Q64.700x901","Q64.700x902","Q64.700x904","Q64.701","Q64.702","Q64.703","Q64.704","Q64.705","Q64.706","Q64.707","Q64.708","Q64.800x001","Q64.900","Q87.808","R82.200","R93.403","R93.404","S37.000x032","T19.000","T19.100","T19.800x001","T19.801","T19.900","T81.800x011","T81.800x014","T83.000x001","T83.001","T83.002","T83.003","T83.004","T83.100","T83.100x001","T83.100x002","T83.100x003","T83.100x004","T83.101","T83.102","T83.103","T83.200","T83.500","T83.500x002","T86.100x001","T86.100x002","T86.103","T86.104","T86.105","T86.107","T86.811","Z45.800x007","Z46.600x001","Z46.601","Z46.602","Z46.603","Z46.800x001","Z46.800x002","Z49.000","Z49.000x002","Z49.000x004","Z49.101","Z49.201","Z52.400"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合LZ1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LZ11_group(record)){
            return 'LZ11';
        }        if (drg.LZ1B_group(record)){
            return 'LZ1B';
        }
        return 'LZ1';
    }else{
        return '';
    }
}
  