import {putMessage,intersect,SS_VALID} from '../Base.js'
import JA1_group from '../ADRG/JA1.js';
import JA2_group from '../ADRG/JA2.js';
import JB1_group from '../ADRG/JB1.js';
import JB2_group from '../ADRG/JB2.js';
import JB3_group from '../ADRG/JB3.js';
import JC1_group from '../ADRG/JC1.js';
import JD1_group from '../ADRG/JD1.js';
import JD2_group from '../ADRG/JD2.js';
import JJ1_group from '../ADRG/JJ1.js';
import JR1_group from '../ADRG/JR1.js';
import JR2_group from '../ADRG/JR2.js';
import JS1_group from '../ADRG/JS1.js';
import JS2_group from '../ADRG/JS2.js';
import JT1_group from '../ADRG/JT1.js';
import JU1_group from '../ADRG/JU1.js';
import JV1_group from '../ADRG/JV1.js';
import JV2_group from '../ADRG/JV2.js';
import JZ1_group from '../ADRG/JZ1.js';

export default function MDCJ_group(record){
    let mdc_zd=["L44.400","L03.004","L24.206","L02.202","L98.702","Q85.900x009","L25.900","N61.x05","D17.100x001","L30.100","Q85.900x022","L60.800x029","L56.100","L90.500x051","D23.501","L03.800","L24.203","L55.800","L89.307","I89.800x029","D17.101","L68.800","L82.x01","L98.800x015","L66.000","D48.511","L89.008","L24.205","L30.804","L25.300","L90.500x021","L28.000","Q82.800x006","N60.100x002","D48.512","E10.600x026","T00.900x002","S70.800x042","Q82.800x004","L41.100","L66.100","C43.703","D22.901","L70.400","L67.101","L90.500x032","Q80.000","L90.500x026","L68.300","D48.500x006","L90.500x046","L59.801","R22.302","B07.x04","N60.000x002","L67.104","C44.706","B72.x00","L03.107","S30.000x003","D23.502","L02.206","C44.707","E14.600x023","D48.500x011","L89.107","L91.800","I97.200","T00.901","L65.000","L60.800x014","Z41.100x002","L68.200","L90.500x036","T00.300x001","L66.900","D22.500","L28.000x007","N60.300","I89.800x025","L89.204","I89.800x015","S60.800x033","L11.800","L90.504","A18.407","L90.500x022","S80.800x033","D48.504","L98.800x017","L23.600","R22.005","L95.800","L90.500x027","T79.700","L98.802","D04.502","L24.700","L65.901","B37.202","L94.200","L98.300","L21.900","D03.800","L65.200","I89.000x017","D17.200x001","R22.002","B36.200x001","E14.600x025","S80.000","L60.800x005","D28.000x001","Q85.900x028","D03.900x002","S60.800x012","L98.800x016","L74.300","N60.400","Q82.801","L50.600","S30.101","L85.801","Q83.100x002","S70.800x011","L27.900","L60.800x028","D17.900x002","L57.200","L60.800x010","L03.900","B38.300","L90.500x029","L21.901","L42.x00","C44.702","L89.308","L90.500x034","S90.301","C44.505","L75.100","S80.800x013","Q80.400","Q80.800x001","B40.300","A18.404","I89.800x022","L01.000x011","S40.700","C43.900","L24.504","L27.000x004","A18.401","Q82.502","L60.800x033","D48.500x014","L74.000","L73.800","M79.806","L66.300","S40.000x002","C43.504","C43.600x002","Q18.902","L11.900","B00.100x004+H62.1*","L24.200","D17.300x005","E14.600x028","L23.002","T14.000x041","L02.205","D17.100x002","N64.300x001","C79.200x007","L97.x00","L58.900","D23.701","L10.100","C50.600","L72.900x003","T11.000x041","B35.100","B00.801+L99.8*","L08.907","L30.300","L74.200","D04.700x001","L90.500x031","T00.200x001","Q84.601","L90.500x018","L98.501","C43.601","L40.002","L94.400","M54.001","Q82.802","L90.500x013","M79.811","S40.000x003","L27.005","L87.800","T85.401","Q84.000","L95.100","D48.517","S60.202","Z42.800x002","B36.000x003","L08.904","L55.000","C43.501","N64.805","S60.900","C44.502","L88.x00","R22.100x001","L70.000","D03.504","A18.403","I89.009","L98.001","A18.412","L89.301","L90.500x020","L72.000x010","L90.500x040","T00.900x004","L82.x00","C79.806","B37.204","S90.800x013","T14.001","L89.005","C50.000","S70.800x022","L25.100","S20.400x001","L71.800","L95.000","B88.000x006+L99.8*","D04.503","L85.200","L43.301","Q84.801","L70.202","D24.x01","L59.000","L30.902","L84.x00x001","L57.400","L90.801","L94.600","S80.800x023","L08.902","M34.200","L72.000","M35.600","E11.600x021","D23.500x003","S70.800x041","L98.801","L98.800x022","R22.003","S90.200","D22.510","L90.500x012","L66.400","B44.800x002","L71.100","Q83.800x004","L65.100","Q81.900","E10.600x023","D04.900x001","L10.500","L30.901","L90.500x028","L43.901","L94.301","D48.500x012","L89.100","Z42.304","I89.800x020","R23.800x001","L60.800x026","D22.701","L02.901","D03.700x001","E14.600x026","L70.802","Q83.800x005","L90.500x053","S90.300x001","B35.901","L50.803","L72.903","S80.800x032","L08.000x001","L67.102","L02.801","L90.500x073","L90.500x060","L89.304","T00.600x001","L90.500x064","S31.001","D22.900x003","D18.000x849","L90.500x016","L83.x00","L60.800x009","L01.005","D48.507","L12.102+H13.3*","S80.800x043","Q81.800","D05.000","L95.901","L81.401","L30.201","L71.900","C43.706","M79.807","L89.104","L30.000","L74.801","Q83.801","Z41.100x018","L60.800x019","L30.202","Z41.100x014","M31.000","Z41.100x013","E10.600x024","Q82.200","Q82.900","L58.101","L24.204","T13.000x031","S50.800x081","L24.300","D23.900","L56.300","S30.800x001","L03.306","L55.100","Q84.600x004","L93.202","T13.000x041","N61.x06","S50.800x021","L72.101","D48.506","T14.000x003","E11.600x027+L99.8*","L98.804","T14.000x021","Z42.800x001","L08.000x009","L74.900","L57.800x006","L90.500x044","D48.508","L30.803","L28.100","S30.100x001","L23.400","L24.502","Q82.505","S20.000","C79.200","L92.801","L24.503","L70.201","L41.801","S80.800x011","L81.900","D48.513","S20.802","B35.000x001","L41.400","S60.000x001","S60.100x001","L70.300","L75.000","L12.202","L89.306","L60.800x034","L26.x01","L93.200","L98.800x014","S60.800x042","L81.800x003","L90.500x067","S70.900x001","D17.200x005","L90.200","D03.701","L89.201","E85.413+L99.0*","D86.300","N64.502","L23.100","L44.800","Q81.000","C43.508","L29.100","L70.005","A18.400x013","C50.400","L21.100","D17.900x001","L03.106","Q82.000","D48.500x010","R22.902","L23.801","D18.008","L27.002","L90.500x019","L90.500x010","R92.x00","L23.501","B07.x00x010","L50.202","S90.800x043","L90.500x054","D04.501","Z42.200x001","Q82.800x003","B40.301+L99.8*","D05.900","L73.800x005","L81.802","B35.801","R22.402","S30.003","L70.002","L05.901","L72.106","S80.800x041","L23.500","L73.100","Z41.100x019","S39.911","L64.801","L89.302","D04.504","L53.801","L25.000","L03.000x015","D17.100x003","L50.802","L60.500","T00.900x003","L98.800x021","L08.900x028","C44.605","B35.003","D23.600x002","D48.510","S60.701","A18.400x014","L24.800","L65.801","Z42.303","L60.800x017","B00.804+L99.8*","L73.801","L30.203","L50.200","L90.500x048","L27.004","S40.800x011","L40.101","S60.700","M79.804","Q82.803","L81.600","E10.600x021","L92.301","L03.105","Q82.800x018","Q82.501","B07.x05","L60.200","L98.800x018","S30.900x003","L10.800x002","R22.300x001","B35.400","L28.201","L63.800","A18.402","L44.200","L81.300","L60.800x021","L12.103+H13.3*","L90.100","S30.900x001","L44.900","B41.800x002","Q82.300","S30.700","M79.401","L89.003","C50.100","L28.200","C44.509","Z42.201","S60.800x041","L23.901","A18.408","L24.801","L90.500x017","L94.500","L90.500x035","B36.901","D22.503","L81.601","C43.900x003","L24.100","L65.902","B86.x00","L23.000","B37.900x001","S90.300x002","B00.000","T11.000x031","L30.802","C50.300","B46.300x001+L99.8*","S30.000x004","L21.800","L50.000","L24.201","L10.200","L87.200","L51.802","L26.x00","D17.200x003","L90.902","L08.909","L51.000","L08.000x006","Z42.801","L89.303","D18.000x828","L20.806","R22.000x003","S30.002","S50.901","S20.301","C96.200x006","L08.002","L03.801","L89.300","L90.500x011","L27.003","D48.501","L20.803","L89.206","L23.900","L40.900","L89.103","L82.x02","S60.902","Z42.100x001","Z41.100x009","Z42.203","S50.800x041","S30.800x004","L68.100","L03.802","L72.900x001","L21.002","L03.108","L90.500x066","D22.509","L24.000","N62.x00x001","L02.203","L51.200","L66.800","D48.500x007","L89.105","L60.803","N60.900","L98.200","L90.500x071","S50.800x031","L30.400x004","A18.410","Q18.301","L60.900","S90.300x003","R22.300x002","L03.101","D03.602","L90.900x001","N60.000","D17.000x004","L71.000","Z41.100x012","D48.600x001","S20.200x003","B07.x00x011","L98.502","C79.200x001","E14.600x970","B40.302+L99.8*","L72.104","L60.800x020","Q82.500x005","S70.800x012","L74.001","L43.800","L73.805","C43.707","L53.901","L90.500x049","R22.206","I89.800x024","L28.000x006","C44.503","S40.001","L83.x01","S90.900x002","L60.800x007","B86.x00x003","L40.001","L90.500x023","L08.000x007","Z41.100x017","E11.600x028","L89.101","L03.200","L89.001","Q83.802","N64.802","S80.800x031","R22.204","L44.100","T00.100x001","L27.100","N62.x00x004","S30.100x007","D05.700","T11.000x021","R22.202","Z41.100x003","N64.801","S20.800x002","Z41.100x016","Q82.506","E14.600x027+L99.8*","L75.200","S60.800x021","S60.800x043","B37.205","B35.800x002","L40.200","S80.800x022","L60.300","D36.700x009","L84.x01","S70.900x002","S40.800x041","R23.401","L93.201","L90.500x039","D22.900","T14.000x031","Z42.400x001","L08.802","I89.000x026","L20.802","L89.007","L90.805","L98.000","C43.702","L60.800x012","L95.801","L90.505","T09.000x021","L70.900x002","N61.x03","Z41.100x023","L03.302","C44.508","L70.203","D22.511","S20.101","C43.600","S70.800x032","L75.800","R22.205","C50.803","L90.500x059","L81.700x002","L08.001","L41.500","L81.500","L27.101","L57.803","L90.500x057","L85.804","C44.800","B00.100x005","C79.204","D48.509","S80.101","L94.100","L67.100","D17.301","L81.400x001","L50.801","Z41.000","L81.800","L74.400","L63.100","S80.800x012","L67.103","L89.106","S90.800x031","L24.601","T81.800x009","L90.400","L98.803","D18.005","Z41.100x015","L23.001","S40.800x042","Z41.105","L53.000","L90.500x056","L91.002","L24.800x002","L89.108","L43.902","N60.201","C44.602","L90.804","E14.600x021","L02.900x002","Q84.600x003","Z41.100x020","L24.400","D04.800","N64.900","D48.515","L01.001","Q82.508","D23.601","B37.201","L03.103","S30.100x002","C44.700","L90.500x047","L91.801","L90.500x055","A18.811","L73.802","L20.000","S40.800x022","R22.200x002","I89.800x013","T01.301","L81.702","S30.104","I89.800x026","R22.000x004","R22.400x002","L92.000","L94.800","T13.000x021","N61.x00x004","L89.102","S80.800x042","L90.500x065","B00.100","B88.001+L99.8*","L89.200","D22.507","L50.900","L40.800","M34.100","L63.200","T09.000x011","S40.701","D48.500x004","L03.000","L02.100","L60.800x032","L02.300","L08.100","S90.800x033","E05.906","L22.x01","R22.700x001","S60.800x031","Q85.915","L03.303","D18.000x847","L72.800x001","D23.504","R22.006","D24.x02","L60.800x031","L72.000x007","L10.300","D22.900x017","E83.201","L03.102","L22.x00","L08.911","T00.800x001","S90.800x032","L10.800","L90.500x025","L02.403","B35.800x003","D17.200x004","L98.800x027","S50.000","L01.000x012","Q80.900","L60.800x004","D18.000x851","L65.800x004","L63.000","D03.500x002","L08.000x008","C50.000x001","L03.001","L08.003","L70.100","Q83.000","L12.900","N62.x02","C43.700x001","D48.505","B35.000","L40.103","L92.302","B07.x00x008","L02.401","L59.900","L01.003","L29.802","C43.701","L00.x00","R22.000x005","L25.200","N64.803","I89.000x015","L98.401","Z41.100x024","L90.500x045","D22.601","B07.x01","T85.400","L63.900","Q83.200","L03.304","L41.000x002","L93.200x003","B35.600","E11.600x024","I89.100x002","Q82.808","L72.905","L02.200","L24.202","S20.700","C44.501","L23.101","N61.x01","D05.100","B43.200","Q81.200","L10.400","Q82.807","Q80.800","B08.800x007","Q80.100","L95.800x004","Z42.401","L02.900x001","D18.000x816","S39.910","L89.208","L13.900","E10.600x027+L99.8*","S20.803","L40.500","R22.004","L60.800x018","D22.700","L02.200x010","S20.201","L28.003","L81.403","Q82.507","Q83.300","D23.400x003","S80.901","D17.300x004","L92.800","M79.400","C44.606","L94.900","L55.900","Z42.200x003","L90.800","D04.601","L02.804","L29.801","B88.000x004+L99.8*","D22.502","Q85.900x024","D03.501","L51.900","L60.800x023","D03.700x002","B86.x00x005","Z41.100x008","C43.705","B37.203","L03.305","L56.800","L67.800","L60.800x024","M79.403","I89.800x030","B72.x00x001","B07.x03","L12.101","L90.500x052","L70.900","B45.200","T09.000","T14.000","S90.800x011","D22.900x021","S90.700","L90.500x063","Q84.400","L41.300","Q84.202","C44.704","E51.100x005+I98.8*","T11.000x051","D17.200x002","L70.001","L40.300","Q83.100x001","L08.000x010","S20.202","T11.001","S70.700x002","C43.901","C50.900","T14.002","L73.803","S40.800x032","Z41.100x022","L53.900","L80.x00","N64.501","L23.300","N64.100","M79.803","B43.000","L24.500","L90.300","L05.900","Z42.202","L08.800x005","S60.800x022","L56.200","L57.800x004","L01.004","L87.900","S60.201","L90.501","L12.800","L73.800x006","L91.001","S80.700","Q84.800x012","D23.505","D03.500","T13.000","I89.800x027","E10.603+L99.8*","L90.500x037","N61.x07","L05.000x001","A18.400x006","Z41.100x011","R22.207","M54.002","Q84.502","S40.800x021","L27.200","L90.500x030","A18.409","L90.500x015","E11.600x026","C79.200x006","L95.900","L98.600","Q84.602","L40.801","D22.900x002","Z41.100x007","L30.801","L30.904","L60.400","C50.500","L08.910","L93.100","L11.100","S70.700x001","D17.500x010","C43.800","L65.904","B35.300","Z42.402","R21.x00x001","L85.000","Q84.101","L50.400","E10.600x025","L28.203","L98.101","L03.003","L60.100","C43.505","L08.805","B35.002","L13.800","Z41.100x010","S90.800x022","D23.700x001","D48.503","L67.000","L20.900","L25.800","C50.001","L70.004","S90.900x003","L90.500x041","M79.809","D18.000x852","N60.202","Z41.100x004","L01.000x013","R60.900x003","L29.000","L08.803","L52.x00","L73.804","I89.000x004","R22.200x004","E11.603+L99.8*","N64.002","L03.109","L56.400","N61.x02","N64.504","L65.800x003","S70.100","N61.x04","D48.502","L10.801","L60.800x022","Z41.100x021","L08.800x008","L27.801","L98.800x013","Z41.100x005","L02.900x006","L13.100","B86.x00x004","C50.902","L30.500","L73.000","Q82.504","D22.600","C43.503","B36.100","L68.900","L90.500x033","L28.001","I89.800x012","C43.603","R21.x00x003","S70.800x031","C43.502","L56.401","L21.000","L53.800","T14.000x011","D48.500x005","L90.500x062","D18.000x848","D23.602","Q82.800x001","D04.600x001","L60.800x011","L60.800x016","Q81.100","L29.300","L24.901","L01.008","L40.301","L10.000","L12.300","L60.800x013","S30.801","C44.600","L81.000","L98.800x023","S90.000","L98.800x010","L90.500x008","D04.500","E10.600x028","L41.000","R22.200x001","N63.x01","Q85.900","L72.100","D48.500x003","T11.000","S50.700","L81.703","T00.000x001","T00.900x007","S20.801","B36.300","L70.801","L20.804","S30.800x002","L02.200x004","Q84.500","L92.100","L55.200","R22.100x002","L28.202","S90.800x023","L90.502","Z42.200x002","C43.604","Z42.204","L72.000x011","S30.001","S80.800x021","C43.507","C44.701","L72.200","L94.300","E11.600x023","L60.800x030","L90.500x007","D36.716","C44.705","L30.800","L08.800x006","L29.800","L30.903","L90.500x009","L03.301","C50.901","S30.800x003","L90.500x014","L56.000","R22.901","Z42.205","L24.900","L27.800","T13.000x051","L85.300","L02.803","L74.100","C44.504","Q82.800x019","L03.104","Z52.100","S70.900x003","L12.201","S90.100","L85.100","L08.804","S21.000","Q84.200","L89.205","Q82.809","D23.500x006","L67.105","D18.000x812","L50.500","L57.100","L40.000","L02.200x009","Z42.300x001","C50.801","L89.202","D23.500","L70.803","L98.800x001","D48.514","L57.801","Q85.801","I89.002","N61.x00x014","L81.402","L25.201","T14.101","R22.903","L01.100","D22.500x008","R23.400x003","L75.900","L50.300","L27.201","R23.801","L90.500x024","Q80.300","N62.x00","L85.900x001","D18.000x018","L73.800x007","D22.506","S50.701","S80.100x002","L57.800x005","L30.900","S30.900x002","L72.904","L89.004","D22.501","B00.101","L93.000","D23.600x001","D22.702","Q84.501","B37.900x002","L24.501","C43.500","L50.100","L89.207","L23.200","L30.204","D03.600x002","C79.200x005","L51.100","L90.901","D18.000x010","L94.000","E51.100x006","E16.300x003+L54.8*","S60.801","S20.300x001","C43.606","L40.102","L08.906","L72.900x002","L65.802","D03.503","L64.000","S60.800x011","S31.002","Z41.100x006","Z42.302","L60.301","L05.000","L25.400","L89.002","L30.301","L41.900","C44.507","L72.800x003","L27.000x006","L89.203","M54.003","Q84.600x001","S90.901","B37.200x003","A18.400x010","L08.800x011","L30.905","L44.000","L90.803","E10.600x970","S50.101","N64.400","C43.704","T09.000x051","L43.000","N62.x00x007","R21.x01","I89.800x028","L08.900","L60.802","Q83.803","T09.000x041","B86.x00x007","D18.000x850","B35.200","A18.406","A18.400x021","M79.805","C43.506","L67.900","M79.404","I89.900","C50.200","L01.002","L03.300","S40.000x001","Q84.600x002","D23.503","Q82.503","E50.800x002+L86*","S90.800x041","N62.x01","L60.000","D48.601","Q83.100","S50.800x011","L08.000x005","S60.900x002","C44.603","L91.900","C50.800x005","A18.411","L90.600","L57.300","Q82.201","L29.900","L90.500x042","D23.401","L13.901","E50.801+L86*","Q82.806","D22.505","L85.800","L02.800","L20.801","L90.500x006","L81.405","L24.600","L58.100","L90.500x058","N63.x00","R22.700x002","L65.800x005","R58.x02","L85.803","N60.101","L72.800x004","D23.500x010","T14.003","N64.200","A46.x00","D03.900","L60.800x006","L03.002","L65.903","Z42.301","L57.000","L12.000","B36.200","L57.900","R21.x00x004","L60.800x025","L57.802","B35.500","C50.802","B87.000x001+L99.8*","L02.402","L92.903","Q84.300","L90.401","S30.000x001","Q84.201","L84.x00x002","C44.601","M34.000","L70.500","Q82.800x011","S40.800x012","L98.800x007","C46.000","L95.802","L30.400","L81.800x005","L92.300","L08.903","R22.400x003","L66.200","B35.001","L81.701","S70.000","R23.800x002","D03.600","L90.503","L53.100","D17.500x011","L67.106","Q83.900","D18.007","C43.602","C44.900","L23.700","N64.503","A18.400x001","L40.100","D18.006","L81.407","Q85.900x026","L12.100","L57.500","L21.001","L08.908","L90.500x038","L23.504","L93.001","B86.x00x006","R21.x02","L40.802","L89.900","D24.x00","M34.803","L98.900x002","E11.600x025","C44.901","B00.100x001","L43.200","T11.101","L89.305","S30.100x004","L98.800x026","L95.900x001","D48.516","L73.900","L23.502","S30.100","S90.800x012","L90.000","D22.602","L75.201","S80.900","M79.801","S50.900","L53.200","L72.102","Q82.810","Q82.805","L90.500x061","I89.000x013","L72.902","L90.500x043","I89.800x014","L89.006","N61.x00x013","T13.000x011","L08.801","A60.100x002","L02.902","A36.300","B35.600x002","D86.300x002","L57.001","D48.500x008","L08.901","M79.802","L40.003","Q82.804","L23.503","L10.900","N64.804","D23.700x002","N60.200","L70.003","L12.200","L90.500x072","D04.701","L72.105","S60.800x032","L98.503","N60.100x003","B09.x01","L53.101","L60.800x008","L98.500","E14.600x022","S40.900","L11.000","L02.802","L13.000","E14.600x024","L30.500x003","L98.800x011","L98.800x020","T00.900","C43.605","S60.800x023","T00.900x005","Q85.900x049","A18.400x020","L92.200","D03.601","C50.900x005","C79.800x831","D48.500x002","S20.200","L85.900","S70.901","B07.x00x006","L50.201","N60.801","D23.506","L98.800","D17.300x002","T01.800x001","L08.905","L70.200","S70.800x021","L43.100","L72.000x006","N64.001","L72.901","L73.200","B09.x00x002","L44.300","Q85.900x025","L68.000","B78.100x001+L99.8*","L87.001","L83.x02","L60.201","D22.508","E11.600x970","D03.502","Q80.200","L81.404","Q84.100","A18.405","L60.800x027","Z41.104","L64.900","L81.801","T00.900x006","C79.205","L13.101","S40.800x031","C44.500","L81.100","L81.400","L28.002","Q82.100","B36.300x002","L98.701","L98.700x001","N64.200x001","C44.604","C44.703","L02.903","C44.506","M31.000x005","L58.000","N60.000x001","L72.103","L98.400","Q80.200x002","R60.900x004","S90.800x021","R22.203","L40.400","C50.800","N60.100","L25.500","L89.000","D17.300x001","B35.100x002","A18.400x022","D48.500x009","S60.901","Q82.400","D22.504","L92.901","E51.100","R23.400x001","L90.500x074","Q82.800x010","R22.904","S90.800x042","L53.300","T09.000x031","L10.800x001","L56.900","L98.800x012","L90.500x050","L60.801","T00.902","L02.201","B00.102","C50.804","L60.800x015","B37.900x003","L81.803","L24.800x001","Q84.900","L81.200","Z42.403","B36.000x001","B35.800x004"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCJ入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=JA1_group(record)){
        return result;
    }

    if (result=JA2_group(record)){
        return result;
    }

    if (result=JB1_group(record)){
        return result;
    }

    if (result=JB2_group(record)){
        return result;
    }

    if (result=JB3_group(record)){
        return result;
    }

    if (result=JC1_group(record)){
        return result;
    }

    if (result=JD1_group(record)){
        return result;
    }

    if (result=JD2_group(record)){
        return result;
    }

    if (result=JJ1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合JQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'JQY';
    }

    if (result=JR1_group(record)){
        return result;
    }

    if (result=JR2_group(record)){
        return result;
    }

    if (result=JS1_group(record)){
        return result;
    }

    if (result=JS2_group(record)){
        return result;
    }

    if (result=JT1_group(record)){
        return result;
    }

    if (result=JU1_group(record)){
        return result;
    }

    if (result=JV1_group(record)){
        return result;
    }

    if (result=JV2_group(record)){
        return result;
    }

    if (result=JZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}