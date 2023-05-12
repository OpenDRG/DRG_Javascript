import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JS1_group(record){
    let adrg_zd=["A18.400x001","A18.400x010","A18.400x013","A18.400x014","A18.400x020","A18.400x021","A18.400x022","A18.401","A18.402","A18.403","A18.404","A18.405","A18.406","A18.407","A18.408","A18.409","A18.410","A18.411","A18.412","A36.300","B00.801+L99.8*","B00.804+L99.8*","B35.800x002","D18.000x812","D18.000x828","E10.600x021","E10.600x023","E10.600x024","E10.600x025","E10.600x026","E10.600x027+L99.8*","E10.600x028","E10.603+L99.8*","E11.600x021","E11.600x023","E11.600x024","E11.600x025","E11.600x026","E11.600x027+L99.8*","E11.600x028","E11.603+L99.8*","E14.600x021","E14.600x022","E14.600x023","E14.600x024","E14.600x025","E14.600x026","E14.600x027+L99.8*","E14.600x028","E16.300x003+L54.8*","E50.800x002+L86*","E50.801+L86*","E51.100x005+I98.8*","E83.201","L00.x00","L01.000x011","L01.000x012","L01.001","L01.002","L01.100","L02.300","L02.804","L02.903","L03.103","L03.104","L03.105","L03.106","L03.107","L03.108","L03.109","L03.200","L03.300","L03.301","L03.302","L03.303","L03.304","L03.305","L03.306","L03.800","L03.801","L03.802","L03.900","L05.901","L08.000x006","L08.000x007","L08.000x008","L08.000x009","L08.001","L08.002","L08.800x006","L08.800x008","L08.800x011","L08.801","L08.802","L08.804","L08.805","L08.900","L08.906","L08.907","L08.908","L08.911","L10.000","L10.100","L10.200","L10.300","L10.400","L10.500","L10.800","L10.800x001","L10.800x002","L10.801","L10.900","L11.900","L12.000","L12.100","L12.101","L12.102+H13.3*","L12.103+H13.3*","L12.200","L12.202","L12.300","L12.800","L12.900","L13.000","L13.000","L13.100","L13.101","L13.800","L13.900","L13.901","L23.500","L26.x00","L27.000x004","L27.000x006","L27.002","L27.900","L30.204","L30.804","L40.000","L40.001","L40.002","L40.003","L40.100","L40.101","L40.102","L40.103","L40.200","L40.300","L40.301","L40.400","L40.500","L40.801","L40.802","L40.900","L41.000","L41.000","L41.000x002","L41.100","L41.400","L43.100","L44.000","L51.000","L51.100","L51.200","L51.802","L51.900","L52.x00","L53.000","L53.200","L53.901","L58.101","L66.300","L73.200","L73.802","L81.401","L81.402","L83.x00","L88.x00","L89.000","L89.001","L89.002","L89.003","L89.004","L89.005","L89.006","L89.007","L89.008","L89.100","L89.101","L89.102","L89.103","L89.104","L89.105","L89.106","L89.107","L89.108","L89.200","L89.201","L89.202","L89.203","L89.204","L89.205","L89.206","L89.207","L89.208","L89.300","L89.301","L89.302","L89.303","L89.304","L89.305","L89.306","L89.307","L89.308","L89.900","L92.000","L92.801","L93.000","L93.001","L93.100","L93.200","L93.200x003","L93.201","L93.202","L94.000","L94.500","L95.000","L95.100","L95.800","L95.800x004","L95.801","L95.802","L95.900","L95.900x001","L95.901","L97.x00","L98.200","L98.400","L98.401","L98.502","L98.800x012","L98.800x013","L98.803","M31.000","M31.000x005","M34.000","M34.100","M34.200","M34.803","M54.001","M54.002","M54.003","M79.400","M79.401","M79.403","M79.404","M79.809","Q80.000","Q80.100","Q80.200","Q80.200x002","Q80.300","Q80.400","Q80.800","Q80.800x001","Q80.900","Q81.000","Q81.100","Q81.200","Q81.800","Q81.900","Q82.100","Q82.800x011","Q82.801","Q82.802","Q82.803","Q82.804","Q82.805","Q82.806","Q84.800x012","Q85.900x022","R21.x01","R60.900x003","R60.900x004"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合JS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JS11_group(record)){
            return 'JS11';
        }

        if (drg.JS1B_group(record)){
            return 'JS1B';
        }

        return 'JS1';
    }else{
        return '';
    }
}
  