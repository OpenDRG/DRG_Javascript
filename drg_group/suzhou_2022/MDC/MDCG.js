import {putMessage,intersect,SS_VALID} from '../Base.js'
import GB1_group from '../ADRG/GB1.js';
import GB2_group from '../ADRG/GB2.js';
import GC1_group from '../ADRG/GC1.js';
import GC2_group from '../ADRG/GC2.js';
import GD1_group from '../ADRG/GD1.js';
import GD2_group from '../ADRG/GD2.js';
import GE1_group from '../ADRG/GE1.js';
import GE2_group from '../ADRG/GE2.js';
import GF1_group from '../ADRG/GF1.js';
import GF2_group from '../ADRG/GF2.js';
import GG1_group from '../ADRG/GG1.js';
import GJ1_group from '../ADRG/GJ1.js';
import GK1_group from '../ADRG/GK1.js';
import GK2_group from '../ADRG/GK2.js';
import GK3_group from '../ADRG/GK3.js';
import GR1_group from '../ADRG/GR1.js';
import GS1_group from '../ADRG/GS1.js';
import GT1_group from '../ADRG/GT1.js';
import GU1_group from '../ADRG/GU1.js';
import GU2_group from '../ADRG/GU2.js';
import GV1_group from '../ADRG/GV1.js';
import GW1_group from '../ADRG/GW1.js';
import GZ1_group from '../ADRG/GZ1.js';

