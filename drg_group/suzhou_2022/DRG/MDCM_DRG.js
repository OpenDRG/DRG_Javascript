import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCM_DRG=class{

    MA19_group(record){
        return true;
    };

    MB19_group(record){
        return true;
    };

    MC19_group(record){
        return true;
    };

    MD19_group(record){
        return true;
    };

    MR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    MJ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MZ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MR1B_group(record){
        return true;
    };

    MJ15_group(record){
        return true;
    };

    MS15_group(record){
        return true;
    };

    MZ15_group(record){
        return true;
    };

}
