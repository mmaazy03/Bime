export const validateResponse = (response: any) => {
  return new Promise((res, rej) => {
    const statusArr = [200, 201];
    try {
      if (response) {
        if (statusArr.includes(response.status)) {
          res({success: true});
        } else {
          res({success: false});
        }
      } else {
        res({success: false});
      }
    } catch (err) {
      rej({success: false});
    }
  });
};

export default {
  validateResponse,
};
