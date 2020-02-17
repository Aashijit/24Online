import { DataValidation } from './DataValidation';
export class StringUtils {

    /**
     * 
     * @param string 
     */
    public splitStringInCamelCase(string : string) {

        var dataValidation = new DataValidation();

        if(dataValidation.isEmptyJson(string))
            return string;

        var strArr  = string.split(".");

        if(strArr.length > 1)
            return strArr[0].substr(0,1).toUpperCase()+strArr[0].substr(1,strArr[0].length - 1).toLowerCase()+" "+strArr[1].substr(0,1).toUpperCase()+strArr[1].substr(1,strArr[1].length - 1).toLowerCase();
        return strArr[0].substr(0,1).toUpperCase()+strArr[0].substr(1,strArr[0].length - 1).toLowerCase();
    }
}