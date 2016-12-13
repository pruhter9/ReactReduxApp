export function extractDomain(url) {
  let domain;

  if (url.indexOf('://') !== -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }

  domain = domain.split(':')[0];
  domain = domain.replace('www.', '');

  return domain;
}
