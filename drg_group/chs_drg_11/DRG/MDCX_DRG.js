import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCX_DRG=class{

    XT29_group(record){
        return true;
    };

    XR31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XS21_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XS11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT15_group(record){
        return true;
    };

    XJ15_group(record){
        return true;
    };

    XS15_group(record){
        return true;
    };

    XT35_group(record){
        return true;
    };

    XR25_group(record){
        return true;
    };

    XR35_group(record){
        return true;
    };

    XR15_group(record){
        return true;
    };

    XS25_group(record){
        return true;
    };

}
