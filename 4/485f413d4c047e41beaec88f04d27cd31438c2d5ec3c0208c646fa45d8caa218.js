/**  
*  
*  Base64 encode / decode  
*  文字采用UTF-8方式进行Base64编码
*  
*/  
    
function Base64() {   
    
    // private property   
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";   
    
    // public method for encoding   
    this.encode = function (input) {   
        var output=new Array();
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;   
        var i = 0;   
        input = _utf8_encode(input);   
        
        while (i < input.length) 
        {   
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];
    
            enc1 = chr1 >> 2;   
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);   
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);   
            enc4 = chr3 & 63;   
            if (isNaN(chr2)) {   
                enc3 = enc4 = 64;   
            } else if (isNaN(chr3)) {   
                enc4 = 64;   
            }   
            output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));   
        }   
        return output.join('');
    }   
    
    // public method for decoding   
    this.decode = function(){}