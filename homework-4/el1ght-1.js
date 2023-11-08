function VigenèreCipher(key, abc) {
    this.encode = function (str) {

        return str.split("").map(function (v, i) {
            if (abc.indexOf(v) == -1) {
                return v;
            }
            return abc[
            (abc.indexOf(v) + abc.indexOf(key[i % key.length])) % abc.length
                ];
        }).join("");

    };


    this.decode = function (str) {

        return str.split("").map(function (v, i) {
            if (abc.indexOf(v) == -1) {
                return v;
            }
            var ind = abc.indexOf(v) - abc.indexOf(key[i % key.length]);
            return abc[ind < 0 ? ind + abc.length : ind];
        }).join("");

    };
}