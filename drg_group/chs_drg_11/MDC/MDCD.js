import {putMessage,intersect,SS_VALID} from '../Base.js'
import DA1_group from '../ADRG/DA1.js';
import DB1_group from '../ADRG/DB1.js';
import DB2_group from '../ADRG/DB2.js';
import DB3_group from '../ADRG/DB3.js';
import DC1_group from '../ADRG/DC1.js';
import DC2_group from '../ADRG/DC2.js';
import DD1_group from '../ADRG/DD1.js';
import DD2_group from '../ADRG/DD2.js';
import DE1_group from '../ADRG/DE1.js';
import DE2_group from '../ADRG/DE2.js';
import DG1_group from '../ADRG/DG1.js';
import DG2_group from '../ADRG/DG2.js';
import DJ1_group from '../ADRG/DJ1.js';
import DK1_group from '../ADRG/DK1.js';
import DR1_group from '../ADRG/DR1.js';
import DS1_group from '../ADRG/DS1.js';
import DT1_group from '../ADRG/DT1.js';
import DT2_group from '../ADRG/DT2.js';
import DU1_group from '../ADRG/DU1.js';
import DV1_group from '../ADRG/DV1.js';
import DW1_group from '../ADRG/DW1.js';
import DZ1_group from '../ADRG/DZ1.js';

