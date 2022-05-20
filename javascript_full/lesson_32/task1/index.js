/* eslint-disable */
// asyncSum(asyncNum1, asyncNum2, ...)

const resolvedPromise = Promise.resolve(17);

const resolvedPromise2 = new Promise(resolve => resolve(17));

const rejectPromise = Promise.reject(new Error('error'));

const rejectPromise2 = new Promise((_, reject) => reject(new Error('error')));
