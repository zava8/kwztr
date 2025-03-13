// import { i_to_il } from './i_to_il.js'

// import { u_to_i } from './u_to_i.js'
const u2i = require('./u2i.js');

////////////////
// import * as e_to_i from './e_to_i.js'
////[ɦꟈđꞇṅᴀ]ɦԃ¢ńàᴀ α
// //  पांच (में) में, डाँगी आँगन चम्मच छाछ छछूंदर चचेरा चाचा 
const n_to_null_output = (ioz) => {
	ioz.i = ioz.o = ioz.o.replaceAll(
		/([a-zԃɦńᴛ])AA/g,"$1A").replaceAll(
		/N$/g,"").replaceAll(
		/N\b/g,"").replaceAll(
		/N([,\)\s\.!\?naeiouhć])/g,"$1").replaceAll(
		/N([bp])/g,"m$1").replaceAll(
		/N([^kg])/g,"n$1");
}
///////
// export const doztr = function  (ioz){
const doztr = function  (ioz){
		switch (ioz.z) {
			//case "e_to_i": e_to_i.e_to_i(ioz); break;
			case "u2i":
				ioz.i = ioz.i.replaceAll(
						/([\s\b])क्ष/g,"$1sh").replaceAll(
						/^क्ष/g, 's').replaceAll(
						"ज्ञ",'gy');
				//ioz.i = ioz.i.replaceAll("ज्ञ",'gy');
				u2i(ioz);
				n_to_null_output(ioz);
				break;
			//case "i_to_il": i_to_il(ioz); break;
		}
}
module.exports = doztr

//1. 1. सvтṅтर बhαरт kα सबसe सफल oर सkसम परदhαन मṅтरi ɦei मoदi zi. iनke बαरe मe kuch बoलनe oर लikhनe सe पɦलe बɦuт सoćनα सoꞇनα पडтα ɦei. eसα kरiसhमαi vयkтiтv नɦi दekhα kiसi vयkтi यα नeтα मe. मαтरबhuमi ke लie पuरन रuप सe समरपiт iस मɦαन vयkтi ko koटi koटi परनαम. #vowelहiनदi

