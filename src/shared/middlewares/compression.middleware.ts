import compression from 'compression';

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  return compression.filter(req, res);
};

const initCompression = () => {
  return compression({ filter: shouldCompress });
};

export default initCompression;
