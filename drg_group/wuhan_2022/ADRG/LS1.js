import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LS1_group(record){
    let adrg_zd=["B01.800x002+N08.0*","B18.103+N08.0*","B18.205+N08.0*","B18.904+N08.0*","B52.000","B52.000x002+N08.0*","B52.001+N08.0*","C90.005+N08.1*","D89.101+N08.2*","E66.902+N08.4*","E85.002","E85.411+N29.8*","I12.900x006","I12.900x008","I12.900x009","I12.904","I13.100x001","I13.200x001","M10.001+N16.8*","M31.002+N08.5*","M31.003+N08.5*","M31.102+N08.5*","M31.305+N08.5*","M31.701+N08.5*","M31.703+N08.5*","M32.101+N08.5*","M32.102+N16.4*","M35.006+N16.4*","M35.007+N16.4*","N00.000","N00.100x001","N00.200","N00.301","N00.400","N00.500","N00.600","N00.700","N00.800x001","N00.801","N00.802","N00.900","N00.900x002","N00.900x006","N00.900x008","N00.900x009","N00.901","N00.902","N01.000","N01.100x002","N01.200x001","N01.300x001","N01.400x001","N01.500x001","N01.600x001","N01.700x001","N01.800","N01.900","N01.900x001","N01.900x002","N01.900x003","N02.001","N02.002","N02.101","N02.102","N02.201","N02.203","N02.301","N02.302","N02.401","N02.502","N02.701","N02.702","N02.801","N02.802","N03.000","N03.100","N03.200x001","N03.300x001","N03.400","N03.500x003","N03.501","N03.502","N03.503","N03.601","N03.700","N03.800x001","N03.800x003","N03.800x004","N03.801","N03.900","N03.900x002","N03.900x003","N03.900x004","N03.900x005","N03.900x006","N03.900x007","N03.901","N04.001","N04.101","N04.102","N04.200x001","N04.300x001","N04.300x003","N04.400x001","N04.501","N04.502","N04.601","N04.700","N04.800x002","N04.801","N04.900","N04.901","N04.902","N04.903","N05.000x001","N05.000x003","N05.000x004","N05.101","N05.201","N05.301","N05.400","N05.501","N05.600","N05.701","N05.801","N05.802","N05.803","N05.900","N05.900x002","N05.900x003","N05.900x006","N05.900x007","N05.900x009","N06.001","N06.100","N06.200","N06.300","N06.400","N06.500","N06.700","N07.000","N07.100","N07.200","N07.300","N07.400","N07.500","N07.600","N07.700","N07.800","N07.900x001","N10.x00","N11.800x002","N11.800x003","N11.900","N11.901","N12.x00","N12.x01","N12.x03","N13.801","N14.000","N14.101","N14.102","N14.201","N14.301","N15.000","N17.002","N18.100","N18.200","N18.300","N18.900x011","N18.901","N25.100","N25.800x006","N25.802","N25.803","N25.804","N25.806","N25.900","N26.x00","N26.x01","N26.x02","N28.800x001","N28.817","N28.900x004","N28.900x013","N28.900x026","N28.901","Q61.200","Q61.400","Q61.401","Q61.402","Q61.403","Q61.404","Q61.500","Q63.000","Q63.102","Q63.201","Q63.203","Q63.900","Q87.800x903"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合LS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LS11_group(record)){
            return 'LS11';
        }        if (drg.LS13_group(record)){
            return 'LS13';
        }        if (drg.LS15_group(record)){
            return 'LS15';
        }
        return 'LS1';
    }else{
        return '';
    }
}
  