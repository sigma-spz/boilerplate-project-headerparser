const getHeaders = (req, res) => {
    /* return:
      ip address,	language,			software;
      req.ip      	req.get('Accept-Language') 	req.get('User-Agent')
    */
    
    res.json( {ipaddress: req.ip, language: req.get('Accept-Language'), software: req.get('User-Agent') });
}

exports.getHeaders = getHeaders;
