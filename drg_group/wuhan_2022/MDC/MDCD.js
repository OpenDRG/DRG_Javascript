import {putMessage,intersect,SS_VALID} from '../Base.js'
import DA1_group from '../ADRG/DA1.js';
import DB1_group from '../ADRG/DB1.js';
import DB2_group from '../ADRG/DB2.js';
import DC1_group from '../ADRG/DC1.js';
import DC2_group from '../ADRG/DC2.js';
import DD1_group from '../ADRG/DD1.js';
import DD2_group from '../ADRG/DD2.js';
import DE1_group from '../ADRG/DE1.js';
import DE2_group from '../ADRG/DE2.js';
import DG1_group from '../ADRG/DG1.js';
import DG2_group from '../ADRG/DG2.js';
import DG3_group from '../ADRG/DG3.js';
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
    let mdc_zd=["K12.212","H60.503","K06.805","H61.104","D18.101","J10.804+G05.1*","J00.x00x008","J32.800x006","J02.903","K03.300x002","Q38.500x009","S01.300x031","C06.902","D36.703","K02.100","H81.301","K03.800x002","C79.800x833","B49.x08","S02.411","A56.400","K14.300x003","J38.400","C31.801","K03.401","K09.809","K13.500","D18.100x027","K13.202","K12.206","K11.302","K12.102","J39.900","S02.600x081","S19.801","C79.800x812","H70.200","Q75.801","K02.800x008","K07.007","Q36.906","J33.805","D48.200x005","J37.000","J38.300x011","H60.401","K04.901","C44.300","S02.400x003","J34.805","K13.012","I88.900x007","K00.801","K07.305","A69.100x001","C47.000x010","J38.312","J01.901","B48.100","Q38.002","J01.400","J32.000","M95.003","Q17.002","J38.200x001","C49.004","K06.800x013","K07.901","K14.301","D48.200x002","C13.100x002","K06.809","J02.801","K12.108","C00.500","C04.100","S01.802","J34.108","K00.503","C79.500x004","Q31.806","K03.500","H74.300x003","B49.x11","J38.715","C11.800","D04.000","K11.201","Q16.200","C09.100","J95.003","D14.100x002","J34.004","J37.005","C47.000x007","Q18.900x002","H61.802","D18.001","D37.006","B00.203","K00.000x003","Q36.000","S01.700","Q37.400","K11.208","D36.700x004","D16.403","M95.002","A63.003","A18.805+K93.8*","K09.203","H90.100","B26.804","K09.000x005","H70.101","Q31.805","H71.x02","K06.000x002","Q31.800x004","S01.500x042","K13.200x010","J31.201","J34.809","J04.200","J38.719","J95.809","J35.200","D02.302","K13.010","K00.301","C30.003","K00.400x002","D17.700x020","K07.600x003","K13.200x005","K07.000x009","H93.001","K10.800x012","K12.000x001","K12.302","K13.208","H91.000","K12.001","C43.201","J03.902","M85.000x083","K09.807","Q38.801","Q38.300","H90.400","K10.103","C41.010","C43.300","D18.000x809","J01.001","C02.100x001","D37.010","K10.200","D04.400x001","J38.706","D21.005","C08.800","S15.001","K07.008","J95.807","B37.001","S02.600x051","C78.303","J95.001","D36.700x028","D11.702","C79.835","E85.402","J33.003","Q16.101","J39.811","M95.100","K07.000x002","J32.300","J32.200x004","J38.000x005","H70.000x009","C00.800","S13.500x006","S09.800x002","C31.200","K09.805","K10.805","K07.301","K11.901","K05.104","K13.400x002","Q38.300x003","C79.202","D00.000x005","Q30.201","Q16.901","K12.200x017","J10.805+G05.1*","C05.800","J39.001","S00.800x053","S15.003","K05.400x002","Q18.200x003","Q32.000","K12.218","K11.805","K00.601","K05.100x005","H93.301","Q35.903","D10.100","S01.000","K14.001","J39.216","D18.000x808","K08.300x002","J32.004","K00.100x001","D14.000x005","K07.100x012","D38.000x002","E85.401","S09.901","D38.500x004","J39.213","K05.300x002","H83.200x002","C44.304","H65.901","J04.004","C76.003","J32.906","S01.401","H60.200","K07.000x007","K05.201","D17.001","K08.102","K13.700x011","K14.800x005","H61.100x005","I77.001","C06.900","K12.101","J10.803+H67.1*","C76.006","K12.107","S12.814","B37.802","K10.803","A18.200x005","H60.801","K13.700x021","D18.000x503","Q35.502","K00.608","D18.000x823","K08.805","K11.600","J39.200x008","K00.700","C03.900","K05.600","C41.001","R04.801","H68.100x003","D21.000x007","D18.000x507","Q31.100","K05.100x013","K11.800x006","K14.300x004","K07.902","H61.100x007","K13.715","S15.801","J38.700x007","S01.300x081","D38.506","D23.300x003","A18.600","S02.600x021","D18.000x511","A69.000x002","K05.500x005","D37.000x009","C03.100","K07.600x001","I88.102","K06.802","H68.101","H90.000","S00.003","H70.004","K06.100x002","A52.703+J99.8*","K07.100x009","J38.302","D38.507","D23.303","J38.703","H95.900x001","C03.901","H74.400","C11.300x001","Q18.800x001","M95.206","S00.501","S11.001","S01.506","H91.901","S15.301","K13.205","Q75.804","Q17.302","J10.800","A18.804+K93.8*","K07.004","H60.300x005","J39.217","K13.200x004","C00.002","H60.901","J34.800x004","H61.100x009","Q18.806","H74.201","D10.501","M95.210","Q30.101","D16.407","C44.307","J38.305","K04.801","Q38.500x002","H81.400","K13.400","K13.700x001","Q35.900","K03.001","M95.005","K12.217","J31.200","J04.000x008","C30.004","S00.804","S02.600","H73.101","D18.000x506","J39.200x015","K01.100","S01.200x011","K07.000x004","C79.800x844","K13.703","N80.800x007","K11.802","C03.001","C00.900","R49.100","C00.500x002","J32.800x003","D37.004","J10.100x001","K12.109","C03.000","I77.003","J33.804","H61.000","H70.800x002","D10.602","C44.300x006","K14.900x003","K00.204","K13.000x014","H72.100","S02.611","D21.000x002","A18.400x018","D36.700x007","A36.200x002","A36.000x003","A18.802+K93.8*","C14.001","C47.000x005","D11.900x001","H60.300x006","K12.214","C03.100x002","D37.015","D86.802","Q37.500","S02.800x003","K13.000x001","K04.802","J33.800x002","K06.000x003","H61.101","D38.500x001","Q37.900","E14.600x031","J35.809","K09.204","K14.600x001","D14.004","K02.000","H70.001","S00.801","K14.900x004","B49.x10","K13.101","K13.705","K00.203","H70.800","J34.106","Z45.302","Q35.500x004","J00.x00","Q18.200","K07.100x015","J34.000x004","D10.200","C79.802","H61.805","S00.800x054","J33.900","K07.200x013","C10.800","K13.002","K07.200x012","C02.000","D14.001","Q38.301","D38.509","D18.100x010","J30.101","K00.200x002","K12.106","C13.901","K03.101","H65.300","K06.808","K06.000x004","K13.700x022","C78.301","Q30.100x001","S00.900","H90.502","Q36.904","S02.912","J32.100x005","K06.806","K07.009","S02.813","K12.105","Q38.500x003","C32.102","K05.200x002","J38.002","K10.201","J31.004","H90.600","K02.001","K13.700x026","Q18.003","K11.205","D10.504","C14.002","J34.005","J95.800x001","Z45.301","C00.600","J02.900x005","E85.409","J38.400x003","K14.300","Q75.900x005","D37.000x007","D10.307","J95.004","K12.215","S00.700","M85.000x081","K07.100x014","M95.202","K00.202","K12.110","Q17.802","B37.003","J32.800x004","D10.200x002","H95.102","S13.500x009","B37.002","K03.203","Q38.600x006","B49.x06","J31.003","K13.005","C46.200","J95.800x010","C08.100","J38.704","Q17.803","K06.200","K03.300","S13.500x003","K11.701","Q18.600","H83.200","K13.016","K14.800x003","H93.103","L02.000","K11.401","Q38.600x001","D00.001","K09.806","S01.301","K10.800x002","K13.403","K14.102","A42.801","T17.001","K07.200x002","J34.104","D10.502","D44.600x002","Z45.303","J95.806","H69.900","K04.007","J34.803","Q17.400x002","D11.900","E11.600x031","D21.000x008","H61.105","C49.000x005","Q17.900","J34.103","H90.200","K00.200x005","M31.301","C09.901","H73.100","Q36.905","K06.810","E85.405","K07.300x007","C00.101","D18.100x004","H91.900x002","C11.302","D17.700x007","J32.802","S19.800x004","J38.000x012","J38.711","J35.800x009","Q17.000x003","D38.500x003","J34.807","J32.302","K13.700x003","S00.403","K13.603","D37.000x008","S02.200","Q85.900x037","C10.300","J11.100x002","J33.002","J37.004","J95.000x002","M95.209","K08.803","H83.100","K00.200x003","J38.401","D00.003","H72.001","S13.500","H70.102","J38.710","K08.202","J32.800x002","Q38.400","D18.004","K12.112","Q16.102","C06.901","H91.100","J39.224","Q38.500x005","S00.300","S02.812","S09.900","J04.005","S11.003","M95.208","Q16.301","C78.305","Q38.600x002","S03.100","D10.000x002","K14.901","K14.302","T17.101","Q36.902","H60.302","A48.801","S02.901","K07.000x012","S10.102","K11.206","K12.207","Q67.407","Q67.401","S03.000","K07.900","Q36.003","D38.001","Q87.004","K07.300x008","Q30.800x005","K09.100x003","C02.201","H93.200x005","H93.100","K07.602","Q31.900","A36.000x002","J36.x00x001","J38.700x009","Q38.200","Q38.305","J32.000x005","K13.001","K11.503","J04.001","S02.700x004","C13.101","H81.800","J36.x00x003","J06.800x001","K13.003","S08.800","H60.500x006","D38.000x001","S00.004","J38.300x016","K08.802","J32.800x011","C47.000x006","D10.306","D16.500x002","H65.900x001","A52.700x003+J99.8*","C44.306","C10.100","M95.203","K13.206","Q31.500","D48.700x007","H71.x05","H81.902","K04.100","H83.000x001","H61.801","S12.803","K06.800x015","H66.900x003","K07.205","S11.800x081","C14.800x005","C30.103","J32.900x011","J38.300x008","D37.017","K13.700x025","C41.000x018","Q27.802","B44.802","H91.200","K13.209","H93.200x002","D02.301","Q30.801","C43.302","K05.301","D37.019","J39.225","K00.300x002","K14.000","B26.900x001","S00.800x056","A18.202","K07.110","C32.900","H61.803","K14.300x001","D37.016","T70.000","A18.601+H67.0*","C79.203","K11.800","J38.311","K00.400","J39.206","H81.200","J34.810","C32.100x004","D21.007","S10.900","Q30.805","H61.100x006","B49.x09","C13.200","H92.100","S02.803","J35.804","D04.300x002","K11.300","J32.201","K06.100","K13.000x012","R59.900","H60.400","Z41.103","H65.200","J01.900","K07.109","D17.700x003","K11.200","K11.700x003","S02.600x061","K13.702","S09.101","C04.900","S11.900","K12.210","J38.721","K04.101","K11.806","K00.200x009","D10.301","J03.900","H65.900","J35.805","J04.003","C79.804","D22.201","Q27.300x007","D00.005","S01.200x021","S13.500x004","K04.401","C79.830","H93.101","C77.005","J04.002","K14.802","H83.200x001","K05.100","S11.002","C01.x01","J38.720","C00.102","C49.005","D10.302","D10.900","C10.102","K13.400x001","K10.901","E10.600x031","C32.000","D21.002","Q85.900x012","S10.000x003","H60.900","D18.000x508","J34.800x009","D16.400x025","C77.004","D48.200x009","S13.400x003","Q17.300x006","R43.800x002","K03.105","T81.800x008","C79.504","J95.005","C14.800","C78.302","S13.502","K13.000x023","D21.004","D22.301","S09.800x003","D10.305","Q36.005","C00.302","K09.000x007","T18.001","C02.200","Q67.405","Q18.802","C03.101","C41.000x023","E85.410","K06.100x001","H91.900x004","J39.200x016","J35.800x008","K07.102","C14.800x004","K07.006","K13.201","B37.800x088","S01.300x071","J33.801","C47.000x011","B44.801","K13.000x016","C30.101","J39.219","S15.300","D14.006","J39.204","S01.503","H60.501","C09.100x003","J95.000x001","K00.207","H74.802","K09.100x004","D16.406","S13.501","S09.904","S02.600x041","K11.402","H80.900","C79.500x007","J31.002","S00.400x052","S17.000x001","T85.800x804","J33.000","D38.505","J38.201","K03.202","J38.600","D37.000x003","M95.204","Q18.804","K11.800x002","S03.501","D48.700x025","K11.100x004","D00.004","Q32.100","H74.300","S13.403","K08.103","C06.001","A18.803+M63.0*","D37.000x004","Q30.804","K13.700x009","J37.100","C13.900","T85.800x810","Q38.000x007","J38.718","K14.500x001","H93.201","J05.100","J34.105","D10.000x003","K04.201","Q38.601","J33.000x002","A50.500x001","Q30.800x003","K13.000x017","C14.000","H60.100x002","J39.223","K11.800x007","H60.002","H70.000","K11.800x010","K07.302","J39.208","S02.400x005","T85.800x811","S01.504","C79.832","K10.101","A54.500","J38.700x017","H83.200x003","Q87.006","S03.301","S17.900","K02.101","H93.300","Q38.400x001","J37.001","D37.007","J01.200","D17.700x032","K14.002","Q18.100x009","Q38.304","C00.200","Q38.303","K00.001","D37.000x006","S02.400x001","C06.101","K11.604","K11.100x002","K13.200x006","K13.704","H91.801","S00.803","J35.100","K13.300","S00.500x052","J39.210","J39.221","J34.003","H71.x00","J31.203","A69.100x003","K00.205","J11.100x003","K10.802","K11.000","S17.800","C41.009","C44.000","J34.102","Q34.801","D10.500x001","K14.809","A59.800x001","K14.400x001","J38.702","C14.200","D23.200x008","C00.300","Q18.001","J39.205","K00.400x001","Q31.800x003","K11.404","D10.000x005","A36.000x004","J32.901","H66.102","J95.400","J70.900","D16.500","K12.200x012","K07.000x008","H81.101","K00.800x002","T17.300","K13.700x023","J35.000","Q35.301","H69.000","A18.201","H74.900","C00.400","K04.006","Q27.800x040","D10.601","K11.202","Q36.900","S01.803","C00.200x002","C06.100x005","C32.104","C05.100","Q89.800x908","J32.200x005","K09.205","T17.200x001","J31.001","S00.802","S15.200","C47.000x008","K03.604","Q18.500","K12.216","J11.100x004","K01.000","C09.100x002","K13.009","D10.401","K04.701","K05.100x008","J05.000","H70.800x001","K07.202","D16.401","S02.412","S01.400x021","D23.200x002","J10.100x004","Q37.200","J32.900x007","J02.901","J34.801","D18.000x807","C09.800","K12.103","B05.800x009","J38.705","K09.808","H60.502","Q31.804","K13.706","J38.708","D14.101","Q27.800x024","C43.200x003","K11.600x008","R44.201","H95.101","Q38.600x004","K13.200x007","K03.600x001","S11.800x082","J39.209","C11.000","J31.100","H73.800x005","K04.001","K04.002","J34.100x008","K04.803","S01.500x022","S19.802","K07.800x001","K13.011","D03.201","L04.003","D44.700x003","Q37.800","D38.003","K05.105","S00.300x051","Q38.003","H68.100","C44.302","Q18.100x008","J30.300x002","Q31.800x005","Q30.300","Q31.301","Q27.800x028","C79.500x028","K05.100x010","Q75.200x001","J32.200","K11.900x004","C76.004","H91.200x001","Q30.000","K09.804","Q18.200x004","J02.902","D03.200x002","C79.505","K00.603","K10.800x011","C77.002","K12.100x011","S09.907","K09.800x005","Q38.004","S00.400","D37.000x002","D22.200x002","J02.900x002","K12.303","Q38.501","K13.700x019","D03.301","H65.102","H61.103","J38.304","D37.012","Q17.000","S02.600x091","J38.400x004","H81.400x003","H61.806","K10.213","H90.501","C00.301","C02.900x002","K11.400x003","K05.106","C78.300x004","J38.701","K05.500x001","S01.300x002","Q18.807","Q30.800x008","J38.000x032","T18.000","H81.302","D22.400x002","M95.201","D00.011","Q17.301","K13.204","R04.000","H60.300x002","D10.309","K04.200","K10.800x008","J38.712","D21.001","D17.002","K02.500","K11.301","K03.800x003","J03.800","K09.100x001","J34.000x010","D48.200x004","C11.202","K10.212","C04.000","H81.100","C11.201","K07.012","C79.800x843","C02.100","K05.000","K09.004","K13.600x001","D48.518","K03.400","C01.x00x003","K10.002","H83.101","D37.001","C02.300x003","C02.000x002","J38.000x022","B37.200x005+H62.2*","K10.205","K07.300x009","S15.002","C11.200","K14.401","B44.800x006","H70.201","Q18.101","Q38.802","H65.400x001","S10.003","K05.203","C79.800x828","Q17.500","Q38.400x002","K11.203","C32.100","H80.000x002","J32.902","C31.000","D37.003","Q36.004","Z42.000x019","K10.206","K03.800x001","K08.302","J31.005","J38.102","H60.000","Q31.801","J32.803","D02.002","S11.700","J31.204","J38.709","H73.001","D17.700x021","D00.006","K05.000x002","H74.101","J39.000x001","S01.500x052","D16.410","J32.900x010","C39.801","J34.008","D03.401","D37.013","J03.900x001","A36.200","C47.000x009","J34.806","B49.x05","B49.x07","H66.900x002","T17.002","R49.001","J04.100","K13.700x007","K03.700","C11.900","D04.200x001","D21.000","K09.000","H61.100x002","K00.602","R49.202","D02.000x003","D38.503","K00.201","C41.000x020","K14.004","S01.200x091","B05.300+H67.1*","S12.813","D18.102","H90.700","A18.203","H91.900","K13.000x007","K07.100x011","Q18.800x003","C41.004","S08.100","C10.900","C11.301","Q35.501","D37.000x010","K04.300","C00.304","K11.700x002","C00.500x005","J95.501","J32.900","J35.802","J34.800x034","K02.901","H92.000","K13.711","Q30.200x001","H73.900","D16.411","C71.900x010","C13.100x001","T18.002","H60.100","K13.013","J34.107","A36.000","A18.800x034+K93.8*","B08.500","K00.002","J35.901","K00.101","Q16.300","H60.500x007","C41.011","C79.831","D14.003","S10.801","K11.303","K14.100x001","J32.904","J32.800x001","K12.301","D17.000x003","C02.300","D00.013","Q30.800x004","J32.006","C41.003","K09.102","Q17.801","Q27.302","C79.800x825","D38.500x005","K04.800","D00.000x008","Q31.803","C08.900","D16.405","K09.103","S00.401","K10.900x002","S01.500x051","K05.102","H65.400","K11.606","C41.000x019","K07.200x011","D14.103","J01.100","J38.500","H61.300","K04.500x001","C78.300x010","A18.800x006+K93.8*","D48.200x006","C02.900","H66.001","S13.500x008","S03.400x001","J38.308","S01.300x011","S10.001","D18.003","M95.006","Q36.901","Q36.001","J10.100x003","H73.804","K11.804","Q36.002","C30.000","Q30.800x007","H70.003","C08.000","Z41.102","K00.402","Q27.800x021","H60.300","C06.100x002","K07.108","J32.002","S13.500x005","H65.101","K04.900","C00.401","J32.003","J36.x00x004","Q18.700","S01.200x031","J38.300x015","K11.700x001","Q89.800x909","T70.100","D37.011","K11.101","H72.000","K13.710","K13.700x013","S00.404","J04.000","J32.800x009","J03.900x006","J39.809","K06.000","K08.801","J38.402","K07.200x014","J32.301","H93.800x001","K12.003","K05.400","J39.207","K08.201","J34.800x033","K06.804","C31.900x001","C13.000","D02.001","K05.100x011","K11.500x003","K02.800x005","J95.805","K08.808","H73.801","K12.305","D16.400x019","H73.803","S02.810","C03.000x002","J33.001","H73.802","J38.700x013","Z42.008","H60.000x002","H71.x03","C32.101","S02.600x011","K13.700x024","Q31.802","K14.003","K03.000x002","Q38.500x006","J32.000x009","K11.807","C79.200x008","K08.101","J39.101","K10.801","J34.002","K06.800x014","C41.006","S11.100x001","J35.806","K07.303","S01.200x092","D18.000x021","K14.807","K13.700","D18.000x510","D37.000x005","C14.800x003","S02.201","K11.204","J04.000x004","K12.000","K05.101","C09.000","Q18.800x004","C09.900","K04.902","J34.001","K02.800x007","C11.101","C43.400x002","B05.801","J30.000","K07.010","K12.202","S02.500x002","D48.200x003","C44.400x004","S02.211","K10.211","J34.200","J36.x00","H83.301","K02.900x001","Q18.903","C06.000","J34.101","J38.700x022","Q36.100","D04.201","L04.001","C32.200","K04.000x007","K13.200x009","K00.500x002","Q37.000","K04.000x008","J39.218","K09.200x001","Q30.900","J34.800x019","K05.200","K09.002","K13.602","J02.905","B00.205","S15.100","J32.400x001","K11.200x014","H61.102","H65.000x002","S12.815","K04.703","K00.604","J32.400","C11.300x004","C00.100","J34.800x002","J38.000x011","B37.000","I89.000x014","C00.000","J95.803","S00.500","K14.500x002","Q17.400","H80.000x001","J38.001","K02.800x006","K05.202","S09.801","J30.100","J38.101","S11.004","D00.008","D14.000x010","K09.202","J38.000x001","C02.300x002","R59.901","J38.300x013","K08.104","D00.007","S01.300x061","D16.400x018","H70.900","J32.900x009","C76.001","J33.100","R04.100","H92.100x001","C41.000x021","H60.300x003","K13.207","Q16.501","J34.006","A36.201","J02.802","H81.900","C39.000","K10.808","A52.700x004+J99.8*","C08.900x001","S10.004","Q18.805","H74.300x004","K09.200","J31.000","C05.000","H83.800x004","C10.400","B02.801+H62.1*","H70.100","K00.605","K04.400","C44.201","H71.x01","J39.200x020","J38.303","Q67.400x202","J39.002","Q27.800x027","J37.003","K10.300x003","C30.100","K11.400","D38.501","K07.603","J38.717","D11.000","H80.200","Q67.406","Q16.000","K12.203","C00.403","H91.001","K05.300","K11.603","K07.200x001","S15.900x001","K11.602","K11.600x005","K10.000","K11.200x009","K12.117","A18.800x025+K93.8*","B44.200x001+J99.8*","D00.010","J39.203","K07.003","S13.500x011","K11.500x005","S08.801","Z42.002","S00.302","K11.210","D10.400","D18.000x501","B37.800x084","C32.300","S10.002","Q27.800x030","H60.001","Q35.907","K12.200x003","C76.000x007","J33.803","K14.000x006","Z46.100","K12.211","K09.100x006","K10.301","D36.700x006","K06.800x012","K14.805","C77.001","Q18.100x003","R49.201","C41.008","C31.800","C11.300x006","H60.400x004","K14.808","S01.500x021","K10.208","H66.000","H72.800","S02.401","B87.300","S15.800x002","D37.002","J04.000x006","K06.800x009","J38.716","H66.301","Q35.302","Q17.303","D37.009","K13.700x004","D04.300x001","C44.200x001","H90.801","K06.807","Q38.000x003","H70.000x007","K08.204","K04.500","C11.102","D10.402","C41.012","D14.002","H95.900x002","S12.910","J30.400","T17.000","K00.000","J35.807","K03.201","S13.400","H72.200","S10.101","H72.101","J38.307","K10.800x010","D16.404","S01.501","S13.500x007","D22.302","H81.000","A69.100x002","C00.001","B08.501","H80.800x001","Q36.903","Z42.010","D18.100x021","D04.401","K03.104","Z46.400","K03.800x005","K12.100x012","D18.000x845","C43.401","Q87.000x301","C41.000x025","H61.804","S10.700","C08.800x001","D14.005","K11.207","Q37.100","C71.900x009","K12.111","K10.302","Q16.500","C76.002","H69.800","H83.801","D22.401","D16.400x013","Q27.800x036","K08.809","T81.800x013","J30.200","K14.800x012","K07.005","K11.200x011","Q18.400x004","K11.605","S02.501","C10.000","K03.106","K12.200x011","H90.500","C00.500x003","J35.808","D00.000x007","C02.800","H95.800","B44.804","H80.100x002","T90.800","K07.011","K03.602","Q38.502","J00.x00x006","D00.009","K13.100","H65.300x001","H60.301","H91.300x001","D37.000x015","E14.600x032","K14.800x010","S02.600x031","C49.001","C77.003","Q17.300x002","Q18.300","K07.204","J32.001","S02.612","J38.707","D16.402","J34.007","D10.300x007","J06.900","I86.000","C78.300x008","D17.700x006","H61.800x005","Q35.700","D18.100x007","C30.002","C77.008","Q38.300x005","K11.803","S00.402","C31.300","B00.204","S01.804","K07.000x011","S09.200","C47.000x004","Z45.801","J35.803","M95.001","C31.100","J38.000x002","T16.x00x002","J09.x05+H67.1*","E10.600x032","S01.500x001","J38.714","B36.902+H62.2*","S17.801","Q89.800x903","S00.800x055","J39.201","J39.202","K13.700x018","D37.000x001","C44.300x005","C79.803","J37.002","K02.800x003","J34.804","C05.200","Q67.400x906","I88.103","C00.303","K07.104","J10.100","K03.000","D48.200x007","M35.900x011","C03.900x001","K13.004","K12.200x018","K00.600x002","K11.200x012","K13.203","K13.714","D00.012","C06.200","H66.101","K14.803","C79.800x806","J01.300","Q18.002","Q17.200","K12.002","D10.308","Z42.000x002","S01.900","H83.302","J32.800x007","K08.806","J32.801","D37.008","S02.711","K13.015","Q18.400","N80.801","R59.000x004","J34.800x001","K13.700x010","B87.400x001+H94.8*","K14.800x013","M95.207","D37.000x014","J06.900x001","J11.102","K10.100","C00.404","H61.200","J33.802","K13.007","K10.809","S17.001","K04.200x003","C00.402","D23.300x004","D48.200x008","C05.900x002","J34.802","K10.102","K07.201","K07.203","C11.901","K02.400x003","R06.501","C79.201","E85.400x005","Q35.300","J34.800x020","I88.101","C79.801","S01.001","S02.500","K12.115","J06.000","K11.211","D23.200x003","Q18.104","A93.801","H95.900","D37.018","D23.301","Z42.007","J35.300","K07.100x008","K09.005","C06.100x003","K11.209","S01.302","H68.000","K07.105","A18.200x002","S13.401","D10.503","J39.220","K08.900","Q16.900","S09.900x006","K00.000x004","J39.300","M95.205","K00.600x008","D02.303","K00.900","K12.100x002","K11.801","K12.204","K07.100x010","C76.005","K07.101","K03.200x002","E34.800x005","C41.000x027","K09.801","J95.800x013","D21.006","J38.700x003","C43.200x001","C30.005","C06.800","D14.007","C79.503","K00.200x010","J11.802+H67.1*","C32.800","K07.300x005","K09.001","K13.006","Q85.900x038","J10.101","R49.000","K12.200x019","Z45.304","K13.600","Q30.001","S13.402","K12.201","D18.000x505","J34.813","S09.902","S09.903","J38.200","J95.000","C79.800x826","S03.000x001","J34.800x006","Q31.200","D23.000","J00.x00x004","J38.310","Q18.103","C14.800x001","Q38.000x005","C02.400","S15.800x003","C44.401","J32.903","D00.002","J38.301","J32.005","K07.600","D03.000","K12.100x013","H74.801","K10.204","Q35.901","J38.400x002","D38.002","K02.400x002","C14.800x007","C32.103","K12.213","J01.800","A21.300x002","H70.002","C32.001","K12.114","S02.802","S09.905","D37.000x012","J11.100x001","K13.200x011","K03.300x003","A42.200x002","K14.200","Q75.400","Q16.400","C07.x00","Q17.300x004","D18.100x013","Q38.700","Q85.900x035","S00.001","J39.214","K03.204","K08.203","C06.102","J39.200x009","S01.400x011","D10.700","C01.x00","J34.812","C13.800","B44.800x004+H62.2*","Q35.100","K10.000x004","C30.001","H95.000x001","A69.000","C14.800x002","D16.409","Q38.100","I88.104","D14.000x009","K10.214","H61.902","K05.204","J10.100x002","J39.215","K10.000x003","K13.601","Q67.403","Q38.500x007","Q38.001","K08.000","A66.501+J99.8*","C78.300x005","D10.603","K07.107","K12.304","B00.200x001","K11.902","Q18.800x002","S13.601","Q17.000x005","C00.500x004","D36.702","K00.501","D09.701","J95.000x007","K04.700","D10.600","K07.000x013","S00.000x053","K11.501","S17.000x002","H81.901","K11.102","K13.401","Q30.802","C79.800x824","K04.000","C49.002","T17.200","C41.005","D11.701","S01.300x012","S08.000","S03.200","J02.900","K07.903","D14.000x006","D03.400x002","K11.601","Q17.501","B08.000x003","C09.100x001","K03.900","Q32.101","Q38.000x006","S13.500x010","K03.801","T16.x00x001","H71.x04","K03.102","H83.900x001","J01.900x003","C09.902","C77.006","D10.000","Q30.800x006","K06.803","J32.300x004","H60.000x005","H83.300x001","B00.201","S01.400x031","K08.804","K07.304","K06.900","H61.001","B08.802","J32.900x008","C11.001","K11.903","K00.600x007","S19.800x002","D14.000x007","Q38.300x007","K03.603","R07.000","K09.003","H92.200","H60.100x001","K02.800x002","C41.100","D02.000","C10.101","K05.500x002","S10.902","D10.300x005","C77.007","H83.000","Q16.401","H93.102","J31.202","K05.103","Q18.801","K07.300x006","C79.500x016","H60.000x004","C77.000x005","B48.300x002+K93.8*","K09.201","D48.701","K14.000x007","S01.502","K00.206","H81.303","C05.900","K14.801","S09.906","Q17.800x004","K07.100x016","K14.400","K07.500x002","E85.400x006","Q89.202","K14.900x002","Q35.500","K02.400x001","J38.300x018","C11.200x002","C07.x00x003","C41.007","K13.500x002","S03.400","D38.508","K13.709","J32.102","J34.300","K12.209","K06.100x003","J32.100","D36.701","J39.222","K10.100x001","H93.900x001","Q89.800x907","K13.000x018","A36.100","J39.200x004","Q89.800x905","D14.100","K12.208","C44.305","D48.702","C04.800","C11.100","Q35.101","K07.200x003","K07.200x005","K07.300x003","Q17.003","Q75.805","K02.800x001","S01.505","Z42.009","H66.400","S00.500x051","H60.303","C43.000","S15.000x002","B00.202","C12.x00x002","A50.500","C76.000x002","Q17.300x005","C02.200x002","J30.300x001","J03.901","K13.400x004","S11.201","D18.000x844","B87.300x002+J99.8*","D10.000x004","H93.901","C79.502","S15.005","K00.401","A18.400x019","J32.905","J38.700x021","K02.200","K06.801","K02.300","K13.008","H90.300","E11.600x032","H73.000","K03.300x001","H73.102","D10.101","C78.300x006","Q85.905","J32.101","H72.900","C14.800x006","D14.008","Q35.902","D10.303","K05.500x003","H61.901","K13.210","H66.200","Q27.800x026","H83.800x003","K00.600x006","C79.800x840","K04.702","K08.807","J38.313","K14.804","D36.700x005","Q38.701","C30.102","J38.309","Q17.001","A51.201","K13.000x006","D48.519","K05.100x012","K07.604","Q85.900x031","C10.800x002","C06.100x004","K06.901","D02.000x004","J03.000","K10.800x005","Q18.100x006","C41.002","K00.502","Q27.300x010","D10.500x002","D18.100x011","D38.502","J38.700x001","S03.400x002","D37.000x013","C06.100","A18.205","S10.901","K09.900x001","T86.802","H80.100x001","Q17.100","S19.900","Q37.300","K10.800x006","Q16.103","H70.103","K13.707","B36.903+H62.2*","J32.800x008","K07.002","Z42.005","C49.000x004","H83.800x002","K00.400x004","J34.811","J38.000x031","K10.804","J39.003","K03.601","Q18.102","D18.000x858","J06.000x002","Z42.006","K13.402","Q36.900x003","J38.200x002","J38.700x027","D44.700x004","C79.800x845","K12.116","S15.004","D38.504","M95.007","H74.000","C11.300","J38.601","K04.600","D37.000x011","D14.102","D37.005","S13.400x005","C11.300x005","D10.701","K07.106","C11.801","K10.001","K03.100x001","K13.700x006","J95.500","D22.000","Z42.000x015","C14.003","J35.801","Q36.006","J38.000x021","K07.100x017","J00.x00x007","H83.000x002","K13.014","Q31.000","J01.000","K00.200x001","D18.000x504","K10.100x003","K10.000x002","Q89.800x906","Z46.300x001","J95.800x012","K12.205","K07.103","C79.834","J02.000","J39.212","S00.002","K04.501","D37.014","K03.103","T16.x00","H66.900","D23.201","Q89.800x904","J38.000x006","C02.101","C10.200","I88.900x004","S01.300x051"];
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

    if (result=DG3_group(record)){
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