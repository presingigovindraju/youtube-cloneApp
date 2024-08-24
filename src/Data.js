export const API_KEY = 'AIzaSyD4HqBFTv-zdjmW9E4LcT4I2yYb5aA2Ruc';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M;"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value
    }
}