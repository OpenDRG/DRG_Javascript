import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IT2_group(record){
    let adrg_zd=["A18.000x002+M90.0*","A18.000x003+M90.0*","A18.000x004+H75.0*","A18.000x006+M90.0*","A18.000x015+M01.1*","A18.000x034+M90.0*","A18.000x035+M90.0*","A18.000x042+M90.0*","A18.000x057+M49.0*","A18.000x058+M68.0*","A18.000x060+M90.0*","A18.000x062+M68.0*","A18.001+M90.0*","A18.003+M90.0*","A18.004+M90.0*","A18.014+M90.0*","A18.015+M90.0*","A18.016+M90.0*","A18.017+M90.0*","A18.018+M90.0*","A18.019+M90.0*","A18.020+M90.0*","A18.021+M90.0*","A18.022+M90.0*","A18.023+M90.0*","A18.024+M90.0*","A18.025+M90.0*","A18.026+M90.0*","A18.041+M68.0*","A18.042+M68.0*","A18.800x010+M63.0*","A18.800x022+M63.0*","A18.800x027+M63.0*","A18.800x028+M63.0*","A18.810+M63.0*","A18.819+M36.8*","A51.400x002+M90.1*","A51.400x007+M63.0*","A52.700x008+M68.0*","A52.700x009+M68.0*","A52.700x010+M63.0*","A52.707+M90.2*","A54.402+M73.0*","A54.404+M68.0*","A54.405+M68.0*","A66.600","B45.300","B58.800x002+M63.1*","B67.200x001+M90.2*","B67.600x003","B69.800x003","B69.803","B69.804","B89.x00x002+G73.4*","B99.x00x004+G73.4*","D18.000x846","D18.000x860","D18.000x861","D18.009","D48.900x013+M63.8*","D48.904+M36.0*","D86.803+M63.3*","E23.000x001+G73.5*","E85.000","E85.001","E85.900","E85.900x003","I00.x00x004","I00.x00x005","I00.x01","I02.900x001","I02.900x003","K50.902+M07.4*","K51.904+M07.5*","K52.913+M07.6*","L40.501+M07.3*","L87.100","M00.800","M02.300","M02.800","M05.000","M05.303+G73.7*","M05.308","M05.800","M05.900","M05.900x093","M06.000","M06.001","M06.002","M06.003","M06.100","M06.200","M06.300","M06.800","M06.800x051","M06.800x071","M06.900","M06.901","M06.902","M06.903","M06.904","M06.906","M06.907","M06.908","M06.909","M08.000","M08.001","M08.002","M08.100","M08.100x092","M08.200","M08.201","M08.300","M08.300x001","M08.301","M08.400","M08.800x091","M08.900","M10.400","M11.800x093","M11.801","M11.802","M12.300","M23.601","M30.000","M30.001+G73.7*","M30.002+G63.5*","M30.003+G63.5*","M30.004","M30.100x001","M30.101","M30.200","M30.300","M30.301","M30.801","M31.000","M31.000x002","M31.001","M31.100","M31.101","M31.300","M31.500","M31.700","M31.702+G63.5*","M31.801","M31.802","M31.803","M31.900x001","M32.000","M32.115+K67.8*","M32.800","M32.900","M32.901","M33.000","M33.001+J99.1*","M33.100x001","M33.100x004","M33.101","M33.104","M33.105","M33.200","M33.900","M33.901+J99.1*","M34.800x002+G73.7*","M34.802","M34.804+G73.7*","M34.805","M34.900","M34.900x001","M35.000","M35.001","M35.004+G73.7*","M35.101","M35.102","M35.200","M35.201","M35.203","M35.300","M35.400","M35.500","M35.700","M35.701","M35.800x001","M35.801","M35.900x007","M35.901","M35.902","M35.903+G63.5*","M35.905","M35.906","M35.907","M45.x00","M45.x01","M45.x02","M45.x03+H22.1*","M60.900","M60.901","M60.902","M60.903","M79.810","Q79.800x007","Q79.801","Q79.803","Z51.800x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合IT2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IT21_group(record)){
            return 'IT21';
        }

        if (drg.IT23_group(record)){
            return 'IT23';
        }

        if (drg.IT25_group(record)){
            return 'IT25';
        }

        if (drg.IT27_group(record)){
            return 'IT27';
        }

        return 'IT2';
    }else{
        return '';
    }
}
  