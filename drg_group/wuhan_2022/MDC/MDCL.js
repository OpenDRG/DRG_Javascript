import {putMessage,intersect,SS_VALID} from '../Base.js'
import LA1_group from '../ADRG/LA1.js';
import LB1_group from '../ADRG/LB1.js';
import LC1_group from '../ADRG/LC1.js';
import LD1_group from '../ADRG/LD1.js';
import LE1_group from '../ADRG/LE1.js';
import LF1_group from '../ADRG/LF1.js';
import LJ1_group from '../ADRG/LJ1.js';
import LK1_group from '../ADRG/LK1.js';
import LL1_group from '../ADRG/LL1.js';
import LR1_group from '../ADRG/LR1.js';
import LS1_group from '../ADRG/LS1.js';
import LT1_group from '../ADRG/LT1.js';
import LU1_group from '../ADRG/LU1.js';
import LV1_group from '../ADRG/LV1.js';
import LW1_group from '../ADRG/LW1.js';
import LX1_group from '../ADRG/LX1.js';
import LY1_group from '../ADRG/LY1.js';
import LZ1_group from '../ADRG/LZ1.js';

export default function MDCL_group(record){
    let mdc_zd=["B65.001","N02.002","N04.502","Q63.801","E72.006+N29.8*","B52.000x002+N08.0*","N28.815","N39.404","R33.x00","E14.200x025+N08.3*","B65.905+N08.0*","C79.101","N07.400","N32.809","N32.808","B52.000","C67.300","N17.101","Q27.305","A18.105+N29.1*","Q42.200x201","S37.200x081","E11.200x014+N08.3*","T19.000","N19.x01","C65.x02","N99.000","C68.800x003","N36.002","Q61.402","N13.604","N36.001","N36.802","E13.201+N08.3*","N99.001","R80.x00","N07.700","Q62.300x902","C68.800","N11.900x001","N17.100","N04.001","D41.200x001","N05.600","N21.100","N14.400","B87.800x001","N13.501","N20.000","N34.001","Q63.201","B52.001+N08.0*","N15.901","N13.901","Z46.800x001","Q63.000","S37.211","T83.100x001","N04.400x001","N32.900x002","R82.902","A56.000x003","Q62.600","T86.102","N02.203","N05.301","I70.102","E10.200x092+N08.3*","N36.809","N04.300x001","T79.500x002","N32.800x008","N13.506","N39.100","N31.100x001","Z46.603","E11.200x026+N08.3*","N28.800x001","M31.305+N08.5*","N36.301","Q63.900","I13.100x001","E14.200x021+N08.3*","N36.000x007","Q62.300x905","Q61.400","Q64.100","N05.802","N28.900x004","N34.102","N07.100","N03.503","R39.200","E14.200x091+N08.3*","N30.201","S37.300x004","E14.200x030+N08.3*","R82.500x006","N18.400x001+D63.8*","N99.100x005","N04.200x001","Z46.600x001","Q63.002","N23.x00","N03.000","Q64.401","B37.401+N37.0*","N03.900x006","N17.200x003","T83.800","N10.x00","A52.709+N08.0*","N14.101","N05.900x006","M31.003+N08.5*","N32.803","S37.200x022","S37.301","D09.104","N02.401","N39.001","N02.802","I82.302","N12.x01","N15.000","A18.103+N29.1*","A18.106+N29.1*","C67.900x002","S37.200x023","N30.810","B01.800x002+N08.0*","Q52.901","A18.100x022+N37.8*","Q64.700x201","N01.900x003","D09.100x001","N02.102","D30.200","N25.900","Q54.900","E14.200x028+N08.3*","T86.104","N06.200","N28.901","S37.111","E11.200x013+N08.3*","Q62.400x001","N28.826","Q61.900","N15.900x003","N17.900","I12.904","N36.808","A06.800x001","R39.100x002","N32.901","N30.400","E14.400x381+N33.8*","N18.501","E12.200","B49.x18","S37.100","S37.200x011","N27.000","N06.600","N01.100x002","N34.200x004","Q62.800","R39.801","N20.000x003","N99.500","N35.800","N01.500x001","T19.900","N39.000","N04.800x002","N25.802","N21.900","N14.102","N02.201","E11.200x215+N08.3*","N21.000","N32.800x009","N36.000","E11.200x029+N08.3*","N34.203","R82.500x005","Q62.100x902","N00.900x009","E11.400x381+N33.8*","N32.102","N35.000x001","A59.001+N37.0*","B37.400x001+N37.0*","Q61.300","T83.102","Q64.700x902","N02.801","Q60.100","T19.100","C65.x00","N28.814","C68.804","N03.700","N31.203","D41.001","N32.300","E85.411+N29.8*","N28.005","N17.900x003","Q64.707","Q62.700x201","E14.200x017+N08.3*","N20.200x001","R39.101","T83.100x004","N32.806","N28.830","N12.x02","N25.803","N28.808","S37.002","T19.800x001","N32.301","N13.300x005","N99.100x003","N03.500x003","T83.001","I12.900x005","N99.806","N39.402","R93.400x003","Q63.102","E14.200x031+N29.8*","C76.301","E14.200x215+N08.3*","N05.900x002","Q54.000","N02.900x001","N03.900x003","Q61.801","Z49.000x002","N06.300","E11.200x211+N08.3*","C67.800","E10.200x215+N08.3*","C68.100","E14.200x027+N08.3*","N30.803","N20.000x001","N39.300","N28.828","Q54.400","Q62.100","N07.500","Q62.400x002","N36.100","E14.200x013+N08.3*","Q61.901","N00.902","N06.400","C95.900x017+N16.1*","N04.902","N28.825","N31.800","E14.200x026+N08.3*","N01.900","S37.201","N39.200","E11.200x017+N08.3*","E83.100x008+N16.3*","Q60.501","A56.001","A36.800x005+N33.8*","I72.200x003","N28.832","N32.807","N03.900x007","S37.302","N28.827","N02.001","N07.800","E66.902+N08.4*","N34.000x005","T83.501","T86.105","Z49.000x004","N32.800x019","Q64.705","N00.900x008","S37.300x081","N13.504","N32.810","N02.301","D30.400","N13.502","N28.004","R35.x00x001","S37.011","I82.300x001","Q64.706","R94.400","N28.835","S37.300","R36.x01","M10.005+N22.8*","N34.205","E11.200x028+N08.3*","I12.900x006","C66.x00","N13.000","N06.800","N20.000x002","Q51.701","A18.107+N29.1*","R82.500x003","Q62.104","R80.x00x003","C67.000","N18.506+I32.8*","Q85.903","D09.103","N07.900x001","N32.001","N20.002","E11.200x027+N08.3*","N32.801","E10.200x025+N08.3*","N02.701","N36.302","T86.100x008","R82.900x002","A56.200","N00.900","I12.900x002","N32.000","N30.809","R82.300","A18.100x025+N29.1*","N18.200","N07.000","S37.300x082","N00.200","N17.200x002","N32.203","Z45.800x007","E10.200x030+N08.3*","N99.100","M35.007+N16.4*","B26.805+N08.0*","N28.817","N12.x03","N30.804","T86.811","R94.402","E11.200x023+N08.3*","N03.501","N04.101","N25.001","N28.900x017","N35.100x001","N28.100","N32.800x003","Q64.200","N13.600x004","N01.900x001","A18.108+N33.0*","K66.201","N32.201","N07.600","R39.000","N13.503","C48.001","N28.810","A52.700x012+N08.0*","N34.200x006","N10.x01","R32.x01","Q62.300x903","C68.802","Q61.403","S37.200x024","E14.200x015+N08.3*","E85.403","N32.804","Q63.001","N03.400","N00.100x001","D30.900","N17.900x002","N13.203","Q62.300x901","E10.200x017+N08.3*","N02.800x003","C79.102","E10.200x023+N08.3*","C90.004+N16.1*","M31.002+N08.5*","D41.201","N36.805","Q85.900x013","R93.403","N28.838","N13.302","D18.000x806","N32.104","Q60.200","N00.900x006","S37.001","N13.201","Z49.000","N01.300x001","E14.200x016+N08.3*","N17.001","N01.200x001","N28.101","C67.600","E11.200x031+N29.8*","Q54.300","N06.500","N34.204","Z52.400","N05.000x001","T86.100x001","C66.x00x003","E11.400x380+G99.0*","N07.300","Q62.301","T83.100","Q63.302","N03.901","N28.822","Q64.700x904","E14.200x014+N08.3*","E11.200x212+N08.3*","N28.837","T83.002","Z46.800x002","N13.701","N11.100","T81.800x011","N15.900x004","C64.x00x004","I13.200x001","E11.200x016+N08.3*","Q64.400x902","R82.800","Q63.301","A54.100x002","Q54.100","I70.100x002","N17.901","N03.900","N28.805","C64.x00x001","Q63.103","N13.603","C67.501","C79.103","E10.200x015+N08.3*","E14.200x023+N08.3*","N18.300x001+D63.8*","N20.100","N17.000","N36.901","C67.100","N28.003","T86.103","N01.900x002","N30.805","N28.819","N31.201","D30.100","R34.x01","N00.802","T83.103","N35.900","T86.100x003","N30.802","M32.101+N08.5*","N39.800x001","R82.900x003","N04.801","N28.836","S37.000x022","N32.802","N28.831","N31.200x002","N03.900x002","N32.103","C95.900x007+N16.1*","D30.300","N36.807","S37.000x015","Q60.000","D41.101","S37.000x016","B58.801+N16.0*","N19.x03","N02.900","N31.200x006","N39.300x002","R30.100","B26.800x008+N08.0*","N34.202","N02.702","E10.200x029+N08.3*","N99.800x011","N28.833","N04.102","N30.900","Q61.800","N13.100x001","N18.300","Q64.704","Z49.101","C79.000x001","N05.000x004","M31.701+N08.5*","M31.703+N08.5*","N13.801","A02.205+N16.0*","N36.005","N18.504+H32.8*","N01.600x001","N34.100","Q64.402","D41.301","I77.010","N17.200","R31.x00","Q64.900","S37.000x031","D41.401","N28.813","Q64.200x001","I72.200x001","R94.802","N39.405","E10.200x016+N08.3*","D39.902","N31.000x001","N13.600x002","N30.300","Q60.300","D30.701","N00.000","N36.003","R35.x00","N05.900x003","I12.900x003","N28.102","S37.300x011","C67.400","N31.901","N32.812","Z46.602","D09.101","S37.003","N03.502","N20.901","Q62.300x101","Q62.602","N32.800x014","E14.400x380+G99.0*","N01.800","Q54.001","Q54.200","N00.800x001","Q64.403","Q64.700x601","Z49.201","Q64.200x021","T86.100x007","N18.400","N03.900x004","N02.900x002","N06.100","N18.505+I68.8*","N32.800x012","N11.000x001","Q64.501","E10.200x091+N08.3*","N32.815","C66.x00x002","B18.205+N08.0*","N04.501","S37.814","N34.300","R82.500x007","D18.000x819","N03.900x005","N04.903","A27.900x005","N05.501","D41.300x001","N17.800","E10.200x212+N08.3*","N41.300","N13.605","N02.302","A18.104+N29.1*","A43.802","R93.400x002","N18.901","T83.101","E10.200x031+N29.8*","M35.006+N16.4*","R79.802","Q64.301","N26.x00","D21.506","N25.805","T86.100x006","N36.804","N18.503+G63.8*","Q61.200","N18.904","E14.200x029+N08.3*","A54.001","N28.900x010","R93.402","Q64.800x001","E11.200x091+N08.3*","N03.601","N25.806","N13.400","T81.800x014","T83.500x003","N99.803","N28.802","N28.829","E85.002","N01.700x001","N35.000","D30.302","I12.900x001","I82.301","Q61.000","N15.102","T86.100x002","N28.001","T83.500","B65.000x001","R93.401","I72.201","N11.901","N28.812","Q62.200","N13.600x001","N28.834","Q62.300x904","A18.101","C67.500","C67.200","C68.801","B18.103+N08.0*","N02.502","I12.902","N04.601","Q61.500","D30.301","E14.200x213+N08.3*","R82.700","R94.803","T83.004","E11.200x015+N08.3*","Q62.202","Q62.700","A36.804+N16.0*","N00.500","N25.100","N03.100","N32.202","N25.004","Q62.103","N00.901","S37.200","Q63.203","Q62.201","N26.x02","E10.200x214+N08.3*","N03.800x001","N28.002","N11.900x003","Q64.302","C79.100x002","N32.814","Q64.700x801","N15.900x002","B90.102+N29.1*","Q64.502","N35.901","N20.900x001","N05.900x007","N39.403","N39.401","S37.000x013","N32.204","Q60.400x001","N10.x02","N03.801","E10.200x211+N08.3*","N13.202","S37.303","Q64.700x901","R35.x00x003","E10.200x026+N08.3*","Q54.901","I12.900x008","B65.002+N22.0*","E14.200x214+N08.3*","Q62.300x301","R80.x02","N00.900x002","Q64.304","N06.001","S37.300x005","M10.001+N16.8*","E14.200x092+N08.3*","T83.802","N06.700","N00.400","Q64.100x091","N36.004","R80.x01","N18.902","N28.816","D41.400x004","E11.200x092+N08.3*","N30.801","R82.600x001","Q87.808","N27.100","N05.900x009","N99.808","Q63.800x902","C67.700","N32.813","N13.301","R30.000x002","S37.010","D17.700x016","N11.800x003","N14.000","N13.600","N31.200x001","N32.400","E10.200x024+N08.3*","Q61.100","E14.200x012+N08.3*","E14.200x024+N08.3*","D41.400x001","N03.200x001","Q64.701","D18.000x811","E10.200x028+N08.3*","D89.101+N08.2*","N31.202","N34.200x003","R39.200x001","A54.002","N25.804","N36.200","D41.900x001","E11.200x030+N08.3*","D41.700","E10.200x014+N08.3*","N19.x00","N28.801","R82.901","N39.400","E11.200x012+N08.3*","S37.300x031","N11.900","Q63.800x101","Q64.700x701","Q62.000","E14.200x212+N08.3*","N30.808","Q62.700x101","T83.003","E12.400x002+N33.8*","N28.804","N36.201","I86.811","M32.102+N16.4*","N00.301","N99.101","T83.100x002","Z46.601","E14.200x011+N08.3*","N01.000","N28.824","R93.405","I70.101","S37.813","E10.200x027+N08.3*","N06.900","N05.201","S37.004","T83.800x001","Q60.400","E11.200x024+N08.3*","C68.803","N04.900","N14.301","R93.404","C90.005+N08.1*","N34.201","T83.200","T83.100x003","C68.805","D41.100x001","A23.903+N16.0*","Q62.400","N21.001","Q63.200","Q64.000","N13.602","D18.000x855","N02.101","N28.900x013","N30.902","R32.x00","N11.800x002","E11.201+N08.3*","N27.900","Q62.700x001","E10.201+N08.3*","Q64.702","N36.300","T86.100x005","N20.001","E10.200x213+N08.3*","N36.803","N30.806","R30.000","N32.811","N21.800","Q54.800","R39.100x001","C79.001","D39.903","S37.000x023","Q62.601","N30.100","N00.700","N07.200","N32.101","N03.800x003","S37.000","T83.000x001","Q62.101","N28.806","Q85.900x029","D09.102","N13.204","E11.200x213+N08.3*","N26.x01","N30.000","E10.200x011+N08.3*","T19.801","B83.800x008","N34.000","T79.500","C67.900","N12.x00","N00.600","N28.821","E10.200x013+N08.3*","N28.902","N99.800x006","T83.804","E14.200x211+N08.3*","R82.200","N17.002","Q64.303","E11.200x011+N08.3*","N11.801","N32.002","Q60.500","T86.106","N04.300x003","T83.801","Q60.600","Q64.708","N05.701","N28.839","N31.200x003","R34.x02","E72.007","N00.801","I86.201","I12.900x009","N18.100","N18.900x011","Q64.400x301","S37.101","T83.500x002","R82.500x004","N15.101","N25.800x006","R93.400x001","N28.818","N18.500x001+D63.8*","D09.000","N28.823","R82.000","N36.806","N03.800x004","N13.500x010","Q61.404","Q64.600","C65.x01","R94.401","N15.801","Q64.703","N30.807","Q62.500","Q63.101","N99.805","B78.902+N08.0*","N05.400","N28.809","N34.101","N13.601","N34.002","N05.801","R30.100x001","N05.000x003","N05.900","N19.x02","A59.000","Q87.800x903","S37.300x083","N28.807","N32.100","N32.805","C64.x00x003","N01.400x001","S37.310","D41.901","N05.101","N17.900x004","N30.800x004","R30.900x001","N14.201","C68.900","D41.000x001","N20.900","N39.900","S37.000x032","I12.000x001","N02.600","N28.811","N28.820","N31.200x007","Q62.100x802","D30.000","N03.300x001","C68.000","N18.500","N32.200","A60.002","E11.200x025+N08.3*","S37.300x021","T86.107","I77.301","Q61.401","N28.900x026","B18.904+N08.0*","E10.200x012+N08.3*","N28.803","D36.700x025","N04.901","N04.700","M31.102+N08.5*","N30.901","N39.800","N11.802","E13.200x521+N08.3*","E11.200x214+N08.3*","S37.000x012","N05.803"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCL入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=LA1_group(record)){
        return result;
    }

    if (result=LB1_group(record)){
        return result;
    }

    if (result=LC1_group(record)){
        return result;
    }

    if (result=LD1_group(record)){
        return result;
    }

    if (result=LE1_group(record)){
        return result;
    }

    if (result=LF1_group(record)){
        return result;
    }

    if (result=LJ1_group(record)){
        return result;
    }

    if (result=LK1_group(record)){
        return result;
    }

    if (result=LL1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合LQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'LQY';
    }

    if (result=LR1_group(record)){
        return result;
    }

    if (result=LS1_group(record)){
        return result;
    }

    if (result=LT1_group(record)){
        return result;
    }

    if (result=LU1_group(record)){
        return result;
    }

    if (result=LV1_group(record)){
        return result;
    }

    if (result=LW1_group(record)){
        return result;
    }

    if (result=LX1_group(record)){
        return result;
    }

    if (result=LY1_group(record)){
        return result;
    }

    if (result=LZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}