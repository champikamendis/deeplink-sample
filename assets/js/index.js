let now = new Date();
now.setTime(now.getTime() + 60000);
document.cookie = "name=BikzCookie; expires=" + now.toUTCString() + "; path=/";