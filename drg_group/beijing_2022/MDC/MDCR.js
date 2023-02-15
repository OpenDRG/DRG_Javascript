import {putMessage,intersect,SS_VALID} from '../Base.js'
import RA1_group from '../ADRG/RA1.js';
import RA2_group from '../ADRG/RA2.js';
import RA3_group from '../ADRG/RA3.js';
import RA4_group from '../ADRG/RA4.js';
import RB1_group from '../ADRG/RB1.js';
import RB2_group from '../ADRG/RB2.js';
import RC1_group from '../ADRG/RC1.js';
import RC2_group from '../ADRG/RC2.js';
import RD1_group from '../ADRG/RD1.js';
import RE1_group from '../ADRG/RE1.js';
import RG1_group from '../ADRG/RG1.js';
import RR1_group from '../ADRG/RR1.js';
import RS1_group from '../ADRG/RS1.js';
import RS2_group from '../ADRG/RS2.js';
import RT1_group from '../ADRG/RT1.js';
import RT2_group from '../ADRG/RT2.js';
import RU1_group from '../ADRG/RU1.js';
import RW1_group from '../ADRG/RW1.js';
import RW2_group from '../ADRG/RW2.js';

export default function MDCR_group(record){
    let mdc_zd=["C91.000x012","C77.502","C91.400x004","C81.300","D46.500","C92.300x013","C92.002","C85.900x002","D36.700x012","Z51.800x925","C90.000x021","D09.700x001","C90.303","C92.701","C92.800","C81.700","D46.700x007","C88.202","D46.600","C92.000x017","Z51.003","C84.500","D48.902","D46.100x002","C45.900","D46.200","C96.400x004","Z51.809","C93.901","C77.900","C88.302","D36.704","C88.402","C83.100","Z51.000x003","Z51.800x097","C85.700","C82.700","C92.100x004","C77.401","C94.200x011","C95.700x002","C82.400","Z51.800x922","D47.200x005+G63.1*","Z51.500x003","C82.703","C88.400","C77.300x001","D48.725","C93.300x001","C91.900","C95.000x015","C94.700x004","D47.100x004","C90.000x041","C93.100","C80.001","C95.004","C83.002","C81.703","C82.903","C83.501","C90.002","C88.403","C83.500","D47.002","D48.700x015","C85.900x039","C95.700x001","C84.502","D47.100x017","D47.400","C77.205","C96.801","C90.000x011","C90.300","C95.900","C86.400","C91.004","C92.100x017","C83.800","C90.000x029","D46.700x002","C92.601","C90.000x031","C77.303","C85.900x022","C82.000","C90.100x002","C83.307","C91.401","C90.100x011","Z51.800x951","C95.900x012","Z51.800x952","C96.400x001","D48.901","Z51.800x094","C95.000x116","C92.000x003","C85.900x038","C85.704","Z51.800x924","C92.200x011","C86.602","C91.000x009","Z51.101","C90.301","C82.600","C85.900x027","C83.304","C85.900x030","C82.701","C94.600","C95.000x016","C91.007","C93.003","C82.500","C77.301","C90.000x038","C90.000x028","C86.000","C92.000x018","Z51.800x983","C85.900x020","D46.700x001","C84.405","C46.300","C85.900x008","C93.002","C85.900x016","C90.000x039","C95.900x003+M36.1*","C90.200x008","C76.305","D46.100x012","C82.702","C92.100x011","C77.300","Z54.001","D47.900","C83.300","C92.300x001","D47.701","C84.700","Z51.001","C77.900x001","C76.302","D46.700x006","C91.700","C91.300","C86.200","C90.000x005","C45.706","D36.700x023","C83.303","C85.900x009","C84.406","C92.501","C83.101","D47.404","D46.201x001","C79.800x837","C93.900","C92.000x013","C85.900x017","D36.700x028","C84.400","C88.900","C95.000x117","C83.003","C88.203","Z51.802","C95.000x018","C85.900","C95.900x015","C86.300","C85.900x025","C92.009","C76.200x002","C88.700x003","D46.203","Z08.100","C85.100x010","C85.900x019","C81.000","C83.800x006","C92.700x006","C93.001","C94.400","C79.900","C88.401","C95.006","C96.401","C85.900x001","C85.900x036","D47.100","D47.000","C80.903","Z08.900","C88.701","C88.700","Z51.100x004","C96.602","D47.200","C80.905","C84.800","C92.103","Z51.800x953","C92.200x001","C91.008","C91.600","C84.400x001","C90.200x013","C95.000x002","C88.300","Z51.500x001","C85.900x003","C81.900","C90.000x024","C76.700","D47.004","C86.100","C84.000x003","C48.101","D36.711","D46.700","C92.500x011","Z51.810","C84.000","C83.505","C46.900x003","C84.600","C85.900x037","C94.702","Z51.102","C92.008","D47.403","C79.829","C96.400x003","C83.802","C85.700x016","C84.500x016","D09.700","C88.200x011","C91.800","C83.300x006","C92.502","C88.700x013","C84.901","C92.007","C90.300x002","C46.900","C85.707","C91.901","C83.102","C91.000x006","C96.704","C84.000x002","C76.101","C86.500","C92.100x018","C93.300","C94.001","C85.715","C77.107","C92.005","C86.601","D36.705","D47.900x001","Z51.806","C96.400x002","C83.800x008","C93.103","C92.200","C90.000x032","C84.401","D47.700x006","C88.301","C85.900x011","C90.000x037","C94.202","D47.100x018","C92.006","C92.000x016","C96.900","C91.002","C92.000x011","C90.000x033","C85.900x004","C82.901","C92.300","C90.000x030","C83.000","C92.901","D46.900x004","D48.716","C77.500","C81.100","C96.601","Z51.805","C96.705","Z51.200x008","C85.200","D48.700x023","C80.904","C95.000x102","C92.700x012","C94.703","C86.600","Z08.800x002","C92.000x014","C83.900","D47.700x007","C95.100x011","C91.100","C84.500x004","C95.000x003","C76.300","C91.400","C92.100x016","C91.000x013","C81.900x005","D47.003","C94.201","D46.901","C48.102","C94.000x011","C79.800x862","C90.000x034","C83.300x009","Z51.800x092","C92.000","D46.900x006","C96.400","C96.200x013","Z08.800x004","C83.504","Z51.800x927","D47.700x005","D46.100","C84.601","C49.901","C84.402","C85.900x024","C92.004","C96.200","D46.700x008","C85.700x004","C91.500x011","C91.003","C90.000x009","Z51.800x096","C83.502","C79.800x816","C94.400x001","Z51.500x002","C84.100","C85.900x014","D46.001","C90.302","C77.300x003","C92.700","Z51.808","C94.300x011","C86.603","C79.826","D47.702","C46.700","C77.206","C88.200","C83.001","C90.000","C91.000x016","C90.000x026","C83.305","C85.900x005","Z51.000x013","C92.100x014","C92.703","Z51.000x012","C85.701","D36.700x021","C91.100x012","D46.900x002","C85.900x010","C91.000","C88.900x001","C97.x01","D47.700","C85.900x042","C77.503","C96.200x005","C77.501","C92.400x011","C92.100x002","C96.004","C85.900x034","C92.001","C95.900x013+M36.1*","C94.000x001","C94.004","C96.502","Z51.800x095","C79.800x818","C90.000x027","C83.800x009","C88.700x012","C95.005","C88.700x002","C85.900x041","C77.400x001","D45.x00","C91.000x017","C76.306","C93.700","C91.000x014","C90.000x004","D48.715","D46.700x003","C78.605","C92.003","D47.200x003","C80.900","C83.703","C84.403","C46.800","C88.000x012","D19.900x001","C88.000x002","C96.202","C81.702","Z51.801","D89.801","C91.001","Z51.800x921","D47.100x008","C80.902","C85.900x013","D47.703","C90.000x012","C77.202","C92.706","C94.700x014","C93.100x011","C95.900x005","C91.000x015","C79.900x001","C92.102","C95.901","C93.100x013","C90.000x023","C82.300","C83.803","D47.402","C77.302","C82.200","C85.900x031","C83.306","C92.100x012","C96.500","Q85.909","C93.000x016","C85.900x043","D47.900x002","C90.300x001","C84.900","C96.700","C88.201","D19.700","C83.300x008","C83.302","Z08.800x003","C94.300","D09.900","C95.000x118","C92.401","C92.700x013","C92.000x006","D46.400","C92.900","C95.000x115","C96.604","D47.101","C90.000x014","Z51.104","C93.104","C83.301","C92.100x019","C79.800x804","C79.811","D47.500","C92.101","C92.900x001","C96.403","C46.900x002","D47.200x004+G63.1*","C80.000x001","C85.900x023","C96.600","C92.000x012","D48.708","C95.003","C95.100x012","Z51.800x981","Z51.804","C83.503","C79.800x811","C90.001","C90.100","C77.800","C85.900x026","C76.700x002","C95.700x003","D46.900","D48.722","C93.000x011","C46.900x004","D36.709","C81.400","Q85.802","Z51.807","C96.501","C85.900x012","C84.404","C92.403","C96.603","D47.100x007","C94.200","C92.900x011","Z08.000","Z09.100","C92.600","D47.100x009","C95.700x011","C90.000x022","C91.704","C81.701","C83.004","C90.000x036","C90.200","C91.701","D48.700x001","D48.900","C95.100","C97.x00","C93.100x012","C78.604","D48.707","Z08.700","C85.900x015","C76.801","C91.100x011","C92.402","C82.100","C85.705","C90.300x003","C82.704","C93.701","C80.000","Z51.002","C90.000x008+M90.6*","C92.300x011","C96.201","C92.300x003","C91.500","C82.900","D36.700x025","C88.200x012","C90.000x025","C85.900x040","C85.900x029","D36.700x011","Z08.200","C92.201","D36.710","C85.100","C94.700","C93.102","D48.723","C84.500x012","C90.000x040","C96.002","C85.901","C95.000x101","Z51.000x008","C92.000x015","D47.401","C83.300x007","C76.800","C85.709","C93.101","C95.002","C84.407","C90.200x009","Z51.811","C91.101","C83.801","C85.900x006","C91.400x013","C95.000","D47.001","C96.402","C81.200","Z51.103","C95.000x017","C91.000x007","C91.102","C90.300x004","Z09.200","C91.006","C88.000x011","C88.000","C85.900x028","C83.702","C80.901","C96.800","C92.100","C85.100x017","C96.000","C77.200","Z08.800x001","D47.300","C90.000x035","D47.100x019","C92.100x001","C83.700","C85.100x021"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCR入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=RA1_group(record)){
        return result;
    }

    if (result=RA2_group(record)){
        return result;
    }

    if (result=RA3_group(record)){
        return result;
    }

    if (result=RA4_group(record)){
        return result;
    }

    if (result=RB1_group(record)){
        return result;
    }

    if (result=RB2_group(record)){
        return result;
    }

    if (result=RC1_group(record)){
        return result;
    }

    if (result=RC2_group(record)){
        return result;
    }

    if (result=RD1_group(record)){
        return result;
    }

    if (result=RE1_group(record)){
        return result;
    }

    if (result=RG1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合RQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'RQY';
    }

    if (result=RR1_group(record)){
        return result;
    }

    if (result=RS1_group(record)){
        return result;
    }

    if (result=RS2_group(record)){
        return result;
    }

    if (result=RT1_group(record)){
        return result;
    }

    if (result=RT2_group(record)){
        return result;
    }

    if (result=RU1_group(record)){
        return result;
    }

    if (result=RW1_group(record)){
        return result;
    }

    if (result=RW2_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}