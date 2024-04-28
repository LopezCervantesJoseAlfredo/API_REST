function randomTernurin() {
    ternurines = ['Freya Chocolate', 
                    'Sharon Fennec', 
                    'Kippie Waddle', 
                    'Ginger Snowdrift', 
                    'Kate Perlwinkle', 
                    'Avril Husky', 
                    'Nancy Brightfield', 
                    'Bran Highbranch', 
                    'Lona Dale', 
                    'Saffron Walnut'];
    let random = Math.floor(Math.random() * ternurines.length);
    return ternurines[random];
}

console.log(randomTernurin());