export default function MDCD_group(record){
    let mdc_zd=["J38.002","K14.801","H72.100","C00.500x004","H61.000","J31.003","A18.600","C32.001","C79.503","K07.109","J37.001","J30.300x001","K11.606","C11.300x001","H66.900","J95.001","D00.011","S01.500x052","C00.000","K12.100x011","J35.100","K12.218","J38.200","A69.100x003","K13.400x002","Q18.002","Q85.900x038","K05.500x001","H74.201","C09.100x002","Q18.400","Q87.000x301","K07.300x006","K04.002","J32.002","Q18.103","J00.x00x007","Q18.100x006","J34.003","J38.700x022","S01.501","C06.000","H61.105","K12.111","C32.101","C05.100","D02.001","K03.000x002","K10.205","Q31.800x005","Q38.500x002","K09.004","J34.300","H60.002","D10.303","K12.212","J31.001","S01.302","J38.717","K13.000x016","C06.900","D21.005","H83.000x002","K03.300x002","S00.802","S17.900","C10.100","K13.003","C05.800","K07.105","D14.006","K11.700x002","Q30.800x003","C04.800","K05.101","K05.102","Q30.900","Q38.400x001","Q31.805","K11.807","Q17.000x003","J38.201","K01.100","Z43.000","K08.807","K05.105","J35.804","A18.800x034+K93.8*","Z42.006","Q36.901","K02.101","K08.803","C02.000x002","H70.800x002","J30.101","S15.100","J03.902","J38.001","C79.800x840","C79.800x828","K13.201","K00.400","K04.501","J95.000x002","K06.801","H93.901","C78.300x004","C14.800x003","Q31.000","D04.400x001","K07.107","K14.102","J38.601","J39.203","J04.000x004","C77.002","D22.301","Q89.800x909","K12.108","D16.500","K07.300x008","K07.602","K05.100x012","K12.208","J01.300","K09.200","D23.000","K07.604","J38.718","K13.601","Q38.300x007","M95.002","J33.003","S00.302","K14.800x003","D02.000x003","K13.200x005","D37.000x012","T81.804","S02.612","J32.801","K02.800x005","J39.219","K03.800x003","S08.000","H83.800x002","D37.011","K13.706","M85.000x081","Q17.003","Q27.800x026","S03.501","D16.400x025","K11.211","K08.104","K10.800x005","D00.006","K12.200x003","C09.000","K13.703","C79.500x028","S00.403","C14.800x002","E85.410","K06.808","J95.501","J95.809","H81.902","D21.000x007","Q38.303","K12.003","C30.002","Q30.800x008","E85.400x006","K13.200x009","J38.000x021","J95.807","Q18.900x002","G47.303","Q30.201","S00.401","J38.000x022","S10.101","D14.100","H61.902","K14.000","J38.721","Q37.900","C14.200","K13.009","C79.502","K00.200x002","I86.000","C47.000x010","D18.000x506","T17.200","C02.900x002","Q37.400","K00.502","D36.701","C09.800","K10.202","A36.200x002","I89.000x014","K12.001","J95.400","H83.200x002","K06.000x002","D14.004","K07.007","J39.001","K03.201","J33.803","Q36.900x003","C32.103","J38.711","S02.500","S02.600x081","C11.301","H65.901","C79.505","K03.400","Q89.800x905","M85.000x083","S11.800x082","C31.800","K07.012","C11.102","D17.700x020","H93.001","K00.608","K10.200","S01.400x011","C47.000x007","J36.x00x001","H83.000","J39.204","C41.006","C78.301","C79.800x824","H74.300x004","J38.712","S13.500x010","S09.903","D14.003","K05.100x013","K07.200x011","H66.102","S01.804","K14.900x004","K11.903","S00.800x055","S01.200x011","K12.100x013","S02.600x051","B49.x05","R49.202","D10.200","K13.711","C00.401","K07.100x010","S01.300x031","C09.901","Q36.906","A18.400x019","K14.300x001","K00.400x002","H60.100x001","C32.104","D10.000x004","D48.200x004","C43.200x003","K12.200x017","A36.000x004","B00.200x001","J38.000x002","J39.201","J39.207","K04.802","J38.301","D16.404","C32.200","H61.800x005","C13.101","H83.800x003","K00.200x010","S01.500x042","B00.203","S02.802","S11.001","K13.000x018","D00.004","S13.601","C00.900","D18.100x013","K07.000x008","K10.210","S01.200x031","J30.400","K00.001","K10.100x003","B49.x08","J34.102","S01.000","S02.200","Q38.400","K02.400x002","D16.402","K11.102","C31.900x001","H95.900x001","Q30.000","B44.800x001","J39.200x015","J37.005","K13.500","K02.800x008","Q18.200","J34.812","K00.200x003","K09.200x001","J00.x00x008","J33.801","K07.301","Q36.904","J33.002","R59.000x004","K06.800x013","J33.000x002","S09.905","K13.700x003","Q30.802","Z45.301","K00.503","J11.802+H67.1*","C07.x00","K03.000","K09.204","C79.804","C79.200x008","D37.010","D00.007","Q18.100x009","C41.012","J32.800x003","J32.800x007","H60.300x003","G47.300x035","D48.200x003","H83.300x001","C06.902","K12.215","K10.300x003","J34.001","Q27.800x028","K00.605","Q38.300x003","E14.600x031","K13.300","K13.000x023","K11.803","H74.802","J32.200","S10.000x003","M95.203","C02.000","J34.800x009","H66.301","C10.101","A69.000","H90.100","A18.200x005","J34.000x010","J37.003","K04.801","C00.200","H92.100","B49.x10","S15.800x003","K07.603","T81.800x008","H70.101","K14.004","K13.000x007","Q16.900","K00.400x004","J34.002","D10.504","J34.803","S00.800x056","D02.000","J39.300","K11.203","C41.010","D18.003","S01.803","S02.810","J39.225","K10.203","J95.800x001","H68.100","J00.x00x004","K13.210","K10.103","D44.600x002","C03.001","K06.807","J31.100","J32.903","J38.310","Q30.800x007","C14.003","B48.100","J06.800x001","T85.607","D18.100x021","D10.500x002","T17.000","K13.400x001","K07.200x002","R49.001","T85.800x804","J38.600","K11.201","J39.216","K13.700x019","D17.700x003","H60.000x005","H60.901","K07.100x014","D18.001","J33.805","K05.100x008","K09.800x005","K03.800x005","Q38.000x007","D36.700x005","S01.300x081","C71.900x010","K13.200x006","K00.200x005","C49.002","T27.401","S00.900","C02.101","J00.x00x006","H60.300x006","D37.000x006","D10.500x001","H95.800","K10.000x004","C00.001","R04.000","S13.401","Q16.102","T81.800x013","J10.800","K14.003","K00.207","H91.000","Q35.500","Q30.100x001","H65.200","G47.304","Q18.100x008","Q38.004","H90.801","J03.800","C77.005","Q75.805","C31.300","J32.101","K10.206","M95.001","D00.005","C79.800x826","C00.400","E11.600x031","J39.205","K03.203","Z42.005","J11.100x001","S02.600x021","K13.011","S00.002","K10.100","K12.110","K08.808","D16.400x019","K10.213","J35.801","S00.500","K00.500x002","H72.000","K09.900x001","J35.805","J34.800x033","K03.500","D18.000x504","D11.900","B49.x09","Q16.000","D10.300x005","Q17.300x004","K06.803","C43.200x001","D38.500x001","C06.200","J31.203","C41.011","D18.000x505","K13.402","M95.003","J32.905","D04.300x002","J95.000x001","C04.100","K00.602","K11.804","T28.000x002","M95.007","Q16.400","J95.806","C06.100x004","Q38.301","T70.100","K09.000x005","C09.100x003","K06.200","C11.300x004","K13.014","S01.506","J32.006","J39.217","K14.300x004","H66.900x002","J39.223","C49.004","C32.102","C79.835","J38.000x012","Q85.905","S02.412","Q18.102","D14.002","A52.700x004+J99.8*","K11.302","C11.001","Q30.300","Q18.800x003","K07.902","K07.005","H61.802","H73.102","J31.004","A36.000","K13.200x004","C08.900","C41.000x025","Q67.402","J34.006","K13.010","S02.600x091","C31.000","Q89.800x904","K03.300","Q17.801","S01.401","K09.100x004","R06.700","J01.400","K08.101","M95.201","K04.200x003","J38.703","K13.200x010","K10.000","H83.301","J38.401","S01.503","S09.101","Q37.500","C76.000x002","A18.200x002","K06.100x003","K10.301","C78.300x008","K10.809","B37.003","K03.603","Q85.900x035","Q17.300x002","L04.003","A66.501+J99.8*","K04.803","S02.201","A52.700x003+J99.8*","K06.900","S03.000","C78.305","K12.112","J01.100","K07.008","T28.502","C41.100","K13.015","Q67.400x906","Q18.200x003","C02.300","K14.000x006","D48.200x002","H60.501","S01.200x091","J31.005","C41.000x027","A36.000x003","M95.210","H65.000x002","C00.002","S10.901","J34.800x034","S13.500","H91.900x002","H70.200","K03.200x002","S02.803","J95.800x013","J34.804","J33.001","C79.800x844","K12.200x011","S00.400","D37.014","K13.200x007","C03.101","K11.200x011","H70.001","B37.002","K03.204","S02.600x031","D22.000","J38.000x006","S03.200","K14.807","J32.906","D00.000x008","D18.100x010","K05.103","J10.100x004","K12.217","D16.410","Q18.800x004","K12.207","H69.900","D17.001","K04.500x001","K11.400","K11.604","B44.804","J33.802","C79.202","D18.000x510","K14.301","K02.400x003","S01.300x071","K04.401","C00.600","K11.500x003","K13.700x009","K01.000","Q18.101","Q67.200","K11.400x003","D38.507","J39.208","S09.200","K02.000","S00.300x051","Q18.500","K03.604","K07.000x002","K11.300","K12.202","B05.300+H67.1*","S01.001","J38.701","K10.214","C00.404","C78.303","S11.003","E14.600x032","K11.800x002","J35.300","M95.209","Q17.301","Q89.202","M95.204","S13.501","Q35.302","H80.200","K12.209","T18.000","T86.802","C79.500x004","Q38.001","S02.800x003","Z43.001","D02.300","K12.213","S01.500x001","S15.004","S19.800x002","B08.501","D10.200x002","Q75.900x005","K03.300x003","H60.000","D18.100x007","Q31.900","Q16.401","C43.302","C04.000","K14.500x001","Q31.803","C01.x01","J03.000","K05.204","C10.200","K02.001","H74.300","H73.804","D38.500x005","H73.801","C43.300","B87.300x002+J99.8*","H91.200","C49.005","H80.000x001","D11.000","H65.400","J39.200x008","Q30.805","S01.900","J38.500","K06.802","D18.000x808","B37.000","C10.900","S03.301","S01.505","D00.009","Q17.002","T17.300","T16.x00","H60.400","S02.400x005","C09.100","H70.002","K13.700x021","Q35.101","J09.x05+H67.1*","K04.901","Q27.800x030","K13.704","Q18.807","J95.000","K13.700x010","K03.900","K00.205","K05.300x002","K07.110","Q37.100","H60.502","K12.216","Q38.600x001","H74.101","D37.000x001","J02.000","I88.104","K12.214","K11.101","Q85.900x037","G47.300","H91.900x004","K04.700","J38.307","Q38.501","C78.300x005","K08.000","S02.600x041","K13.004","K08.103","Q18.400x004","D18.004","J02.903","H60.000x004","J38.719","K13.207","K07.901","H61.801","D37.000x014","C00.500x005","J33.000","K00.201","H90.500","C78.300x006","C79.800x843","J34.008","C77.008","D10.301","K13.600x001","Q27.800x036","K00.700","C02.900","C44.200x001","K04.007","C47.000x009","K04.300","K09.000","T18.001","C79.500x007","H92.000","K14.900x002","J95.805","H60.801","K07.100x017","H60.500x006","D04.201","H61.001","K00.900","C31.200","C79.832","K07.200x013","C01.x00","K14.800x012","D48.200x007","Q16.501","K03.601","D04.200x001","C11.201","K12.210","A18.202","H90.400","D00.001","J00.x00","K13.700x004","J39.101","J34.800x004","C06.102","K04.600","D03.401","K12.200x019","Q89.800x906","S09.800x002","S08.100","D37.016","S09.906","Q67.401","J33.100","C30.101","K13.100","D14.000x005","H83.200x003","T17.200x001","J38.400x004","S00.800x053","C10.102","C78.302","K10.800x011","K13.000x017","D36.702","C32.300","D18.000x511","K14.002","K14.300","K14.302","D38.509","J38.700x009","J31.000","K09.100x006","B36.902+H62.2*","C11.202","H91.801","H70.800","Q18.804","H91.900","Q85.900x031","D03.200x002","K12.211","C71.900x009","H90.300","J39.003","C04.900","J32.802","K07.201","K10.900x002","K10.801","S00.800x054","B44.200x001+J99.8*","H70.003","H72.001","T27.402","J34.801","B08.802","K11.500x005","K07.600x001","Q37.300","T28.000x003","S15.301","K06.800x012","G47.300x001","K04.006","K09.203","Q75.200x001","K09.202","K11.901","K13.602","S09.801","C06.101","J02.801","C30.004","S00.400x052","C79.800x812","K03.103","C12.x00x002","B37.200x005+H62.2*","K05.000","D14.000x006","K07.000x009","H71.x04","J34.807","K05.203","H69.800","K02.800x002","K12.203","J39.200x020","K14.000x007","S10.002","J38.402","D14.103","T16.x00x002","H66.101","D16.409","K00.000x003","J02.902","R43.800x002","J39.222","Q18.104","K06.901","D21.001","B49.x06","D18.000x501","K14.800x010","S03.000x001","Q31.802","D17.700x007","H61.100x009","E85.402","J33.800x002","H90.502","D10.701","J30.100","C03.100x002","H66.001","J34.810","T27.000x003","D10.503","K10.212","K00.206","K05.400","H60.900","K11.202","K05.000x002","K06.810","K13.702","K08.302","H80.000x002","H71.x01","D17.700x006","S01.300x061","B08.000x003","S03.400x001","Q38.801","D16.403","C49.000x004","C02.201","D16.401","K13.204","J11.100x004","C44.400x004","K02.800x003","D11.702","J38.714","D16.407","K04.200","C14.800","J39.215","Q17.501","K13.715","J32.302","J39.900","S02.611","H83.801","K13.700x024","J32.201","K04.001","D23.300x004","J04.002","J37.004","J31.201","D00.013","H80.800x001","C79.201","K13.000x012","D37.002","J38.102","K09.807","D22.200x002","K09.809","B48.300x002+K93.8*","J38.707","D11.900x001","K14.808","K08.300x002","Q32.000","K11.801","C02.400","D18.000x823","Q38.003","J04.001","I88.900x007","H71.x00","Q67.405","S09.900x006","C05.000","K03.600x001","K13.209","K00.603","H91.001","C76.006","S00.500x051","K12.100x002","R07.000","R49.000","J38.700x013","H65.900x001","G47.300x037","J32.000x009","Q75.400","K00.402","H91.100","Z42.010","D37.000x004","S00.402","K11.301","J35.808","M95.207","Q30.001","K07.100x015","Q17.500","K10.102","H61.101","H61.100x005","J35.901","Q38.500x006","T18.002","S01.300x012","C10.800","J38.311","D14.007","Z42.000x015","J04.000x006","Q38.305","J34.004","B44.800x007","Q38.600x004","K09.801","C00.101","C49.001","H71.x02","J38.300x018","C32.900","C14.800x005","H61.102","J06.000x002","H60.401","K12.301","J38.709","H68.000","D02.301","S13.500x004","K13.700x025","K10.207","J11.102","J01.900x003","S00.500x052","K12.117","K09.003","S11.800x081","K07.200x014","H61.100x006","C77.000x005","K03.300x001","K08.805","K10.803","K05.100x005","J10.100x002","D04.300x001","C41.000x021","T28.501","K04.500","C00.304","K09.201","K05.500x003","S13.500x003","C79.803","B44.800x004+H62.2*","Q31.200","C47.000x008","C06.100","D10.401","K11.200x014","S00.804","H83.200","Q37.800","Q16.103","Q18.805","Q35.500x004","C41.002","K14.900x003","K07.000x013","M95.205","J39.213","S02.400x003","K13.700x001","H83.302","D10.000x002","C44.300x006","J38.313","B36.903+H62.2*","Q18.700","A69.100x002","Q35.502","K10.201","H60.503","H93.301","S01.300x051","S00.803","C00.302","H61.100x002","K12.200x012","D10.307","K04.201","J35.000","K11.800x010","A18.800x025+K93.8*","H60.001","C77.004","C01.x00x003","H81.200","Q38.200","K08.801","J10.803+H67.1*","K13.202","Q38.500x007","T90.800","Q30.800x006","Z45.304","K06.809","J32.200x004","C05.900","K03.801","K13.001","K02.200","K05.100","K12.303","Q67.406","K07.202","K12.106","J02.900x005","D03.400x002","Q67.400x202","K00.800x002","K07.009","D18.000x021","J32.800x001","A69.000x002","H73.101","Z46.100","K13.700x022","R04.801","S00.501","J39.200x016","H70.100","Q36.902","C08.100","K11.605","H73.001","I88.103","S13.500x009","D10.306","J38.716","S19.900","Q17.400","K13.700x006","Q17.100","S02.501","J38.710","Q17.800x004","A18.601+H67.0*","K12.102","S13.500x008","J32.902","H90.700","C02.100x001","K10.204","S13.500x011","Z46.300x001","Q38.100","S01.502","J38.706","Q18.100x003","K10.804","K12.304","A18.201","D36.700x007","H61.804","C44.307","Q16.300","K08.802","K07.000x007","C02.300x003","K11.700x003","K03.105","Q30.804","K03.202","C00.500","M31.300","Q18.003","K04.000x007","J32.200x005","K02.400x001","H83.200x001","D00.000x005","K05.600","M95.006","K13.000x014","C09.900","D37.000x002","K14.300x003","S12.813","Q37.200","Q38.502","K12.103","K03.700","C49.000x005","Q38.600x002","C02.800","Q32.101","J38.000x011","Q31.800x003","J38.720","C11.300x006","K10.802","D48.700x025","Q38.400x002","S19.801","D21.000x002","K00.600x007","J39.220","Q38.701","K11.200x009","S01.500x051","S02.211","K06.800x014","Q27.802","H61.806","C41.007","C11.900","H60.300x005","D37.018","K00.601","K03.602","D37.000x015","H71.x03","D14.008","K13.700","D10.601","D18.100x027","H70.102","H70.103","D16.406","K10.800x002","H81.901","S13.500x005","K03.102","C76.004","K07.302","K14.802","D18.102","B08.500","Q18.903","Q36.004","J37.100","J34.806","C10.400","C11.300x005","J34.106","J01.001","T85.606","K10.209","B02.801+H62.1*","D37.012","C00.800","G47.300x036","K13.400","S09.800x003","J32.900x008","Q18.800x001","D10.602","K13.500x002","C11.200","J34.813","S02.912","S17.000x002","J34.800x019","Z46.400","S10.001","K13.005","Q18.806","J95.000x007","H93.201","K05.104","Q16.500","J38.200x001","J32.904","H92.200","H60.303","I88.102","H60.301","H65.400x001","H61.100x007","J35.807","C30.103","C08.900x001","S10.102","C32.100","K08.203","Q34.801","C11.801","D00.003","J05.000","C14.002","K08.900","K06.804","Q17.900","K05.100x011","H93.100","D14.005","H60.300","D38.003","K07.305","C00.300","K05.106","Q27.800x040","H61.805","K03.106","K07.300x009","Q35.902","K00.501","K07.103","J32.100","J38.300x016","K14.805","K13.603","K00.000x004","S12.815","D37.000x008","Q17.300x006","D10.300x007","H83.800x004","J01.000","G47.302","K13.203","Q18.800x002","Q38.000x006","C79.504","K13.006","S00.801","S17.001","D37.009","H66.200","M95.208","D10.309","J34.811","K04.902","D00.012","S11.100x001","H90.200","J01.800","H81.101","J38.312","H65.900","H83.101","S15.801","K03.104","H70.000x007","K12.116","K13.007","D48.200x005","H95.900","D23.200x008","J38.000x031","H81.800","K04.702","H95.000x001","K09.805","C41.009","J32.800x009","C03.900x001","H60.400x004","J02.900","K02.800x001","K08.202","J38.702","D23.300x003","S02.812","H60.000x002","C77.003","Q17.400x002","K11.210","H81.400","S02.711","J32.400x001","D10.100","D22.401","C03.900","K10.001","C31.100","S17.800","J38.303","K13.700x007","C32.800","K09.808","S15.005","B00.201","C43.201","K07.600","K00.200x009","Z41.103","K13.700x011","Q17.200","J01.901","D37.007","J32.901","D48.518","C44.304","Q35.501","K09.102","S09.902","H81.100","H60.500x007","K02.800x006","K00.101","J10.100","Q31.806","Q87.004","J32.102","C06.800","K05.201","K11.602","S02.400x001","S00.003","C11.101","D03.201","D37.013","Q36.900","S08.801","K02.901","H93.103","K03.800x002","T85.800x810","K04.100","D18.000x809","C11.302","K13.000x006","S01.500x022","K13.208","S01.300x002","K00.400x001","J02.802","K07.205","K06.000x003","D37.000x013","C41.000x018","Q27.302","Q35.100","Q38.601","T27.000x002","H95.102","H70.000x009","H93.200x005","R49.201","K08.201","D38.501","H65.300","Q17.303","Q27.800x027","D38.504","K07.010","H65.300x001","C47.000x006","J34.800x020","K12.204","C41.000x023","J34.107","H70.201","J32.800x006","K07.108","D37.015","S08.800","K13.700x013","K03.800x001","Z45.801","K11.503","K04.000x008","D21.006","D17.000x003","J04.000x008","C79.801","K00.203","K11.600x005","D14.000x007","H73.900","C78.300x010","H80.900","K11.805","K00.202","J32.300","Q18.300","K10.002","H72.900","D48.200x006","D09.701","H83.900x001","K00.600x006","J39.000x001","D86.802","K09.001","B44.800x006","D48.519","J34.802","K07.100x012","K11.800x007","A18.805+K93.8*","Q30.800x004","J06.900","J10.100x001","J34.007","K10.808","K13.101","C41.004","K13.205","K07.200x003","K13.705","S02.500x002","J38.302","C10.800x002","C30.102","D04.000","K12.205","J11.100x003","J33.804","D10.603","K13.200x011","S01.301","D23.303","J30.000","C05.900x002","Q67.403","C31.801","J35.806","D00.000x007","S15.300","K09.005","K14.400x001","K13.012","D21.000x008","K13.714","K07.000x004","Q67.300","C43.400x002","D10.402","J02.901","D10.700","D14.100x002","K00.000","K05.300","S13.500x007","J32.003","Q67.404","S15.002","K05.500x002","S11.900","T85.800x811","C13.100x002","J39.200x009","S13.403","K04.703","K03.100x001","S01.200x021","J06.900x001","K10.101","C14.800x004","K02.800x007","D38.503","S13.400x005","J38.708","K12.000x001","K12.206","Q38.500x005","C76.002","D38.002","K13.206","H61.200","S12.814","J38.300x011","K11.603","C06.901","C00.102","K10.800x010","D18.101","D37.001","K11.800","D22.302","J03.900","M35.900x011","D10.502","K10.000x002","H93.102","K10.805","Q17.803","K11.000","K11.402","J34.103","K14.803","K04.101","D23.200x002","C76.003","J32.900x011","D02.302","M95.005","H60.200","K00.300x002","K05.400x002","K05.500x005","D18.000x508","K00.600x008","Q37.000","C44.201","K00.301","K11.303","L02.000","K08.204","H95.101","K06.800x009","K13.013","S00.001","E85.401","S10.902","D48.701","T17.101","C30.000","K07.200x001","S15.800x002","Q16.301","D36.700x004","D38.505","K09.100x003","Q32.100","D16.400x018","Q38.304","K12.109","I77.001","G47.301","C46.200","S00.300","Q30.800x005","J39.811","D14.000x009","D10.308","S10.801","B87.400x001+H94.8*","K10.302","C11.800","H70.000","E85.405","K13.403","M95.206","D18.000x858","C08.800x001","H71.x05","K11.800x006","K12.115","S10.900","K13.700x023","D22.201","J31.200","Q36.905","K09.002","J38.705","K12.002","S03.100","Q36.903","K07.100x009","G47.300x031","C00.200x002","Q30.200x001","J34.108","H61.104","L04.001","J34.000x004","K02.300","C13.000","C79.830","S01.300x011","J38.700x003","S19.800x004","C10.300","C13.901","K04.400","C77.006","A18.802+K93.8*","H91.200x001","J34.800x006","B37.001","J34.100x008","S15.001","J32.400","D48.702","Q75.801","D18.000x807","I88.101","K00.604","K06.100","K00.002","J38.700x007","H95.900x002","Q17.000","Q38.002","K12.105","Q75.804","D37.017","K07.500x002","H65.101","S15.900x001","E85.409","C06.100x003","J34.104","A18.205","K07.006","Q18.802","D38.500x003","K11.900x004","Q31.100","J95.500","S00.004","D38.502","K09.205","T17.002","J31.002","C00.500x003","D21.007","J39.809","J95.803","C30.005","S09.904","D37.003","K11.600","Q35.301","J30.200","H74.400","K07.000x011","C02.300x002","J34.101","J04.005","Q27.300x007","K00.401","Z42.000x019","S02.600x061","C11.200x002","Z42.007","Q38.700","C14.000","J32.000","J38.715","H90.000","Q89.800x908","K12.302","D48.200x008","Q16.901","Q18.600","H60.100x002","S11.700","D37.005","K10.100x001","J04.000","K11.600x008","C08.000","K13.710","Z42.002","K06.100x001","K13.016","H81.302","C11.300","K14.401","S02.600x011","K12.114","D38.000x001","S01.200x092","C00.403","Q27.800x021","C44.305","C00.100","S01.700","Z42.000x002","R59.900","C06.100x005","J38.700x001","J32.301","B49.x07","D37.006","S02.600","D10.305","C43.000","J38.000x032","C39.801","Q36.006","D14.102","H74.000","J35.800x008","S17.801","C47.000x004","C02.200","Q35.300","J32.004","H81.303","A36.200","C76.000x007","Q31.800x004","D03.301","K13.400x004","H73.803","Q31.500","C11.100","H61.103","H80.100x002","C77.007","R44.201","K00.204","D17.002","J32.900x007","S00.700","C41.008","J38.400x003","K07.204","D21.004","Q38.600x006","K06.000x004","K05.202","H72.800","K11.501","K09.806","C41.005","J39.221","D10.400","J36.x00","Z45.303","J39.209","K08.809","Q85.900x012","D10.302","A18.803+M63.0*","D02.000x004","J32.300x004","J02.900x002","K12.000","Q31.801","K04.000","C79.800x845","C79.800x806","K07.101","K13.709","C76.005","D37.000x011","K14.001","K13.008","M95.100","H66.900x003","A52.703+J99.8*","H91.300x001","H70.900","K07.300x003","D23.301","K00.801","Z45.302","D36.700x006","C10.000","A18.203","J32.001","D37.019","K02.500","S11.201","J32.100x005","S13.400x003","R04.100","K14.500x002","H73.100","C06.001","H65.102","Q17.001","D38.506","J32.000x005","C41.000x020","T70.000","H93.900x001","J39.002","Q38.500x009","C00.500x002","C41.000x019","C09.902","C11.901","C32.000","K14.100x001","H61.300","J37.002","E10.600x032","C02.200x002","C03.000","C79.834","J39.202","D14.000x010","H61.803","K08.804","K14.804","S02.411","H74.801","D18.100x011","S19.802","K10.800x006","C14.800x007","K14.800x013","T17.001","J32.800x002","B02.800","C30.003","H93.101","J04.003","K00.200x001","J01.900","Q30.101","Q35.901","K04.800","C47.000x011","K07.300x007","K11.205","J95.005","Q36.100","I77.003","C44.302","D37.008","A18.800x006+K93.8*","Q30.801","D18.000x844","H60.302","H74.900","J03.900x001","G47.300x033","A69.100x001","M95.202","J39.210","K11.200","K14.600x001","S10.003","J31.202","E11.600x032","J38.000x005","K07.800x001","J30.300x002","Q27.800x024","K12.100x012","K12.305","R06.501","K02.900x001","A18.400x018","C43.401","D18.000x503","J32.900x010","J38.300x015","C44.401","D10.501","D48.200x009","H72.200","H83.000x001","J34.800x001","M31.301","J38.700x017","T16.x00x001","Q27.300x010","J36.x00x003","Q18.001","Q36.000","C39.000","K05.200x002","D11.701","H80.100x001","K07.203","H92.100x001","K07.200x005","J35.803","K13.002","J38.300x013","K07.011","D21.002","J38.304","K09.000x007","D22.400x002","C14.001","H69.000","J34.105","J04.200","K11.207","K07.002","C76.001","K06.100x002","D04.401","J34.809","S11.002","C32.100x004","J39.218","K07.000x012","C09.100x001","J35.800x009","J38.704","J04.004","K13.401","H70.800x001","H93.200x002","D16.405","K03.101","K07.100x016","C13.900","S02.813","K06.805","K11.401","D36.703","C44.000","J38.309","C79.800x825","D00.008","S01.400x031","C47.000x005","K10.000x003","D38.000x002","C79.800x833","C13.800","K11.200x012","S17.000x001","J04.100","S09.900","Q38.300x005","K11.404","Q31.804","H83.100","D23.201","D38.500x004","S01.504","D10.000x003","K07.600x003","K11.806","D48.700x007","C06.100x002","H70.004","J03.900x006","K11.902","Q38.500x003","H66.400","J34.800x002","D18.000x845","D10.900","K09.103","Q36.003","K10.800x008","S12.803","I88.900x004","K13.700x018","K02.100","H90.501","K04.701","Q89.800x903","J38.000x001","S10.004","A36.000x002","C05.200","D38.508","K11.204","C41.003","D14.001","K14.809","H81.400x003","Q17.302","H61.901","D17.700x032","K07.102","J95.002","J32.800x004","J38.101","J95.004","K03.001","Q16.101","Q17.300x005","J32.800x011","J32.900x009","K11.700x001","S02.401","J05.100","D00.002","K10.208","K07.100x008","Q16.200","D17.700x021","Q35.900","C03.100","D02.002","J37.000","C79.500x016","Q35.907","S13.402","Q36.001","S13.400","J38.300x008","K11.208","Q35.903","J32.005","K04.900","S01.802","Q38.000x005","D18.100x004","K09.804","Q36.002","K08.102","H60.100","S09.901","D10.101","K13.600","J03.901","K07.004","S02.700x004","B37.800x084","Q67.407","C02.100","Q18.200x004","S03.400","S11.004","J38.700x027","C13.200","A18.804+K93.8*","K05.301","D02.303","S00.000x053","J39.224","H60.300x002","Z42.008","C08.800","J34.005","D10.000x005","H90.600","D00.010","C07.x00x003","A36.100","D37.004","H81.900","K07.100x011","K11.802","K12.201","K07.900","J11.100x002","C00.301","K11.206","J38.200x002","J39.214","C00.402","J10.101","K07.903","K08.806","D23.200x003","K14.400","C13.100x001","Q38.000x003","J39.206","K10.211","K11.601","K07.303","J01.200","C30.001","K11.100x002","K10.901","D03.000","K07.106","Q87.006","E34.800x005","C77.001","D14.101","S09.907","S03.400x002","J36.x00x004","J38.400","K07.300x005","S15.003","H74.300x003","J38.305","D37.000x009","D16.500x002","S13.502","J35.802","J33.900","H93.800x001","H73.802","K13.000x001","S15.200","E10.600x031","H81.301","H91.901","S10.700","J34.805","C00.303","S01.500x021","K13.700x026","Z42.009","R49.100","D38.001","J39.212","C79.203","K00.100x001","Z41.102","J02.905","K07.003","K05.200","J32.900","K11.100x004","H73.800x005","H66.000","K05.100x010","K09.100x001","D10.000","K12.101","H81.000","H73.000","J32.803","H72.101","J38.400x002","C41.001","D10.600","D18.000x507","K07.200x012","K07.304","C03.901","K11.209","C44.300","D37.000x005","S01.400x021","Q17.802","C30.100","S13.500x006","J95.003","H68.100x003","J34.200","Q31.301","K03.401","C44.300x005","Q38.300","K06.000","K12.107","D16.411","J38.308","Q36.005","C44.306","J32.800x008","K14.800x005","S00.404","D37.000x003","J06.000","S02.901","J39.200x004","C79.831","J31.204","K14.200","J35.809","J38.700x021","Q17.000x005","H68.101","K00.600x002","D37.000x007","K07.104","H93.300","D37.000x010","J35.200","K11.701","C03.000x002","L04.002","K13.707","Q89.800x907","D16.400x013","Q18.801","K10.800x012","K06.806","K14.901","K12.200x018","K06.800x015","C14.800x006","C11.000","Q38.802","J10.100x003","C14.800x001","Q35.700","C79.802","Z43.000x002"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCD入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=DA1_group(record)){
        return result;
    }

    if (result=DB1_group(record)){
        return result;
    }

    if (result=DB2_group(record)){
        return result;
    }

    if (result=DB3_group(record)){
        return result;
    }

    if (result=DC1_group(record)){
        return result;
    }

    if (result=DC2_group(record)){
        return result;
    }

    if (result=DD1_group(record)){
        return result;
    }

    if (result=DD2_group(record)){
        return result;
    }

    if (result=DE1_group(record)){
        return result;
    }

    if (result=DE2_group(record)){
        return result;
    }

    if (result=DG1_group(record)){
        return result;
    }

    if (result=DG2_group(record)){
        return result;
    }

    if (result=DJ1_group(record)){
        return result;
    }

    if (result=DK1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合DQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'DQY';
    }

    if (result=DR1_group(record)){
        return result;
    }

    if (result=DS1_group(record)){
        return result;
    }

    if (result=DT1_group(record)){
        return result;
    }

    if (result=DT2_group(record)){
        return result;
    }

    if (result=DU1_group(record)){
        return result;
    }

    if (result=DV1_group(record)){
        return result;
    }

    if (result=DW1_group(record)){
        return result;
    }

    if (result=DZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}