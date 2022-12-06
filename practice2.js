//replacing string at a character
String.prototype.replaceAt=function(index,char){
    return(this.substring(0,index)+char+this.substring(index+1))
}

let test="hello";
console.log(test.replaceAt(2,'k'))
// console.log(test)
const str= "1111"
const cash=7;
const s=1;
const f=2;
let newStr=JSON.parse(JSON.stringify(str));
console.log("ttttt")

const less=(s<f)?s:f;
console.log(s);
let remCash=cash;
if (less==s){
    for(j=str.length-1; (j>=0 && remCash-s>=0 ); j--){
        if(str[j]=='0'){
            let i=0;
            while(i!=j){
                if(newStr[i]=='1'){ newStr= newStr.replaceAt(i,'0');
                    newStr = newStr.replaceAt(j,'1');
                    remCash=remCash-s;
                    break;}
                i++;
            }
        }
    }

}
console.log(newStr,remCash)

if( remCash-f>=0){
    for(j=0; (j<=str.length && remCash-f >=0); j++){
        if(newStr[j]=='1'){ newStr=newStr.replaceAt(j,'0');remCash=remCash-f;}


    }
}

console.log(parseInt(newStr,2))



