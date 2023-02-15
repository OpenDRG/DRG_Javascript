import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCH_DRG=class{

    HK19_group(record){
        return true;
    };

    HL29_group(record){
        return true;
    };

    HS29_group(record){
        return true;
    };

    HZ29_group(record){
        return true;
    };

    HB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HL11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HS31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HC2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HC3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HZ3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HL13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HB1B_group(record){
        return true;
    };

    HJ1B_group(record){
        return true;
    };

    HS3B_group(record){
        return true;
    };

    HZ1B_group(record){
        return true;
    };

    HC15_group(record){
        return true;
    };

    HC25_group(record){
        return true;
    };

    HC35_group(record){
        return true;
    };

    HL15_group(record){
        return true;
    };

    HR15_group(record){
        return true;
    };

    HS15_group(record){
        return true;
    };

    HT15_group(record){
        return true;
    };

    HT25_group(record){
        return true;
    };

    HU15_group(record){
        return true;
    };

    HZ35_group(record){
        return true;
    };

}
