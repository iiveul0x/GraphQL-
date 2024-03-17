# GraphQL

### Kurulum ve Kullanım

> Bir klasör oluşturup içerisinde 

> Terminalde "npm init -y" çalıştırınız. 
> 
>Size aynı dizinde bir bir package.json oluşturacaktır.
>
>Not: npm kurulu değil ise kurunuz. Node.js kurulduğunda otomatik olarak gelmektedir.
>
>https://nodejs.org/en/ download diyerek kurulumu gerçekleştirebilirsiniz. 

> Bu oluştuktan sonra package.json dosyasının scripts bölümünü aşağıdaki kısmı ekleyin.
> 
> "scripts": {
> 
>    "start": "nodemon app.js --exec      babel-node --presets es2015"
>  
> },

>nodemon kurulu değilse "npm install  nodemon --save-dev"  yazarak kurabilirsiniz.

> Daha sonra terminalde "nmp i babel-cli  babel-preset-es2015 --save" komutunu çalıştırıyoruz. Bunlar başlangıçta çalışacak şeyler için gerekli.
> 
> Buradaki --save parametresi kurulduktan sonra package.json içerisindeki dependencies bölümüne eklenmesi için.

> Son olarak graphql-yoga kurulumu için "npm i graphql-yoga --save" komutunu çağırıyoruz.


## Çalıştırma 

> Çalıştırmak için "npm start" komutunu çalıştırıyoruz. Çıktı aşağıdaki gibi olmalıdır.

>
[nodemon] 2.0.7 <br>
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*<br>
[nodemon] watching extensions: js,mjs,json <br>
[nodemon] starting `babel-node app.js --presets es2015` <br>
Server is running on localhost:4000



> Tarayıcınızda localhost:4000 adrerine giderek graphql sunucusuna ulaşabilirsiniz.


