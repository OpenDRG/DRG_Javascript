import {putMessage,intersect,SS_VALID} from '../Base.js'
import SB1_group from '../ADRG/SB1.js';
import SR1_group from '../ADRG/SR1.js';
import SS1_group from '../ADRG/SS1.js';
import ST1_group from '../ADRG/ST1.js';
import SU1_group from '../ADRG/SU1.js';
import SV1_group from '../ADRG/SV1.js';
import SZ1_group from '../ADRG/SZ1.js';

export default function MDCS_group(record){
    let mdc_zd=["B66.500","B27.000","B74.300","B48.300","B45.800x002","T85.708","A30.300","B88.800x001","B69.900x001","A69.200","A92.300x003","T82.700x004","B25.800x001","B58.900x001","A31.000","A02.002","A31.002","A56.000x003","A54.002","A31.900x001","B49.x11","A30.900","B75.x00","A20.900x002","A21.000","A63.003","B34.801","A48.100x001","A77.100","B45.900","B81.400","B87.100","R50.803","A51.304","A50.000","A49.900","B57.100","B74.200x003","A49.812","A49.200","B60.000x001","A41.806","A02.001","A52.700x001","B02.900x003","B60.000","B34.400x001","B40.700","B88.800x002","A51.400x010","A92.400","B69.100","B67.600x003","A02.000x009","A21.100","A48.000","A77.200","B00.205","J10.800x002","B48.000x001","B52.000","A49.101","A66.400","A48.100x003","B71.800","B05.803","A42.802","A25.000x001","A94.x01","B41.800x001","A41.904+N16.0*","A66.200","A02.000x007","A98.400","A93.802","B66.800x003","A06.000x001","A44.100","B18.904+N08.0*","A31.800x006","T85.700x104","A21.300","A21.301","B37.700x001","A26.800x001","A18.208","A43.100","B43.900","B65.900x007","R68.801","A24.001","A26.900x002","B37.401+N37.0*","B43.800","B56.900x001","A01.000x018","B26.800x004","A50.700","A41.101","B60.800x001","B48.201","B88.800x004","B67.905","A18.207","B66.800x006","B85.000","B76.100","B05.900x005","A02.000x006","B05.800x008","A57.x00x002","B66.101","T82.700x010","B74.100x003","A25.100x001","A35.x00x001","T82.701","A20.000x001","B81.800x001","B81.800x002","A41.504","A51.001","B44.800x003","B44.802","T85.700x808","A93.000","A30.300x002","A50.600","A30.900x008","A42.200","B47.000","B08.000x004","B55.200","B85.100","B77.800x004","B55.900","A92.300x004","A92.300","B51.000","A23.900x004","T81.404","A30.400x001","B45.801","B42.100x001","A56.800","A57.x00x003","A38.x00x012","A30.500x001","B00.204","A06.800x003","B34.400x002","B88.300","A44.000","B34.100","B33.000","B34.101","B39.400x001","A06.000","A41.100x002","A67.200","B34.800x002","B54.x00x008","B42.100","B26.805+N08.0*","A23.100x001","A51.002","B25.900x001","B34.200","B88.200x001","B46.800x001","T85.710","A50.900","B36.800","A50.100","A30.200","A50.400","B33.800","A52.800","A21.300x002","A49.100x006","B68.900x002","B99.x01","A38.x00","A36.900x002","B48.300x001","A77.000x001","A49.801","B00.900x005","B76.800","B67.400x001","B00.001","A79.100","B89.x00","B01.900x001","A01.000x006","A41.803","A50.500","A92.200","A49.901","B74.000x003","B74.100x001","A19.901","A52.101","A49.814","B50.801","A92.800","A20.300","A26.000","B69.800x004","B44.700","B51.800","B66.800x005","B78.700","T98.200x021","A06.900","A59.001+N37.0*","A40.800","A24.000","A23.200","B37.801","A26.700","A79.800x002","A48.100","A98.400x001","B66.200","B49.x00x013","A49.800x014","A51.000x002","A75.000x004","B55.000x003","A41.502","B66.800x004","B37.802","A38.x00x011","A32.900","A66.800","A77.100x001","T85.706","A49.102","A18.104+N29.1*","A67.300","B05.901","A20.802","A24.202","A40.200","A78.x00","A69.800","A51.300x003","A27.000","B34.800x003","B45.100","T79.300x001","B07.x00x009","B57.200x001","A31.901","A21.700x002","A77.200x001","A19.902","A23.900x001","A49.806","A41.807","B88.900x003","A65.x00","R50.900x002","B34.102","A77.000","B25.900x002","B43.100","B51.000x001+D77*","A99.x00","B68.100","B67.601","A38.x00x010","A53.000x002","B77.800x005","B88.000x003","A49.003","B48.200","T85.701","A19.900","A02.000x005","B65.000x001","T82.700x007","A67.900","A55.x00","A24.102","A31.800x001","A01.000x017","A01.100","A48.300","A75.300x001","A40.100","A51.301","B40.900","A51.300x004","A18.200x010","B53.000x001","A26.700x001","A21.800","A41.505","B01.800x002+N08.0*","B05.802","B49.x18","B83.800x004","B55.000","B67.904","B66.300","A56.400","A52.200","B66.300x001","A18.209","B42.100x002","R50.800x002","A06.300","B47.900","B39.500","B77.900","B00.202","B48.401","B77.800x002","A27.900x002","B06.900x001","B02.800x001","A92.900","B34.800x004","B74.400","A51.200","A75.100","A20.800x004","A60.001","B67.600x002","B85.200","T81.400x006","A96.900","B65.900x008","B66.100","B66.400x001","B76.000","B81.801","A18.200x006","B08.300","B83.300","A49.805","B55.000x001","B99.x00x001","A74.900","A48.200","A50.500x001","A98.300","A49.300","A96.000","A41.804","B65.905+N08.0*","A43.802","B76.900x003","A41.200","A27.900x004","B69.804","B47.100","B08.800x006","A54.809","A18.100x022+N37.8*","A06.800x002","A23.903+N16.0*","A40.000","B49.x02+E35.8*","A77.300","B68.900x004","B42.100x003","A93.200","A75.200x001","A19.900x005","B77.803","A02.900x004","A93.100","A98.800","B65.300","B83.800x008","T82.700x005","A31.800x004","B37.808","A43.900","T86.807","A52.100x011","A06.002","T80.200x004","A31.000x001","B66.800x001","A21.700","A31.801","A38.x00x013","B53.100","A21.800x001","B65.800x003","B87.900","P37.100","A06.001","B37.700","B76.900","T81.401","B76.902","B74.900x003","A02.800","A98.500x001+N08.0*","B49.x00x007","B69.800x003","B27.800","A51.400x001","A49.100x005","T85.703","A41.805","A54.001","B37.900","B52.001+N08.0*","A30.100x001","A02.100x002","B44.100x003","A95.900","A56.302","B41.700","B66.902","A41.506","B37.901","A24.002","A18.212","A79.900","A02.901","A18.801+E35.8*","B40.800","B68.900x003","A02.000","A18.103+N29.1*","A06.100","A30.000x001","B37.800x088","B34.900","B05.800x009","B44.900x001","B55.100x001","A67.100","A23.800","A42.801","B65.001","B67.401","B83.800x007","T85.700x103","A02.101","A18.100x021+N37.8*","A32.803","A68.000","A23.000x001","A20.101","A49.000","B08.801","B67.903","A79.000","A24.100x003","A54.900","A24.000x002","A32.000","A53.000x001","B53.800x001","A53.900","A77.300x001","A95.100","B57.300","B67.301","A23.900x003","A31.000x005","B68.901","T98.200x012","A06.100x002","A42.000","T81.400x001","A18.206","A48.801","A31.101","A52.709+N08.0*","B67.907","A41.400","T82.700x009","B26.800x008+N08.0*","A52.900","B18.205+N08.0*","B66.000x001","A58.x00","B79.x00","A20.800x005","A49.103","A02.003","A36.900","B00.700","A32.700","A18.211","B39.500x001","A67.000","B65.900x006","B88.100","A31.001","A18.106+N29.1*","A98.100","B67.600x001","A52.100","B74.200x001","A68.100","B74.000x002","A77.900","A79.901","A31.100x002","A06.200","A51.201","P37.300","A41.400x001","A98.200","B71.900","B67.906","B74.400x002","B67.302+E35.0*","A30.900x004","B33.801","B02.900x002","A36.804+N16.0*","B39.900","A75.900","B05.900x002","B57.200x003","B46.900x002","A97.100","B69.802","B83.800x009","A26.900","T82.700x008","B83.800x002","A20.000","A54.100x002","A31.100","A30.400","A63.000","B83.400","A77.800","B46.400","A41.500x087","T85.700x809","B48.700","A28.000","B33.802","A75.000x003","T82.700x001","A18.101","A19.200","A92.001","A27.800","B54.x00x006","A21.900x001","A49.002","B83.800x005","T80.200","A43.801","B26.804","Z03.000","B55.200x001","A27.900x005","B88.900x002","A30.900x005","A54.600x001","B34.300","A64.x00","B08.100","B05.400","B69.800x008","A54.900x002","A30.400x002","B00.901","A30.200x001","B66.800x007","A18.107+N29.1*","B08.400x003","B37.800x085","A42.200x002","A44.900","A77.900x001","B64.x00","B33.100","B27.001","B74.000x001","A01.200","B83.800x006","A41.802","B52.900x001","A66.300","A28.801","B39.300","B69.800x005","A96.100x001","B42.700","A27.900x006","A49.800x019","B44.800x005","B65.200x001","A25.900","T81.405","B45.700","A50.400x001","T81.402","A41.800x002","B69.805","B74.901","B08.000x001","A01.000x019","A32.701","A49.808","A22.200","B74.900","A23.000","B67.901","A28.900","B01.801","A51.100x001","B44.801","B42.800","A59.900","B34.300x002","T85.709","A01.000x004","T85.711","B67.902","B83.000x002","B65.101","A51.900","A58.x01","A18.800x001","A30.900x002","A68.900","A49.811","B55.100","A18.100x031","B85.300","A97.000","B34.000","B66.000","A20.700","A22.200x001","A40.903+N16.0*","A60.900","B71.100","T81.400x004","B08.200","A18.108+N33.0*","B74.900x005","B83.000x001","B88.900x001","A23.900x006","A51.303","B41.900","B03.x00","A96.200","A28.100","R50.802","A31.802","A52.700x012+N08.0*","A69.900","B83.900","B08.401","A54.601","A22.900","A50.200","A48.400","A54.808","B65.800x002","B69.803","B89.x01","B81.000","B83.201","A01.000x020","A30.100x003","A54.900x001","A66.100","B27.100","A24.101","A22.100x003","A66.900","A31.102","A59.000","B74.902","A49.804","A49.803","A48.800","A49.800x015","B03.x00x002","B87.300","B76.901","A31.800x007","B81.802","B87.800x001","A30.300x001","A92.300x002","B74.400x003","A28.001","B54.x00x004","A20.801","A92.100","A01.000","B83.000","R50.900","A41.300","A42.100","A93.801","R50.901","A96.800","B43.801","A49.201","B71.000","B48.402","B50.000","P37.000","B83.200x003","B90.102+N29.1*","A23.100","A49.004","B74.200x002","A51.300x005","A18.210","B33.300x001","A52.801","A49.810","A63.002","B48.400","B65.800x001","B85.400","T80.201","A31.800x002","T88.000","B83.200x001","A01.000x008","A24.100x002","B81.300","B00.701","A63.800","A98.000","B08.000x002","B38.800","A23.300","B46.800x002","A49.902","B66.800x002","B74.800x001","B78.902+N08.0*","A01.000x012","B78.000","B33.000x001","A63.001","B70.000","A42.700","A31.000x004","A18.813+D77*","A42.900","B05.900x001","B46.500","A49.815","A42.800x002","A54.500","A02.900x003","T81.400x002","B38.700","A02.100","A42.803","A01.000x007","A18.105+N29.1*","A30.500","B88.000x002","B65.100x001","B27.900x001","A02.900x002","B47.100x001","B73.x00","A70.x00","A97.200","A66.700","A50.401","B08.800x004","A41.900","A49.802","A24.201","A66.000","B02.700","B39.400","T81.403","A01.000x011","A41.503","A01.300","A49.817","B58.801+N16.0*","B70.100","B42.900","B52.000x002+N08.0*","A02.000x010","R50.801","B50.900x001","B05.800x010","A96.100","B56.100x001","B50.800","A41.801","B26.900x001","B49.x00x021","A51.300x002","B00.902","A01.003","A06.700","A36.800x005+N33.8*","A44.800","B26.800x010","A31.800x003","B56.000x001","B18.103+N08.0*","A92.500","B38.900","A56.301","B81.200","A60.002","B02.900x001","B36.801","A95.000","A56.300x001","A51.500","B51.900","A40.300","B46.100x001+G99.8*","A18.700x002+E35.1*","A49.800x023","B74.100x002","A43.800x001","A41.501","B57.500","A52.300","A01.000x009","A30.900x003","A41.500x083","A01.000x014","A59.800x001","B83.800x001","A18.100x025+N29.1*","A31.800x005","B03.x00x003","B01.800x004","A49.807","A06.800x001","A56.200","B01.900x002","A79.801","A27.800x001","A97.900","B69.801","T82.700x003","A01.400","A40.900","A42.805","B26.800x011","A24.400","B67.700x001","T84.701","T85.702","B83.800x003","A20.100","T82.700x011","B66.400","A51.000","A24.300","B74.400x001","A49.100x004","B68.000","B83.100","B03.x00x004","A38.x00x014","A92.300x001","A19.200x001","A49.800x003","A19.100","A41.000","A28.200","B00.900x007","B04.x00","B66.900","A18.700+E35.1*","A49.301","A18.806+E35.0*","A49.001","A06.200x001","A20.200","B05.801","A02.004","A56.001","A51.302","B48.800x001","A19.900x004","B78.901","T81.400x005","A49.813","B37.400x001+N37.0*","A31.803","A49.800x020","A48.800x002","T85.712","B08.200x002","A22.000","B34.400","B41.800x003","A42.804","O98.600x001","A54.602","A75.001","A75.000x002","A30.800","A66.600","A22.700","B48.000","T81.406","B52.800","B81.100","A20.803","A01.000x010","A06.300x001","B66.901","B80.x00","A92.000","A41.900x004","T82.700x002"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCS入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=SB1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合SQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'SQY';
    }

    if (result=SR1_group(record)){
        return result;
    }

    if (result=SS1_group(record)){
        return result;
    }

    if (result=ST1_group(record)){
        return result;
    }

    if (result=SU1_group(record)){
        return result;
    }

    if (result=SV1_group(record)){
        return result;
    }

    if (result=SZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}