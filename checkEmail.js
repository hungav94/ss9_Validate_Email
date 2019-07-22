function isEmail(str) {
    regexp = '^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\\\.[A-Za-z0-9]+)$;';
    if (regexp.test(str)) {
        return 'mail hợp lệ';
    } else {
        return 'mail không hợp lệ';
    }
}