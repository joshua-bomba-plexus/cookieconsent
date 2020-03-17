"use strict"

import Cookies from 'js-cookie'

export const getCookie = name => {
  return Cookies.get(name);
  // const value = ' ' + document.cookie
  // const parts = value.split(' ' + name + '=')
  // return parts.length < 2
  //   ? undefined
  //   : parts
  //       .pop()
  //       .split(';')
  //       .shift()
}

export const setCookie = function ( name, value, expiryDays, domain, path, secure ) {

  let cookieOptions = {};

  if(expiryDays !== null && expiryDays !== undefined) {
    cookieOptions.expires = expiryDays;
  }

  if(domain !== null && domain !== undefined){
    cookieOptions.domain = domain;
  }

  if(path !== null && path !== undefined) {
    cookieOptions.path = path;
  }

  if(secure !== null && secure !== undefined) {
    cookieOptions.secure = secure;
  }


  Cookies.set(name,value, cookieOptions);

  // const exdate = new Date()
  // exdate.setHours(exdate.getHours() + ((typeof expiryDays !== "number"  ? 365 : expiryDays ) * 24))
  // document.cookie = name + '=' + value +
  //                   ',expires=' + exdate.toUTCString() +
  //                   ',path=' + (path || '/') +
  //                   ( domain ? ',domain=' + domain : '' ) +
  //                   ( secure ? ',secure' : '' )
}