let now = new Date();
now.setTime(now.getTime() + 60000);
document.cookie = "name=BikzCookie; expires=" + now.toUTCString() + "; path=/";

let cookie1 = getSSOToken("name");
let cookie2 = getSSOToken("UUID");

console.log("Name cookie: " + cookie1);
console.log("UUID cookie: " + cookie2);

let getSSOToken = function (name) {
        let cookieName = name + "=";
        let cookies = document.cookie.split(';');

        for(let i=0;i < cookies.length;i++) {
            let c = cookies[i];
            while (c.charAt(0)===' ') {
                c = c.substring(1,c.length);
            }
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length,c.length);
            }
        }
        return null;
    };


    const myInterval = setInterval(setColor, 15000);

    function setColor() {
        console.log("Name cookie: " + cookie1);
      };

      