export default function MDCG_group(record){
    let mdc_zd=["K27.502","D36.700x018","C78.505","Q45.801","R10.000","Q39.800x905","K27.503","A03.100x001","Q85.906","K56.503","K65.903","Q41.104","A18.300x016","S36.500x011","D18.000x045","D37.200x002","D37.402","A05.200","K90.200x001","D01.300x001","K26.000","K65.008","K25.903","K91.837","C16.903","K91.800x602","Q42.301","K29.900","K51.003","Q41.201","Q40.200x010","D01.405","D48.713","K56.602","C79.809","Q39.300","R14.x00x002","K66.800x009","C15.801","K64.808","K31.803","K31.800x802","Q40.900","K65.013","D37.100x001","Q79.300","K62.000","C16.100","T28.701","K57.305","K56.600x008","K43.301","K57.002","K62.400x004","K90.000x001","K65.805","A04.800x010","A03.800x001","K92.800x002","R19.300","C18.900","K27.400x001","Q39.200x011","E14.400x330+G99.0*","A03.900x007","K27.600","Q42.200x903","K29.605","K26.500x001","K31.819","K40.900x004","K40.900x002","D01.100","K40.102","K62.300x003","A18.300x009+K93.0*","K22.101","K21.902","K63.504","A08.101","K62.800x009","K90.200","C26.800x002","K62.600x002","A03.300x001","K65.806","C16.000x003","C78.503","K55.800x003","K62.811","K64.810","K31.902","C16.803","K50.000x001","K59.401","Q42.800x002","K55.105","K25.902","R85.500","D01.402","K31.805","S30.102","K62.806","K38.900","B37.806","K55.011","K90.001","K38.802","K51.201","K56.102","D48.301","K55.100x008","R19.500x003","K55.800x004","K43.700","K91.804","K22.901","K41.301","K27.900x001","D01.401","K62.200x001","C17.200","K25.901","D00.200x002","R14.x00x006","C78.500x008","C17.000","D48.403","K63.901","D20.102","A00.900x002","C15.900","Q41.902","R93.300x003","K91.802","K91.800x702","S36.700","K21.901","Q41.903","K62.822","Q43.100","S36.801","Q43.004","K52.804","K40.204","K56.203","K66.800","Q42.000x501","K52.918","K65.807","C15.100x003","A18.309","K46.903","C26.800","A60.102+K93.8*","D37.503","C16.000x004","S36.910","K29.608","K31.101","R85.400","K63.001","T28.700x002","D37.202","K65.015","K63.900x005","K25.000x001","Q45.300x103","K64.809","K91.835","K52.102","K63.101","Q43.811","K65.005","K64.801","C15.500","K65.901","K62.602","A18.315+K93.0*","K52.203","D37.502","Q40.206","A05.300","K40.907","K56.100","K22.206","K46.905","K31.600x005","K22.207","K62.601","K28.600x001","D36.700x019","K61.300","K26.200x001","R14.x00x003","K43.002","Q43.500","Q39.501","C17.100","K43.400","D37.203","K63.813","K40.311","C21.200","K25.100x001","D13.900x003","Q43.001","K64.401","D17.500x005","Q39.900","K40.310","K29.101","Q42.000x401","K50.104","Q40.200x004","Q89.301","K66.103","D18.000x859","D37.707","K57.800","K29.700x002","K42.001","Q43.804","K91.401","K91.830","Q42.803","K25.200x001","R85.000","K91.100x001","K56.603","K63.810","K31.603","D13.900","K29.600x007","K62.805","C45.705","K59.302","K61.200","I86.800x014","M32.112+K93.8*","I89.006","K64.805","K60.401","A09.000x003","C16.802","K63.818","K92.201","K66.810","K22.805","A09.900x006","E11.400x350+G99.0*","K31.200","K65.800x002","R85.100","K91.808","I89.800x006","I85.900x001","I72.802","Q42.801","K40.901","B49.x12","K52.911","K46.002","D17.700x022","Q43.809","K62.201","K92.901","A04.800x006","C45.102","K40.302","D17.500x001","A03.000x001","K40.900x006","A07.300x002","A07.100","K55.900","C26.800x001","K28.401","A04.800x007","A04.200x001","Q43.105","K57.102","K92.100x001","D17.500","K43.100","K64.000","R85.200","K59.301","S36.800x022","K31.820","K46.001","K62.300","I72.800x132","D37.409","K55.004","D37.700x007","K26.200x002","K65.804","D00.200x003","Q89.302","A00.100x001","Q43.800x012","K31.600x004","K63.500x002","R10.402","A18.302+K93.0*","M34.800x006+K23.8*","D12.901","S36.810","K31.608","D12.001","Q43.402","K25.300x001","C18.600","Q42.000x301","K56.001","K40.906","A04.400x004","Q42.202","K91.800x117","K63.501","I72.800x063","C21.800","K41.302","A04.700x002","K91.801","K31.602","K63.303","K52.000x001","C78.800x013","Q39.801","K36.x00x003","D37.410","Q79.200","K63.201","K91.821","Q43.801","K22.806","K56.200x011","Q39.100","K64.806","K66.901","K92.203","K52.300","K50.000x005","K63.502","A54.807+K67.1*","K91.201","K29.800","K55.000x005","C18.100","E10.400x370+G99.0*","S36.500x091","Q39.100x011","A05.000x001","K91.810","E73.000","K41.000","K55.013","C17.800","K27.501","K62.402","C18.803","Q85.913","K92.800x011","A09.000x006","C78.504","K52.000","K46.900x012","D17.702","K90.400x003","B46.200x001+K93.8*","K66.809","S36.500x031","K64.300","K92.205","K51.901","K66.006","I85.901","K52.903","K56.600x005","S36.402","I88.105","A07.800x002","K63.305","Q39.803","K91.305","K57.401","K91.200x002","K91.817","C78.502","K91.815","Q43.602","A18.807+K23.0*","K40.315","Q43.800x019","D13.301","A09.000x001","K91.408","K66.007","K29.600","K38.800x003","K52.904","A09.007","K28.200","K43.500","C16.800x002","K27.200","K44.000x002","K51.002","K63.900x003","K40.900x001","D37.403","K55.002","D36.901","K22.807","K63.403","K22.813","R19.000x005","K28.600","K62.803","K20.x03","K35.800x001","C78.401","K91.800x501","S36.611","S36.411","K66.803","K20.x02","K31.808","K64.900","Q42.001","A52.710+K67.2*","K57.105","D17.700x027","K59.101","D37.205","K40.401","K63.306","A07.801","K66.805","C16.800","K62.400x003","K25.000x002","K42.901","K52.001","K57.302","K40.303","C45.100","K44.901","C78.804","K91.406","Q45.900","D37.710","K43.902","D37.207","K35.301","K51.900","K46.901","K25.401","K55.900x004","K50.001","T18.300","K63.205","K20.x00x001","K45.002","B37.800x091","C78.501","K22.401","K62.903","K27.901","K91.816","R10.400x004","I77.400","K51.500","K27.600x001","K65.016","K58.800","C78.802","Q43.808","R19.400","A18.317","K56.700","K22.400","A03.902","K31.000","K55.010","A18.300x014+K93.0*","C20.x00x003","R10.103","K50.101","K43.304","S36.400","A09.006","S36.404","C16.801","D37.709","K25.000","K91.800x007","K55.300x001","Q42.000x201","C78.500x006","K29.802","K63.216","T18.900","K50.103","K30.x00x001","K58.100","Q40.205","E14.400x340+G99.0*","K65.902","C15.800x002","R19.500x004","I72.800x142","Q43.401","C78.602","Q43.103","A03.900","C18.001","A18.312+K93.0*","R85.700","C20.x00","K22.201","Q40.800","A03.900x002","K91.202","D37.301","D37.103","K22.809","Q42.902","D12.601","A18.311+K93.0*","A07.300","K46.100x001","K62.819","R15.x00","A04.801","K63.215","K64.100","C45.700x005","K52.917","K92.800x001","K29.604","K26.001","C17.801","S36.500x092","K22.600x001","K57.900x001","K22.100","K57.900","K46.000","K51.800x001","D48.402","C18.000","K29.501","D37.500x002","K65.000","I85.000x001","A07.000","S39.905","K91.800x601","K22.811","Q89.300x001","K91.834","D12.200","K50.002","K92.210","Q39.601","K31.806","K57.200x001","K62.100x002","K91.301","C48.800","K44.000x001","K65.011","K91.102","A09.900x004","K22.801","T18.400","K43.303","A09.005","K63.203","K51.200x001","K56.700x003","K92.800x007","T28.100","K31.102","I74.800x011","E84.102","A05.900","K40.203","K51.303","K60.200","D37.100x003","K65.000x014","K61.100","K64.804","Q43.901","S36.901","K57.801","K57.003","K91.402","Q40.209","K22.814","K31.801","K41.200x001","K45.805","D13.200","K66.806","D37.101","K27.902","C15.900x003","D37.702","D12.300","Q43.403","C77.208","Q40.002","K27.500x002","K28.900x001","K59.900x002","K51.001","K56.500x003","D01.403","K52.902","R10.401","A05.400x001","K31.604","K38.800x004","K56.600x001","K63.802","K22.200","E16.401","R10.301","K22.500","K61.002","K63.809","K27.500x005","K58.801","A03.200x001","Q40.208","Q43.301","K63.212","I72.816","C21.101","K64.200","K57.000","K91.000","K22.000x002","J11.800x002","K91.842","K59.200x002","K59.800x005","Q41.202","I78.802","K40.304","Q43.900","Q40.000","K31.400","R10.101","I72.815","K41.400x001","K63.819","K60.403","K64.807","K40.903","K22.802","K40.201","K63.211","K92.000","Q43.300x901","K63.103","K66.801","K60.300","K91.900","A04.702","K91.800x103","D01.200","K55.000x015","Q39.800x201","K91.833","K22.800x003","R85.300","K31.812","A00.000x001","K40.307","K59.100","T28.702","K27.400","Q43.800x015","K52.204","C21.100","K63.206","K62.400x002","K43.004","Q40.300","T28.200x001","S36.500x041","K63.200x008","K22.102","K27.400x004","S36.814","K91.805","K41.300x002","A18.306+K93.0*","K66.004","C15.300","C78.403","K91.814","S36.400x093","K59.400","K55.200x013","A18.308","D36.700x014","A04.600x001","K45.003","K52.901","Q43.812","D18.100x001","K63.815","K22.700x001","K56.601","K22.400x003","K46.900x002","A18.305+K93.0*","K52.103","K50.900","K52.908","Q40.200x005","A04.803","C17.900x002","K63.400","K20.x01","K55.003","D18.000x838","K46.900","R10.400x002","K43.900x001","K51.400","A08.000","C16.400","K60.302","D12.500","A00.900x003","A03.901","K90.406","Q40.003","K65.801","K58.200","K91.303","Q42.000x101","C21.802","C78.400","S36.600x003","D48.401","D37.701","K63.803","S36.300","K22.301","A04.901","K56.501","A00.900x004","K21.900x003","K61.001","K62.813","K90.100x001","K62.821","C76.304","K28.400x002","E14.400x350+G99.0*","C48.200","K65.006","Q42.800x003","D37.201","Q79.501","C48.201","Q40.204","K62.818","A04.500","A04.000x002","Q79.201","D37.700x002","K62.809","M32.115+K67.8*","K22.205","K63.500","K38.801","K40.308","I89.801","I86.400x002","K63.108","A08.301","A07.200","B37.805","K56.400x003","Q43.800x014","K31.814","K55.801","K62.501","D13.303","K63.817","B77.000x001+K93.8*","K51.202","K25.501","K55.103","C48.100","D37.606","D37.500x001","K44.900x001","K31.300","K22.000x001","K40.313","K26.400x003","K90.901","K64.400","K62.100","K38.100","D17.500x007","K46.101","D37.206","A08.400x003","C45.703","I86.401","K64.500","R19.100x001","K31.609","K61.000","D01.900","E16.402","D12.000","K65.900","T28.600","K62.800x005","K21.001","K92.206","K62.001","K45.808","C15.100","K41.300x003","C16.200","K90.000","K91.824","K92.202","A04.600","K55.102","R19.100","K65.802","K66.005","D48.121","T18.501","I89.803","Q45.300x104","K63.812","K60.402","K91.812","K45.800","D18.000x041","C78.500x004","K60.400","C48.104","I88.001","K57.800x001","K90.900x002","K41.100x001","K55.200","K52.202","C16.000","K30.x00","K31.905","K40.002","C15.400","K63.302","I86.800x022","C15.200","K59.200","K55.106","C18.700","K40.900x005","K92.800x004","D37.406","Q45.300x105","S36.301","D13.000","K91.800x106","K62.800x010","K31.607","K55.300","K63.805","C78.603","S36.412","Q42.901","K43.003","I72.807","S39.909","K55.012","K56.202","K59.000","K25.500x001","K40.301","D17.500x008","C16.800x003","K40.101","K61.400","K90.002","K91.811","Q39.400","K66.201","S36.812","Q43.800x008","K59.002","Q43.800x009","K51.300","K28.900x002","Q39.800x904","R14.x00x001","K56.401","K51.902","Q40.207","K58.300","B66.501","K40.309","A18.300x013+K93.0*","K63.204","K38.800x001","K55.009","T18.502","K57.108","A00.900x005","K25.900x001","D48.714","C16.500","Q43.800x017","K64.803","D37.401","E16.400","K20.x00x006","K91.405","T18.301","A09.903","D17.701","K62.401","K66.800x008","D48.129","K43.604","K26.900x001","K56.300","B77.001+K93.8*","K51.301","K92.800x003","R12.x00","A08.500","Q43.806","D18.000x043","A18.812+K93.8*","A05.300x001","Q42.201","K63.000","D36.707","D37.700x001","A09.001","K57.301","A18.300x006+K67.3*","D48.700x004","K55.008","Q43.810","S36.802","K44.100x001","K92.204","K29.701","T18.801","K91.832","Q40.100","K29.300","Q43.106","K62.500x001","D37.200x001","K52.802","K40.402","K62.802","K29.001","Q79.500","S36.310","K91.404","C19.x00","A08.100x001","K62.816","C79.800x834","K28.000","A08.401","K31.802","Q43.002","K57.001","Q43.200x002","K55.101","K55.201","Q39.600","K90.100x003","K31.606","Q42.200x904","A05.800","C48.000","B49.x00x002","K66.002","D37.200x004","K29.600x006","K59.900x001","K57.101","A05.100","K57.100x005","K63.401","A04.401","D37.400x001","D48.700x005","K57.500","Q41.203","R19.100x002","C26.900","C77.200x001","K92.800x005","K91.809","B87.800x002+K93.8*","K62.807","C18.300","K62.804","K90.404","A18.304+K93.0*","K26.100","K59.200x003","S36.500","K43.900","A04.701","K63.202","K40.000x001","Q43.200","K91.103","Q44.500x008","Q43.102","K90.802+M14.8*","K59.003","D01.404","K64.501","K91.819","T18.500x004","K25.700","C78.800x010","D48.300x001","Q85.902","C16.900x003","K91.800x111","C78.601","R19.200","D17.500x004","C78.803","K27.900x002","A05.400","A04.800x003","K46.000x002","K55.104","K55.000","C21.801","C16.902","C16.001","K65.002","K65.017","T28.200x002","K52.907","A03.900x009","Q39.100x021","Q79.400","A18.314+K67.3*","C78.600x004","K28.100","K29.801","K43.302","K56.701","K43.200","C15.100x002","K31.800x808","K40.202","D37.708","K66.008","K91.836","K62.901","K57.202","K62.814","K31.810","Q42.903","K64.811","K90.400","K22.803","K25.001","K26.701","K62.800x021","K66.807","K28.500x001","Q40.202","Q42.101","Q40.201","Q43.300x201","Q43.601","K38.000","E11.406+G99.0*","E14.400x370+G99.0*","K90.401","K55.100","K57.201","D20.101","K55.202","D00.200","D48.400x003","K55.005","K40.305","K43.602","K66.000","C18.400","K51.203","C77.207","K45.100","C17.900","K31.813","K56.200","K60.400x003","A04.900","D37.901","D12.000x002","K31.605","K90.402","C15.000","K40.902","K38.000x002","D13.304","Q39.802","K26.600","K55.100x005","R93.300x004","S36.405","K63.105","K22.204","K55.001","D37.501","K29.601","C45.700x002","R19.500x002","K52.801","D18.000x046","K91.300","K51.401","K66.808","Q42.002","K22.208","D01.000","K45.000","K31.800x801","K55.901","Q41.001","K63.214","K52.104","K31.100","K90.801","D37.407","K52.803","K63.801","C45.101","Q41.003","Q85.900x036","A04.800x001","K40.904","D37.411","A08.200","Q42.802","K52.910","K91.831","K29.603","S36.701","Q85.900x002","D19.100","K66.100","A08.300","K52.912","K91.800x102","K40.400x001","E10.400x330+G99.0*","T98.300x001","K91.813","K29.700","C16.301","K65.803","K63.102","A18.307+K93.0*","C48.103","K31.703","Q41.101","K25.400x002","K57.300x006","K66.802","K42.000x001","Q43.201","D12.700","K27.100x001","K27.500x001","K51.000","K91.818","C17.300","E10.400x350+G99.0*","K63.208","S36.813","D37.400x002","A74.801+K67.0*","A03.900x008","C76.200","I88.000x003","K31.804","K64.802","Q45.300x102","K51.302","D18.000x042","S36.401","C26.800x003","K40.100x001","C26.000","Q41.901","S36.500x021","K63.807","S36.413","K27.300","Q43.101","Q43.805","K31.904","A04.100x001","K50.000","D12.603","K36.x00x004","K37.x00x002","K22.900x001","S36.803","K57.400","K51.903","Q40.203","K20.x00x003","I72.800x131","Q41.103","E10.400x340+G99.0*","K29.602","Q43.800x018","K66.102","K36.x01","C15.100x004","K56.101","R93.500x001","I89.005","C16.900","K57.103","K45.801","K31.903","K40.001","K40.905","K66.811","K63.503","D37.300x001","C18.802","D37.900x001","K91.800x412","K55.902","K65.905","A09.002","K38.200","K63.402","Q42.102","K56.400x001","K52.914","I72.801","K52.919","K62.810","C77.201","K28.901","K90.403","K36.x02","D17.500x003","K42.100x001","K50.800","D09.700x002","K22.202","D20.000","K63.100x001","K43.001","K31.601","K22.103","K55.000x010","D37.607","D37.100x002","K62.808","K45.802","K40.312","K63.308","K63.304","C20.x01","K40.900x003","K60.301","K55.000x011","C16.804","K62.202","K65.012","C19.x01","K63.104","K65.004","K66.812","C18.200","K29.200","K91.829","K40.300","K42.900","Q41.002","T18.100","K63.209","Q42.302","K91.300x002","D48.117","K45.806","K31.815","B49.x16","K91.302","K92.208","K31.800x806","K91.839","D37.204","K27.000","D12.900x001","K60.000","K64.402","K46.902","D13.100","K29.500","C18.900x001","A49.809","A04.700","K63.500x084","E11.400x330+G99.0*","Q42.200x902","K27.700x001","S36.601","K61.101","K63.213","K28.500","I86.400x001","K59.800x002","Q42.200x901","K27.400x002","K31.811","K92.209","K22.804","K22.300","K22.815","K91.803","K91.820","I86.400","K63.814","K66.200","C48.105","R19.600","C78.801","K59.400x002","K66.001","K65.906","K29.100x001","K92.207","R19.501","K90.405","A18.318","K65.009","Q43.700","A18.303+K93.0*","A18.310","K50.801","S11.202","A05.200x002","A04.802","R85.800","S36.414","K35.201","C16.401","R19.800x001","R85.600","K31.702","K22.601","A18.300x015+K93.0*","K21.903","A08.400","Q42.200x905","K29.400","R14.x00x007","K63.806","K62.800x001","K66.000x007","K31.501","A09.003","Q41.800","D37.408","A03.900x005","K31.100x002","K56.201","S36.600","A03.903","T18.200","K55.100x006","K38.300","K52.909","K20.x00","A09.900x007","C18.500","K65.014","R93.303","Q43.104","K57.304","C16.600","K45.807","C16.402","S36.403","K62.700","C78.800x014","K45.804","K62.801","T18.300x003","A08.402","C78.809","S36.500x093","D18.012","D20.100","K59.303","K59.801","K90.100x002","C15.800x004","A05.000","C77.106","A05.202","K43.603","K60.100","Q41.102","Q43.200x003","K40.314","S36.811","K64.901","A00.900","A04.300x001","S36.400x091","A09.004","A18.316+K93.0*","K63.816","K62.812","K22.209","K35.200","K42.902","E16.400x003","K37.x00","B82.900","K35.300","R58.x01","C18.901","R19.200x002","K40.200x001","K50.800x001","K62.200","K31.818","K56.000","K62.301","C16.002","K63.301","Q39.000x001","K65.800x001","Q43.404","K22.203","A03.800x002","I89.800x019","D12.600","K46.900x003","K52.800x003","K43.601","K31.821","Q43.003","K90.300x001","Q39.800x903","K57.107","E85.417+K93.8*","C78.800x005","K65.001","D37.404","K65.010","C21.000","K52.200x004","K91.828","D48.400x002","S36.511","D12.400","D12.800","K55.007","K62.815","C15.802","D13.902","K43.000","K62.902","Q43.807","A18.313+K93.0*","D00.100","K62.800x017","C15.800x003","K57.104","S36.501","K27.401","K22.812","C78.402","K26.300","C26.901","K52.101","Q27.810","K43.605","S36.400x095","K65.003","K56.604","K28.700","K63.900x002","D18.000x825","K63.900x001","A09.902","K91.800x206","B49.x17","D37.102","R12.x00x002","A09.901","K31.809","K63.210","A07.900x001","K55.100x001","I86.400x004","D36.708","K62.817","K26.401","B37.804","K31.901","K29.606","C18.800x002","D37.200x003","Q43.000","D12.100","K62.820","B82.000","K29.000","K60.303","K27.500","K22.800x011","K91.800x116","K46.100","K55.006","K63.200","K31.701","Q43.800x006","K65.904","K40.306","K31.807","K41.900x001","K91.101","A09.900x003","K50.102","E11.400x340+G99.0*","K66.003","D18.000x040","C15.800x001","D12.301","K92.200x001","Q43.803","S36.900","E73.800","K31.104","K22.808","Q51.702","K92.200x005","D18.000x801","K63.307","K56.200x003","C18.801","A03.904","D37.405","K46.900x004","K31.500","K25.600","Q43.802","D13.101","K63.804","B82.901","D17.700x017","K63.200x003","K31.103","K91.100","K63.107","Q79.301","D01.301","D12.302","E73.900","A18.800x014+K23.0*","K57.106","K66.101","K27.900x005","K57.303","K31.502","R10.102","K62.800x012","I86.812","D12.602","K63.207","Q89.300","K60.500","A09.904","D17.500x009","T80.200x001","R93.300x001","A04.902","K25.400x001","R10.000x004","K63.902","K26.501","Q39.602","K31.816","K28.300x001","K26.900x002","D13.302","K52.201"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCG入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=GB1_group(record)){
        return result;
    }

    if (result=GB2_group(record)){
        return result;
    }

    if (result=GC1_group(record)){
        return result;
    }

    if (result=GC2_group(record)){
        return result;
    }

    if (result=GD1_group(record)){
        return result;
    }

    if (result=GD2_group(record)){
        return result;
    }

    if (result=GE1_group(record)){
        return result;
    }

    if (result=GE2_group(record)){
        return result;
    }

    if (result=GF1_group(record)){
        return result;
    }

    if (result=GF2_group(record)){
        return result;
    }

    if (result=GG1_group(record)){
        return result;
    }

    if (result=GJ1_group(record)){
        return result;
    }

    if (result=GK1_group(record)){
        return result;
    }

    if (result=GK2_group(record)){
        return result;
    }

    if (result=GK3_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合GQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'GQY';
    }

    if (result=GR1_group(record)){
        return result;
    }

    if (result=GS1_group(record)){
        return result;
    }

    if (result=GT1_group(record)){
        return result;
    }

    if (result=GU1_group(record)){
        return result;
    }

    if (result=GU2_group(record)){
        return result;
    }

    if (result=GV1_group(record)){
        return result;
    }

    if (result=GW1_group(record)){
        return result;
    }

    if (result=GZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}