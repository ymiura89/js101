function domainName(url){
  let removeToColon = url.split(':')
  let remove
  // return seperatedDomain[1].splice('/')
}

console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("https://youtube.com")) // "youtube"